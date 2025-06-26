"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"

export default function Profesores() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Gestión de Profesores</CardTitle>
          <CardDescription>Administra los profesores del sistema</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Contenido de profesores aquí...</p>
        </CardContent>
      </Card>
    </div>
  )
}
