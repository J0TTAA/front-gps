"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"

export default function TareasEscolares() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Gestión de Tareas Escolares</CardTitle>
          <CardDescription>Administra las tareas y actividades escolares</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Contenido de tareas escolares aquí…</p>
        </CardContent>
      </Card>
    </div>
  )
}
