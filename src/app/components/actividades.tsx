"use client"

import { useState } from "react"
import { Card, CardContent } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { PlusCircle, Search, AlertTriangle, Pencil, View, MoreHorizontal } from "lucide-react"
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
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../components/ui/dropdown-menu"
import { Label } from "../components/ui/label"
import { Textarea } from "../components/ui/textarea"

export default function ActividadesNuevoDiseno() {
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
  ]

  const getEstadoBadge = (estado: string) => {
    switch (estado) {
      case "activa":
        return (
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-900 rounded-sm"></div>
            <span className="text-sm font-medium text-blue-900">Activa</span>
          </div>
        )
      case "completada":
        return (
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
            <span className="text-sm font-medium text-blue-600">Completada</span>
          </div>
        )
      case "pendiente":
        return (
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-300 rounded-sm"></div>
            <span className="text-sm font-medium text-blue-500">Pendiente</span>
          </div>
        )
      case "vencida":
        return (
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-slate-600 rounded-full"></div>
            <span className="text-sm font-medium text-slate-600">Vencida</span>
          </div>
        )
      default:
        return (
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-gray-400 rounded-sm"></div>
            <span className="text-sm font-medium text-gray-600">{estado}</span>
          </div>
        )
    }
  }

  const getEstadoIcon = (estado: string) => {
    switch (estado) {
      case "activa":
        return <div className="w-4 h-4 bg-blue-900 rounded-sm"></div>
      case "completada":
        return <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
      case "pendiente":
        return <div className="w-4 h-4 bg-blue-300 rounded-sm"></div>
      case "vencida":
        return <div className="w-4 h-4 bg-slate-600 rounded-full"></div>
      default:
        return <div className="w-4 h-4 bg-gray-400 rounded-sm"></div>
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
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="border-b pb-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-light text-gray-900">Actividades</h1>
            <p className="text-gray-500 mt-1">Gestión de actividades escolares</p>
          </div>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" className="gap-2">
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
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4">
        <div className="relative flex-1 min-w-64">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Buscar actividades..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 border-gray-200"
          />
        </div>
        <Select value={selectedStatus} onValueChange={setSelectedStatus}>
          <SelectTrigger className="w-40 border-gray-200">
            <SelectValue placeholder="Estado" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos</SelectItem>
            <SelectItem value="activa">Activa</SelectItem>
            <SelectItem value="completada">Completada</SelectItem>
            <SelectItem value="pendiente">Pendiente</SelectItem>
            <SelectItem value="vencida">Vencida</SelectItem>
          </SelectContent>
        </Select>
        <Select value={selectedSubject} onValueChange={setSelectedSubject}>
          <SelectTrigger className="w-40 border-gray-200">
            <SelectValue placeholder="Materia" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas</SelectItem>
            <SelectItem value="Matemáticas">Matemáticas</SelectItem>
            <SelectItem value="Lenguaje">Lenguaje</SelectItem>
            <SelectItem value="Ciencias">Ciencias</SelectItem>
            <SelectItem value="Historia">Historia</SelectItem>
          </SelectContent>
        </Select>
        <Select value={selectedSchool} onValueChange={setSelectedSchool}>
          <SelectTrigger className="w-48 border-gray-200">
            <SelectValue placeholder="Escuela" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas</SelectItem>
            <SelectItem value="Escuela Rural Los Pinos">Los Pinos</SelectItem>
            <SelectItem value="Escuela Valle Verde">Valle Verde</SelectItem>
            <SelectItem value="Escuela Río Claro">Río Claro</SelectItem>
            <SelectItem value="Escuela Monte Alto">Monte Alto</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Activities List */}
      <div className="space-y-4">
        {filteredActividades.map((actividad) => (
          <Card key={actividad.id} className="border-gray-200 hover:shadow-sm transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between gap-6">
                {/* Left Section - Main Info */}
                <div className="flex items-start gap-4 flex-1">
                  <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="w-6 h-6 bg-blue-100 rounded-sm flex items-center justify-center">
                      <div className="w-3 h-3 bg-blue-900 rounded-sm"></div>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-gray-900 text-lg truncate">{actividad.titulo}</h3>
                      {getEstadoBadge(actividad.estado)}
                    </div>

                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                      <div className="flex items-center gap-1.5">
                        <div className="w-3 h-3 bg-blue-700 rounded-sm flex-shrink-0"></div>
                        <span>{actividad.materia}</span>
                      </div>
                      <span>•</span>
                      <div className="flex items-center gap-1.5">
                        <div className="w-3 h-3 bg-blue-500 rounded-full flex-shrink-0"></div>
                        <span>{actividad.curso}</span>
                      </div>
                      <span>•</span>
                      <span>{actividad.escuela}</span>
                      <span>•</span>
                      <span>{actividad.docente}</span>
                    </div>

                    {/* Progress Section - Reemplazar toda esta sección */}
                    <div className="flex items-center gap-3">
                      <div className="relative w-12 h-12">
                        <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 36 36">
                          <path
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="#e5e7eb"
                            strokeWidth="2"
                          />
                          <path
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke={
                              actividad.progreso >= 80 ? "#1e3a8a" : actividad.progreso >= 50 ? "#2563eb" : "#93c5fd"
                            }
                            strokeWidth="2"
                            strokeDasharray={`${actividad.progreso}, 100`}
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-xs font-semibold text-gray-700">{actividad.progreso}%</span>
                        </div>
                      </div>
                      <div className="text-sm">
                        <p className="font-medium text-gray-900">
                          {actividad.completados}/{actividad.participantes}
                        </p>
                        <p className="text-gray-500">estudiantes</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Section - Dates & Actions */}
                <div className="flex items-start gap-6">
                  <div className="text-right space-y-3">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-4 h-4 bg-blue-800 rounded-sm flex-shrink-0"></div>
                      <div>
                        <p className="text-xs text-gray-500">Creada</p>
                        <p className="font-medium">{actividad.fechaCreacion}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      {getEstadoIcon(actividad.estado)}
                      <div>
                        <p className="text-xs text-gray-500">Vence</p>
                        <p className="font-medium">{actividad.fechaVencimiento}</p>
                      </div>
                    </div>
                  </div>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <View className="w-4 h-4 mr-2" />
                        Ver detalles
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Pencil className="w-4 h-4 mr-2" />
                        Editar
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">
                        <AlertTriangle className="w-4 h-4 mr-2" />
                        Eliminar
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredActividades.length === 0 && (
        <div className="text-center py-16">
          <p className="text-gray-500">No se encontraron actividades que coincidan con los filtros</p>
        </div>
      )}
    </div>
  )
}
