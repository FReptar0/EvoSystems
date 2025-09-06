import Head from "next/head";
import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { Link } from "@heroui/link";
import NextLink from "next/link";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import {
  CodeIcon,
  DatabaseIcon,
  MobileIcon,
  WebIcon,
  DesktopIcon,
  IntegrationIcon,
  AnalyticsIcon,
  ERPIcon,
  LinkedInIcon,
  GithubIcon,
  WhatsAppIcon,
  CheckIcon,
  StarIcon,
} from "@/components/icons";
import { WaveBackground } from "@/components/wave-background";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>EvoSystems - Desarrollo de Software Profesional</title>
        <meta
          content="Desarrollo de software profesional: aplicaciones web, móviles, sistemas ERP, integraciónes y soluciones tecnológicas innovadoras."
          name="description"
        />
        <meta
          content="desarrollo web, aplicaciones móviles, ERP, integraciones, software, tecnología"
          name="keywords"
        />
        <meta content="EvoSystems" property="og:site_name" />
        <meta
          content="EvoSystems - Desarrollo de Software Profesional"
          property="og:title"
        />
        <meta
          content="Transformamos ideas en soluciones tecnológicas. Desarrollo web, móvil y sistemas empresariales."
          property="og:description"
        />
      </Head>

      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        {/* Wave Background */}
        <WaveBackground className="absolute inset-0 z-10" variant="hero" />

        <div className="relative z-20 w-full text-center px-6">
          {/* Contenido principal del hero */}
          <div className="mb-8 max-w-4xl mx-auto">
            <h1 className={`${title({ size: "lg" })} text-white mb-6`}>
              Transformamos{" "}
              <span className={title({ color: "blue", size: "lg" })}>
                ideas
              </span>{" "}
              en soluciones tecnológicas
            </h1>
            <p
              className={`${subtitle()} text-slate-300 max-w-3xl mx-auto text-xl mb-8`}
            >
              Desarrollo de{" "}
              <strong className="text-blue-400">
                software profesional, aplicaciones web y móviles
              </strong>{" "}
              con tecnología de vanguardia. Sistemas ERP, integraciones y 
              análisis de datos para impulsar tu negocio.
            </p>

            {/* Chip como elemento de refuerzo después del contenido principal */}
            <Chip
              className="bg-blue-600/80 backdrop-blur-md text-white px-6 py-2 text-base font-medium shadow-lg border border-blue-500/30"
              color="primary"
              size="lg"
              variant="solid"
            >
              💻 Innovación • Calidad • Resultados
            </Chip>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              isExternal
              as={Link}
              className="bg-blue-600/90 backdrop-blur-md hover:bg-blue-700/90 text-white font-semibold px-8 py-3 shadow-lg border border-blue-500/30 transition-all duration-300"
              href={siteConfig.links.whatsapp}
              rel="noopener noreferrer"
              size="lg"
            >
              <WhatsAppIcon size={20} />
              Solicitar cotización
            </Button>
            <Button
              as={NextLink}
              className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white/20 shadow-lg transition-all duration-300"
              href="/services"
              size="lg"
              variant="bordered"
            >
              Ver servicios
            </Button>
          </div>

          <div className="flex justify-center gap-6">
            <Button
              isExternal
              isIconOnly
              as={Link}
              className="bg-blue-100/10 backdrop-blur-md hover:bg-blue-200/20 text-blue-300 shadow-md border border-blue-200/20 transition-all duration-300"
              href={siteConfig.links.linkedin}
              rel="noopener noreferrer"
              variant="flat"
            >
              <LinkedInIcon className="text-blue-300" size={24} />
            </Button>
            <Button
              isExternal
              isIconOnly
              as={Link}
              className="bg-gray-100/10 backdrop-blur-md hover:bg-gray-200/20 text-gray-300 shadow-md border border-gray-200/20 transition-all duration-300"
              href={siteConfig.links.github}
              rel="noopener noreferrer"
              variant="flat"
            >
              <GithubIcon className="text-gray-300" size={24} />
            </Button>
          </div>
        </div>
      </section>

      {/* Servicios Section */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className={`${title({ size: "md" })} mb-4 text-white`}>
              Nuestros{" "}
              <span className={title({ color: "blue", size: "md" })}>
                servicios
              </span>
            </h2>
            <p className={`${subtitle()} text-slate-400`}>
              Soluciones tecnológicas integrales para empresas modernas
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-slate-900/50 border border-slate-700/50 hover:border-blue-500/50 hover:scale-105 transition-all duration-300 shadow-xl">
              <CardBody className="text-center p-8">
                <div className="bg-blue-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <WebIcon className="text-blue-400" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Desarrollo Web</h3>
                <p className="text-slate-300 mb-6">
                  Aplicaciones web modernas, responsivas y escalables con las 
                  últimas tecnologías como React, Next.js y Node.js.
                </p>
                <ul className="text-left space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckIcon className="text-blue-400" size={16} />
                    <span className="text-sm text-slate-300">SPA y PWA</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="text-blue-400" size={16} />
                    <span className="text-sm text-slate-300">E-commerce</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="text-blue-400" size={16} />
                    <span className="text-sm text-slate-300">APIs REST & GraphQL</span>
                  </li>
                </ul>
              </CardBody>
            </Card>

            <Card className="bg-slate-900/50 border border-slate-700/50 hover:border-purple-500/50 hover:scale-105 transition-all duration-300 shadow-xl">
              <CardBody className="text-center p-8">
                <div className="bg-purple-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MobileIcon className="text-purple-400" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Apps Móviles</h3>
                <p className="text-slate-300 mb-6">
                  Aplicaciones nativas y multiplataforma para iOS y Android 
                  con React Native y Flutter.
                </p>
                <ul className="text-left space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckIcon className="text-purple-400" size={16} />
                    <span className="text-sm text-slate-300">iOS & Android</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="text-purple-400" size={16} />
                    <span className="text-sm text-slate-300">React Native</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="text-purple-400" size={16} />
                    <span className="text-sm text-slate-300">Tiendas oficiales</span>
                  </li>
                </ul>
              </CardBody>
            </Card>

            <Card className="bg-slate-900/50 border border-slate-700/50 hover:border-emerald-500/50 hover:scale-105 transition-all duration-300 shadow-xl">
              <CardBody className="text-center p-8">
                <div className="bg-emerald-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ERPIcon className="text-emerald-400" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Sistemas ERP</h3>
                <p className="text-slate-300 mb-6">
                  Implementación y personalización de sistemas ERP con Odoo 
                  para optimizar procesos empresariales.
                </p>
                <ul className="text-left space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckIcon className="text-emerald-400" size={16} />
                    <span className="text-sm text-slate-300">Odoo ERP</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="text-emerald-400" size={16} />
                    <span className="text-sm text-slate-300">Módulos personalizados</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="text-emerald-400" size={16} />
                    <span className="text-sm text-slate-300">Migración de datos</span>
                  </li>
                </ul>
              </CardBody>
            </Card>

            <Card className="bg-slate-900/50 border border-slate-700/50 hover:border-orange-500/50 hover:scale-105 transition-all duration-300 shadow-xl">
              <CardBody className="text-center p-8">
                <div className="bg-orange-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <IntegrationIcon className="text-orange-400" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Integraciones</h3>
                <p className="text-slate-300 mb-6">
                  Conectamos sistemas existentes para automatizar procesos 
                  y mejorar la eficiencia operativa.
                </p>
                <ul className="text-left space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckIcon className="text-orange-400" size={16} />
                    <span className="text-sm text-slate-300">APIs third-party</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="text-orange-400" size={16} />
                    <span className="text-sm text-slate-300">Webhooks</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="text-orange-400" size={16} />
                    <span className="text-sm text-slate-300">Sincronización</span>
                  </li>
                </ul>
              </CardBody>
            </Card>

            <Card className="bg-slate-900/50 border border-slate-700/50 hover:border-cyan-500/50 hover:scale-105 transition-all duration-300 shadow-xl">
              <CardBody className="text-center p-8">
                <div className="bg-cyan-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <AnalyticsIcon className="text-cyan-400" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Análisis de Datos</h3>
                <p className="text-slate-300 mb-6">
                  Dashboards interactivos y reportes automatizados para 
                  tomar decisiones basadas en datos.
                </p>
                <ul className="text-left space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckIcon className="text-cyan-400" size={16} />
                    <span className="text-sm text-slate-300">Power BI</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="text-cyan-400" size={16} />
                    <span className="text-sm text-slate-300">Tableau</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="text-cyan-400" size={16} />
                    <span className="text-sm text-slate-300">Python & R</span>
                  </li>
                </ul>
              </CardBody>
            </Card>

            <Card className="bg-slate-900/50 border border-slate-700/50 hover:border-indigo-500/50 hover:scale-105 transition-all duration-300 shadow-xl">
              <CardBody className="text-center p-8">
                <div className="bg-indigo-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <DesktopIcon className="text-indigo-400" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">Apps de Escritorio</h3>
                <p className="text-slate-300 mb-6">
                  Aplicaciones de escritorio multiplataforma con Electron, 
                  Tauri y tecnologías nativas.
                </p>
                <ul className="text-left space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckIcon className="text-indigo-400" size={16} />
                    <span className="text-sm text-slate-300">Electron & Tauri</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="text-indigo-400" size={16} />
                    <span className="text-sm text-slate-300">Windows, Mac, Linux</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="text-indigo-400" size={16} />
                    <span className="text-sm text-slate-300">Instaladores automáticos</span>
                  </li>
                </ul>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className={`${title({ size: "md" })} mb-6 text-white`}>
                ¿Por qué elegir{" "}
                <span className={title({ color: "blue", size: "md" })}>
                  EvoSystems?
                </span>
              </h2>
              <p className="text-slate-300 mb-6 text-lg">
                Somos una empresa de desarrollo de software especializada en 
                crear soluciones tecnológicas que impulsan el crecimiento empresarial 
                con más de 5 años de experiencia.
              </p>
              <p className="text-slate-400 mb-8">
                Nuestro equipo está formado por desarrolladores senior, arquitectos 
                de software y especialistas en UX/UI que trabajan con metodologías 
                ágiles para entregar proyectos de alta calidad.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <StarIcon className="text-yellow-500" size={20} />
                  <span className="font-medium text-white">
                    +100 proyectos entregados
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <StarIcon className="text-yellow-500" size={20} />
                  <span className="font-medium text-white">5+ años de experiencia</span>
                </div>
                <div className="flex items-center gap-3">
                  <StarIcon className="text-yellow-500" size={20} />
                  <span className="font-medium text-white">Equipo especializado</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 border border-slate-600/30 rounded-2xl p-8 text-center backdrop-blur-sm">
              <CodeIcon className="text-blue-400 mx-auto mb-4" size={80} />
              <h3 className="text-2xl font-bold mb-4 text-white">Nuestra metodología</h3>
              <p className="text-slate-300">
                Desarrollamos software siguiendo las mejores prácticas de la industria, 
                con enfoque en código limpio, arquitectura escalable y experiencia 
                de usuario excepcional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-blue-600 overflow-hidden">
        {/* Wave Background */}
        <WaveBackground className="absolute inset-0 z-10" variant="cta" />

        {/* Glassmorphism Overlay */}
        <div className="absolute inset-0 bg-blue-700/30 backdrop-blur-sm z-15" />

        <div className="relative z-20 w-full text-center px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className={`${title({ size: "md" })} text-white mb-6`}>
              ¿Listo para digitalizar{" "}
              <span className="text-blue-100">tu negocio?</span>
            </h2>
            <p className="text-blue-50 text-xl mb-8">
              Contáctanos por WhatsApp para una consulta gratuita y descubre 
              cómo podemos ayudarte a transformar tu empresa con tecnología 
              de vanguardia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
            <Button
              isExternal
              as={Link}
              className="bg-white/10 backdrop-blur-md border-2 border-white/50 text-white hover:bg-white hover:text-blue-700 shadow-lg transition-all duration-300"
              href={siteConfig.links.linkedin}
              rel="noopener noreferrer"
              size="lg"
              variant="bordered"
            >
              <LinkedInIcon size={20} />
              Síguenos en LinkedIn
            </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}