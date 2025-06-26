"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Badge } from "../components/ui/badge"
import { Input } from "../components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { Book, Users, FileText, Search, Plus, CheckCircle, AlertTriangle, TrendingUp } from "lucide-react"

interface DocenteViewProps {
  activeTab: string
  docente: {
    nombre: string
    materia: string
    escuela: string
    cursos: string[]
  }
}

export default function DocenteView({ activeTab, docente }: DocenteViewProps) {
  const [searchTerm, setSearchTerm] = useState("")

  // Actividades filtradas por materia del docente
  const actividadesDocente = [
    {
      id: 1,
      titulo: "Evaluación de Fracciones",
      curso: "5° Básico",
      fechaVencimiento: "2024-01-25",
      estado: "activa",
      participantes: 28,
      completados: 18,
      progreso: 64,
    },
    {
      id: 2,
      titulo: "Sumas y Restas hasta 100",
      curso: "3° Básico",
      fechaVencimiento: "2024-01-22",
      estado: "completada",
      participantes: 25,
      completados: 25,
      progreso: 100,
    },
    {
      id: 3,
      titulo: "Geometría Básica",
      curso: "1° Básico",
      fechaVencimiento: "2024-01-28",
      estado: "pendiente",
      participantes: 22,
      completados: 5,
      progreso: 23,
    },
    {
      id: 4,
      titulo: "Multiplicación por 2 cifras",
      curso: "5° Básico",
      fechaVencimiento: "2024-01-20",
      estado: "vencida",
      participantes: 28,
      completados: 15,
      progreso: 54,
    },
  ]

  // Cursos del docente
  const cursosDocente = [
    {
      id: "1-basico",
      nombre: "1° Básico",
      estudiantes: 22,
      promedio: 6.2,
      asistencia: 89,
    },
    {
      id: "3-basico",
      nombre: "3° Básico",
      estudiantes: 25,
      promedio: 6.5,
      asistencia: 92,
    },
    {
      id: "5-basico",
      nombre: "5° Básico",
      estudiantes: 28,
      promedio: 6.8,
      asistencia: 87,
    },
  ]

  // Estudiantes del docente
  const estudiantesDocente = [
    {
      id: 1,
      nombre: "Ana María González",
      curso: "5° Básico",
      promedio: 7.2,
      asistencia: 95,
      ultimaActividad: "Evaluación de Fracciones",
      estado: "al_dia",
    },
    {
      id: 2,
      nombre: "Carlos Rodríguez",
      curso: "5° Básico",
      promedio: 6.8,
      asistencia: 88,
      ultimaActividad: "Pendiente",
      estado: "atrasado",
    },
    {
      id: 3,
      nombre: "María José Silva",
      curso: "3° Básico",
      promedio: 6.5,
      asistencia: 92,
      ultimaActividad: "Sumas y Restas hasta 100",
      estado: "al_dia",
    },
    {
      id: 4,
      nombre: "Pedro Martínez",
      curso: "1° Básico",
      promedio: 6.0,
      asistencia: 85,
      ultimaActividad: "Geometría Básica",
      estado: "necesita_atencion",
    },
    {
      id: 5,
      nombre: "Sofía Herrera",
      curso: "5° Básico",
      promedio: 7.0,
      asistencia: 90,
      ultimaActividad: "Evaluación de Fracciones",
      estado: "al_dia",
    },
  ]

  const getEstadoBadge = (estado: string) => {
    switch (estado) {
      case "activa":
        return <Badge className="bg-blue-600 text-white">Activa</Badge>
      case "completada":
        return <Badge className="bg-green-600 text-white">Completada</Badge>
      case "pendiente":
        return <Badge className="bg-yellow-600 text-white">Pendiente</Badge>
      case "vencida":
        return <Badge variant="destructive">Vencida</Badge>
      default:
        return <Badge variant="secondary">{estado}</Badge>
    }
  }

  const getEstadoEstudiante = (estado: string) => {
    switch (estado) {
      case "al_dia":
        return <Badge className="bg-green-600 text-white">Al día</Badge>
      case "atrasado":
        return <Badge className="bg-yellow-600 text-white">Atrasado</Badge>
      case "necesita_atencion":
        return <Badge variant="destructive">Necesita atención</Badge>
      default:
        return <Badge variant="secondary">{estado}</Badge>
    }
  }

  const filteredEstudiantes = estudiantesDocente.filter((estudiante) =>
    estudiante.nombre.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      {/* Header del Docente */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-4">
            <Avatar className="w-16 h-16">
              <AvatarImage src="/placeholder.svg?height=64&width=64" />
              <AvatarFallback className="bg-blue-600 text-white text-lg font-bold">CM</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-xl">{docente.nombre}</CardTitle>
              <CardDescription className="text-base">
                Profesor de {docente.materia} • {docente.escuela}
              </CardDescription>
              <div className="flex gap-2 mt-2">
                {docente.cursos.map((curso) => (
                  <Badge key={curso} variant="outline" className="text-xs">
                    {curso}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </CardHeader>
      </Card>

      <Tabs value={activeTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="docente-actividades" className="flex items-center gap-2">
            <FileText className="w-4 h-4" />
            Mis Actividades
          </TabsTrigger>
          <TabsTrigger value="docente-cursos" className="flex items-center gap-2">
            <Book className="w-4 h-4" />
            Mis Cursos
          </TabsTrigger>
          <TabsTrigger value="docente-estudiantes" className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            Mis Estudiantes
          </TabsTrigger>
        </TabsList>

        <TabsContent value="docente-actividades" className="space-y-6">
          {/* Stats de Actividades */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Total Actividades</p>
                    <p className="text-2xl font-bold text-blue-600">{actividadesDocente.length}</p>
                  </div>
                  <FileText className="w-8 h-8 text-blue-500" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Activas</p>
                    <p className="text-2xl font-bold text-green-600">
                      {actividadesDocente.filter((a) => a.estado === "activa").length}
                    </p>
                  </div>
                  <CheckCircle className="w-8 h-8 text-green-500" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Completadas</p>
                    <p className="text-2xl font-bold text-blue-600">
                      {actividadesDocente.filter((a) => a.estado === "completada").length}
                    </p>
                  </div>
                  <TrendingUp className="w-8 h-8 text-blue-500" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Vencidas</p>
                    <p className="text-2xl font-bold text-red-600">
                      {actividadesDocente.filter((a) => a.estado === "vencida").length}
                    </p>
                  </div>
                  <AlertTriangle className="w-8 h-8 text-red-500" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Lista de Actividades */}
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>Actividades de {docente.materia}</CardTitle>
                  <CardDescription>Gestiona tus actividades asignadas</CardDescription>
                </div>
                <Button className="flex items-center gap-2">
                  <Plus className="w-4 h-4" />
                  Nueva Actividad
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {actividadesDocente.map((actividad) => (
                  <div key={actividad.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-medium">{actividad.titulo}</h3>
                        {getEstadoBadge(actividad.estado)}
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span>{actividad.curso}</span>
                        <span>•</span>
                        <span>Vence: {actividad.fechaVencimiento}</span>
                        <span>•</span>
                        <span>
                          {actividad.completados}/{actividad.participantes} completados
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className="text-sm font-medium">{actividad.progreso}%</p>
                        <div className="w-20 h-2 bg-gray-200 rounded-full">
                          <div
                            className="h-2 bg-blue-600 rounded-full"
                            style={{ width: `${actividad.progreso}%` }}
                          ></div>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Ver detalles
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="docente-cursos" className="space-y-6">
          {/* Stats de Cursos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Total Cursos</p>
                    <p className="text-2xl font-bold text-blue-600">{cursosDocente.length}</p>
                  </div>
                  <Book className="w-8 h-8 text-blue-500" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Total Estudiantes</p>
                    <p className="text-2xl font-bold text-green-600">
                      {cursosDocente.reduce((acc, curso) => acc + curso.estudiantes, 0)}
                    </p>
                  </div>
                  <Users className="w-8 h-8 text-green-500" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Promedio General</p>
                    <p className="text-2xl font-bold text-amber-600">
                      {(cursosDocente.reduce((acc, curso) => acc + curso.promedio, 0) / cursosDocente.length).toFixed(
                        1,
                      )}
                    </p>
                  </div>
                  <TrendingUp className="w-8 h-8 text-amber-500" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Lista de Cursos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cursosDocente.map((curso) => (
              <Card key={curso.id}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Book className="w-5 h-5 text-blue-600" />
                    {curso.nombre}
                  </CardTitle>
                  <CardDescription>{docente.materia}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Estudiantes</span>
                      <span className="font-medium">{curso.estudiantes}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Promedio</span>
                      <span className="font-medium text-amber-600">{curso.promedio}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Asistencia</span>
                      <span className="font-medium text-green-600">{curso.asistencia}%</span>
                    </div>
                    <Button variant="outline" className="w-full">
                      Ver estudiantes
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="docente-estudiantes" className="space-y-6">
          {/* Buscador */}
          <Card>
            <CardContent className="p-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Buscar estudiantes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </CardContent>
          </Card>

          {/* Lista de Estudiantes */}
          <Card>
            <CardHeader>
              <CardTitle>Mis Estudiantes</CardTitle>
              <CardDescription>Estudiantes en tus cursos de {docente.materia}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredEstudiantes.map((estudiante) => (
                  <div key={estudiante.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src="/placeholder.svg?height=40&width=40" />
                        <AvatarFallback className="bg-blue-100 text-blue-600">
                          {estudiante.nombre
                            .split(" ")
                            .map((n) => n[0])
                            .join("")
                            .slice(0, 2)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-medium">{estudiante.nombre}</h3>
                        <p className="text-sm text-gray-600">{estudiante.curso}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="text-center">
                        <p className="text-sm text-gray-600">Promedio</p>
                        <p className="font-medium text-amber-600">{estudiante.promedio}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-gray-600">Asistencia</p>
                        <p className="font-medium text-green-600">{estudiante.asistencia}%</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-gray-600">Estado</p>
                        {getEstadoEstudiante(estudiante.estado)}
                      </div>
                      <Button variant="outline" size="sm">
                        Ver perfil
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
