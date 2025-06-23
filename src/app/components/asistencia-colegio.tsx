"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Badge } from "../components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"
import { UserCheck, Check, X, Timer, Save, ArrowLeft, PhoneCall, MessageCircle, Book } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts"

interface AsistenciaColegioProps {
  schoolId: string
  onBack: () => void
}

export default function AsistenciaColegio({ schoolId, onBack }: AsistenciaColegioProps) {
  const [selectedWeek, setSelectedWeek] = useState("actual")
  const [selectedCourse, setSelectedCourse] = useState("all")

  // Datos específicos por colegio
  interface EstudianteDetalle {
    id: number
    nombre: string
    curso: string
    estado: string
    hora: string
    asistenciaSemanal: number
    apoderado: string
    telefono: string
    observaciones?: string
  }

  const colegiosData: {
    [key: string]: {
      nombre: string
      director: string
      totalEstudiantes: number
      presentesHoy: number
      ausentesHoy: number
      tardanzasHoy: number
      porcentajeHoy: number
      cursos: { curso: string; estudiantes: number; presentes: number; ausentes: number; porcentaje: number }[]
      estudiantesDetalle: EstudianteDetalle[]
      tendenciaSemanal: { dia: string; porcentaje: number; presentes: number }[]
    }
  } = {
    "los-pinos": {
      nombre: "Escuela Rural Los Pinos",
      director: "María González Pérez",
      totalEstudiantes: 45,
      presentesHoy: 42,
      ausentesHoy: 3,
      tardanzasHoy: 0,
      porcentajeHoy: 93,
      cursos: [
        { curso: "1° Básico", estudiantes: 8, presentes: 7, ausentes: 1, porcentaje: 88 },
        { curso: "2° Básico", estudiantes: 7, presentes: 7, ausentes: 0, porcentaje: 100 },
        { curso: "3° Básico", estudiantes: 8, presentes: 8, ausentes: 0, porcentaje: 100 },
        { curso: "4° Básico", estudiantes: 7, presentes: 6, ausentes: 1, porcentaje: 86 },
        { curso: "5° Básico", estudiantes: 8, presentes: 7, ausentes: 1, porcentaje: 88 },
        { curso: "6° Básico", estudiantes: 7, presentes: 7, ausentes: 0, porcentaje: 100 },
      ],
      estudiantesDetalle: [
        {
          id: 1,
          nombre: "Ana María Contreras",
          curso: "3° Básico",
          estado: "presente",
          hora: "08:25",
          asistenciaSemanal: 95,
          apoderado: "Carmen Contreras",
          telefono: "+56 9 8765 4321",
        },
        {
          id: 2,
          nombre: "Diego Andrés Silva",
          curso: "2° Básico",
          estado: "presente",
          hora: "08:30",
          asistenciaSemanal: 82,
          apoderado: "Pedro Silva",
          telefono: "+56 9 8765 4324",
        },
        {
          id: 3,
          nombre: "Isidora Paz Morales",
          curso: "4° Básico",
          estado: "ausente",
          hora: "-",
          asistenciaSemanal: 91,
          apoderado: "Patricia Morales",
          telefono: "+56 9 8765 4327",
          observaciones: "Enfermedad - Certificado médico",
        },
      ],
      tendenciaSemanal: [
        { dia: "Lun", porcentaje: 95, presentes: 43 },
        { dia: "Mar", porcentaje: 91, presentes: 41 },
        { dia: "Mié", porcentaje: 93, presentes: 42 },
        { dia: "Jue", porcentaje: 89, presentes: 40 },
        { dia: "Vie", porcentaje: 93, presentes: 42 },
      ],
    },
    "valle-verde": {
      nombre: "Escuela Valle Verde",
      director: "Carlos Mendoza Silva",
      totalEstudiantes: 38,
      presentesHoy: 34,
      ausentesHoy: 4,
      tardanzasHoy: 0,
      porcentajeHoy: 89,
      cursos: [
        { curso: "1° Básico", estudiantes: 6, presentes: 5, ausentes: 1, porcentaje: 83 },
        { curso: "2° Básico", estudiantes: 7, presentes: 6, ausentes: 1, porcentaje: 86 },
        { curso: "3° Básico", estudiantes: 8, presentes: 7, ausentes: 1, porcentaje: 88 },
        { curso: "4° Básico", estudiantes: 8, presentes: 7, ausentes: 1, porcentaje: 88 },
        { curso: "5° Básico", estudiantes: 9, presentes: 9, ausentes: 0, porcentaje: 100 },
      ],
      estudiantesDetalle: [
        {
          id: 1,
          nombre: "Carlos Eduardo Pérez",
          curso: "5° Básico",
          estado: "presente",
          hora: "08:20",
          asistenciaSemanal: 88,
          apoderado: "Luis Pérez",
          telefono: "+56 9 8765 4322",
        },
        {
          id: 2,
          nombre: "Valentina Isabel Torres",
          curso: "6° Básico",
          estado: "presente",
          hora: "08:25",
          asistenciaSemanal: 96,
          apoderado: "Ana Torres",
          telefono: "+56 9 8765 4325",
        },
      ],
      tendenciaSemanal: [
        { dia: "Lun", porcentaje: 92, presentes: 35 },
        { dia: "Mar", porcentaje: 87, presentes: 33 },
        { dia: "Mié", porcentaje: 89, presentes: 34 },
        { dia: "Jue", porcentaje: 84, presentes: 32 },
        { dia: "Vie", porcentaje: 89, presentes: 34 },
      ],
    },
    "rio-claro": {
      nombre: "Escuela Río Claro",
      director: "Ana Rodríguez López",
      totalEstudiantes: 52,
      presentesHoy: 45,
      ausentesHoy: 7,
      tardanzasHoy: 0,
      porcentajeHoy: 87,
      cursos: [
        { curso: "1° Básico", estudiantes: 9, presentes: 8, ausentes: 1, porcentaje: 89 },
        { curso: "2° Básico", estudiantes: 8, presentes: 7, ausentes: 1, porcentaje: 88 },
        { curso: "3° Básico", estudiantes: 9, presentes: 7, ausentes: 2, porcentaje: 78 },
        { curso: "4° Básico", estudiantes: 9, presentes: 8, ausentes: 1, porcentaje: 89 },
        { curso: "5° Básico", estudiantes: 8, presentes: 7, ausentes: 1, porcentaje: 88 },
        { curso: "6° Básico", estudiantes: 9, presentes: 8, ausentes: 1, porcentaje: 89 },
      ],
      estudiantesDetalle: [
        {
          id: 1,
          nombre: "Sofía Alejandra Muñoz",
          curso: "4° Básico",
          estado: "presente",
          hora: "08:45",
          asistenciaSemanal: 92,
          apoderado: "María Muñoz",
          telefono: "+56 9 8765 4323",
        },
        {
          id: 2,
          nombre: "Matías Benjamín Rojas",
          curso: "3° Básico",
          estado: "presente",
          hora: "08:40",
          asistenciaSemanal: 85,
          apoderado: "Roberto Rojas",
          telefono: "+56 9 8765 4326",
        },
      ],
      tendenciaSemanal: [
        { dia: "Lun", porcentaje: 90, presentes: 47 },
        { dia: "Mar", porcentaje: 85, presentes: 44 },
        { dia: "Mié", porcentaje: 87, presentes: 45 },
        { dia: "Jue", porcentaje: 83, presentes: 43 },
        { dia: "Vie", porcentaje: 87, presentes: 45 },
      ],
    },
    "monte-alto": {
      nombre: "Escuela Monte Alto",
      director: "Roberto Sánchez Mora",
      totalEstudiantes: 41,
      presentesHoy: 37,
      ausentesHoy: 4,
      tardanzasHoy: 0,
      porcentajeHoy: 90,
      cursos: [
        { curso: "1° Básico", estudiantes: 8, presentes: 7, ausentes: 1, porcentaje: 88 },
        { curso: "2° Básico", estudiantes: 8, presentes: 7, ausentes: 1, porcentaje: 88 },
        { curso: "3° Básico", estudiantes: 9, presentes: 8, ausentes: 1, porcentaje: 89 },
        { curso: "4° Básico", estudiantes: 8, presentes: 7, ausentes: 1, porcentaje: 88 },
        { curso: "5° Básico", estudiantes: 8, presentes: 8, ausentes: 0, porcentaje: 100 },
      ],
      estudiantesDetalle: [],
      tendenciaSemanal: [
        { dia: "Lun", porcentaje: 93, presentes: 38 },
        { dia: "Mar", porcentaje: 88, presentes: 36 },
        { dia: "Mié", porcentaje: 90, presentes: 37 },
        { dia: "Jue", porcentaje: 85, presentes: 35 },
        { dia: "Vie", porcentaje: 90, presentes: 37 },
      ],
    },
  }

  const colegio = colegiosData[schoolId as keyof typeof colegiosData]

  if (!colegio) {
    return <div>Colegio no encontrado</div>
  }

  const distribucionAsistencia = [
    { name: "Presentes", value: colegio.presentesHoy, color: "#f59e0b" },
    { name: "Ausentes", value: colegio.ausentesHoy, color: "#ef4444" },
  ]

  const getEstadoBadge = (estado: string) => {
    switch (estado) {
      case "presente":
        return (
          <Badge className="bg-amber-500 text-white flex items-center gap-1">
            <Check className="w-3 h-3" />
            Presente
          </Badge>
        )
      case "ausente":
        return (
          <Badge variant="destructive" className="flex items-center gap-1">
            <X className="w-3 h-3" />
            Ausente
          </Badge>
        )
      case "tardanza":
        return (
          <Badge className="bg-navy-500 text-white flex items-center gap-1">
            <Timer className="w-3 h-3" />
            Tardanza
          </Badge>
        )
      default:
        return <Badge variant="secondary">{estado}</Badge>
    }
  }

  const filteredEstudiantes =
    selectedCourse === "all"
      ? colegio.estudiantesDetalle
      : colegio.estudiantesDetalle.filter((est) => est.curso === selectedCourse)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center gap-4">
          <Button variant="outline" onClick={onBack} className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Volver
          </Button>
          <div>
            <h2 className="text-2xl font-bold">{colegio.nombre}</h2>
            <p className="text-gray-600">
              Director: {colegio.director} • {colegio.totalEstudiantes} estudiantes
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <Select value={selectedWeek} onValueChange={setSelectedWeek}>
            <SelectTrigger className="w-[150px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="actual">Semana Actual</SelectItem>
              <SelectItem value="anterior">Semana Anterior</SelectItem>
              <SelectItem value="mes">Mes Completo</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="flex items-center gap-2">
            <Save className="w-4 h-4" />
            Exportar
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Estudiantes</p>
                <p className="text-2xl font-bold">{colegio.totalEstudiantes}</p>
              </div>
              <UserCheck className="w-8 h-8 text-navy-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Presentes Hoy</p>
                <p className="text-2xl font-bold text-green-600">{colegio.presentesHoy}</p>
              </div>
              <Check className="w-8 h-8 text-amber-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Ausentes Hoy</p>
                <p className="text-2xl font-bold text-red-600">{colegio.ausentesHoy}</p>
              </div>
              <X className="w-8 h-8 text-red-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Asistencia Hoy</p>
                <p className="text-2xl font-bold text-navy-600">{colegio.porcentajeHoy}%</p>
              </div>
              <Timer className="w-8 h-8 text-navy-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Gráficos */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Asistencia por Curso */}
        <Card>
          <CardHeader>
            <CardTitle>Asistencia por Curso</CardTitle>
            <CardDescription>Distribución por nivel educativo</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={colegio.cursos}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="curso" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="presentes" fill="#f59e0b" name="Presentes" />
                <Bar dataKey="ausentes" fill="#ef4444" name="Ausentes" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Distribución del Día */}
        <Card>
          <CardHeader>
            <CardTitle>Distribución del Día</CardTitle>
            <CardDescription>Resumen de asistencia de hoy</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={distribucionAsistencia}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {distribucionAsistencia.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Tendencia Semanal */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Tendencia Semanal</CardTitle>
            <CardDescription>Evolución de la asistencia durante la semana</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={colegio.tendenciaSemanal}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="dia" />
                <YAxis domain={[70, 100]} />
                <Tooltip />
                <Line type="monotone" dataKey="porcentaje" stroke="#0369a1" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Resumen por Curso */}
      <Card>
        <CardHeader>
          <CardTitle>Resumen por Curso</CardTitle>
          <CardDescription>Estado actual de cada curso</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {colegio.cursos.map((curso, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-navy-100 rounded-lg flex items-center justify-center">
                    <Book className="w-5 h-5 text-navy-600" />
                  </div>
                  <div>
                    <p className="font-medium">{curso.curso}</p>
                    <p className="text-sm text-gray-500">{curso.estudiantes} estudiantes</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <p className="text-sm text-gray-500">Presentes</p>
                    <p className="font-bold text-green-600">{curso.presentes}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-500">Ausentes</p>
                    <p className="font-bold text-red-600">{curso.ausentes}</p>
                  </div>
                  <Badge
                    className={`${
                      curso.porcentaje >= 90
                        ? "bg-amber-500 text-white"
                        : curso.porcentaje >= 80
                          ? "bg-navy-500 text-white"
                          : "bg-red-500 text-white"
                    }`}
                  >
                    {curso.porcentaje}%
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Lista de Estudiantes */}
      {colegio.estudiantesDetalle.length > 0 && (
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>Lista de Estudiantes - Hoy</CardTitle>
                <CardDescription>Estado de asistencia individual</CardDescription>
              </div>
              <Select value={selectedCourse} onValueChange={setSelectedCourse}>
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Todos los cursos" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos los cursos</SelectItem>
                  {colegio.cursos.map((curso) => (
                    <SelectItem key={curso.curso} value={curso.curso}>
                      {curso.curso}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredEstudiantes.map((estudiante) => (
                <div
                  key={estudiante.id}
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
                >
                  <div className="flex items-center gap-4 flex-1">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src={`/placeholder.svg?height=40&width=40`} />
                      <AvatarFallback className="bg-navy-100 text-navy-600 text-sm font-bold">
                        {estudiante.nombre
                          .split(" ")
                          .map((n) => n[0])
                          .join("")
                          .slice(0, 2)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-4">
                        <div>
                          <p className="font-medium">{estudiante.nombre}</p>
                          <p className="text-sm text-gray-500">{estudiante.curso}</p>
                        </div>
                      </div>
                      <div className="mt-2 grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <PhoneCall className="w-3 h-3 text-gray-400" />
                          <span className="text-gray-600">{estudiante.telefono}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MessageCircle className="w-3 h-3 text-gray-400" />
                          <span className="text-gray-600">{estudiante.apoderado}</span>
                        </div>
                      </div>
                      {estudiante.observaciones && (
                        <p className="text-sm text-gray-600 mt-2 italic">{estudiante.observaciones}</p>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-center">
                      <p className="text-sm text-gray-500">Asistencia Semanal</p>
                      <p className="font-bold">{estudiante.asistenciaSemanal}%</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-gray-500">Hora Llegada</p>
                      <p className="font-medium">{estudiante.hora}</p>
                    </div>
                    {getEstadoBadge(estudiante.estado)}
                  </div>
                </div>
              ))}
            </div>
            {filteredEstudiantes.length === 0 && (
              <div className="text-center py-8">
                <p className="text-gray-500">No hay estudiantes registrados para mostrar</p>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  )
}
