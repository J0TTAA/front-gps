"use client"

import { useState } from "react"
import {
  Book,
  UserCheck,
  CalendarDays,
  FileText,
  TrendingUp,
  Settings,
  GraduationCap,
  Signal,
  SignalZero,
  Bell,
  ArrowLeft,
  ArrowRight,
  Power,
  User,
  Info,
  ChevronDown,
  ChevronUp,
  Shield,
} from "lucide-react"
import { Button } from "../app/components/ui/button"
import { Badge } from "../app/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../app/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "../app/components/ui/avatar"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../app/components/ui/collapsible"

// Solo componentes con nombres nuevos
import Dashboard from "./components/dashboard"
import CentrosEducativos from "./components/centros-educativos"
import TareasEscolares from "./components/tareas-escolares"
import Informes from "./components/informes"
import Configuracion from "./components/configuracion"
import Profesores from "./components/profesores"
import PortalFamilias from "./components/portal-familias"
import DocenteView from "./components/docente-view"
import FamiliaPortalSearch from "./components/familia-portal-search"

export default function SistemaEducativoRural() {
  const [activeSection, setActiveSection] = useState("dashboard")
  const [currentView, setCurrentView] = useState("admin") // admin, docente, familia
  const [isOnline, setIsOnline] = useState(true)
  const [pendingSync, setPendingSync] = useState(3)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [asistenciaOpen, setAsistenciaOpen] = useState(false)
  const [selectedSchoolForAsistencia, setSelectedSchoolForAsistencia] = useState<string | null>(null)
  const [studentRut, setStudentRut] = useState<string | null>(null)
  const [showStudentData, setShowStudentData] = useState(false)

  // Datos del docente (simulado)
  const docenteData = {
    nombre: "Carlos Mendoza",
    materia: "Matemáticas",
    escuela: "Escuela Valle Verde",
    cursos: ["1° Básico", "3° Básico", "5° Básico"],
  }

  const adminMenuItems = [
    { id: "dashboard", label: "Inicio", icon: TrendingUp },
    { id: "centros-educativos", label: "Centros Educativos", icon: GraduationCap },
    { id: "profesores", label: "Profesores", icon: User },
    { id: "tareas-escolares", label: "Tareas Escolares", icon: FileText },
    { id: "familias", label: "Portal Familias", icon: User },
    { id: "informes", label: "Informes", icon: Book },
    { id: "configuracion", label: "Configuración", icon: Settings },
  ]

  const docenteMenuItems = [
    { id: "docente-actividades", label: "Mis Actividades", icon: FileText },
    { id: "docente-cursos", label: "Mis Cursos", icon: Book },
    { id: "docente-estudiantes", label: "Mis Estudiantes", icon: UserCheck },
  ]

  const colegiosAsistencia = [
    {
      id: "los-pinos",
      label: "Escuela Rural Los Pinos",
      estudiantes: 45,
      presentes: 42,
      ausentes: 3,
      porcentaje: 93,
      cursos: 6,
    },
    {
      id: "valle-verde",
      label: "Escuela Valle Verde",
      estudiantes: 38,
      presentes: 34,
      ausentes: 4,
      porcentaje: 89,
      cursos: 5,
    },
    {
      id: "rio-claro",
      label: "Escuela Río Claro",
      estudiantes: 52,
      presentes: 45,
      ausentes: 7,
      porcentaje: 87,
      cursos: 6,
    },
    {
      id: "monte-alto",
      label: "Escuela Monte Alto",
      estudiantes: 41,
      presentes: 37,
      ausentes: 4,
      porcentaje: 90,
      cursos: 5,
    },
  ]

  const renderContent = () => {
    if (currentView === "docente") {
      return <DocenteView activeTab={activeSection} docente={docenteData} />
    }

    if (currentView === "familia") {
      if (showStudentData && studentRut) {
        return (
          <PortalFamilias
            studentRut={studentRut}
            onBack={() => {
              setShowStudentData(false)
              setStudentRut(null)
            }}
          />
        )
      }
      return (
        <FamiliaPortalSearch
          onStudentFound={(rut) => {
            setStudentRut(rut)
            setShowStudentData(true)
          }}
        />
      )
    }

    // Vista admin - solo componentes nuevos
    switch (activeSection) {
      case "dashboard":
        return <Dashboard />
      case "centros-educativos":
        return <CentrosEducativos />
      case "profesores":
        return <Profesores />
      case "tareas-escolares":
        return <TareasEscolares />
      case "familias":
        return <PortalFamilias />
      case "informes":
        return <Informes />
      case "configuracion":
        return <Configuracion />
      default:
        return <Dashboard />
    }
  }

  const handleSchoolAsistenciaClick = (schoolId: string) => {
    setSelectedSchoolForAsistencia(schoolId)
    setActiveSection("asistencia")
  }

  const handleAsistenciaGeneralClick = () => {
    setSelectedSchoolForAsistencia(null)
    setActiveSection("asistencia")
  }

  const getMenuItems = () => {
    if (currentView === "docente") {
      return docenteMenuItems
    }
    return adminMenuItems
  }

  const getPageTitle = () => {
    if (currentView === "docente") {
      const docenteItem = docenteMenuItems.find((item) => item.id === activeSection)
      return docenteItem ? docenteItem.label : "Vista Docente"
    }
    if (currentView === "familia") {
      return showStudentData ? "Información del Estudiante" : "Portal de Familias"
    }
    if (activeSection === "asistencia") {
      return selectedSchoolForAsistencia
        ? `Asistencia - ${colegiosAsistencia.find((c) => c.id === selectedSchoolForAsistencia)?.label}`
        : "Asistencia General"
    }
    const adminItem = adminMenuItems.find((item) => item.id === activeSection)
    return adminItem ? adminItem.label : "Inicio"
  }

  return (
    <div className="flex h-screen bg-slate-50">
      {/* Sidebar */}
      <div
        className={`${sidebarCollapsed ? "w-16" : "w-64"} bg-slate-900 shadow-xl flex flex-col transition-all duration-300`}
      >
        {/* Header */}
        <div className="p-4 border-b border-slate-700">
          <div className="flex items-center justify-between">
            {!sidebarCollapsed && (
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                  ER
                </div>
                <div>
                  <h1 className="font-bold text-lg text-white">EduRural</h1>
                  <p className="text-sm text-slate-400">Sistema Educativo</p>
                </div>
              </div>
            )}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="text-slate-400 hover:text-amber-400 hover:bg-navy-800"
            >
              {sidebarCollapsed ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
            </Button>
          </div>
        </div>

        {/* Status de conectividad */}
        <div className="p-4 border-b border-slate-700">
          <div className={`flex items-center ${sidebarCollapsed ? "justify-center" : "justify-between"}`}>
            <div className="flex items-center gap-2">
              {isOnline ? (
                <Signal className="w-4 h-4 text-amber-400" />
              ) : (
                <SignalZero className="w-4 h-4 text-red-400" />
              )}
              {!sidebarCollapsed && (
                <span className="text-sm font-medium text-slate-300">{isOnline ? "En línea" : "Sin conexión"}</span>
              )}
            </div>
            {pendingSync > 0 && !sidebarCollapsed && (
              <Badge variant="secondary" className="text-xs bg-amber-600 text-white">
                {pendingSync} pendientes
              </Badge>
            )}
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {currentView === "admin" && (
              <>
                {getMenuItems().map((item) => {
                  const Icon = item.icon
                  return (
                    <li key={item.id}>
                      <Button
                        variant={activeSection === item.id && !selectedSchoolForAsistencia ? "default" : "ghost"}
                        className={`w-full ${sidebarCollapsed ? "justify-center px-2" : "justify-start"} ${
                          activeSection === item.id && !selectedSchoolForAsistencia
                            ? "bg-navy-700 text-white hover:bg-navy-600 border-l-4 border-amber-500"
                            : "text-slate-300 hover:text-amber-300 hover:bg-navy-800"
                        }`}
                        onClick={() => {
                          setActiveSection(item.id)
                          if (item.id !== "asistencia") {
                            setSelectedSchoolForAsistencia(null)
                          }
                        }}
                        title={sidebarCollapsed ? item.label : undefined}
                      >
                        <Icon className="w-4 h-4" />
                        {!sidebarCollapsed && <span className="ml-3">{item.label}</span>}
                      </Button>
                    </li>
                  )
                })}

                {/* Asistencia con Dropdown de Colegios */}
                <li>
                  <Collapsible open={asistenciaOpen} onOpenChange={setAsistenciaOpen}>
                    <CollapsibleTrigger asChild>
                      <Button
                        variant={activeSection === "asistencia" && !selectedSchoolForAsistencia ? "default" : "ghost"}
                        className={`w-full ${sidebarCollapsed ? "justify-center px-2" : "justify-between"} ${
                          activeSection === "asistencia" && !selectedSchoolForAsistencia
                            ? "bg-navy-700 text-white hover:bg-navy-600 border-l-4 border-amber-500"
                            : "text-slate-300 hover:text-amber-300 hover:bg-navy-800"
                        }`}
                        onClick={handleAsistenciaGeneralClick}
                        title={sidebarCollapsed ? "Asistencia" : undefined}
                      >
                        <div className="flex items-center">
                          <CalendarDays className="w-4 h-4" />
                          {!sidebarCollapsed && <span className="ml-3">Asistencia</span>}
                        </div>
                        {!sidebarCollapsed && (
                          <div className="ml-auto">
                            {asistenciaOpen ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                          </div>
                        )}
                      </Button>
                    </CollapsibleTrigger>
                    {!sidebarCollapsed && (
                      <CollapsibleContent className="space-y-1 mt-1">
                        {colegiosAsistencia.map((colegio) => (
                          <Button
                            key={colegio.id}
                            variant={selectedSchoolForAsistencia === colegio.id ? "default" : "ghost"}
                            className={`w-full justify-start pl-8 text-sm ${
                              selectedSchoolForAsistencia === colegio.id
                                ? "bg-navy-600 text-white hover:bg-navy-500 border-l-4 border-amber-400"
                                : "text-slate-400 hover:text-amber-300 hover:bg-navy-800"
                            }`}
                            onClick={() => handleSchoolAsistenciaClick(colegio.id)}
                          >
                            <div className="flex items-center justify-between w-full">
                              <span className="truncate">{colegio.label.replace("Escuela ", "")}</span>
                              <div className="flex items-center gap-2 ml-2">
                                <Badge
                                  variant="secondary"
                                  className={`text-xs ${
                                    colegio.porcentaje >= 90
                                      ? "bg-amber-600 text-white"
                                      : colegio.porcentaje >= 80
                                        ? "bg-navy-600 text-white"
                                        : "bg-red-600 text-white"
                                  }`}
                                >
                                  {colegio.porcentaje}%
                                </Badge>
                              </div>
                            </div>
                          </Button>
                        ))}
                      </CollapsibleContent>
                    )}
                  </Collapsible>
                </li>
              </>
            )}

            {currentView === "docente" && (
              <>
                {getMenuItems().map((item) => {
                  const Icon = item.icon
                  return (
                    <li key={item.id}>
                      <Button
                        variant={activeSection === item.id ? "default" : "ghost"}
                        className={`w-full ${sidebarCollapsed ? "justify-center px-2" : "justify-start"} ${
                          activeSection === item.id
                            ? "bg-navy-700 text-white hover:bg-navy-600 border-l-4 border-amber-500"
                            : "text-slate-300 hover:text-amber-300 hover:bg-navy-800"
                        }`}
                        onClick={() => setActiveSection(item.id)}
                        title={sidebarCollapsed ? item.label : undefined}
                      >
                        <Icon className="w-4 h-4" />
                        {!sidebarCollapsed && <span className="ml-3">{item.label}</span>}
                      </Button>
                    </li>
                  )
                })}
              </>
            )}
          </ul>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar */}
        <header className="bg-white shadow-sm border-b border-slate-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-slate-800">{getPageTitle()}</h2>
              <p className="text-sm text-slate-600">Sistema Educativo Rural - Región de Los Ríos</p>
            </div>
            <div className="flex items-center gap-4">
              {/* Cambiar Vista Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Shield className="w-4 h-4" />
                    Cambiar Vista
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem
                    onClick={() => {
                      setCurrentView("admin")
                      setActiveSection("dashboard")
                      setShowStudentData(false)
                      setStudentRut(null)
                    }}
                    className={currentView === "admin" ? "bg-blue-50" : ""}
                  >
                    <Shield className="mr-2 h-4 w-4" />
                    <span>Administrador</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => {
                      setCurrentView("docente")
                      setActiveSection("docente-actividades")
                      setShowStudentData(false)
                      setStudentRut(null)
                    }}
                    className={currentView === "docente" ? "bg-blue-50" : ""}
                  >
                    <User className="mr-2 h-4 w-4" />
                    <span>Docente</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => {
                      setCurrentView("familia")
                      setShowStudentData(false)
                      setStudentRut(null)
                    }}
                    className={currentView === "familia" ? "bg-blue-50" : ""}
                  >
                    <User className="mr-2 h-4 w-4" />
                    <span>Portal Familias</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setIsOnline(!isOnline)
                  if (!isOnline) {
                    setTimeout(() => setPendingSync(0), 2000)
                  } else {
                    setPendingSync(3)
                  }
                }}
                className="flex items-center gap-2 border-navy-300 text-navy-700 hover:bg-navy-50 hover:border-navy-400"
              >
                {isOnline ? <Signal className="w-4 h-4" /> : <SignalZero className="w-4 h-4" />}
                {isOnline ? "Simular offline" : "Simular online"}
              </Button>

              <Button variant="outline" size="sm" className="relative border-navy-300 text-navy-700 hover:bg-navy-50">
                <Bell className="w-4 h-4" />
                {pendingSync > 0 && (
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-xs"></span>
                )}
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center gap-3 hover:bg-slate-50">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" />
                      <AvatarFallback className="bg-red-600 text-white text-sm font-bold">AS</AvatarFallback>
                    </Avatar>
                    <div className="text-left hidden sm:block">
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-medium text-slate-800">
                          {currentView === "docente" ? docenteData.nombre : "Admin Sistema"}
                        </p>
                        <Shield className="w-3 h-3 text-red-500" />
                      </div>
                      <p className="text-xs text-slate-500">
                        {currentView === "docente"
                          ? `Profesor de ${docenteData.materia}`
                          : currentView === "familia"
                            ? "Portal Familias"
                            : "Administrador General"}
                      </p>
                    </div>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-red-500" />
                    {currentView === "docente" ? "Docente" : currentView === "familia" ? "Familia" : "Administrador"}
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="cursor-pointer">
                    <User className="mr-2 h-4 w-4" />
                    <span>Perfil</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer" onClick={() => setActiveSection("configuracion")}>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Configuración</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">
                    <Info className="mr-2 h-4 w-4" />
                    <span>Ayuda</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="cursor-pointer text-red-600 focus:text-red-600">
                    <Power className="mr-2 h-4 w-4" />
                    <span>Cerrar Sesión</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>

        {/* Content area */}
        <main className="flex-1 overflow-auto p-6 bg-slate-50">{renderContent()}</main>
      </div>
    </div>
  )
}
