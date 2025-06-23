"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Switch } from "../components/ui/switch"
import { Badge } from "../components/ui/badge"
import { Settings, Wifi, Database, User, RefreshCw } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select"
import { Separator } from "../components/ui/separator"
import Usuarios from "./usuarios"

export default function Configuracion() {
  const [autoSync, setAutoSync] = useState(true)
  const [notifications, setNotifications] = useState(true)
  const [offlineMode, setOfflineMode] = useState(false)
  // Agregar estado para mostrar usuarios
  const [showUsers, setShowUsers] = useState(false)

  const configuraciones = {
    sistema: {
      version: "1.2.3",
      ultimaSync: "Hace 2 horas",
      registrosPendientes: 5,
      espacioDisponible: "2.3 GB",
    },
    conectividad: {
      estado: "Conectado",
      velocidad: "12 Mbps",
    },
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold">Configuración</h2>
          <p className="text-gray-600">Administra las configuraciones del sistema</p>
        </div>
        <Button variant="outline" className="flex items-center gap-2">
          <RefreshCw className="w-4 h-4" />
          Sincronizar
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* System Status */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="w-5 h-5" />
              Estado del Sistema
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Versión</p>
                <p className="font-medium">{configuraciones.sistema.version}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Espacio Disponible</p>
                <p className="font-medium">{configuraciones.sistema.espacioDisponible}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Última Sincronización</p>
                <p className="font-medium">{configuraciones.sistema.ultimaSync}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Registros Pendientes</p>
                <div className="flex items-center gap-2">
                  <p className="font-medium">{configuraciones.sistema.registrosPendientes}</p>
                  {configuraciones.sistema.registrosPendientes > 0 && (
                    <Badge variant="secondary" className="text-xs">
                      Pendiente
                    </Badge>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Connectivity */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Wifi className="w-5 h-5" />
              Conectividad
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="font-medium">{configuraciones.conectividad.estado}</span>
              </div>
              <Badge className="bg-green-100 text-green-800">{configuraciones.conectividad.velocidad}</Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="w-5 h-5" />
            Configuraciones
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-base">Sincronización Automática</Label>
                <p className="text-sm text-gray-500">Sincroniza automáticamente cuando hay conexión</p>
              </div>
              <Switch checked={autoSync} onCheckedChange={setAutoSync} />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-base">Notificaciones</Label>
                <p className="text-sm text-gray-500">Recibe alertas sobre asistencia y actividades</p>
              </div>
              <Switch checked={notifications} onCheckedChange={setNotifications} />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-base">Modo Sin Conexión</Label>
                <p className="text-sm text-gray-500">Permite trabajar completamente offline</p>
              </div>
              <Switch checked={offlineMode} onCheckedChange={setOfflineMode} />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* User Profile */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="w-5 h-5" />
            Perfil de Usuario
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="nombre">Nombre Completo</Label>
              <Input id="nombre" defaultValue="María González Pérez" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Correo Electrónico</Label>
              <Input id="email" type="email" defaultValue="maria.gonzalez..educacion.cl" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="escuela">Escuela</Label>
              <Select defaultValue="los-pinos">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="los-pinos">Escuela Rural Los Pinos</SelectItem>
                  <SelectItem value="valle-verde">Escuela Valle Verde</SelectItem>
                  <SelectItem value="rio-claro">Escuela Río Claro</SelectItem>
                  <SelectItem value="monte-alto">Escuela Monte Alto</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="rol">Rol</Label>
              <Select defaultValue="directora">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="directora">Directora</SelectItem>
                  <SelectItem value="docente">Docente</SelectItem>
                  <SelectItem value="coordinador">Coordinador</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex gap-2 pt-4">
            <Button>Guardar Cambios</Button>
            <Button variant="outline">Cambiar Contraseña</Button>
          </div>
        </CardContent>
      </Card>
      {showUsers ? (
        <div>
          <Button variant="outline" onClick={() => setShowUsers(false)} className="mb-4">
            ← Volver a Configuración
          </Button>
          <Usuarios />
        </div>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="w-5 h-5" />
              Gestión de Usuarios
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">Administra usuarios y permisos del sistema</p>
            <Button onClick={() => setShowUsers(true)}>Gestionar Usuarios</Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
