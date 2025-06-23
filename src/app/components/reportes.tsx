"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select"
import { CalendarDays, BarChart3, Book, UserCheck, TrendingUp, Save, GraduationCap } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../components/ui/dialog"
import { Label } from "../components/ui/label"
import { Checkbox } from "../components/ui/checkbox"

export default function Reportes() {
  const [selectedPeriod, setSelectedPeriod] = useState("mensual")
  const [selectedSchool, setSelectedSchool] = useState("all")
  const [selectedReportType, setSelectedReportType] = useState("")
  const [selectedSchools, setSelectedSchools] = useState<string[]>([])
  const [isReportDialogOpen, setIsReportDialogOpen] = useState(false)

  /* ---------- Data ---------- */
  const escuelasDisponibles = [
    { id: "los-pinos", nombre: "Escuela Rural Los Pinos", estudiantes: 45 },
    { id: "valle-verde", nombre: "Escuela Valle Verde", estudiantes: 38 },
    { id: "rio-claro", nombre: "Escuela Río Claro", estudiantes: 52 },
    { id: "monte-alto", nombre: "Escuela Monte Alto", estudiantes: 41 },
  ]

  const reportesDisponibles = [
    {
      id: "asistencia",
      titulo: "Reporte de Asistencia",
      descripcion: "Análisis detallado de asistencia por escuela y curso",
      icono: CalendarDays,
      color: "bg-navy-100 text-navy-600",
      ultimaGeneracion: "Hace 2 horas",
    },
    {
      id: "rendimiento",
      titulo: "Reporte de Rendimiento Académico",
      descripcion: "Promedios y estadísticas de rendimiento estudiantil",
      icono: BarChart3,
      color: "bg-amber-100 text-amber-600",
      ultimaGeneracion: "Hace 1 día",
    },
    {
      id: "actividades",
      titulo: "Reporte de Actividades",
      descripcion: "Estado y progreso de actividades escolares",
      icono: Book,
      color: "bg-navy-100 text-navy-600",
      ultimaGeneracion: "Hace 3 horas",
    },
    {
      id: "docentes",
      titulo: "Reporte de Docentes",
      descripcion: "Actividad y desempeño del cuerpo docente",
      icono: UserCheck,
      color: "bg-amber-100 text-amber-600",
      ultimaGeneracion: "Hace 1 día",
    },
  ]

  const estadisticasGenerales = {
    totalEstudiantes: 247,
    promedioAsistencia: 87,
    actividadesCompletadas: 156,
    escuelasActivas: 8,
  }

  const datosRendimiento = [
    { escuela: "Escuela Rural Los Pinos", promedio: 6.8, asistencia: 95, estudiantes: 45 },
    { escuela: "Escuela Valle Verde", promedio: 7.2, asistencia: 92, estudiantes: 38 },
    { escuela: "Escuela Río Claro", promedio: 6.5, asistencia: 88, estudiantes: 52 },
    { escuela: "Escuela Monte Alto", promedio: 7.0, asistencia: 90, estudiantes: 41 },
  ]

  /* ---------- Functions ---------- */
  const handleReportGeneration = (reportType: string) => {
    setSelectedReportType(reportType)
    setSelectedSchools([])
    setIsReportDialogOpen(true)
  }

  const handleSchoolToggle = (schoolId: string) => {
    setSelectedSchools((prev) => (prev.includes(schoolId) ? prev.filter((id) => id !== schoolId) : [...prev, schoolId]))
  }

  const handleSelectAllSchools = () => {
    if (selectedSchools.length === escuelasDisponibles.length) {
      setSelectedSchools([])
    } else {
      setSelectedSchools(escuelasDisponibles.map((e) => e.id))
    }
  }

  const generateReport = () => {
    const reportData = {
      type: selectedReportType,
      schools: selectedSchools.length === 0 ? "all" : selectedSchools,
      period: selectedPeriod,
      timestamp: new Date().toISOString(),
    }

    console.log("Generando reporte:", reportData)

    // Aquí iría la lógica real de generación del reporte
    alert(
      `Reporte ${selectedReportType} generado para ${selectedSchools.length === 0 ? "todas las escuelas" : selectedSchools.length + " escuela(s)"}`,
    )

    setIsReportDialogOpen(false)
  }

  const getSelectedReportTitle = () => {
    const report = reportesDisponibles.find((r) => r.id === selectedReportType)
    return report?.titulo || "Reporte"
  }

  /* ---------- Render ---------- */
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold">Reportes y Estadísticas</h2>
          <p className="text-gray-600">Genera reportes para docentes, familias y el ministerio</p>
        </div>
        <div className="flex gap-2">
          <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
            <SelectTrigger className="w-[150px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="semanal">Semanal</SelectItem>
              <SelectItem value="mensual">Mensual</SelectItem>
              <SelectItem value="trimestral">Trimestral</SelectItem>
              <SelectItem value="anual">Anual</SelectItem>
            </SelectContent>
          </Select>
          <Select value={selectedSchool} onValueChange={setSelectedSchool}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Todas las escuelas" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todas las escuelas</SelectItem>
              <SelectItem value="los-pinos">Escuela Rural Los Pinos</SelectItem>
              <SelectItem value="valle-verde">Escuela Valle Verde</SelectItem>
              <SelectItem value="rio-claro">Escuela Río Claro</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Resumen Rápido */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Estudiantes</p>
                <p className="text-2xl font-bold">{estadisticasGenerales.totalEstudiantes}</p>
                <p className="text-xs text-green-600 flex items-center gap-1 mt-1">
                  <TrendingUp className="w-3 h-3" />
                  +5% vs mes anterior
                </p>
              </div>
              <UserCheck className="w-8 h-8 text-navy-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Asistencia Promedio</p>
                <p className="text-2xl font-bold">{estadisticasGenerales.promedioAsistencia}%</p>
                <p className="text-xs text-green-600 flex items-center gap-1 mt-1">
                  <TrendingUp className="w-3 h-3" />
                  +2% vs mes anterior
                </p>
              </div>
              <CalendarDays className="w-8 h-8 text-amber-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Actividades</p>
                <p className="text-2xl font-bold">{estadisticasGenerales.actividadesCompletadas}</p>
                <p className="text-xs text-gray-600 mt-1">Completadas este mes</p>
              </div>
              <Book className="w-8 h-8 text-navy-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Escuelas Activas</p>
                <p className="text-2xl font-bold">{estadisticasGenerales.escuelasActivas}</p>
                <p className="text-xs text-gray-600 mt-1">100% operativas</p>
              </div>
              <GraduationCap className="w-8 h-8 text-amber-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Report List */}
        <Card>
          <CardHeader>
            <CardTitle>Reportes Disponibles</CardTitle>
            <CardDescription>Selecciona el tipo de reporte y las escuelas a incluir</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {reportesDisponibles.map((reporte) => {
                const Icon = reporte.icono
                return (
                  <div
                    key={reporte.id}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${reporte.color}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-medium">{reporte.titulo}</p>
                        <p className="text-sm text-gray-500">{reporte.descripcion}</p>
                        <p className="text-xs text-gray-400 mt-1">Última generación: {reporte.ultimaGeneracion}</p>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2"
                      onClick={() => handleReportGeneration(reporte.id)}
                    >
                      <Save className="w-3 h-3" />
                      Generar
                    </Button>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>

        {/* Rendimiento por Escuela */}
        <Card>
          <CardHeader>
            <CardTitle>Rendimiento por Escuela</CardTitle>
            <CardDescription>Comparativo de rendimiento académico y asistencia</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {datosRendimiento.map((escuela, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-medium text-sm">{escuela.escuela}</p>
                      <p className="text-xs text-gray-500">{escuela.estudiantes} estudiantes</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">Promedio: {escuela.promedio}</p>
                      <p className="text-xs text-gray-500">Asistencia: {escuela.asistencia}%</p>
                    </div>
                  </div>
                  <div className="h-2 w-full bg-navy-100 rounded">
                    <div
                      style={{ width: `${(escuela.promedio / 7) * 100}%` }}
                      className="h-full rounded bg-amber-500"
                    />
                  </div>
                  <div className="h-2 w-full bg-navy-100 rounded">
                    <div style={{ width: `${escuela.asistencia}%` }} className="h-full rounded bg-navy-600" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Dialog para selección de escuelas */}
      <Dialog open={isReportDialogOpen} onOpenChange={setIsReportDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Generar {getSelectedReportTitle()}</DialogTitle>
            <DialogDescription>
              Selecciona las escuelas que deseas incluir en el reporte. Si no seleccionas ninguna, se generará un
              reporte general de todas las escuelas.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label className="text-base font-medium">Escuelas a incluir:</Label>
                <Button variant="outline" size="sm" onClick={handleSelectAllSchools}>
                  {selectedSchools.length === escuelasDisponibles.length ? "Deseleccionar todas" : "Seleccionar todas"}
                </Button>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-2 p-3 bg-amber-50 rounded-lg border border-amber-200">
                  <Checkbox
                    id="general"
                    checked={selectedSchools.length === 0}
                    onCheckedChange={() => setSelectedSchools([])}
                  />
                  <div className="flex-1">
                    <Label htmlFor="general" className="font-medium text-amber-800">
                      Reporte General (Todas las escuelas)
                    </Label>
                    <p className="text-sm text-amber-600">
                      Incluye datos consolidados de las {escuelasDisponibles.length} escuelas del sistema
                    </p>
                  </div>
                </div>

                {escuelasDisponibles.map((escuela) => (
                  <div key={escuela.id} className="flex items-center space-x-2 p-3 border rounded-lg">
                    <Checkbox
                      id={escuela.id}
                      checked={selectedSchools.includes(escuela.id)}
                      onCheckedChange={() => handleSchoolToggle(escuela.id)}
                    />
                    <div className="flex-1">
                      <Label htmlFor={escuela.id} className="font-medium">
                        {escuela.nombre}
                      </Label>
                      <p className="text-sm text-gray-500">{escuela.estudiantes} estudiantes</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong>Período:</strong> {selectedPeriod.charAt(0).toUpperCase() + selectedPeriod.slice(1)}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Escuelas seleccionadas:</strong>{" "}
                  {selectedSchools.length === 0
                    ? "Todas las escuelas (reporte general)"
                    : `${selectedSchools.length} escuela(s) específica(s)`}
                </p>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsReportDialogOpen(false)}>
              Cancelar
            </Button>
            <Button onClick={generateReport} className="flex items-center gap-2">
              <Save className="w-4 h-4" />
              Generar Reporte
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
