"use client";
import { motion } from "framer-motion";
import {
  Coffee,
  Utensils,
  MapPin,
  Clock,
  UtensilsCrossed,
  PhoneCall,
} from "lucide-react";
import { Button, Card, CardContent } from "@mui/material";
import Image from "next/image";
import ThemeToggle from "./components/home/ThemeToggle";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="Almar Restaurante"
              width={120}
              height={80}
              className="h-16 w-auto"
            />
          </div>

          <nav className="hidden md:flex gap-6 text-teal-700 font-medium">
            <a href="#inicio" className="hover:text-teal-900 transition">
              Inicio
            </a>
            <a href="#servicios" className="hover:text-teal-900 transition">
              Servicios
            </a>
            <a href="#horarios" className="hover:text-teal-900 transition">
              Horarios
            </a>
            <a href="#contacto" className="hover:text-teal-900 transition">
              Contacto
            </a>
            <ThemeToggle />
          </nav>
          <div className="md:hidden">
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="inicio" className="relative py-20 px-4 text-center">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-6 p-4 bg-white rounded-full shadow-lg"
          >
            <Utensils className="w-12 h-12 text-teal-600" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-teal-900 mb-6 text-balance"
          >
            Restaurante Almar
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-teal-700 mb-8 max-w-2xl mx-auto text-balance"
          >
            Sabores caseros que te acompañan cada día. Desayunos y almuerzos con
            el toque especial de Bogotá.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-4 text-lg rounded-xl shadow-lg">
              Ver menú del día
            </button>
          </motion.div>
        </div>
      </section>

      {/* Sobre Nosotros */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-1 w-12 bg-teal-600 rounded" />
            <h2 className="text-3xl md:text-4xl font-bold text-teal-900">
              Sobre Nosotros
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-lg text-gray-700 leading-relaxed"
          >
            En <strong className="text-teal-700">Almar</strong> creemos que cada
            comida debe ser memorable. Trabajamos con ingredientes frescos y un
            equipo dedicado a ofrecer desayunos y almuerzos llenos de sabor.
          </motion.p>
        </div>
      </section>

      {/* Servicios */}
      <section className="py-20 px-4 bg-teal-50/30">
        <div className="container mx-auto max-w-6xl text-center mb-12">
          <h2 className="text-3xl font-bold text-teal-900">
            Nuestros Servicios
          </h2>
          <p className="text-gray-600 mt-2">
            Lo mejor de la cocina colombiana para ti
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Servicio: Desayunos */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Card className="h-full border-2 border-teal-100 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8 h-full flex flex-col items-center justify-between text-center">
                <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center mb-6">
                  <Coffee className="w-8 h-8 text-teal-700" />
                </div>

                <h3 className="text-xl font-semibold text-teal-900 mb-2">
                  Desayunos
                </h3>
                <p className="text-gray-600 text-sm">
                  Opciones típicas colombianas para empezar el día con energía.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Servicio: Almuerzos */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <Card className="h-full border-2 border-teal-100 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8 h-full flex flex-col items-center justify-between text-center">
                <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center mb-6">
                  <UtensilsCrossed className="w-8 h-8 text-teal-700" />
                </div>

                <h3 className="text-xl font-semibold text-teal-900 mb-2">
                  Almuerzos del Día
                </h3>
                <p className="text-gray-600 text-sm">
                  Menú variado, balanceado y fresco todos los días.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Servicio: Domicilios */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1 }}
          >
            <Card className="h-full border-2 border-teal-100 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8 h-full flex flex-col items-center justify-between text-center">
                <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center mb-6">
                  <PhoneCall className="w-8 h-8 text-teal-700" />
                </div>

                <h3 className="text-xl font-semibold text-teal-900 mb-2">
                  Pedidos y Domicilios
                </h3>
                <p className="text-gray-600 text-sm">
                  Pide para recoger o recibir en tu ubicación.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Horarios y Ubicación */}
      <section id="horarios" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Horarios */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="h-full"
            >
              <div className="flex items-center gap-3 mb-6">
                <Clock className="w-8 h-8 text-teal-600" />
                <h2 className="text-3xl font-bold text-teal-900">Horarios</h2>
              </div>

              <Card className="border-2 border-teal-100 h-full">
                <CardContent className="p-6 flex flex-col justify-between h-full">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-teal-100">
                      <span className="font-semibold text-teal-900">
                        Lunes a Sábado
                      </span>
                      <span className="text-teal-700 font-medium">
                        7:00 AM - 4:00 PM
                      </span>
                    </div>

                    <div className="flex justify-between items-center py-3">
                      <span className="font-semibold text-teal-900">
                        Domingos y Festivos
                      </span>
                      <span className="text-red-600 font-medium">Cerrado</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Ubicación */}
            <motion.div
              id="contacto"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="h-full"
            >
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="w-8 h-8 text-teal-600" />
                <h2 className="text-3xl font-bold text-teal-900">Ubicación</h2>
              </div>

              <Card className="border-2 border-teal-100 h-full">
                <CardContent className="p-6 flex flex-col justify-between h-full">
                  <div>
                    <p className="text-lg text-gray-700 mb-4">
                      Bogotá, Colombia
                    </p>
                    <p className="text-sm text-gray-500">
                      (Dirección completa próximamente)
                    </p>
                  </div>

                  <Button
                    variant="outlined"
                    className="mt-6 w-full border-teal-600 text-teal-600 hover:bg-teal-50 bg-transparent"
                  >
                    <MapPin className="w-4 h-4 mr-2" />
                    Ver en el mapa
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-teal-900 text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <Image
            src="/images/logo.png"
            alt="Almar Restaurante"
            width={150}
            height={100}
            className="h-20 w-auto mx-auto mb-6 brightness-0 invert"
          />
          <p className="text-teal-100 mb-2">
            © 2025 Restaurante Almar. Todos los derechos reservados.
          </p>
          <p className="text-teal-300 text-sm">
            Sabores caseros que alimentan el alma 🍴
          </p>
        </div>
      </footer>
    </main>
  );
}
