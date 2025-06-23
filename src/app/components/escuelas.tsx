"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Badge } from "../components/ui/badge"
import { PlusCircle, Scan, Navigation, UserCheck, PhoneCall, MessageCircle, Pencil, View, X } from "lucide-react"
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

export default function Escuelas() {
  const [searchTerm, setSearchTerm] = useState("")
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const escuelas = [
    {
      id: 1,
      nombre: "Escuela Rural Los Pinos",
      direccion: "Camino Rural Km 15, Los Pinos",
      telefono: "+56 9 8765 4321",
      email: "lospinos@educacion.cl",
      director: "María González Pérez",
      estudiantes: 45,
      docentes: 6,
      estado: "Activa",
      ultimaSync: "Hace 2 horas",
    },
    {
      id: 2,
      nombre: "Escuela Valle Verde",
      direccion: "Sector Valle Verde s/n",
      telefono: "+56 9 8765 4322",
      email: "valleverde@educacion.cl",
      director: "Carlos Mendoza Silva",
      estudiantes: 38,
      docentes: 5,
      estado: "Activa",
      ultimaSync: "Hace 1 hora",
    },
    {
      id: 3,
      nombre: "Escuela Río Claro",
      direccion: "Ribera Río Claro 234",
      telefono: "+56 9 8765 4323",
      email: "rioclaro@educacion.cl",
      director: "Ana Rodríguez López",
      estudiantes: 52,
      docentes: 7,
      estado: "Activa",
      ultimaSync: "Sin conexión",
    },
  ]

  const filteredEscuelas = escuelas.filter(
    (escuela) =>
      escuela.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      escuela.director.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold">Gestión de Escuelas</h2>
          <p className="text-gray-600">Administra las escuelas rurales del sistema</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="flex items-center gap-2 bg-navy-700 hover:bg-navy-600">
              <PlusCircle className="w-4 h-4" />
              Nueva Escuela
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Registrar Nueva Escuela</DialogTitle>
              <DialogDescription>Ingresa los datos de la nueva escuela rural</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="nombre">Nombre de la Escuela</Label>
                <Input id="nombre" placeholder="Ej: Escuela Rural..." />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="director">Director(a)</Label>
                <Input id="director" placeholder="Nombre completo" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="direccion">Dirección</Label>
                <Textarea id="direccion" placeholder="Dirección completa" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="telefono">Teléfono</Label>
                  <Input id="telefono" placeholder="+56 9..." />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="email@educacion.cl" />
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" onClick={() => setIsDialogOpen(false)}>
                Registrar Escuela
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Search */}
      <div className="flex items-center space-x-2">
        <div className="relative flex-1 max-w-sm">
          <Scan className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Buscar escuelas..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-8"
          />
        </div>
      </div>

      {/* Schools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEscuelas.map((escuela) => (
          <Card key={escuela.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">{escuela.nombre}</CardTitle>
                  <CardDescription className="flex items-center gap-1 mt-1">
                    <Navigation className="w-3 h-3" />
                    {escuela.direccion}
                  </CardDescription>
                </div>
                <Badge
                  variant={escuela.estado === "Activa" ? "default" : "secondary"}
                  className={escuela.estado === "Activa" ? "bg-amber-500 text-white" : ""}
                >
                  {escuela.estado}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <p className="text-sm font-medium">Director(a): {escuela.director}</p>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <UserCheck className="w-3 h-3" />
                    {escuela.estudiantes} estudiantes
                  </div>
                  <div className="flex items-center gap-1">
                    <UserCheck className="w-3 h-3" />
                    {escuela.docentes} docentes
                  </div>
                </div>
              </div>

              <div className="space-y-1 text-sm">
                <div className="flex items-center gap-2">
                  <PhoneCall className="w-3 h-3" />
                  {escuela.telefono}
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-3 h-3" />
                  {escuela.email}
                </div>
              </div>

              <div className="pt-2 border-t">
                <p className="text-xs text-gray-500 mb-3">Última sincronización: {escuela.ultimaSync}</p>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1 border-navy-300 text-navy-700 hover:bg-navy-50">
                    <View className="w-3 h-3 mr-1" />
                    Ver
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-amber-300 text-amber-700 hover:bg-amber-50"
                  >
                    <Pencil className="w-3 h-3 mr-1" />
                    Editar
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-red-300 text-red-700 hover:bg-red-50"
                    onClick={() => {
                      if (confirm(`¿Estás seguro de deshabilitar ${escuela.nombre}?`)) {
                        alert(`${escuela.nombre} ha sido deshabilitada`)
                      }
                    }}
                  >
                    <X className="w-3 h-3 mr-1" />
                    Deshabilitar
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredEscuelas.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No se encontraron escuelas que coincidan con la búsqueda</p>
        </div>
      )}
    </div>
  )
}
