"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Badge } from "../components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"
import { CustomProgress } from "./ui/custom-progress"
import {
  CalendarDays,
  Book,
  TrendingUp,
  CheckCircle,
  Clock,
  AlertTriangle,
  Download,
  MessageCircle,
  Phone,
} from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select"

export default function PortalFamilias() {
  const [selectedStudent, setSelectedStudent] = useState("joaquin")
  const [selectedPeriod, setSelectedPeriod] = useState("actual")

  // Datos de estudiantes de la familia
  const estudiantes = [
    {
      id: "joaquin",
      nombre: "Joaquín Alonso Herrera",
      curso: "1° Básico",
      escuela: "Escuela Valle Verde",
      foto: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "martina",
      nombre: "Martina Esperanza Herrera",
      curso: "4° Básico",
      escuela: "Escuela Valle Verde",
      foto: "/placeholder.svg?height=40&width=40",
    },
  ]

  // Datos del estudiante seleccionado
  const datosEstudiante = {
    joaquin: {
      asistencia: {
        porcentaje: 89,
        presentes: 42,
        ausentes: 5,
        tardanzas: 2,
        ultimaClase: "Presente - Hoy 08:25",
      },
      rendimiento: {
        promedioGeneral: 6.5,
        materias: [
          { materia: "Matemáticas", promedio: 6.8, progreso: 85 },
          { materia: "Lenguaje", promedio: 6.2, progreso: 78 },
          { materia: "Ciencias", promedio: 6.7, progreso: 82 },
          { materia: "Historia", promedio: 6.3, progreso: 75 },
        ],
      },
      actividades: [
        {
          id: 1,
          titulo: "Lectura: El Patito Feo",
          materia: "Lenguaje",
          fechaVencimiento: "2024-01-25",
          estado: "completada",
          calificacion: 6.5,
        },
        {
          id: 2,
          titulo: "Sumas hasta el 20",
          materia: "Matemáticas",
          fechaVencimiento: "2024-01-27",
          estado: "pendiente",
          calificacion: null,
        },
        {
          id: 3,
          titulo: "Los Animales de mi Región",
          materia: "Ciencias",
          fechaVencimiento: "2024-01-30",
          estado: "en_progreso",
          calificacion: null,
        },
      ],
      observaciones: [
        {
          fecha: "2024-01-20",
          docente: "Prof. Carlos Mendoza",
          mensaje: "Joaquín muestra gran interés en las actividades de matemáticas. Sigue participando activamente.",
          tipo: "positiva",
        },
        {
          fecha: "2024-01-18",
          docente: "Prof. Carlos Mendoza",
          mensaje: "Se recomienda reforzar la lectura en casa para mejorar la comprensión lectora.",
          tipo: "recomendacion",
        },
      ],
    },
    martina: {
      asistencia: {
        porcentaje: 95,
        presentes: 47,
        ausentes: 2,
        tardanzas: 1,
        ultimaClase: "Presente - Hoy 08:20",
      },
      rendimiento: {
        promedioGeneral: 7.2,
        materias: [
          { materia: "Matemáticas", promedio: 7.5, progreso: 92 },
          { materia: "Lenguaje", promedio: 7.0, progreso: 88 },
          { materia: "Ciencias", promedio: 7.1, progreso: 90 },
          { materia: "Historia", promedio: 7.2, progreso: 89 },
        ],
      },
      actividades: [
        {
          id: 1,
          titulo: "Fracciones Simples",
          materia: "Matemáticas",
          fechaVencimiento: "2024-01-24",
          estado: "completada",
          calificacion: 7.0,
        },
        {
          id: 2,
          titulo: "Ensayo: Mi Familia",
          materia: "Lenguaje",
          fechaVencimiento: "2024-01-26",
          estado: "completada",
          calificacion: 6.8,
        },
        {
          id: 3,
          titulo: "Proyecto: Ecosistemas",
          materia: "Ciencias",
          fechaVencimiento: "2024-01-28",
          estado: "en_progreso",
          calificacion: null,
        },
      ],
      observaciones: [
        {
          fecha: "2024-01-19",
          docente: "Prof. Ana Rodríguez",
          mensaje: "Martina es una estudiante destacada. Su rendimiento es excelente en todas las áreas.",
          tipo: "positiva",
        },
      ],
    },
  }

  const estudianteActual = estudiantes.find((e) => e.id === selectedStudent)
  const datos = datosEstudiante[selectedStudent as keyof typeof datosEstudiante]

  const getEstadoActividad = (estado: string) => {
    switch (estado) {
      case "completada":
        return (
          <Badge className="bg-amber-500 text-white">
            <CheckCircle className="w-3 h-3 mr-1" />
            Completada
          </Badge>
        )
      case "en_progreso":
        return (
          <Badge className="bg-navy-500 text-white">
            <Clock className="w-3 h-3 mr-1" />
            En Progreso
          </Badge>
        )
      case "pendiente":
        return (
          <Badge variant="secondary">
            <AlertTriangle className="w-3 h-3 mr-1" />
            Pendiente
          </Badge>
        )
      default:
        return <Badge variant="secondary">{estado}</Badge>
    }
  }

  const getTipoObservacion = (tipo: string) => {
    switch (tipo) {
      case "positiva":
        return <Badge className="bg-green-500 text-white">Positiva</Badge>
      case "recomendacion":
        return <Badge className="bg-amber-500 text-white">Recomendación</Badge>
      case "atencion":
        return <Badge variant="destructive">Requiere Atención</Badge>
      default:
        return <Badge variant="secondary">{tipo}</Badge>
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold">Portal de Familias</h2>
          <p className="text-gray-600">Seguimiento académico de sus hijos</p>
        </div>
        <div className="flex gap-2">
          <Select value={selectedStudent} onValueChange={setSelectedStudent}>
            <SelectTrigger className="w-[200px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {estudiantes.map((estudiante) => (
                <SelectItem key={estudiante.id} value={estudiante.id}>
                  {estudiante.nombre}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
            <SelectTrigger className="w-[150px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="actual">Período Actual</SelectItem>
              <SelectItem value="anterior">Período Anterior</SelectItem>
              <SelectItem value="anual">Año Completo</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Student Info */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-4">
            <Avatar className="w-16 h-16">
              <AvatarImage src={estudianteActual?.foto || "/placeholder.svg"} />
              <AvatarFallback className="bg-navy-100 text-navy-600 text-lg font-bold">
                {estudianteActual?.nombre
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .slice(0, 2)}
              </AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-xl">{estudianteActual?.nombre}</CardTitle>
              <CardDescription className="text-base">
                {estudianteActual?.curso} • {estudianteActual?.escuela}
              </CardDescription>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Asistencia</p>
                <p className="text-2xl font-bold text-navy-600">{datos.asistencia.porcentaje}%</p>
                <p className="text-xs text-gray-500 mt-1">{datos.asistencia.ultimaClase}</p>
              </div>
              <CalendarDays className="w-8 h-8 text-navy-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Promedio General</p>
                <p className="text-2xl font-bold text-amber-600">{datos.rendimiento.promedioGeneral}</p>
                <p className="text-xs text-gray-500 mt-1">Escala 1.0 - 7.0</p>
              </div>
              <TrendingUp className="w-8 h-8 text-amber-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Actividades</p>
                <p className="text-2xl font-bold text-navy-600">
                  {datos.actividades.filter((a) => a.estado === "completada").length}/{datos.actividades.length}
                </p>
                <p className="text-xs text-gray-500 mt-1">Completadas</p>
              </div>
              <Book className="w-8 h-8 text-navy-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Rendimiento por Materia */}
        <Card>
          <CardHeader>
            <CardTitle>Rendimiento por Materia</CardTitle>
            <CardDescription>Promedios y progreso en cada asignatura</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {datos.rendimiento.materias.map((materia, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{materia.materia}</span>
                    <span className="text-sm font-bold text-amber-600">{materia.promedio}</span>
                  </div>
                  <CustomProgress value={materia.progreso} variant="academic" className="h-2" />
                  <p className="text-xs text-gray-500">{materia.progreso}% de progreso</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Actividades Recientes */}
        <Card>
          <CardHeader>
            <CardTitle>Actividades Escolares</CardTitle>
            <CardDescription>Estado de las actividades asignadas</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {datos.actividades.map((actividad) => (
                <div key={actividad.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex-1">
                    <p className="font-medium">{actividad.titulo}</p>
                    <p className="text-sm text-gray-500">{actividad.materia}</p>
                    <p className="text-xs text-gray-400">Vence: {actividad.fechaVencimiento}</p>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    {getEstadoActividad(actividad.estado)}
                    {actividad.calificacion && (
                      <span className="text-sm font-bold text-amber-600">Nota: {actividad.calificacion}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Observaciones del Docente */}
      <Card>
        <CardHeader>
          <CardTitle>Observaciones del Docente</CardTitle>
          <CardDescription>Comentarios y recomendaciones de los profesores</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {datos.observaciones.map((observacion, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="font-medium">{observacion.docente}</p>
                    <p className="text-sm text-gray-500">{observacion.fecha}</p>
                  </div>
                  {getTipoObservacion(observacion.tipo)}
                </div>
                <p className="text-gray-700">{observacion.mensaje}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Contacto */}
      <Card>
        <CardHeader>
          <CardTitle>Contacto con la Escuela</CardTitle>
          <CardDescription>Información de contacto y acciones rápidas</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 p-3 border rounded-lg">
              <Phone className="w-5 h-5 text-navy-500" />
              <div>
                <p className="font-medium">Teléfono Escuela</p>
                <p className="text-sm text-gray-600">+56 9 8765 4322</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 border rounded-lg">
              <MessageCircle className="w-5 h-5 text-navy-500" />
              <div>
                <p className="font-medium">Email Docente</p>
                <p className="text-sm text-gray-600">carlos.mendoza@educacion.cl</p>
              </div>
            </div>
            <Button className="flex items-center gap-2">
              <Download className="w-4 h-4" />
              Descargar Reporte
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
