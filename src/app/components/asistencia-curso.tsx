"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Button } from "../components/ui/button"

import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"
import { Users, CheckCircle, XCircle, Clock, Download, ArrowLeft, Phone, Mail } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts"

interface AsistenciaCursoProps {
  curso: string
  onBack: () => void
}

export default function AsistenciaCurso({ curso, onBack }: AsistenciaCursoProps) {
  const [selectedWeek, setSelectedWeek] = useState("actual")

  // Datos específicos de 1° Básico
  const estudiantesCurso = [
    {
      id: 1,
      nombre: "Joaquín Alonso Herrera",
      rut: "19.012.345-6",
      edad: 6,
      asistenciaHoy: "presente",
      horaLlegada: "08:25",
      asistenciaSemanal: 95,
      telefono: "+56 9 8765 4328",
      email: "joaquin.herrera@estudiante.cl",
      apoderado: "Claudia Herrera",
      observaciones: "",
    },
    {
      id: 2,
      nombre: "Martina Esperanza Flores",
      rut: "22.345.678-9",
      edad: 6,
      asistenciaHoy: "presente",
      horaLlegada: "08:30",
      asistenciaSemanal: 98,
      telefono: "+56 9 8765 4331",
      email: "martina.flores@estudiante.cl",
      apoderado: "Mónica Flores",
      observaciones: "",
    },
    {
      id: 3,
      nombre: "Sebastián Ignacio Castro",
      rut: "21.234.567-8",
      edad: 6,
      asistenciaHoy: "tardanza",
      horaLlegada: "09:10",
      asistenciaSemanal: 82,
      telefono: "+56 9 8765 4330",
      email: "sebastian.castro@estudiante.cl",
      apoderado: "Gloria Castro",
      observaciones: "Problemas de transporte rural",
    },
    {
      id: 4,
      nombre: "Isabella Sofía Morales",
      rut: "20.987.654-3",
      edad: 6,
      asistenciaHoy: "presente",
      horaLlegada: "08:20",
      asistenciaSemanal: 92,
      telefono: "+56 9 8765 4335",
      email: "isabella.morales@estudiante.cl",
      apoderado: "Patricia Morales",
      observaciones: "",
    },
    {
      id: 5,
      nombre: "Mateo Andrés Vega",
      rut: "19.876.543-2",
      edad: 6,
      asistenciaHoy: "ausente",
      horaLlegada: "-",
      asistenciaSemanal: 75,
      telefono: "+56 9 8765 4336",
      email: "mateo.vega@estudiante.cl",
      apoderado: "Fernando Vega",
      observaciones: "Enfermedad - Certificado médico",
    },
    {
      id: 6,
      nombre: "Emilia Constanza Torres",
      rut: "18.765.432-1",
      edad: 6,
      asistenciaHoy: "presente",
      horaLlegada: "08:35",
      asistenciaSemanal: 89,
      telefono: "+56 9 8765 4337",
      email: "emilia.torres@estudiante.cl",
      apoderado: "Ana Torres",
      observaciones: "",
    },
  ]

  const estadisticasCurso = {
    totalEstudiantes: 15,
    presentesHoy: 12,
    ausentesHoy: 2,
    tardanzasHoy: 1,
    promedioSemanal: 89,
  }

  const asistenciaSemanal = [
    { dia: "Lun", presentes: 14, ausentes: 1, porcentaje: 93 },
    { dia: "Mar", presentes: 13, ausentes: 2, porcentaje: 87 },
    { dia: "Mié", presentes: 15, ausentes: 0, porcentaje: 100 },
    { dia: "Jue", presentes: 12, ausentes: 3, porcentaje: 80 },
    { dia: "Vie", presentes: 12, ausentes: 3, porcentaje: 80 },
  ]

  const asistenciaMensual = [
    { semana: "Sem 1", porcentaje: 92 },
    { semana: "Sem 2", porcentaje: 89 },
    { semana: "Sem 3", porcentaje: 85 },
    { semana: "Sem 4", porcentaje: 91 },
  ]


  const getAsistenciaColor = (porcentaje: number) => {
    if (porcentaje >= 90) return "text-green-600"
    if (porcentaje >= 80) return "text-yellow-600"
    return "text-red-600"
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center gap-4">
          <Button variant="outline" onClick={onBack} className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Volver
          </Button>
          <div>
            <h2 className="text-2xl font-bold">Asistencia - {curso}</h2>
            <p className="text-gray-600">Escuela Rural Los Pinos • {estadisticasCurso.totalEstudiantes} estudiantes</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Select value={selectedWeek} onValueChange={setSelectedWeek}>
            <SelectTrigger className="w-[150px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="actual">Semana Actual</SelectItem>
              <SelectItem value="anterior">Semana Anterior</SelectItem>
              <SelectItem value="mes">Mes Completo</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="w-4 h-4" />
            Exportar
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Estudiantes</p>
                <p className="text-2xl font-bold">{estadisticasCurso.totalEstudiantes}</p>
              </div>
              <Users className="w-8 h-8 text-navy-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Presentes Hoy</p>
                <p className="text-2xl font-bold text-green-600">{estadisticasCurso.presentesHoy}</p>
              </div>
              <CheckCircle className="w-8 h-8 text-amber-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Ausentes Hoy</p>
                <p className="text-2xl font-bold text-red-600">{estadisticasCurso.ausentesHoy}</p>
              </div>
              <XCircle className="w-8 h-8 text-red-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Promedio Semanal</p>
                <p className={`text-2xl font-bold ${getAsistenciaColor(estadisticasCurso.promedioSemanal)}`}>
                  {estadisticasCurso.promedioSemanal}%
                </p>
              </div>
              <Clock className="w-8 h-8 text-navy-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Gráficos */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Asistencia Semanal</CardTitle>
            <CardDescription>Tendencia de asistencia día a día</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={asistenciaSemanal}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="dia" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="presentes" fill="#f59e0b" name="Presentes" />
                <Bar dataKey="ausentes" fill="#ef4444" name="Ausentes" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tendencia Mensual</CardTitle>
            <CardDescription>Porcentaje de asistencia por semana</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={asistenciaMensual}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="semana" />
                <YAxis domain={[70, 100]} />
                <Tooltip />
                <Line type="monotone" dataKey="porcentaje" stroke="#0369a1" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Lista de Estudiantes */}
      <Card>
        <CardHeader>
          <CardTitle>Lista de Estudiantes - Hoy</CardTitle>
          <CardDescription>Estado de asistencia individual</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {estudiantesCurso.map((estudiante) => (
              <div
                key={estudiante.id}
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
              >
                <div className="flex items-center gap-4 flex-1">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src={`/placeholder.svg?height=40&width=40`} />
                    <AvatarFallback className="bg-navy-100 text-navy-600 text-sm font-bold">
                      {estudiante.nombre
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .slice(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-4">
                      <div>
                        <p className="font-medium">{estudiante.nombre}</p>
                        <p className="text-sm text-gray-500">
                          {estudiante.rut} • {estudiante.edad} años
                        </p>
                      </div>
                    </div>
                    <div className="mt-2 grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Phone className="w-3 h-3 text-gray-400" />
                        <span className="text-gray-600">{estudiante.telefono}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="w-3 h-3 text-gray-400" />
                        <span className="text-gray-600">{estudiante.apoderado}</span>
                      </div>
                    </div>
                    {estudiante.observaciones && (
                      <p className="text-sm text-gray-600 mt-2 italic">{estudiante.observaciones}</p>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <p className="text-sm text-gray-500">Asistencia Semanal</p>
                    <p className={`font-bold ${getAsistenciaColor(estudiante.asistenciaSemanal)}`}>
                      {estudiante.asistenciaSemanal}%
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-500">Hora Llegada</p>
                    <p className="font-medium">{estudiante.horaLlegada}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant={estudiante.asistenciaHoy === "presente" ? "default" : "outline"}
                      className={estudiante.asistenciaHoy === "presente" ? "bg-amber-500 hover:bg-amber-600" : ""}
                      onClick={() => alert(`${estudiante.nombre} marcado como presente`)}
                    >
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Presente
                    </Button>
                    <Button
                      size="sm"
                      variant={estudiante.asistenciaHoy === "ausente" ? "destructive" : "outline"}
                      onClick={() => alert(`${estudiante.nombre} marcado como ausente`)}
                    >
                      <XCircle className="w-3 h-3 mr-1" />
                      Ausente
                    </Button>
                    <Button
                      size="sm"
                      variant={estudiante.asistenciaHoy === "tardanza" ? "default" : "outline"}
                      className={estudiante.asistenciaHoy === "tardanza" ? "bg-navy-500 hover:bg-navy-600" : ""}
                      onClick={() => alert(`${estudiante.nombre} marcado con tardanza`)}
                    >
                      <Clock className="w-3 h-3 mr-1" />
                      Tardanza
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
