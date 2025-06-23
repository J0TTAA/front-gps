"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Badge } from "../components/ui/badge"
import { PlusCircle, Scan, Book, CalendarDays, Check, Timer, AlertTriangle, Pencil, View } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog"
import { Label } from "../components/ui/label"
import { Textarea } from "../components/ui/textarea"
import { CustomProgress } from "./ui/custom-progress"

export default function Actividades() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedStatus, setSelectedStatus] = useState("all")
  const [selectedSubject, setSelectedSubject] = useState("all")
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [selectedSchool, setSelectedSchool] = useState("all")

  const actividades = [
    {
      id: 1,
      titulo: "Evaluación de Matemáticas - Fracciones",
      materia: "Matemáticas",
      curso: "5° Básico",
      escuela: "Escuela Valle Verde",
      docente: "Prof. Carlos Mendoza",
      fechaCreacion: "2024-01-15",
      fechaVencimiento: "2024-01-22",
      estado: "activa",
      participantes: 38,
      completados: 25,
      progreso: 66,
    },
    {
      id: 2,
      titulo: "Lectura Comprensiva - El Principito",
      materia: "Lenguaje",
      curso: "4° Básico",
      escuela: "Escuela Río Claro",
      docente: "Prof. Ana Rodríguez",
      fechaCreacion: "2024-01-10",
      fechaVencimiento: "2024-01-20",
      estado: "completada",
      participantes: 52,
      completados: 52,
      progreso: 100,
    },
    {
      id: 3,
      titulo: "Experimento: Estados de la Materia",
      materia: "Ciencias",
      curso: "3° Básico",
      escuela: "Escuela Rural Los Pinos",
      docente: "Prof. María González",
      fechaCreacion: "2024-01-18",
      fechaVencimiento: "2024-01-25",
      estado: "pendiente",
      participantes: 45,
      completados: 12,
      progreso: 27,
    },
    {
      id: 4,
      titulo: "Historia de Chile - Pueblos Originarios",
      materia: "Historia",
      curso: "6° Básico",
      escuela: "Escuela Valle Verde",
      docente: "Prof. Luis Morales",
      fechaCreacion: "2024-01-12",
      fechaVencimiento: "2024-01-19",
      estado: "vencida",
      participantes: 32,
      completados: 18,
      progreso: 56,
    },
    {
      id: 5,
      titulo: "Taller de Escritura Creativa",
      materia: "Lenguaje",
      curso: "2° Básico",
      escuela: "Escuela Rural Los Pinos",
      docente: "Prof. María González",
      fechaCreacion: "2024-01-20",
      fechaVencimiento: "2024-01-27",
      estado: "activa",
      participantes: 28,
      completados: 15,
      progreso: 54,
    },
    {
      id: 6,
      titulo: "Proyecto: Mi Comunidad Rural",
      materia: "Historia",
      curso: "3° Básico",
      escuela: "Escuela Monte Alto",
      docente: "Prof. Roberto Sánchez",
      fechaCreacion: "2024-01-16",
      fechaVencimiento: "2024-01-30",
      estado: "activa",
      participantes: 35,
      completados: 20,
      progreso: 57,
    },
    {
      id: 7,
      titulo: "Operaciones Básicas - Suma y Resta",
      materia: "Matemáticas",
      curso: "1° Básico",
      escuela: "Escuela Río Claro",
      docente: "Prof. Ana Rodríguez",
      fechaCreacion: "2024-01-14",
      fechaVencimiento: "2024-01-21",
      estado: "completada",
      participantes: 22,
      completados: 22,
      progreso: 100,
    },
    {
      id: 8,
      titulo: "Ecosistemas Locales",
      materia: "Ciencias",
      curso: "4° Básico",
      escuela: "Escuela Valle Verde",
      docente: "Prof. Carlos Mendoza",
      fechaCreacion: "2024-01-19",
      fechaVencimiento: "2024-01-26",
      estado: "activa",
      participantes: 30,
      completados: 8,
      progreso: 27,
    },
    {
      id: 9,
      titulo: "Educación Física - Juegos Tradicionales",
      materia: "Educación Física",
      curso: "5° Básico",
      escuela: "Escuela Monte Alto",
      docente: "Prof. Roberto Sánchez",
      fechaCreacion: "2024-01-17",
      fechaVencimiento: "2024-01-24",
      estado: "activa",
      participantes: 33,
      completados: 25,
      progreso: 76,
    },
    {
      id: 10,
      titulo: "Arte y Cultura Mapuche",
      materia: "Arte",
      curso: "6° Básico",
      escuela: "Escuela Rural Los Pinos",
      docente: "Prof. María González",
      fechaCreacion: "2024-01-13",
      fechaVencimiento: "2024-01-20",
      estado: "vencida",
      participantes: 25,
      completados: 12,
      progreso: 48,
    },
    {
      id: 11,
      titulo: "Geometría Básica - Figuras",
      materia: "Matemáticas",
      curso: "2° Básico",
      escuela: "Escuela Río Claro",
      docente: "Prof. Ana Rodríguez",
      fechaCreacion: "2024-01-21",
      fechaVencimiento: "2024-01-28",
      estado: "pendiente",
      participantes: 26,
      completados: 5,
      progreso: 19,
    },
    {
      id: 12,
      titulo: "Cuentos y Leyendas Chilenas",
      materia: "Lenguaje",
      curso: "3° Básico",
      escuela: "Escuela Valle Verde",
      docente: "Prof. Carlos Mendoza",
      fechaCreacion: "2024-01-18",
      fechaVencimiento: "2024-01-25",
      estado: "activa",
      participantes: 29,
      completados: 18,
      progreso: 62,
    },
    {
      id: 13,
      titulo: "El Ciclo del Agua",
      materia: "Ciencias",
      curso: "1° Básico",
      escuela: "Escuela Monte Alto",
      docente: "Prof. Roberto Sánchez",
      fechaCreacion: "2024-01-15",
      fechaVencimiento: "2024-01-22",
      estado: "completada",
      participantes: 20,
      completados: 20,
      progreso: 100,
    },
    {
      id: 14,
      titulo: "Tradiciones Familiares",
      materia: "Historia",
      curso: "1° Básico",
      escuela: "Escuela Rural Los Pinos",
      docente: "Prof. María González",
      fechaCreacion: "2024-01-22",
      fechaVencimiento: "2024-01-29",
      estado: "pendiente",
      participantes: 24,
      completados: 3,
      progreso: 13,
    },
    {
      id: 15,
      titulo: "Multiplicación por 2 y 5",
      materia: "Matemáticas",
      curso: "3° Básico",
      escuela: "Escuela Río Claro",
      docente: "Prof. Ana Rodríguez",
      fechaCreacion: "2024-01-20",
      fechaVencimiento: "2024-01-27",
      estado: "activa",
      participantes: 31,
      completados: 22,
      progreso: 71,
    },
  ]

  const getEstadoBadge = (estado: string) => {
    switch (estado) {
      case "activa":
        return (
          <Badge className="bg-navy-500 text-white flex items-center gap-1">
            <Timer className="w-3 h-3" />
            Activa
          </Badge>
        )
      case "completada":
        return (
          <Badge className="bg-amber-500 text-white flex items-center gap-1">
            <Check className="w-3 h-3" />
            Completada
          </Badge>
        )
      case "pendiente":
        return (
          <Badge className="bg-navy-300 text-navy-800 flex items-center gap-1">
            <Timer className="w-3 h-3" />
            Pendiente
          </Badge>
        )
      case "vencida":
        return (
          <Badge variant="destructive" className="flex items-center gap-1">
            <AlertTriangle className="w-3 h-3" />
            Vencida
          </Badge>
        )
      default:
        return <Badge variant="secondary">{estado}</Badge>
    }
  }

  const filteredActividades = actividades.filter((actividad) => {
    const matchesSearch =
      actividad.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      actividad.materia.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = selectedStatus === "all" || actividad.estado === selectedStatus
    const matchesSubject = selectedSubject === "all" || actividad.materia === selectedSubject
    const matchesSchool = selectedSchool === "all" || actividad.escuela === selectedSchool

    return matchesSearch && matchesStatus && matchesSubject && matchesSchool
  })

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold">Gestión de Actividades</h2>
          <p className="text-gray-600">Administra las actividades escolares y su progreso</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="flex items-center gap-2">
              <PlusCircle className="w-4 h-4" />
              Nueva Actividad
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Crear Nueva Actividad</DialogTitle>
              <DialogDescription>Define una nueva actividad para tus estudiantes</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="titulo">Título de la Actividad</Label>
                <Input id="titulo" placeholder="Ej: Evaluación de Matemáticas..." />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="materia">Materia</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="matematicas">Matemáticas</SelectItem>
                      <SelectItem value="lenguaje">Lenguaje</SelectItem>
                      <SelectItem value="ciencias">Ciencias</SelectItem>
                      <SelectItem value="historia">Historia</SelectItem>
                      <SelectItem value="educacion-fisica">Educación Física</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="curso">Curso</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-basico">1° Básico</SelectItem>
                      <SelectItem value="2-basico">2° Básico</SelectItem>
                      <SelectItem value="3-basico">3° Básico</SelectItem>
                      <SelectItem value="4-basico">4° Básico</SelectItem>
                      <SelectItem value="5-basico">5° Básico</SelectItem>
                      <SelectItem value="6-basico">6° Básico</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="escuela">Escuela</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccionar escuela" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="los-pinos">Escuela Rural Los Pinos</SelectItem>
                    <SelectItem value="valle-verde">Escuela Valle Verde</SelectItem>
                    <SelectItem value="rio-claro">Escuela Río Claro</SelectItem>
                    <SelectItem value="monte-alto">Escuela Monte Alto</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="descripcion">Descripción</Label>
                <Textarea id="descripcion" placeholder="Describe la actividad y sus objetivos..." />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="fecha-inicio">Fecha de Inicio</Label>
                  <Input id="fecha-inicio" type="date" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="fecha-vencimiento">Fecha de Vencimiento</Label>
                  <Input id="fecha-vencimiento" type="date" />
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" onClick={() => setIsDialogOpen(false)}>
                Crear Actividad
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1 max-w-sm">
          <Scan className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Buscar actividades..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-8"
          />
        </div>
        <Select value={selectedStatus} onValueChange={setSelectedStatus}>
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="Estado" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos los estados</SelectItem>
            <SelectItem value="activa">Activa</SelectItem>
            <SelectItem value="completada">Completada</SelectItem>
            <SelectItem value="pendiente">Pendiente</SelectItem>
            <SelectItem value="vencida">Vencida</SelectItem>
          </SelectContent>
        </Select>
        <Select value={selectedSubject} onValueChange={setSelectedSubject}>
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="Materia" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas las materias</SelectItem>
            <SelectItem value="Matemáticas">Matemáticas</SelectItem>
            <SelectItem value="Lenguaje">Lenguaje</SelectItem>
            <SelectItem value="Ciencias">Ciencias</SelectItem>
            <SelectItem value="Historia">Historia</SelectItem>
            <SelectItem value="Arte">Arte</SelectItem>
            <SelectItem value="Educación Física">Educación Física</SelectItem>
          </SelectContent>
        </Select>
        <Select value={selectedSchool} onValueChange={setSelectedSchool}>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Escuela" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas las escuelas</SelectItem>
            <SelectItem value="Escuela Rural Los Pinos">Escuela Rural Los Pinos</SelectItem>
            <SelectItem value="Escuela Valle Verde">Escuela Valle Verde</SelectItem>
            <SelectItem value="Escuela Río Claro">Escuela Río Claro</SelectItem>
            <SelectItem value="Escuela Monte Alto">Escuela Monte Alto</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Activities Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredActividades.map((actividad) => (
          <Card key={actividad.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                    <Book className="w-5 h-5 text-amber-600" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg leading-tight">{actividad.titulo}</CardTitle>
                    <CardDescription className="mt-1">
                      {actividad.materia} - {actividad.curso}
                    </CardDescription>
                  </div>
                </div>
                {getEstadoBadge(actividad.estado)}
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progreso de completación</span>
                  <span className="font-medium">
                    {actividad.completados}/{actividad.participantes}
                  </span>
                </div>
                <CustomProgress value={actividad.progreso} variant="academic" className="h-2" />
                <p className="text-xs text-gray-500">{actividad.progreso}% completado</p>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-500">Escuela</p>
                  <p className="font-medium">{actividad.escuela}</p>
                </div>
                <div>
                  <p className="text-gray-500">Docente</p>
                  <p className="font-medium">{actividad.docente}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <CalendarDays className="w-4 h-4 text-blue-500" />
                  <div>
                    <p className="text-gray-500">Creada</p>
                    <p className="font-medium">{actividad.fechaCreacion}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Timer className="w-4 h-4 text-orange-500" />
                  <div>
                    <p className="text-gray-500">Vence</p>
                    <p className="font-medium">{actividad.fechaVencimiento}</p>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t">
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <View className="w-3 h-3 mr-1" />
                    Ver
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Pencil className="w-3 h-3 mr-1" />
                    Editar
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredActividades.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No se encontraron actividades que coincidan con los filtros</p>
        </div>
      )}
    </div>
  )
}
