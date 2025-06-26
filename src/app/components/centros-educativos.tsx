"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"

export default function CentrosEducativos() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Gestión de Centros Educativos</CardTitle>
          <CardDescription>Administra los centros educativos del sistema rural</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Contenido de centros educativos aquí…</p>
        </CardContent>
      </Card>
    </div>
  )
}
