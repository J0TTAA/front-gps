"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Search, Users, BookOpen, GraduationCap, Phone, Mail, MapPin } from "lucide-react"

interface FamiliaPortalSearchProps {
  onStudentFound: (rut: string) => void
}

export default function FamiliaPortalSearch({ onStudentFound }: FamiliaPortalSearchProps) {
  const [rut, setRut] = useState("")
  const [isSearching, setIsSearching] = useState(false)

  const handleSearch = async () => {
    if (!rut.trim()) return

    setIsSearching(true)
    // Simular búsqueda
    setTimeout(() => {
      setIsSearching(false)
      onStudentFound(rut)
    }, 1000)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch()
    }
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto">
          <Users className="w-10 h-10 text-white" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Portal de Familias</h1>
          <p className="text-lg text-gray-600 mt-2">Sistema Educativo Rural - Región de Los Ríos</p>
        </div>
      </div>

      {/* Search Card */}
      <Card className="max-w-md mx-auto">
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center gap-2">
            <Search className="w-5 h-5" />
            Buscar Estudiante
          </CardTitle>
          <CardDescription>Ingrese el RUT del estudiante para acceder a su información académica</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="rut">RUT del Estudiante</Label>
            <Input
              id="rut"
              placeholder="Ej: 12.345.678-9"
              value={rut}
              onChange={(e) => setRut(e.target.value)}
              onKeyPress={handleKeyPress}
              className="text-center text-lg"
            />
            <p className="text-xs text-gray-500 text-center">Ingrese el RUT sin puntos ni guión</p>
          </div>
          <Button onClick={handleSearch} disabled={isSearching || !rut.trim()} className="w-full" size="lg">
            {isSearching ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Buscando...
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Search className="w-4 h-4" />
                Buscar Estudiante
              </div>
            )}
          </Button>
        </CardContent>
      </Card>

      {/* Information Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6 text-center">
            <BookOpen className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">Información Académica</h3>
            <p className="text-gray-600 text-sm">
              Accede a las calificaciones, asistencia y progreso académico de tu hijo/a
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <GraduationCap className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">Actividades Escolares</h3>
            <p className="text-gray-600 text-sm">
              Revisa las tareas, proyectos y actividades asignadas por los profesores
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <Users className="w-12 h-12 text-amber-600 mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">Comunicación</h3>
            <p className="text-gray-600 text-sm">
              Mantente en contacto con los profesores y recibe observaciones importantes
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Contact Information */}
      <Card>
        <CardHeader>
          <CardTitle className="text-center">Información de Contacto</CardTitle>
          <CardDescription className="text-center">
            Si tienes problemas para acceder, contacta directamente con tu escuela
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
              <Phone className="w-5 h-5 text-blue-600" />
              <div>
                <p className="font-medium">Teléfono</p>
                <p className="text-sm text-gray-600">+56 9 8765 4321</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
              <Mail className="w-5 h-5 text-blue-600" />
              <div>
                <p className="font-medium">Email</p>
                <p className="text-sm text-gray-600">contacto@edurural.cl</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
              <MapPin className="w-5 h-5 text-blue-600" />
              <div>
                <p className="font-medium">Dirección</p>
                <p className="text-sm text-gray-600">Región de Los Ríos</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Instructions */}
      <Card className="bg-blue-50 border-blue-200">
        <CardContent className="p-6">
          <h3 className="font-semibold text-blue-900 mb-3">Instrucciones de Uso</h3>
          <ul className="space-y-2 text-sm text-blue-800">
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
              <span>Ingresa el RUT del estudiante tal como aparece en su cédula de identidad</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
              <span>Puedes ingresar el RUT con o sin puntos y guión</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
              <span>Si el estudiante no aparece, verifica que esté matriculado en el sistema</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
              <span>Para problemas técnicos, contacta con el soporte de tu escuela</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
