"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"

export default function Informes() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Informes y Estadísticas</CardTitle>
          <CardDescription>Genera y revisa informes del sistema educativo</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Contenido de informes aquí…</p>
        </CardContent>
      </Card>
    </div>
  )
}
