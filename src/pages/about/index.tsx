import Head from "next/head";
import { Button } from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { Link } from "@heroui/link";
import NextLink from "next/link";

import { title, subtitle } from "@/components/primitives";
import { siteConfig } from "@/config/site";
import {
  CodeIcon,
  StarIcon,
  CheckIcon,
  WhatsAppIcon,
  UsersIcon,
  LinkedInIcon,
} from "@/components/icons";
import { WaveBackground } from "@/components/wave-background";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Fernando Rodríguez",
      role: "CEO & Lead Developer",
      experience: "8+ años de experiencia",
      specialties: ["Full Stack", "Architecture", "Leadership"],
      technologies: ["React", "Node.js", "Python", "AWS"]
    },
    {
      name: "Daniel I. Carrillo",
      role: "Frontend Specialist",
      experience: "6+ años de experiencia", 
      specialties: ["UX/UI", "React", "Mobile"],
      technologies: ["React", "Next.js", "React Native", "Figma"]
    },
    {
      name: "Yahir Diaz",
      role: "Backend Developer",
      experience: "7+ años de experiencia",
      specialties: ["APIs", "Databases", "DevOps"],
      technologies: ["Python", "PostgreSQL", "Docker", "Kubernetes"]
    }
  ];

  const values = [
    {
      icon: CodeIcon,
      title: "Código Limpio",
      description: "Escribimos código mantenible siguiendo las mejores prácticas de la industria",
      color: "blue"
    },
    {
      icon: StarIcon,
      title: "Excelencia",
      description: "Nos comprometemos con la calidad en cada proyecto que desarrollamos",
      color: "orange"
    },
    {
      icon: UsersIcon,
      title: "Colaboración",
      description: "Trabajamos de cerca con nuestros clientes como socios estratégicos",
      color: "purple"
    },
    {
      icon: CheckIcon,
      title: "Resultados",
      description: "Nos enfocamos en entregar soluciones que generen valor real",
      color: "emerald"
    }
  ];

  return (
    <>
      <Head>
        <title>Sobre Nosotros - Desarrollo de Software | EvoSystems</title>
        <meta
          content="Conoce a EvoSystems: equipo especializado en desarrollo de software con 5+ años de experiencia. Desarrolladores senior, arquitectos de software y especialistas en UX/UI."
          name="description"
        />
        <meta
          content="evosystems equipo, desarrolladores software méxico, empresa desarrollo web, programadores especializados, software profesional méxico"
          name="keywords"
        />
        <meta content="Sobre Nosotros - Desarrollo de Software | EvoSystems" property="og:title" />
        <meta
          content="Conoce nuestro equipo de desarrolladores y nuestra pasión por crear soluciones tecnológicas innovadoras."
          property="og:description"
        />
      </Head>
      
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        {/* Wave Background */}
        <WaveBackground className="absolute inset-0 z-10" variant="hero" />

        <div className="relative z-20 w-full text-center px-6">
          <div className="max-w-6xl mx-auto">
            <h1 className={`${title({ size: "lg" })} text-white mb-6`}>
              Conoce a{" "}
              <span className={title({ color: "blue", size: "lg" })}>
                EvoSystems
              </span>
            </h1>
            
            <p className={`${subtitle()} text-slate-300 max-w-4xl mx-auto mb-8 text-xl`}>
              Somos una empresa especializada en desarrollo de software con más de 5 años de experiencia 
              transformando ideas en soluciones tecnológicas que impulsan el crecimiento empresarial.
            </p>

            <div className="mb-12">
              <Chip
                className="bg-blue-600/80 backdrop-blur-md text-white px-6 py-2 text-base font-medium shadow-lg border border-blue-500/30"
                color="primary"
                size="lg"
                variant="solid"
              >
                💻 5+ años de experiencia
              </Chip>
            </div>

            <div className="flex justify-center gap-12 mb-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">100+</div>
                <div className="text-slate-300 font-medium">Proyectos</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">5+</div>
                <div className="text-slate-300 font-medium">Años</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">50+</div>
                <div className="text-slate-300 font-medium">Clientes</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                isExternal
                as={Link}
                className="bg-blue-600/90 backdrop-blur-md hover:bg-blue-700/90 text-white font-semibold px-8 py-3 shadow-lg border border-blue-500/30 transition-all duration-300"
                href={siteConfig.links.whatsapp}
                rel="noopener noreferrer"
                size="lg"
              >
                <WhatsAppIcon size={20} />
                Contáctanos
              </Button>
              <Button
                as={NextLink}
                className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white/20 shadow-lg transition-all duration-300"
                href="/services"
                size="lg"
                variant="bordered"
              >
                Ver nuestros servicios
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className={`${title({ size: "md" })} mb-6 text-white`}>
                Nuestra{" "}
                <span className={title({ color: "blue", size: "md" })}>Misión</span>
              </h2>
              <p className="text-slate-300 mb-6 text-lg">
                Transformar ideas en soluciones tecnológicas innovadoras que impulsen el crecimiento 
                de nuestros clientes, utilizando las mejores prácticas de desarrollo y tecnologías de vanguardia.
              </p>
              <p className="text-slate-400">
                Creemos en el poder de la tecnología para resolver problemas reales y crear oportunidades 
                de crecimiento para empresas de todos los tamaños.
              </p>
            </div>
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 border border-slate-600/30 rounded-2xl p-8 text-center backdrop-blur-sm">
              <CodeIcon className="text-blue-400 mx-auto mb-4" size={80} />
              <h3 className="text-2xl font-bold mb-4 text-white">Nuestra Visión</h3>
              <p className="text-slate-300">
                Ser la empresa líder en desarrollo de software en México, 
                reconocida por nuestra calidad técnica, innovación y compromiso 
                con el éxito de nuestros clientes.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="text-center mb-12">
            <h2 className={`${title({ size: "md" })} mb-4 text-white`}>
              Nuestros{" "}
              <span className={title({ color: "blue", size: "md" })}>Valores</span>
            </h2>
            <p className={`${subtitle()} text-slate-400`}>
              Los principios que guían cada línea de código que escribimos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className={`bg-${value.color}-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <value.icon className={`text-${value.color}-400`} size={32} />
                </div>
                <h3 className="font-bold mb-3 text-white">{value.title}</h3>
                <p className="text-sm text-slate-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className={`${title({ size: "md" })} mb-4 text-white`}>
              Nuestro{" "}
              <span className={title({ color: "blue", size: "md" })}>Equipo</span>
            </h2>
            <p className={`${subtitle()} text-slate-400`}>
              Desarrolladores especializados y apasionados por crear soluciones innovadoras
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="bg-slate-800/50 border border-slate-700/50 hover:border-blue-500/50 hover:scale-105 transition-all duration-300 shadow-xl">
                <CardBody className="p-6 text-center">
                  <div className="bg-blue-600/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <UsersIcon className="text-blue-400" size={40} />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">{member.name}</h3>
                  <p className="text-blue-400 font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-slate-400 mb-4">{member.experience}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-slate-300">Especialidades:</h4>
                    <div className="flex flex-wrap justify-center gap-1">
                      {member.specialties.map((specialty, specIndex) => (
                        <Chip
                          key={specIndex}
                          className="text-xs bg-blue-600/20 text-blue-300"
                          size="sm"
                          variant="flat"
                        >
                          {specialty}
                        </Chip>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-slate-300">Tecnologías:</h4>
                    <div className="flex flex-wrap justify-center gap-1">
                      {member.technologies.map((tech, techIndex) => (
                        <Chip
                          key={techIndex}
                          className="text-xs bg-slate-700/50 text-slate-300"
                          size="sm"
                          variant="flat"
                        >
                          {tech}
                        </Chip>
                      ))}
                    </div>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className={`${title({ size: "md" })} mb-8 text-white`}>
            Nuestra{" "}
            <span className={title({ color: "blue", size: "md" })}>Historia</span>
          </h2>
          
          <div className="text-left space-y-6 text-slate-300">
            <p className="text-lg">
              <strong className="text-white">EvoSystems nació de una visión clara:</strong> democratizar 
              el acceso a soluciones tecnológicas de calidad empresarial para empresas de todos los tamaños. 
              Comenzamos como un equipo de desarrolladores especializados trabajando en proyectos innovadores.
            </p>
            
            <p>
              Con el tiempo, nos dimos cuenta de que podíamos hacer más que solo escribir código: podíamos 
              ser socios estratégicos de nuestros clientes, entendiendo sus necesidades de negocio y 
              transformándolas en soluciones tecnológicas que generen valor real.
            </p>
            
            <p>
              Hoy, después de más de <strong className="text-blue-400">100 proyectos entregados</strong> y 
              <strong className="text-blue-400"> 5 años de experiencia</strong>, seguimos con la misma pasión 
              del primer día: crear software que marque la diferencia en los negocios de nuestros clientes.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-800">
            <h3 className="text-xl font-bold mb-4 text-white">¿Por qué &ldquo;EvoSystems&rdquo;?</h3>
            <p className="text-slate-300 mb-6">
              &ldquo;Evo&rdquo; representa evolución - creemos que la tecnología debe evolucionar constantemente 
              para adaptarse a las necesidades cambiantes del mercado. &ldquo;Systems&rdquo; refleja nuestro 
              enfoque integral: no solo desarrollamos aplicaciones, creamos sistemas completos que transforman 
              la manera en que nuestros clientes hacen negocios.
            </p>
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
              ¿Listo para trabajar{" "}
              <span className="text-blue-100">con nosotros?</span>
            </h2>
            <p className="text-blue-50 text-xl mb-8">
              Únete a los más de 50 clientes que han confiado en nosotros para transformar 
              sus ideas en soluciones tecnológicas exitosas.
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
                Contáctanos por WhatsApp
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