"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Badge } from "../components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"
import { PlusCircle, Scan, User, PhoneCall, MessageCircle, Pencil, View, X, Book } from "lucide-react"
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

export default function Docentes() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedSchool, setSelectedSchool] = useState("all")
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const docentes = [
    {
      id: 1,
      nombre: "María González Pérez",
      rut: "12.345.678-9",
      especialidad: "Educación Básica",
      escuela: "Escuela Rural Los Pinos",
      telefono: "+56 9 8765 4321",
      email: "maria.gonzalez..educacion.cl",
      cursos: ["1° Básico", "2° Básico"],
      estudiantes: 15,
      estado: "Activo",
      fechaIngreso: "2020-03-15",
      cargo: "Directora",
    },
    {
      id: 2,
      nombre: "Carlos Mendoza Silva",
      rut: "13.456.789-0",
      especialidad: "Matemáticas",
      escuela: "Escuela Valle Verde",
      telefono: "+56 9 8765 4322",
      email: "carlos.mendoza..educacion.cl",
      cursos: ["5° Básico", "6° Básico"],
      estudiantes: 22,
      estado: "Activo",
      fechaIngreso: "2019-08-10",
      cargo: "Docente",
    },
    {
      id: 3,
      nombre: "Ana Rodríguez López",
      rut: "14.567.890-1",
      especialidad: "Lenguaje y Comunicación",
      escuela: "Escuela Río Claro",
      telefono: "+56 9 8765 4323",
      email: "ana.rodriguez..educacion.cl",
      cursos: ["3° Básico", "4° Básico"],
      estudiantes: 18,
      estado: "Activo",
      fechaIngreso: "2021-01-20",
      cargo: "Directora",
    },
    {
      id: 4,
      nombre: "Roberto Sánchez Mora",
      rut: "15.678.901-2",
      especialidad: "Ciencias Naturales",
      escuela: "Escuela Monte Alto",
      telefono: "+56 9 8765 4324",
      email: "roberto.sanchez..educacion.cl",
      cursos: ["5° Básico", "6° Básico"],
      estudiantes: 20,
      estado: "Activo",
      fechaIngreso: "2018-05-12",
      cargo: "Director",
    },
    {
      id: 5,
      nombre: "Luis Morales Castro",
      rut: "16.789.012-3",
      especialidad: "Historia y Geografía",
      escuela: "Escuela Valle Verde",
      telefono: "+56 9 8765 4325",
      email: "luis.morales..educacion.cl",
      cursos: ["4° Básico"],
      estudiantes: 12,
      estado: "Inactivo",
      fechaIngreso: "2022-02-28",
      cargo: "Docente",
    },
  ]

  const filteredDocentes = docentes.filter((docente) => {
    const matchesSearch =
      docente.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      docente.rut.includes(searchTerm) ||
      docente.especialidad.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesSchool = selectedSchool === "all" || docente.escuela === selectedSchool

    return matchesSearch && matchesSchool
  })

  const getEstadoBadge = (estado: string) => {
    return estado === "Activo" ? (
      <Badge className="bg-amber-500 text-white">Activo</Badge>
    ) : (
      <Badge variant="secondary">Inactivo</Badge>
    )
  }

  const getCargoBadge = (cargo: string) => {
    return cargo === "Director" || cargo === "Directora" ? (
      <Badge className="bg-navy-500 text-white">{cargo}</Badge>
    ) : (
      <Badge variant="outline">{cargo}</Badge>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold">Gestión de Docentes</h2>
          <p className="text-gray-600">Administra el cuerpo docente del sistema educativo rural</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="flex items-center gap-2">
              <PlusCircle className="w-4 h-4" />
              Nuevo Docente
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Registrar Nuevo Docente</DialogTitle>
              <DialogDescription>Ingresa los datos del nuevo docente</DialogDescription>
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
                  <Label htmlFor="telefono">Teléfono</Label>
                  <Input id="telefono" placeholder="+56 9..." />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="email..educacion.cl" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="especialidad">Especialidad</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="educacion-basica">Educación Básica</SelectItem>
                      <SelectItem value="matematicas">Matemáticas</SelectItem>
                      <SelectItem value="lenguaje">Lenguaje y Comunicación</SelectItem>
                      <SelectItem value="ciencias">Ciencias Naturales</SelectItem>
                      <SelectItem value="historia">Historia y Geografía</SelectItem>
                      <SelectItem value="educacion-fisica">Educación Física</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="cargo">Cargo</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="docente">Docente</SelectItem>
                      <SelectItem value="director">Director(a)</SelectItem>
                      <SelectItem value="coordinador">Coordinador(a)</SelectItem>
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
            </div>
            <DialogFooter>
              <Button type="submit" onClick={() => setIsDialogOpen(false)}>
                Registrar Docente
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
            placeholder="Buscar docentes..."
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
            <SelectItem value="Escuela Monte Alto">Escuela Monte Alto</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Docentes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDocentes.map((docente) => (
          <Card key={docente.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={`/placeholder.svg?height=48&width=48`} />
                    <AvatarFallback className="bg-navy-100 text-navy-600 font-bold">
                      {docente.nombre
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .slice(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">{docente.nombre}</CardTitle>
                    <CardDescription>{docente.rut}</CardDescription>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  {getEstadoBadge(docente.estado)}
                  {getCargoBadge(docente.cargo)}
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div>
                  <p className="text-sm text-gray-500">Especialidad</p>
                  <p className="font-medium">{docente.especialidad}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Escuela</p>
                  <p className="font-medium text-sm">{docente.escuela}</p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Book className="w-3 h-3 text-gray-400" />
                  <span className="text-sm text-gray-600">Cursos: {docente.cursos.join(", ")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-3 h-3 text-gray-400" />
                  <span className="text-sm text-gray-600">{docente.estudiantes} estudiantes</span>
                </div>
              </div>

              <div className="space-y-1 text-sm">
                <div className="flex items-center gap-2">
                  <PhoneCall className="w-3 h-3 text-gray-400" />
                  <span className="text-gray-600">{docente.telefono}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-3 h-3 text-gray-400" />
                  <span className="text-gray-600">{docente.email}</span>
                </div>
              </div>

              <div className="pt-2 border-t">
                <p className="text-xs text-gray-500 mb-3">Ingreso: {docente.fechaIngreso}</p>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <View className="w-3 h-3 mr-1" />
                    Ver
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Pencil className="w-3 h-3 mr-1" />
                    Editar
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-red-300 text-red-700 hover:bg-red-50"
                    onClick={() => {
                      if (confirm(`¿Deshabilitar a ${docente.nombre}?`)) {
                        alert(`${docente.nombre} ha sido deshabilitado`)
                      }
                    }}
                  >
                    <X className="w-3 h-3" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredDocentes.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No se encontraron docentes que coincidan con la búsqueda</p>
        </div>
      )}
    </div>
  )
}
