"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Badge } from "../components/ui/badge"
import {
  PlusCircle,
  Scan,
  User,
  CalendarDays,
  ArrowUp,
  ArrowDown,
  Minus,
  Grid3X3,
  List,
  PhoneCall,
  MessageCircle,
  Navigation,
} from "lucide-react"
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

export default function Estudiantes() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedSchool, setSelectedSchool] = useState("all")
  const [selectedGrade, setSelectedGrade] = useState("all")
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  const estudiantes = [
    {
      id: 1,
      nombre: "Ana María Contreras",
      rut: "12.345.678-9",
      edad: 8,
      curso: "3° Básico",
      escuela: "Escuela Rural Los Pinos",
      asistencia: 95,
      promedio: 6.8,
      estado: "Regular",
      ultimaActividad: "Hace 1 día",
      telefono: "+56 9 8765 4321",
      email: "ana.contreras@estudiante.cl",
      direccion: "Camino Rural Km 12, Los Pinos",
      apoderado: "Carmen Contreras",
    },
    {
      id: 2,
      nombre: "Carlos Eduardo Pérez",
      rut: "13.456.789-0",
      edad: 10,
      curso: "5° Básico",
      escuela: "Escuela Valle Verde",
      asistencia: 88,
      promedio: 5.9,
      estado: "Atención",
      ultimaActividad: "Hace 3 días",
      telefono: "+56 9 8765 4322",
      email: "carlos.perez@estudiante.cl",
      direccion: "Sector Valle Verde 45",
      apoderado: "Luis Pérez",
    },
    {
      id: 3,
      nombre: "Sofía Alejandra Muñoz",
      rut: "14.567.890-1",
      edad: 9,
      curso: "4° Básico",
      escuela: "Escuela Río Claro",
      asistencia: 92,
      promedio: 7.2,
      estado: "Destacado",
      ultimaActividad: "Hace 2 horas",
      telefono: "+56 9 8765 4323",
      email: "sofia.munoz@estudiante.cl",
      direccion: "Ribera Río Claro 234",
      apoderado: "María Muñoz",
    },
    {
      id: 4,
      nombre: "Diego Andrés Silva",
      rut: "15.678.901-2",
      edad: 7,
      curso: "2° Básico",
      escuela: "Escuela Rural Los Pinos",
      asistencia: 78,
      promedio: 5.5,
      estado: "Atención",
      ultimaActividad: "Hace 1 semana",
      telefono: "+56 9 8765 4324",
      email: "diego.silva@estudiante.cl",
      direccion: "Camino Rural Km 8, Los Pinos",
      apoderado: "Pedro Silva",
    },
    {
      id: 5,
      nombre: "Valentina Isabel Torres",
      rut: "16.789.012-3",
      edad: 11,
      curso: "6° Básico",
      escuela: "Escuela Valle Verde",
      asistencia: 96,
      promedio: 6.9,
      estado: "Destacado",
      ultimaActividad: "Hace 4 horas",
      telefono: "+56 9 8765 4325",
      email: "valentina.torres@estudiante.cl",
      direccion: "Sector Valle Verde 78",
      apoderado: "Ana Torres",
    },
    {
      id: 6,
      nombre: "Matías Benjamín Rojas",
      rut: "17.890.123-4",
      edad: 8,
      curso: "3° Básico",
      escuela: "Escuela Río Claro",
      asistencia: 85,
      promedio: 6.3,
      estado: "Regular",
      ultimaActividad: "Hace 2 días",
      telefono: "+56 9 8765 4326",
      email: "matias.rojas@estudiante.cl",
      direccion: "Ribera Río Claro 156",
      apoderado: "Roberto Rojas",
    },
    {
      id: 7,
      nombre: "Isidora Paz Morales",
      rut: "18.901.234-5",
      edad: 9,
      curso: "4° Básico",
      escuela: "Escuela Rural Los Pinos",
      asistencia: 91,
      promedio: 7.1,
      estado: "Destacado",
      ultimaActividad: "Hace 1 día",
      telefono: "+56 9 8765 4327",
      email: "isidora.morales@estudiante.cl",
      direccion: "Camino Rural Km 20, Los Pinos",
      apoderado: "Patricia Morales",
    },
    {
      id: 8,
      nombre: "Joaquín Alonso Herrera",
      rut: "19.012.345-6",
      edad: 6,
      curso: "1° Básico",
      escuela: "Escuela Valle Verde",
      asistencia: 89,
      promedio: 6.5,
      estado: "Regular",
      ultimaActividad: "Hace 5 horas",
      telefono: "+56 9 8765 4328",
      email: "joaquin.herrera@estudiante.cl",
      direccion: "Sector Valle Verde 123",
      apoderado: "Claudia Herrera",
    },
    {
      id: 9,
      nombre: "Emilia Constanza Vega",
      rut: "20.123.456-7",
      edad: 10,
      curso: "5° Básico",
      escuela: "Escuela Río Claro",
      asistencia: 94,
      promedio: 6.7,
      estado: "Regular",
      ultimaActividad: "Hace 3 horas",
      telefono: "+56 9 8765 4329",
      email: "emilia.vega@estudiante.cl",
      direccion: "Ribera Río Claro 89",
      apoderado: "Fernando Vega",
    },
    {
      id: 10,
      nombre: "Sebastián Ignacio Castro",
      rut: "21.234.567-8",
      edad: 7,
      curso: "2° Básico",
      escuela: "Escuela Rural Los Pinos",
      asistencia: 82,
      promedio: 5.8,
      estado: "Atención",
      ultimaActividad: "Hace 4 días",
      telefono: "+56 9 8765 4330",
      email: "sebastian.castro@estudiante.cl",
      direccion: "Camino Rural Km 5, Los Pinos",
      apoderado: "Gloria Castro",
    },
    {
      id: 11,
      nombre: "Martina Esperanza Flores",
      rut: "22.345.678-9",
      edad: 11,
      curso: "6° Básico",
      escuela: "Escuela Valle Verde",
      asistencia: 97,
      promedio: 7.0,
      estado: "Destacado",
      ultimaActividad: "Hace 1 hora",
      telefono: "+56 9 8765 4331",
      email: "martina.flores@estudiante.cl",
      direccion: "Sector Valle Verde 234",
      apoderado: "Mónica Flores",
    },
    {
      id: 12,
      nombre: "Agustín Tomás Mendoza",
      rut: "23.456.789-0",
      edad: 8,
      curso: "3° Básico",
      escuela: "Escuela Río Claro",
      asistencia: 86,
      promedio: 6.1,
      estado: "Regular",
      ultimaActividad: "Hace 6 horas",
      telefono: "+56 9 8765 4332",
      email: "agustin.mendoza@estudiante.cl",
      direccion: "Ribera Río Claro 345",
      apoderado: "Carlos Mendoza",
    },
  ]

  const filteredEstudiantes = estudiantes.filter((estudiante) => {
    const matchesSearch =
      estudiante.nombre.toLowerCase().includes(searchTerm.toLowerCase()) || estudiante.rut.includes(searchTerm)
    const matchesSchool = selectedSchool === "all" || estudiante.escuela === selectedSchool
    const matchesGrade = selectedGrade === "all" || estudiante.curso === selectedGrade

    return matchesSearch && matchesSchool && matchesGrade
  })

  const getEstadoBadge = (estado: string) => {
    switch (estado) {
      case "Destacado":
        return <Badge className="bg-amber-500 text-white">Destacado</Badge>
      case "Regular":
        return <Badge className="bg-navy-500 text-white">Regular</Badge>
      case "Atención":
        return <Badge variant="destructive">Requiere Atención</Badge>
      default:
        return <Badge variant="secondary">{estado}</Badge>
    }
  }

  const getPromedioIcon = (promedio: number) => {
    if (promedio >= 6.5) return <ArrowUp className="w-4 h-4 text-amber-500" />
    if (promedio >= 5.5) return <Minus className="w-4 h-4 text-navy-500" />
    return <ArrowDown className="w-4 h-4 text-red-500" />
  }

  const renderGridView = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredEstudiantes.map((estudiante) => (
        <Card key={estudiante.id} className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-navy-100 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-navy-600" />
                </div>
                <div>
                  <CardTitle className="text-lg">{estudiante.nombre}</CardTitle>
                  <CardDescription>{estudiante.rut}</CardDescription>
                </div>
              </div>
              {getEstadoBadge(estudiante.estado)}
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-500">Edad</p>
                <p className="font-medium">{estudiante.edad} años</p>
              </div>
              <div>
                <p className="text-gray-500">Curso</p>
                <p className="font-medium">{estudiante.curso}</p>
              </div>
            </div>

            <div>
              <p className="text-gray-500 text-sm">Escuela</p>
              <p className="font-medium text-sm">{estudiante.escuela}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <CalendarDays className="w-4 h-4 text-blue-500" />
                <div>
                  <p className="text-xs text-gray-500">Asistencia</p>
                  <p className="font-medium text-sm">{estudiante.asistencia}%</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {getPromedioIcon(estudiante.promedio)}
                <div>
                  <p className="text-xs text-gray-500">Promedio</p>
                  <p className="font-medium text-sm">{estudiante.promedio}</p>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t">
              <p className="text-xs text-gray-500 mb-3">Última actividad: {estudiante.ultimaActividad}</p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1">
                  Ver Perfil
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  Editar
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-red-300 text-red-700 hover:bg-red-50 flex-1"
                  onClick={() => {
                    if (confirm(`¿Revocar a ${estudiante.nombre} del curso?`)) {
                      alert(`${estudiante.nombre} ha sido revocado del curso`)
                    }
                  }}
                >
                  Revocar
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )

  const renderListView = () => (
    <div className="space-y-4">
      {filteredEstudiantes.map((estudiante) => (
        <Card key={estudiante.id} className="hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6 flex-1">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-navy-100 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-navy-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{estudiante.nombre}</h3>
                    <p className="text-sm text-gray-500">{estudiante.rut}</p>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-6 flex-1">
                  <div>
                    <p className="text-xs text-gray-500">Curso</p>
                    <p className="font-medium">{estudiante.curso}</p>
                    <p className="text-xs text-gray-500">{estudiante.edad} años</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Escuela</p>
                    <p className="font-medium text-sm">{estudiante.escuela}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Asistencia</p>
                    <div className="flex items-center gap-1">
                      <CalendarDays className="w-3 h-3 text-blue-500" />
                      <p className="font-medium">{estudiante.asistencia}%</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Promedio</p>
                    <div className="flex items-center gap-1">
                      {getPromedioIcon(estudiante.promedio)}
                      <p className="font-medium">{estudiante.promedio}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  {getEstadoBadge(estudiante.estado)}
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      Ver Perfil
                    </Button>
                    <Button variant="outline" size="sm">
                      Editar
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-red-300 text-red-700 hover:bg-red-50"
                      onClick={() => {
                        if (confirm(`¿Revocar a ${estudiante.nombre} del curso?`)) {
                          alert(`${estudiante.nombre} ha sido revocado del curso`)
                        }
                      }}
                    >
                      Revocar
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Información adicional expandida */}
            <div className="mt-4 pt-4 border-t grid grid-cols-3 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <PhoneCall className="w-3 h-3 text-gray-400" />
                <span className="text-gray-600">{estudiante.telefono}</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-3 h-3 text-gray-400" />
                <span className="text-gray-600">{estudiante.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Navigation className="w-3 h-3 text-gray-400" />
                <span className="text-gray-600">{estudiante.direccion}</span>
              </div>
            </div>
            <div className="mt-2 text-sm">
              <span className="text-gray-500">Apoderado: </span>
              <span className="font-medium">{estudiante.apoderado}</span>
              <span className="text-gray-400 ml-4">Última actividad: {estudiante.ultimaActividad}</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold">Gestión de Estudiantes</h2>
          <p className="text-gray-600">Administra los estudiantes del sistema educativo rural</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="flex items-center gap-2">
              <PlusCircle className="w-4 h-4" />
              Nuevo Estudiante
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Registrar Nuevo Estudiante</DialogTitle>
              <DialogDescription>Ingresa los datos del nuevo estudiante</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="nombre">Nombre Completo</Label>
                <Input id="nombre" placeholder="Nombre y apellidos" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="rut">RUT</Label>
                  <Input id="rut" placeholder="12.345.678-9" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="edad">Edad</Label>
                  <Input id="edad" type="number" placeholder="8" />
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
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="curso">Curso</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccionar curso" />
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
              <div className="grid gap-2">
                <Label htmlFor="accion">Acción</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccionar acción" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="asignar">Asignar a curso</SelectItem>
                    <SelectItem value="revocar">Revocar del curso</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" onClick={() => setIsDialogOpen(false)}>
                Registrar Estudiante
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Filters and View Toggle */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="flex flex-col sm:flex-row gap-4 flex-1">
          <div className="relative flex-1 max-w-sm">
            <Scan className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar por nombre o RUT..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-8"
            />
          </div>
          <Select value={selectedSchool} onValueChange={setSelectedSchool}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Todas las escuelas" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todas las escuelas</SelectItem>
              <SelectItem value="Escuela Rural Los Pinos">Escuela Rural Los Pinos</SelectItem>
              <SelectItem value="Escuela Valle Verde">Escuela Valle Verde</SelectItem>
              <SelectItem value="Escuela Río Claro">Escuela Río Claro</SelectItem>
            </SelectContent>
          </Select>
          <Select value={selectedGrade} onValueChange={setSelectedGrade}>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Todos los cursos" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos los cursos</SelectItem>
              <SelectItem value="1° Básico">1° Básico</SelectItem>
              <SelectItem value="2° Básico">2° Básico</SelectItem>
              <SelectItem value="3° Básico">3° Básico</SelectItem>
              <SelectItem value="4° Básico">4° Básico</SelectItem>
              <SelectItem value="5° Básico">5° Básico</SelectItem>
              <SelectItem value="6° Básico">6° Básico</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* View Toggle */}
        <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
          <Button
            variant={viewMode === "grid" ? "default" : "ghost"}
            size="sm"
            onClick={() => setViewMode("grid")}
            className={`${viewMode === "grid" ? "bg-navy-600 text-white" : "text-gray-600"}`}
          >
            <Grid3X3 className="w-4 h-4" />
          </Button>
          <Button
            variant={viewMode === "list" ? "default" : "ghost"}
            size="sm"
            onClick={() => setViewMode("list")}
            className={`${viewMode === "list" ? "bg-navy-600 text-white" : "text-gray-600"}`}
          >
            <List className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Students Display */}
      {viewMode === "grid" ? renderGridView() : renderListView()}

      {filteredEstudiantes.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No se encontraron estudiantes que coincidan con los filtros</p>
        </div>
      )}

      {/* Summary */}
      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <p className="text-sm text-gray-600">
          Mostrando <span className="font-medium">{filteredEstudiantes.length}</span> de{" "}
          <span className="font-medium">{estudiantes.length}</span> estudiantes
        </p>
      </div>
    </div>
  )
}
