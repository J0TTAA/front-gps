"use client"

import { useState } from "react"
import { Card, CardContent } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Badge } from "../components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"
import { PlusCircle, Search, User, Phone, Mail, Book, MoreHorizontal } from "lucide-react"
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

export default function DocentesSobrio() {
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
      email: "maria.gonzalez@educacion.cl",
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
      email: "carlos.mendoza@educacion.cl",
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
      email: "ana.rodriguez@educacion.cl",
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
      email: "roberto.sanchez@educacion.cl",
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
      email: "luis.morales@educacion.cl",
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
      <Badge className="bg-amber-500 text-white text-xs">Activo</Badge>
    ) : (
      <Badge variant="secondary" className="text-xs">
        Inactivo
      </Badge>
    )
  }

  const getCargoBadge = (cargo: string) => {
    return cargo === "Director" || cargo === "Directora" ? (
      <Badge className="bg-slate-700 text-white text-xs">{cargo}</Badge>
    ) : (
      <Badge variant="outline" className="text-xs">
        {cargo}
      </Badge>
    )
  }

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="border-b pb-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-light text-gray-900">Docentes</h1>
            <p className="text-gray-500 mt-1">Gestión del cuerpo docente</p>
          </div>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" className="gap-2">
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
                  <Input id="email" type="email" placeholder="email@educacion.cl" />
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
      </div>

      {/* Filters */}
      <div className="flex gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Buscar docentes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 border-gray-200"
          />
        </div>
        <Select value={selectedSchool} onValueChange={setSelectedSchool}>
          <SelectTrigger className="w-64 border-gray-200">
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

      {/* Docentes List */}
      <div className="space-y-3">
        {filteredDocentes.map((docente) => (
          <Card key={docente.id} className="border-gray-200 hover:shadow-sm transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={`/placeholder.svg?height=48&width=48`} />
                    <AvatarFallback className="bg-gray-100 text-gray-600 font-medium">
                      {docente.nombre
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .slice(0, 2)}
                    </AvatarFallback>
                  </Avatar>

                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="font-medium text-gray-900">{docente.nombre}</h3>
                      <span className="text-sm text-gray-500">{docente.rut}</span>
                      {getEstadoBadge(docente.estado)}
                      {getCargoBadge(docente.cargo)}
                    </div>

                    <div className="flex items-center gap-6 text-sm text-gray-600">
                      <span>{docente.especialidad}</span>
                      <span>•</span>
                      <span>{docente.escuela}</span>
                      <span>•</span>
                      <div className="flex items-center gap-1.5">
                        <Book className="w-3 h-3 flex-shrink-0" />
                        <span>{docente.cursos.join(", ")}</span>
                      </div>
                      <span>•</span>
                      <div className="flex items-center gap-1.5">
                        <User className="w-3 h-3 flex-shrink-0" />
                        <span>{docente.estudiantes} estudiantes</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1.5">
                      <Phone className="w-3 h-3 flex-shrink-0" />
                      <span>{docente.telefono}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Mail className="w-3 h-3 flex-shrink-0" />
                      <span>{docente.email}</span>
                    </div>
                    <span className="text-xs">Ingreso: {docente.fechaIngreso}</span>
                  </div>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Ver detalles</DropdownMenuItem>
                      <DropdownMenuItem>Editar</DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">Deshabilitar</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredDocentes.length === 0 && (
        <div className="text-center py-16">
          <p className="text-gray-500">No se encontraron docentes que coincidan con la búsqueda</p>
        </div>
      )}
    </div>
  )
}
