"use client"

import { useState } from "react"
import { Card, CardContent } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Badge } from "../components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"
import { PlusCircle, Scan, User, Shield, Key, Pencil, View, X } from "lucide-react"
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

export default function Usuarios() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedRole, setSelectedRole] = useState("all")
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const usuarios = [
    {
      id: 1,
      nombre: "María González Pérez",
      email: "maria.gonzalez@educacion.cl",
      rol: "Administrador",
      escuela: "Escuela Rural Los Pinos",
      estado: "Activo",
      ultimoAcceso: "Hace 2 horas",
      fechaCreacion: "2020-03-15",
    },
    {
      id: 2,
      nombre: "Carlos Mendoza Silva",
      email: "carlos.mendoza@educacion.cl",
      rol: "Docente",
      escuela: "Escuela Valle Verde",
      estado: "Activo",
      ultimoAcceso: "Hace 1 día",
      fechaCreacion: "2019-08-10",
    },
    {
      id: 3,
      nombre: "Ana Rodríguez López",
      email: "ana.rodriguez@educacion.cl",
      rol: "Docente",
      escuela: "Escuela Río Claro",
      estado: "Activo",
      ultimoAcceso: "Hace 3 horas",
      fechaCreacion: "2021-01-20",
    },
    {
      id: 4,
      nombre: "Roberto Sánchez Mora",
      email: "roberto.sanchez@educacion.cl",
      rol: "Docente",
      escuela: "Escuela Monte Alto",
      estado: "Activo",
      ultimoAcceso: "Hace 5 horas",
      fechaCreacion: "2018-05-12",
    },
    {
      id: 5,
      nombre: "Luis Morales Castro",
      email: "luis.morales@educacion.cl",
      rol: "Docente",
      escuela: "Escuela Valle Verde",
      estado: "Inactivo",
      ultimoAcceso: "Hace 2 semanas",
      fechaCreacion: "2022-02-28",
    },
    {
      id: 6,
      nombre: "Carmen Silva Torres",
      email: "carmen.silva@mineduc.cl",
      rol: "Funcionario Ministerio",
      escuela: "Ministerio de Educación",
      estado: "Activo",
      ultimoAcceso: "Hace 1 hora",
      fechaCreacion: "2019-11-05",
    },
  ]

  const filteredUsuarios = usuarios.filter((usuario) => {
    const matchesSearch =
      usuario.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      usuario.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesRole = selectedRole === "all" || usuario.rol === selectedRole

    return matchesSearch && matchesRole
  })

  const getEstadoBadge = (estado: string) => {
    return estado === "Activo" ? (
      <Badge className="bg-amber-500 text-white">Activo</Badge>
    ) : (
      <Badge variant="secondary">Inactivo</Badge>
    )
  }

  const getRolBadge = (rol: string) => {
    switch (rol) {
      case "Administrador":
        return <Badge className="bg-red-500 text-white">Administrador</Badge>
      case "Funcionario Ministerio":
        return <Badge className="bg-navy-500 text-white">Ministerio</Badge>
      default:
        return <Badge variant="outline">{rol}</Badge>
    }
  }

  const getRolIcon = (rol: string) => {
    switch (rol) {
      case "Administrador":
        return <Shield className="w-4 h-4 text-red-500" />
      case "Funcionario Ministerio":
        return <Key className="w-4 h-4 text-navy-500" />
      default:
        return <User className="w-4 h-4 text-gray-500" />
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold">Gestión de Usuarios</h2>
          <p className="text-gray-600">Administra los usuarios y permisos del sistema</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="flex items-center gap-2">
              <PlusCircle className="w-4 h-4" />
              Nuevo Usuario
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Crear Nuevo Usuario</DialogTitle>
              <DialogDescription>Ingresa los datos del nuevo usuario del sistema</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="nombre">Nombre Completo</Label>
                <Input id="nombre" placeholder="Nombre y apellidos" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="usuario@educacion.cl" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="rol">Rol</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="administrador">Administrador</SelectItem>
                      <SelectItem value="docente">Docente</SelectItem>
                      <SelectItem value="funcionario">Funcionario Ministerio</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">Contraseña Temporal</Label>
                  <Input id="password" type="password" placeholder="••••••••" />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="escuela">Escuela (opcional)</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccionar escuela" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="los-pinos">Escuela Rural Los Pinos</SelectItem>
                    <SelectItem value="valle-verde">Escuela Valle Verde</SelectItem>
                    <SelectItem value="rio-claro">Escuela Río Claro</SelectItem>
                    <SelectItem value="monte-alto">Escuela Monte Alto</SelectItem>
                    <SelectItem value="ministerio">Ministerio de Educación</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" onClick={() => setIsDialogOpen(false)}>
                Crear Usuario
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
            placeholder="Buscar usuarios..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-8"
          />
        </div>
        <Select value={selectedRole} onValueChange={setSelectedRole}>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Todos los roles" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos los roles</SelectItem>
            <SelectItem value="Administrador">Administrador</SelectItem>
            <SelectItem value="Docente">Docente</SelectItem>
            <SelectItem value="Funcionario Ministerio">Funcionario Ministerio</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Usuarios List */}
      <div className="space-y-4">
        {filteredUsuarios.map((usuario) => (
          <Card key={usuario.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6 flex-1">
                  <div className="flex items-center gap-4">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={`/placeholder.svg?height=48&width=48`} />
                      <AvatarFallback className="bg-navy-100 text-navy-600 font-bold">
                        {usuario.nombre
                          .split(" ")
                          .map((n) => n[0])
                          .join("")
                          .slice(0, 2)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-lg">{usuario.nombre}</h3>
                      <p className="text-sm text-gray-500">{usuario.email}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-6 flex-1">
                    <div>
                      <p className="text-xs text-gray-500">Rol</p>
                      <div className="flex items-center gap-2 mt-1">
                        {getRolIcon(usuario.rol)}
                        <p className="font-medium">{usuario.rol}</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Escuela/Institución</p>
                      <p className="font-medium text-sm">{usuario.escuela}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Último Acceso</p>
                      <p className="font-medium text-sm">{usuario.ultimoAcceso}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex flex-col gap-1">
                      {getEstadoBadge(usuario.estado)}
                      {getRolBadge(usuario.rol)}
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <View className="w-3 h-3 mr-1" />
                        Ver
                      </Button>
                      <Button variant="outline" size="sm">
                        <Pencil className="w-3 h-3 mr-1" />
                        Editar
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-red-300 text-red-700 hover:bg-red-50"
                        onClick={() => {
                          if (confirm(`¿Deshabilitar usuario ${usuario.nombre}?`)) {
                            alert(`Usuario ${usuario.nombre} ha sido deshabilitado`)
                          }
                        }}
                      >
                        <X className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t text-sm text-gray-500">
                <span>Usuario creado el {usuario.fechaCreacion}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredUsuarios.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No se encontraron usuarios que coincidan con la búsqueda</p>
        </div>
      )}
    </div>
  )
}
