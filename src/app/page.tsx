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
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/app/components/ui/collapsible"

// Componentes de las diferentes secciones
import Dashboard from "./components/dashboard"
import Escuelas from "./components/escuelas"
import Estudiantes from "./components/estudiantes"
import Asistencia from "./components/asistencia"
import Actividades from "./components/actividades"
import Reportes from "./components/reportes"
import Configuracion from "./components/configuracion"
import Docentes from "./components/docentes"
import PortalFamilias from "./components/portal-familias"

export default function SistemaEducativoRural() {
  const [activeSection, setActiveSection] = useState("dashboard")
  const [isOnline, setIsOnline] = useState(true)
  const [pendingSync, setPendingSync] = useState(3)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [asistenciaOpen, setAsistenciaOpen] = useState(false)
  const [selectedSchoolForAsistencia, setSelectedSchoolForAsistencia] = useState<string | null>(null)

  // En el array menuItems, mover configuración al final
  const menuItems = [
    { id: "dashboard", label: "Inicio", icon: TrendingUp },
    { id: "escuelas", label: "Escuelas", icon: GraduationCap },
    { id: "docentes", label: "Docentes", icon: User },
    { id: "estudiantes", label: "Estudiantes", icon: UserCheck },
    { id: "actividades", label: "Actividades", icon: FileText },
    { id: "familias", label: "Portal Familias", icon: User },
    { id: "reportes", label: "Reportes", icon: Book },
    { id: "configuracion", label: "Configuración", icon: Settings },
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
    switch (activeSection) {
      case "dashboard":
        return <Dashboard />
      case "escuelas":
        return <Escuelas />
      case "docentes":
        return <Docentes />
      case "estudiantes":
        return <Estudiantes />
      case "asistencia":
        return <Asistencia selectedSchool={selectedSchoolForAsistencia} />
      case "actividades":
        return <Actividades />
      case "familias":
        return <PortalFamilias />
      case "reportes":
        return <Reportes />
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
            {menuItems.map((item) => {
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
          </ul>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar */}
        <header className="bg-white shadow-sm border-b border-slate-200 p-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-slate-800 capitalize">
                {activeSection === "asistencia"
                  ? selectedSchoolForAsistencia
                    ? `Asistencia - ${colegiosAsistencia.find((c) => c.id === selectedSchoolForAsistencia)?.label}`
                    : "Asistencia General"
                  : menuItems.find((item) => item.id === activeSection)?.label}
              </h2>
              <p className="text-sm text-slate-600">Sistema Educativo Rural - Región de Los Ríos</p>
            </div>
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setIsOnline(!isOnline)
                  // Si se conecta, simular sincronización después de 2 segundos
                  if (!isOnline) {
                    setTimeout(() => setPendingSync(0), 2000)
                  } else {
                    // Si se desconecta, simular que se acumulan registros pendientes
                    setPendingSync(3)
                  }
                }}
                className="flex items-center gap-2 border-navy-300 text-navy-700 hover:bg-navy-50 hover:border-navy-400"
              >
                {isOnline ? <Signal className="w-4 h-4" /> : <SignalZero className="w-4 h-4" />}
                {isOnline ? "Simular offline" : "Simular online"}
              </Button>

              {/* Notifications */}
              <Button variant="outline" size="sm" className="relative border-navy-300 text-navy-700 hover:bg-navy-50">
                <Bell className="w-4 h-4" />
                {pendingSync > 0 && (
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-xs"></span>
                )}
              </Button>

              {/* User Profile Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center gap-3 hover:bg-slate-50">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" />
                      <AvatarFallback className="bg-red-600 text-white text-sm font-bold">AS</AvatarFallback>
                    </Avatar>
                    <div className="text-left hidden sm:block">
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-medium text-slate-800">Admin Sistema</p>
                        <Shield className="w-3 h-3 text-red-500" />
                      </div>
                      <p className="text-xs text-slate-500">Administrador General</p>
                    </div>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-red-500" />
                    Administrador
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
