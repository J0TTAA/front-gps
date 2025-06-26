"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { UserCheck, GraduationCap, CalendarDays, TrendingUp, AlertTriangle, Check, Timer } from "lucide-react"

export default function Dashboard() {
  const stats = [
    {
      title: "Estudiantes Activos",
      value: "247",
      change: "+12 este mes",
      icon: UserCheck,
      color: "text-navy-600",
    },
    {
      title: "Escuelas Registradas",
      value: "8",
      change: "Todas activas",
      icon: GraduationCap,
      color: "text-amber-600",
    },
    {
      title: "Asistencia Promedio",
      value: "87%",
      change: "+3% vs mes anterior",
      icon: CalendarDays,
      color: "text-navy-600",
    },
    {
      title: "Actividades Completadas",
      value: "156",
      change: "Esta semana",
      icon: TrendingUp,
      color: "text-amber-600",
    },
  ]

  const recentActivities = [
    {
      school: "Escuela Rural Los Pinos",
      activity: "Registro de asistencia 3° Básico",
      time: "Hace 15 min",
      status: "completed",
    },
    {
      school: "Escuela Valle Verde",
      activity: "Evaluación Matemáticas 5° Básico",
      time: "Hace 1 hora",
      status: "pending",
    },
    {
      school: "Escuela Río Claro",
      activity: "Informe mensual enviado",
      time: "Hace 2 horas",
      status: "completed",
    },
  ]

  const alerts = [
    {
      type: "warning",
      message: "3 estudiantes con asistencia baja en Escuela Los Pinos",
      time: "Hoy",
    },
    {
      type: "info",
      message: "Sincronización pendiente - 5 registros",
      time: "Hace 30 min",
    },
  ]

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <Icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">{stat.change}</p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activities */}
        <Card>
          <CardHeader>
            <CardTitle>Actividad Reciente</CardTitle>
            <CardDescription>Últimas acciones realizadas en el sistema</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    {activity.status === "completed" ? (
                      <Check className="h-4 w-4 text-amber-500" />
                    ) : (
                      <Timer className="h-4 w-4 text-navy-500" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">{activity.activity}</p>
                    <p className="text-sm text-gray-500">{activity.school}</p>
                  </div>
                  <div className="flex-shrink-0 text-sm text-gray-500">{activity.time}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Alerts */}
        <Card>
          <CardHeader>
            <CardTitle>Alertas y Notificaciones</CardTitle>
            <CardDescription>Elementos que requieren atención</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {alerts.map((alert, index) => (
                <div key={index} className="flex items-start space-x-4 p-3 bg-gray-50 rounded-lg">
                  <AlertTriangle
                    className={`h-4 w-4 mt-0.5 ${alert.type === "warning" ? "text-yellow-500" : "text-blue-500"}`}
                  />
                  <div className="flex-1">
                    <p className="text-sm text-gray-900">{alert.message}</p>
                    <p className="text-xs text-gray-500 mt-1">{alert.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Progress Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Progreso por Escuela</CardTitle>
          <CardDescription>Resumen del rendimiento académico por establecimiento</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { name: "Escuela Rural Los Pinos", progress: 85, students: 45 },
              { name: "Escuela Valle Verde", progress: 92, students: 38 },
              { name: "Escuela Río Claro", progress: 78, students: 52 },
              { name: "Escuela Monte Alto", progress: 88, students: 41 },
            ].map((school, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">{school.name}</span>
                  <span className="text-gray-500">{school.students} estudiantes</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="relative w-12 h-12 flex items-center justify-center">
                    <svg className="w-12 h-12 rotate-[-90deg]" viewBox="0 0 36 36">
                      <circle
                        cx="18"
                        cy="18"
                        r="16"
                        fill="none"
                        stroke="#e5e7eb"
                        strokeWidth="4"
                      />
                      <circle
                        cx="18"
                        cy="18"
                        r="16"
                        fill="none"
                        stroke="#f59e0b"
                        strokeWidth="4"
                        strokeDasharray="100, 100"
                        strokeDashoffset="0"
                        strokeLinecap="round"
                        style={{ strokeDasharray: `${school.progress}, 100` }}
                      />
                    </svg>
                    <span className="absolute inset-0 flex items-center justify-center text-sm font-semibold text-amber-700">
                      {school.progress}%
                    </span>
                  </div>
                  <span className="text-sm font-medium w-12">{school.progress}%</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
