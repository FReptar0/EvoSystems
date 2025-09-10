import { useState } from "react";
import Head from "next/head";
import { Card, CardBody } from "@heroui/card";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { Link } from "@heroui/link";

import { title, subtitle } from "@/components/primitives";
import { siteConfig } from "@/config/site";
import {
  PhoneIcon,
  EmailIcon,
  WhatsAppIcon,
  LinkedInIcon,
  ClockIcon,
} from "@/components/icons";
import { WaveBackground } from "@/components/wave-background";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { trackConversion, trackEcommerce } from "@/utils/analytics";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleWhatsAppContact = (serviceType?: string) => {
    const baseMessage = `Hola, me interesa contactar con EvoSystems para servicios de desarrollo de software.`;
    const serviceMessage = serviceType ? ` Específicamente necesito información sobre ${serviceType}.` : '';
    const contactInfo = formData.name ? ` Mi nombre es ${formData.name}` : '';
    const companyInfo = formData.company ? ` y represento a la empresa ${formData.company}` : '';
    const fullMessage = encodeURIComponent(`${baseMessage}${serviceMessage}${contactInfo}${companyInfo}.`);
    
    // Track conversion
    trackConversion.whatsappClick(serviceType, 'contact_form');
    if (serviceType) {
      trackEcommerce.beginCheckout(serviceType, serviceType.toLowerCase().replace(/\s+/g, '_'), 1000);
    }
    
    window.open(`https://wa.me/525500000000?text=${fullMessage}`, '_blank');
  };

  const services = [
    "Desarrollo Web",
    "Aplicaciones Móviles", 
    "Sistemas ERP",
    "Integraciones",
    "Análisis de Datos",
    "Aplicaciones de Escritorio",
    "Consultoría Tecnológica",
  ];

  return (
    <>
      <Head>
        <title>Contacto - EvoSystems</title>
        <meta
          content="Contacta con EvoSystems para desarrollo de software profesional. Cotizaciones gratuitas, consultas por WhatsApp y atención personalizada."
          name="description"
        />
        <meta
          content="contacto, cotización, desarrollo software, consulta gratuita, WhatsApp, EvoSystems México"
          name="keywords"
        />
        <meta content="Contacto - EvoSystems" property="og:title" />
        <meta
          content="Obtén una cotización gratuita para tu proyecto de desarrollo de software."
          property="og:description"
        />

        {/* Structured Data for Contact */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ContactPage",
              "mainEntity": {
                "@type": "Organization", 
                "name": "EvoSystems",
                "contactPoint": [
                  {
                    "@type": "ContactPoint",
                    "telephone": "+525500000000",
                    "contactType": "customer service",
                    "availableLanguage": ["Spanish"],
                    "contactOption": "TollFree"
                  }
                ],
                "address": {
                  "@type": "PostalAddress",
                  "addressCountry": "MX",
                  "addressLocality": "México"
                }
              }
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
            Contáctanos
          </h1>
          <p className={`${subtitle()} text-slate-300 max-w-3xl mx-auto mb-8`}>
            ¿Tienes un proyecto en mente? Obtén una cotización gratuita y 
            descubre cómo podemos ayudarte a transformar tu idea en realidad.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className={`${title({ size: "md" })} text-white mb-6`}>
                Solicita tu{" "}
                <span className={title({ color: "blue", size: "md" })}>
                  cotización
                </span>
              </h2>
              <p className="text-slate-400 mb-8">
                Completa el formulario y te contactaremos para discutir tu proyecto 
                y proporcionarte una cotización personalizada sin compromiso.
              </p>

              <Card className="bg-slate-900/50 border border-slate-700/50">
                <CardBody className="p-8">
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <Input
                        className="bg-slate-800/50"
                        label="Nombre completo"
                        placeholder="Tu nombre"
                        value={formData.name}
                        variant="bordered"
                        onValueChange={(value) => handleInputChange("name", value)}
                      />
                      <Input
                        className="bg-slate-800/50"
                        label="Email"
                        placeholder="tu@email.com"
                        type="email"
                        value={formData.email}
                        variant="bordered"
                        onValueChange={(value) => handleInputChange("email", value)}
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <Input
                        className="bg-slate-800/50"
                        label="Empresa"
                        placeholder="Nombre de tu empresa"
                        value={formData.company}
                        variant="bordered"
                        onValueChange={(value) => handleInputChange("company", value)}
                      />
                      <Input
                        className="bg-slate-800/50"
                        label="Teléfono"
                        placeholder="+52 55 1234 5678"
                        type="tel"
                        value={formData.phone}
                        variant="bordered"
                        onValueChange={(value) => handleInputChange("phone", value)}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-3" htmlFor="service-selection">
                        Servicio de interés
                      </label>
                      <div id="service-selection" className="grid grid-cols-2 md:grid-cols-3 gap-2" role="group" aria-labelledby="service-selection">
                        {services.map((service) => (
                          <Button
                            key={service}
                            className={
                              formData.service === service
                                ? "bg-blue-600 text-white"
                                : "bg-slate-800/50 text-slate-300 hover:bg-slate-700/50"
                            }
                            size="sm"
                            variant={formData.service === service ? "solid" : "flat"}
                            onPress={() => handleInputChange("service", service)}
                          >
                            {service}
                          </Button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2" htmlFor="message-input">
                        Mensaje
                      </label>
                      <textarea
                        id="message-input"
                        className="w-full p-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 min-h-[120px] resize-y"
                        placeholder="Cuéntanos sobre tu proyecto, objetivos, timeline y presupuesto aproximado..."
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                        size="lg"
                        onPress={() => handleWhatsAppContact(formData.service)}
                      >
                        <WhatsAppIcon size={20} />
                        Enviar por WhatsApp
                      </Button>
                      <Button
                        isExternal
                        as={Link}
                        className="flex-1 bg-slate-700/50 hover:bg-slate-600/50 text-white"
                        href={`mailto:${siteConfig.links.email}?subject=Cotización - ${formData.service || 'Consulta'}&body=Hola,%0A%0ANombre: ${formData.name}%0AEmpresa: ${formData.company}%0ATeléfono: ${formData.phone}%0AServicio: ${formData.service}%0A%0AMensaje:%0A${formData.message}`}
                        size="lg"
                        variant="bordered"
                        onPress={() => {
                          trackConversion.emailClick('contact_form');
                          if (formData.service) {
                            trackEcommerce.addToCart(formData.service, formData.service.toLowerCase().replace(/\s+/g, '_'), 500);
                          }
                        }}
                      >
                        <EmailIcon size={20} />
                        Enviar por Email
                      </Button>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className={`${title({ size: "md" })} text-white mb-6`}>
                Información de{" "}
                <span className={title({ color: "blue", size: "md" })}>
                  contacto
                </span>
              </h2>

              <div className="space-y-6 mb-8">
                <Card className="bg-slate-900/30 border border-slate-700/30">
                  <CardBody className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-green-600/20 p-3 rounded-full">
                        <WhatsAppIcon className="text-green-400" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-2">WhatsApp</h3>
                        <p className="text-slate-400 mb-3">
                          Respuesta inmediata para cotizaciones y consultas
                        </p>
                        <Button
                          isExternal
                          as={Link}
                          className="bg-green-600 hover:bg-green-700 text-white"
                          href={siteConfig.links.whatsapp}
                          rel="noopener noreferrer"
                          size="sm"
                        >
                          <WhatsAppIcon size={16} />
                          {siteConfig.links.phone}
                        </Button>
                      </div>
                    </div>
                  </CardBody>
                </Card>

                <Card className="bg-slate-900/30 border border-slate-700/30">
                  <CardBody className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-600/20 p-3 rounded-full">
                        <EmailIcon className="text-blue-400" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-2">Email</h3>
                        <p className="text-slate-400 mb-3">
                          Para consultas formales y documentación detallada
                        </p>
                        <Button
                          isExternal
                          as={Link}
                          className="bg-blue-600 hover:bg-blue-700 text-white"
                          href={`mailto:${siteConfig.links.email}`}
                          size="sm"
                        >
                          <EmailIcon size={16} />
                          {siteConfig.links.email}
                        </Button>
                      </div>
                    </div>
                  </CardBody>
                </Card>

                <Card className="bg-slate-900/30 border border-slate-700/30">
                  <CardBody className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-600/20 p-3 rounded-full">
                        <LinkedInIcon className="text-blue-400" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-2">LinkedIn</h3>
                        <p className="text-slate-400 mb-3">
                          Síguenos para actualizaciones y casos de éxito
                        </p>
                        <Button
                          isExternal
                          as={Link}
                          className="bg-blue-600 hover:bg-blue-700 text-white"
                          href={siteConfig.links.linkedin}
                          rel="noopener noreferrer"
                          size="sm"
                        >
                          <LinkedInIcon size={16} />
                          Seguir en LinkedIn
                        </Button>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </div>

              {/* Business Hours */}
              <Card className="bg-gradient-to-br from-blue-600/10 to-slate-800/30 border border-blue-500/30">
                <CardBody className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-blue-600/20 p-3 rounded-full">
                      <ClockIcon className="text-blue-400" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-2">Horarios de Atención</h3>
                      <div className="space-y-2 text-slate-300">
                        <p><strong>Lunes a Viernes:</strong> 9:00 AM - 7:00 PM</p>
                        <p><strong>Sábados:</strong> 10:00 AM - 2:00 PM</p>
                        <p><strong>Domingos:</strong> Cerrado</p>
                      </div>
                      <p className="text-sm text-blue-400 mt-3">
                        ⚡ WhatsApp disponible 24/7 para urgencias
                      </p>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
