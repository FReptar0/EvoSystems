import Head from "next/head";
import { Card, CardBody } from "@heroui/card";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { Chip } from "@heroui/chip";
import NextLink from "next/link";

import { title, subtitle } from "@/components/primitives";
import { siteConfig } from "@/config/site";
import {
  WebIcon,
  MobileIcon,
  ERPIcon,
  DatabaseIcon,
  CloudIcon,
  CheckIcon,
  WhatsAppIcon,
  StarIcon,
} from "@/components/icons";
import { WaveBackground } from "@/components/wave-background";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function SolutionsPage() {
  const solutions = [
    {
      id: "ecommerce",
      title: "Tiendas en Línea",
      subtitle: "E-commerce completo y escalable",
      description: "Plataformas de comercio electrónico modernas con pasarelas de pago, gestión de inventario, sistema de pedidos y panel administrativo completo.",
      icon: WebIcon,
      color: "blue",
      features: [
        "Catálogo de productos responsive",
        "Carrito de compras inteligente",
        "Múltiples métodos de pago",
        "Gestión de inventario en tiempo real",
        "Panel administrativo completo",
        "SEO optimizado para ventas",
      ],
      technologies: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "AWS"],
      industries: ["Retail", "Moda", "Electrónicos", "Alimentaria"],
      timeframe: "8-12 semanas",
      whatsapp: siteConfig.links.whatsappWebDev,
    },
    {
      id: "fintech",
      title: "Aplicaciones Fintech",
      subtitle: "Soluciones financieras digitales",
      description: "Aplicaciones móviles y web para servicios financieros, billeteras digitales, préstamos y gestión de inversiones con máximos estándares de seguridad.",
      icon: MobileIcon,
      color: "emerald",
      features: [
        "Autenticación biométrica",
        "Transacciones seguras",
        "Dashboard de inversiones",
        "Notificaciones push",
        "Integración bancaria API",
        "Cumplimiento regulatorio",
      ],
      technologies: ["React Native", "Python", "MongoDB", "Blockchain", "Kubernetes"],
      industries: ["Finanzas", "Banca", "Inversiones", "Criptomonedas"],
      timeframe: "12-16 semanas",
      whatsapp: siteConfig.links.whatsappMobileApps,
    },
    {
      id: "healthcare",
      title: "Sistemas de Salud",
      subtitle: "Digitalizamos la atención médica",
      description: "Plataformas para gestión hospitalaria, telemedicina, expedientes electrónicos y sistemas de citas médicas cumpliendo con HIPAA y normativas locales.",
      icon: DatabaseIcon,
      color: "purple",
      features: [
        "Expedientes médicos electrónicos",
        "Sistema de citas online",
        "Telemedicina integrada",
        "Gestión de inventario médico",
        "Facturación automática",
        "Cumplimiento HIPAA",
      ],
      technologies: ["Vue.js", "Django", "PostgreSQL", "Docker", "FHIR"],
      industries: ["Hospitales", "Clínicas", "Farmacias", "Laboratorios"],
      timeframe: "16-24 semanas",
      whatsapp: siteConfig.links.whatsappERP,
    },
    {
      id: "logistics",
      title: "Logística Inteligente",
      subtitle: "Optimización de cadena de suministro",
      description: "Sistemas para gestión de almacenes, tracking de envíos, optimización de rutas y control de inventario en tiempo real.",
      icon: CloudIcon,
      color: "orange",
      features: [
        "Tracking GPS en tiempo real",
        "Optimización de rutas",
        "Gestión de almacenes",
        "Control de inventario",
        "Dashboard de métricas",
        "Integración con transportistas",
      ],
      technologies: ["Angular", "Spring Boot", "Redis", "Google Maps API", "IoT"],
      industries: ["Transporte", "Almacenes", "Distribución", "Courier"],
      timeframe: "10-14 semanas",
      whatsapp: siteConfig.links.whatsappIntegrations,
    },
    {
      id: "education",
      title: "Plataformas Educativas",
      subtitle: "E-learning y gestión académica",
      description: "Sistemas de gestión escolar, plataformas de aprendizaje en línea, evaluaciones digitales y portales educativos interactivos.",
      icon: WebIcon,
      color: "cyan",
      features: [
        "Aulas virtuales interactivas",
        "Sistema de calificaciones",
        "Portal de padres y estudiantes",
        "Biblioteca digital",
        "Exámenes en línea",
        "Calendario académico",
      ],
      technologies: ["React", "Laravel", "MySQL", "WebRTC", "Firebase"],
      industries: ["Universidades", "Colegios", "Academias", "Capacitación"],
      timeframe: "12-18 semanas",
      whatsapp: siteConfig.links.whatsapp,
    },
    {
      id: "manufacturing",
      title: "Industria 4.0",
      subtitle: "Manufactura inteligente",
      description: "Sistemas MES, control de producción, mantenimiento predictivo y dashboards de KPIs para optimizar procesos industriales.",
      icon: ERPIcon,
      color: "slate",
      features: [
        "Control de producción",
        "Mantenimiento predictivo",
        "Trazabilidad de productos",
        "Dashboards de KPIs",
        "Integración con sensores IoT",
        "Planificación de recursos",
      ],
      technologies: ["Python", "InfluxDB", "Grafana", "MQTT", "Machine Learning"],
      industries: ["Automotriz", "Alimentaria", "Textil", "Química"],
      timeframe: "20-28 semanas",
      whatsapp: siteConfig.links.whatsappERP,
    },
  ];

  const benefits = [
    {
      icon: StarIcon,
      title: "Soluciones Probadas",
      description: "Implementaciones exitosas en múltiples industrias con resultados medibles.",
    },
    {
      icon: CheckIcon,
      title: "Escalabilidad Garantizada", 
      description: "Arquitecturas diseñadas para crecer con tu negocio sin límites técnicos.",
    },
    {
      icon: DatabaseIcon,
      title: "Integración Total",
      description: "Conectamos con tus sistemas existentes sin interrumpir operaciones.",
    },
  ];

  return (
    <>
      <Head>
        <title>Soluciones por Industria - EvoSystems</title>
        <meta
          content="Soluciones de software especializadas por industria: e-commerce, fintech, salud, logística, educación y manufactura. Casos de éxito comprobados."
          name="description"
        />
        <meta
          content="soluciones software, industria, e-commerce, fintech, salud, logística, educación, manufactura, casos éxito"
          name="keywords"
        />
        <meta content="Soluciones por Industria - EvoSystems" property="og:title" />
        <meta
          content="Descubre nuestras soluciones especializadas para diferentes industrias con casos de éxito comprobados."
          property="og:description"
        />

        {/* Structured Data for Solutions */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "Soluciones de Software por Industria",
              "description": "Soluciones especializadas de desarrollo de software para diferentes industrias",
              "provider": {
                "@type": "Organization",
                "name": "EvoSystems"
              },
              "category": "Software Development Solutions",
              "offers": solutions.map(solution => ({
                "@type": "Offer",
                "name": solution.title,
                "description": solution.description,
                "category": solution.industries.join(", ")
              }))
            })
          }}
        />
      </Head>

      <Navbar />

      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <WaveBackground className="absolute inset-0 z-10" variant="hero" />

        <div className="relative z-20 max-w-6xl mx-auto px-6 text-center">
          <h1 className={`${title({ size: "lg" })} text-white mb-6`}>
            Soluciones{" "}
            <span className={title({ color: "blue", size: "lg" })}>
              Especializadas
            </span>
          </h1>
          <p className={`${subtitle()} text-slate-300 max-w-4xl mx-auto mb-8`}>
            Desarrollamos soluciones de software especializadas para diferentes industrias, 
            optimizando procesos específicos y generando valor real en cada sector.
          </p>

          <div className="flex justify-center gap-12 mb-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">6</div>
              <div className="text-slate-300 font-medium">Industrias</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">50+</div>
              <div className="text-slate-300 font-medium">Proyectos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">95%</div>
              <div className="text-slate-300 font-medium">Satisfacción</div>
            </div>
          </div>

          <Button
            isExternal
            as={Link}
            className="bg-blue-600/90 backdrop-blur-md hover:bg-blue-700/90 text-white font-semibold px-8 py-3 shadow-lg border border-blue-500/30"
            href={siteConfig.links.whatsapp}
            rel="noopener noreferrer"
            size="lg"
          >
            <WhatsAppIcon size={20} />
            Consulta tu proyecto
          </Button>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            {solutions.map((solution) => (
              <Card
                key={solution.id}
                className={`bg-slate-900/50 border border-slate-700/50 hover:border-${solution.color}-500/50 transition-all duration-300 shadow-xl hover:scale-[1.02]`}
              >
                <CardBody className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`bg-${solution.color}-600/20 w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0`}>
                      <solution.icon className={`text-${solution.color}-400`} size={32} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2 text-white">{solution.title}</h3>
                      <p className={`text-${solution.color}-400 font-medium`}>{solution.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-slate-300 mb-6 leading-relaxed">
                    {solution.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-white mb-3">Características principales:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {solution.features.slice(0, 4).map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckIcon className={`text-${solution.color}-400`} size={16} />
                          <span className="text-sm text-slate-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-white mb-3">Tecnologías:</h4>
                    <div className="flex flex-wrap gap-2">
                      {solution.technologies.map((tech, index) => (
                        <Chip
                          key={index}
                          className={`bg-${solution.color}-600/20 text-${solution.color}-300`}
                          size="sm"
                          variant="flat"
                        >
                          {tech}
                        </Chip>
                      ))}
                    </div>
                  </div>

                  {/* Industries & Timeline */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h5 className="text-sm font-medium text-slate-400 mb-2">Industrias:</h5>
                      <p className="text-sm text-slate-300">{solution.industries.join(", ")}</p>
                    </div>
                    <div>
                      <h5 className="text-sm font-medium text-slate-400 mb-2">Tiempo:</h5>
                      <p className="text-sm text-slate-300">{solution.timeframe}</p>
                    </div>
                  </div>

                  <Button
                    isExternal
                    as={Link}
                    className={`w-full bg-${solution.color}-600 hover:bg-${solution.color}-700 text-white`}
                    href={solution.whatsapp}
                    rel="noopener noreferrer"
                  >
                    <WhatsAppIcon size={16} />
                    Consultar {solution.title.toLowerCase()}
                  </Button>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className={`${title({ size: "md" })} mb-4 text-white`}>
              ¿Por qué elegir{" "}
              <span className={title({ color: "blue", size: "md" })}>
                nuestras soluciones?
              </span>
            </h2>
            <p className={`${subtitle()} text-slate-400`}>
              Ventajas que nos diferencian en el desarrollo de software especializado
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="text-blue-400" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">{benefit.title}</h3>
                <p className="text-slate-400 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-blue-600 overflow-hidden">
        <WaveBackground className="absolute inset-0 z-10" variant="cta" />

        <div className="absolute inset-0 bg-blue-700/30 backdrop-blur-sm z-15" />

        <div className="relative z-20 w-full text-center px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className={`${title({ size: "md" })} text-white mb-6`}>
              ¿Tu industria no está listada?
            </h2>
            <p className="text-blue-50 text-xl mb-8">
              Contáctanos para conocer cómo podemos desarrollar una solución 
              personalizada para las necesidades específicas de tu sector.
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
                Consulta personalizada
              </Button>
              <Button
                as={NextLink}
                className="bg-white/10 backdrop-blur-md border-2 border-white/50 text-white hover:bg-white hover:text-blue-700 shadow-lg transition-all duration-300"
                href="/services"
                size="lg"
                variant="bordered"
              >
                Ver todos los servicios
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}