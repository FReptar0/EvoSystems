import Head from "next/head";
import { Card, CardBody } from "@heroui/card";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import {
  CodeIcon,
  WebIcon,
  MobileIcon,
  ERPIcon,
  IntegrationIcon,
  AnalyticsIcon,
  DesktopIcon,
  CheckIcon,
  WhatsAppIcon,
} from "@/components/icons";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Servicios - EvoSystems</title>
        <meta
          content="Servicios de desarrollo de software: aplicaciones web, móviles, sistemas ERP, integraciónes y análisis de datos."
          name="description"
        />
      </Head>

      <Navbar />

      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className={`${title({ size: "lg" })} text-white mb-6`}>
            Nuestros{" "}
            <span className={title({ color: "blue", size: "lg" })}>
              Servicios
            </span>
          </h1>
          <p className={`${subtitle()} text-slate-300 max-w-3xl mx-auto mb-8`}>
            Ofrecemos una gama completa de servicios de desarrollo de software 
            para impulsar la transformación digital de tu empresa.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="bg-slate-900/50 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 shadow-xl">
              <CardBody className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-blue-600/20 w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0">
                    <WebIcon className="text-blue-400" size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-white">Desarrollo Web</h3>
                    <p className="text-slate-400">Aplicaciones web modernas y escalables</p>
                  </div>
                </div>
                <p className="text-slate-300 mb-6">
                  Creamos aplicaciones web responsivas, rápidas y seguras utilizando las últimas 
                  tecnologías como React, Next.js, Vue.js y Angular. Desde sitios web corporativos 
                  hasta plataformas complejas de e-commerce.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-3">
                    <CheckIcon className="text-blue-400" size={18} />
                    <span className="text-slate-300">Single Page Applications (SPA)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckIcon className="text-blue-400" size={18} />
                    <span className="text-slate-300">Progressive Web Apps (PWA)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckIcon className="text-blue-400" size={18} />
                    <span className="text-slate-300">E-commerce y tiendas online</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckIcon className="text-blue-400" size={18} />
                    <span className="text-slate-300">APIs REST y GraphQL</span>
                  </li>
                </ul>
                <Button
                  isExternal
                  as={Link}
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                  href={siteConfig.links.whatsappWebDev}
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon size={16} />
                  Cotizar proyecto web
                </Button>
              </CardBody>
            </Card>

            <Card className="bg-slate-900/50 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 shadow-xl">
              <CardBody className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-purple-600/20 w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0">
                    <MobileIcon className="text-purple-400" size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-white">Aplicaciones Móviles</h3>
                    <p className="text-slate-400">Apps nativas y multiplataforma</p>
                  </div>
                </div>
                <p className="text-slate-300 mb-6">
                  Desarrollamos aplicaciones móviles para iOS y Android utilizando React Native, 
                  Flutter y tecnologías nativas. Desde apps empresariales hasta aplicaciones 
                  de consumo masivo.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-3">
                    <CheckIcon className="text-purple-400" size={18} />
                    <span className="text-slate-300">iOS y Android nativo</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckIcon className="text-purple-400" size={18} />
                    <span className="text-slate-300">React Native y Flutter</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckIcon className="text-purple-400" size={18} />
                    <span className="text-slate-300">Publicación en tiendas</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckIcon className="text-purple-400" size={18} />
                    <span className="text-slate-300">Integración con APIs</span>
                  </li>
                </ul>
                <Button
                  isExternal
                  as={Link}
                  className="bg-purple-600 hover:bg-purple-700 text-white"
                  href={siteConfig.links.whatsappMobileApps}
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon size={16} />
                  Cotizar app móvil
                </Button>
              </CardBody>
            </Card>

            <Card className="bg-slate-900/50 border border-slate-700/50 hover:border-emerald-500/50 transition-all duration-300 shadow-xl">
              <CardBody className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-emerald-600/20 w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0">
                    <ERPIcon className="text-emerald-400" size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-white">Sistemas ERP</h3>
                    <p className="text-slate-400">Gestión empresarial integral</p>
                  </div>
                </div>
                <p className="text-slate-300 mb-6">
                  Implementamos y personalizamos sistemas ERP con Odoo para optimizar todos 
                  los procesos de tu empresa. Desde contabilidad hasta inventarios y CRM.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-3">
                    <CheckIcon className="text-emerald-400" size={18} />
                    <span className="text-slate-300">Implementación de Odoo</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckIcon className="text-emerald-400" size={18} />
                    <span className="text-slate-300">Módulos personalizados</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckIcon className="text-emerald-400" size={18} />
                    <span className="text-slate-300">Migración de datos</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckIcon className="text-emerald-400" size={18} />
                    <span className="text-slate-300">Capacitación y soporte</span>
                  </li>
                </ul>
                <Button
                  isExternal
                  as={Link}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white"
                  href={siteConfig.links.whatsappERP}
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon size={16} />
                  Consultar ERP
                </Button>
              </CardBody>
            </Card>

            <Card className="bg-slate-900/50 border border-slate-700/50 hover:border-orange-500/50 transition-all duration-300 shadow-xl">
              <CardBody className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-orange-600/20 w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0">
                    <IntegrationIcon className="text-orange-400" size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-white">Integraciones</h3>
                    <p className="text-slate-400">Conecta todos tus sistemas</p>
                  </div>
                </div>
                <p className="text-slate-300 mb-6">
                  Conectamos y sincronizamos diferentes sistemas y plataformas para automatizar 
                  procesos y eliminar trabajo manual. APIs, webhooks y middleware personalizado.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-3">
                    <CheckIcon className="text-orange-400" size={18} />
                    <span className="text-slate-300">Integración de APIs</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckIcon className="text-orange-400" size={18} />
                    <span className="text-slate-300">Webhooks y eventos</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckIcon className="text-orange-400" size={18} />
                    <span className="text-slate-300">Sincronización de datos</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckIcon className="text-orange-400" size={18} />
                    <span className="text-slate-300">Middleware personalizado</span>
                  </li>
                </ul>
                <Button
                  isExternal
                  as={Link}
                  className="bg-orange-600 hover:bg-orange-700 text-white"
                  href={siteConfig.links.whatsappIntegrations}
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon size={16} />
                  Cotizar integración
                </Button>
              </CardBody>
            </Card>

            <Card className="bg-slate-900/50 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 shadow-xl">
              <CardBody className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-cyan-600/20 w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0">
                    <AnalyticsIcon className="text-cyan-400" size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-white">Análisis de Datos</h3>
                    <p className="text-slate-400">Business Intelligence y reportes</p>
                  </div>
                </div>
                <p className="text-slate-300 mb-6">
                  Transformamos tus datos en información valiosa con dashboards interactivos, 
                  reportes automatizados y análisis predictivo usando Power BI, Tableau y Python.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-3">
                    <CheckIcon className="text-cyan-400" size={18} />
                    <span className="text-slate-300">Dashboards en Power BI</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckIcon className="text-cyan-400" size={18} />
                    <span className="text-slate-300">Visualizaciones en Tableau</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckIcon className="text-cyan-400" size={18} />
                    <span className="text-slate-300">Análisis con Python/R</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckIcon className="text-cyan-400" size={18} />
                    <span className="text-slate-300">Reportes automatizados</span>
                  </li>
                </ul>
                <Button
                  isExternal
                  as={Link}
                  className="bg-cyan-600 hover:bg-cyan-700 text-white"
                  href={siteConfig.links.whatsappDataAnalysis}
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon size={16} />
                  Consultar análisis
                </Button>
              </CardBody>
            </Card>

            <Card className="bg-slate-900/50 border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300 shadow-xl">
              <CardBody className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-indigo-600/20 w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0">
                    <DesktopIcon className="text-indigo-400" size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-white">Apps de Escritorio</h3>
                    <p className="text-slate-400">Software multiplataforma</p>
                  </div>
                </div>
                <p className="text-slate-300 mb-6">
                  Desarrollamos aplicaciones de escritorio para Windows, Mac y Linux usando 
                  Electron, Tauri y tecnologías nativas para máximo rendimiento.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-3">
                    <CheckIcon className="text-indigo-400" size={18} />
                    <span className="text-slate-300">Electron y Tauri</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckIcon className="text-indigo-400" size={18} />
                    <span className="text-slate-300">Windows, Mac y Linux</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckIcon className="text-indigo-400" size={18} />
                    <span className="text-slate-300">Instaladores automáticos</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckIcon className="text-indigo-400" size={18} />
                    <span className="text-slate-300">Auto-actualizaciones</span>
                  </li>
                </ul>
                <Button
                  isExternal
                  as={Link}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white"
                  href={siteConfig.links.whatsapp}
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon size={16} />
                  Cotizar desktop app
                </Button>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className={`${title({ size: "md" })} text-white mb-6`}>
            ¿Necesitas una solución personalizada?
          </h2>
          <p className="text-blue-50 text-lg mb-8">
            Contáctanos para una consulta gratuita y definamos juntos la mejor 
            estrategia tecnológica para tu empresa.
          </p>
          <Button
            isExternal
            as={Link}
            className="bg-white text-blue-700 hover:bg-blue-50 font-semibold px-8 py-3 shadow-lg"
            href={siteConfig.links.whatsapp}
            rel="noopener noreferrer"
            size="lg"
          >
            <WhatsAppIcon size={20} />
            Consulta gratuita
          </Button>
        </div>
      </section>

      <Footer />
    </>
  );
}