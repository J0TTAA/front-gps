"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Badge } from "../components/ui/badge"
import { Calendar } from "../components/ui/calendar"
import { UserCheck, Check, X, Save, ArrowUp, ArrowDown, GraduationCap } from "lucide-react"
import { format } from "date-fns"
import { es } from "date-fns/locale"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Area,
  AreaChart,
  LineChart,
  Line,
} from "recharts"
import AsistenciaColegio from "./asistencia-colegio"

interface AsistenciaProps {
  selectedSchool?: string | null
}

export default function Asistencia({ selectedSchool }: AsistenciaProps) {
  const [date, setDate] = useState<Date>(new Date())

  // Si hay un colegio seleccionado, mostrar la vista específica
  if (selectedSchool) {
    return <AsistenciaColegio schoolId={selectedSchool} onBack={() => {}} />
  }

  // Datos generales de todos los colegios
  const resumenGeneral = {
    totalEstudiantes: 176,
    presentes: 158,
    ausentes: 18,
    tardanzas: 0,
    porcentajeAsistencia: 90,
    totalColegios: 4,
  }

  const asistenciaPorColegio = [
    { colegio: "Los Pinos", estudiantes: 45, presentes: 42, ausentes: 3, porcentaje: 93 },
    { colegio: "Valle Verde", estudiantes: 38, presentes: 34, ausentes: 4, porcentaje: 89 },
    { colegio: "Río Claro", estudiantes: 52, presentes: 45, ausentes: 7, porcentaje: 87 },
    { colegio: "Monte Alto", estudiantes: 41, presentes: 37, ausentes: 4, porcentaje: 90 },
  ]

  const tendenciaSemanal = [
    { dia: "Lun", porcentaje: 92, total: 162 },
    { dia: "Mar", porcentaje: 89, total: 157 },
    { dia: "Mié", porcentaje: 91, total: 160 },
    { dia: "Jue", porcentaje: 88, total: 155 },
    { dia: "Vie", porcentaje: 90, total: 158 },
  ]

  const distribucionGeneral = [
    { name: "Presentes", value: 158, color: "#f59e0b" },
    { name: "Ausentes", value: 18, color: "#ef4444" },
  ]

  const comparativoMensual = [
    { mes: "Ene", porcentaje: 88 },
    { mes: "Feb", porcentaje: 91 },
    { mes: "Mar", porcentaje: 89 },
    { mes: "Abr", porcentaje: 90 },
  ]

  // Datos para el calendario
  const diasAsistencia: { [key: string]: { porcentaje: number; tipo: string } } = {
    "2024-01-15": { porcentaje: 95, tipo: "excelente" },
    "2024-01-16": { porcentaje: 87, tipo: "bueno" },
    "2024-01-17": { porcentaje: 92, tipo: "excelente" },
    "2024-01-18": { porcentaje: 78, tipo: "bajo" },
    "2024-01-19": { porcentaje: 83, tipo: "regular" },
    "2024-01-22": { porcentaje: 91, tipo: "excelente" },
    "2024-01-23": { porcentaje: 75, tipo: "bajo" },
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold">Asistencia General del Sistema</h2>
          <p className="text-gray-600">Estadísticas consolidadas de todos los establecimientos</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="flex items-center gap-2">
            <Save className="w-4 h-4" />
            Exportar Reporte
          </Button>
          <Button className="flex items-center gap-2">
            <UserCheck className="w-4 h-4" />
            Ver Detalle por Colegio
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Estudiantes</p>
                <p className="text-2xl font-bold">{resumenGeneral.totalEstudiantes}</p>
              </div>
              <UserCheck className="w-8 h-8 text-navy-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Presentes Hoy</p>
                <p className="text-2xl font-bold text-green-600">{resumenGeneral.presentes}</p>
              </div>
              <Check className="w-8 h-8 text-amber-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Ausentes Hoy</p>
                <p className="text-2xl font-bold text-red-600">{resumenGeneral.ausentes}</p>
              </div>
              <X className="w-8 h-8 text-red-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Asistencia Promedio</p>
                <p className="text-2xl font-bold text-navy-600">{resumenGeneral.porcentajeAsistencia}%</p>
              </div>
              <ArrowUp className="w-8 h-8 text-amber-500" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Colegios Activos</p>
                <p className="text-2xl font-bold text-navy-600">{resumenGeneral.totalColegios}</p>
              </div>
              <GraduationCap className="w-8 h-8 text-navy-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Calendario */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Calendario de Asistencia</CardTitle>
          <CardDescription>
            Asistencia del {format(date, "dd 'de' MMMM, yyyy", { locale: es })} • Los días están marcados según
            asistencia general
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-center">
            <Calendar
              mode="single"
              selected={date}
              onSelect={(newDate) => newDate && setDate(newDate)}
              locale={es}
              className="rounded-md border"
              modifiers={{
                excelente: (date) => {
                  const dateStr = format(date, "yyyy-MM-dd")
                  return diasAsistencia[dateStr]?.tipo === "excelente"
                },
                bueno: (date) => {
                  const dateStr = format(date, "yyyy-MM-dd")
                  return diasAsistencia[dateStr]?.tipo === "bueno"
                },
                regular: (date) => {
                  const dateStr = format(date, "yyyy-MM-dd")
                  return diasAsistencia[dateStr]?.tipo === "regular"
                },
                bajo: (date) => {
                  const dateStr = format(date, "yyyy-MM-dd")
                  return diasAsistencia[dateStr]?.tipo === "bajo"
                },
              }}
              modifiersStyles={{
                excelente: { backgroundColor: "#f59e0b", color: "white", fontWeight: "bold" },
                bueno: { backgroundColor: "#0369a1", color: "white", fontWeight: "bold" },
                regular: { backgroundColor: "#eab308", color: "white", fontWeight: "bold" },
                bajo: { backgroundColor: "#ef4444", color: "white", fontWeight: "bold" },
              }}
            />
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-amber-500 rounded"></div>
              <span>Excelente (≥90%)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-navy-600 rounded"></div>
              <span>Bueno (80-89%)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-yellow-500 rounded"></div>
              <span>Regular (70-79%)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-500 rounded"></div>
              <span>Bajo (&lt;70%)</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Gráficos */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Asistencia por Colegio */}
        <Card>
          <CardHeader>
            <CardTitle>Asistencia por Colegio</CardTitle>
            <CardDescription>Comparativo de asistencia entre establecimientos</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={asistenciaPorColegio}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="colegio" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="presentes" fill="#f59e0b" name="Presentes" />
                <Bar dataKey="ausentes" fill="#ef4444" name="Ausentes" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Distribución General */}
        <Card>
          <CardHeader>
            <CardTitle>Distribución General</CardTitle>
            <CardDescription>Resumen de asistencia del día de hoy</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={distribucionGeneral}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {distribucionGeneral.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Tendencia Semanal */}
        <Card>
          <CardHeader>
            <CardTitle>Tendencia Semanal</CardTitle>
            <CardDescription>Evolución de la asistencia durante la semana</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={tendenciaSemanal}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="dia" />
                <YAxis domain={[80, 100]} />
                <Tooltip />
                <Area type="monotone" dataKey="porcentaje" stroke="#0369a1" fill="#0369a1" fillOpacity={0.3} />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Comparativo Mensual */}
        <Card>
          <CardHeader>
            <CardTitle>Tendencia Mensual</CardTitle>
            <CardDescription>Evolución de la asistencia por mes</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={comparativoMensual}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="mes" />
                <YAxis domain={[80, 100]} />
                <Tooltip />
                <Line type="monotone" dataKey="porcentaje" stroke="#f59e0b" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Resumen por Colegio */}
      <Card>
        <CardHeader>
          <CardTitle>Resumen Detallado por Colegio</CardTitle>
          <CardDescription>Estado actual de cada establecimiento</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {asistenciaPorColegio.map((colegio, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-navy-100 rounded-lg flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-navy-600" />
                  </div>
                  <div>
                    <p className="font-medium">Escuela {colegio.colegio}</p>
                    <p className="text-sm text-gray-500">{colegio.estudiantes} estudiantes</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <p className="text-sm text-gray-500">Presentes</p>
                    <p className="font-bold text-green-600">{colegio.presentes}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-500">Ausentes</p>
                    <p className="font-bold text-red-600">{colegio.ausentes}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge
                      className={`${
                        colegio.porcentaje >= 90
                          ? "bg-amber-500 text-white"
                          : colegio.porcentaje >= 80
                            ? "bg-navy-500 text-white"
                            : "bg-red-500 text-white"
                      }`}
                    >
                      {colegio.porcentaje}%
                    </Badge>
                    {colegio.porcentaje >= 90 ? (
                      <ArrowUp className="w-4 h-4 text-green-500" />
                    ) : (
                      <ArrowDown className="w-4 h-4 text-red-500" />
                    )}
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
