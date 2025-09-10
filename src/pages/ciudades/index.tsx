import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { Card, CardBody, Button, Chip } from '@heroui/react';
import { Navbar } from '@/components/navbar';
import { WhatsAppIcon, EmailIcon } from '@/components/icons';
import { useTranslations } from '@/config/i18n';
import { mexicanCities, CityData } from '@/data/cities';

interface CitiesPageProps {
  cities: CityData[];
  locale: string;
}

export default function CitiesPage({ cities, locale }: CitiesPageProps) {
  const t = useTranslations(locale as 'es' | 'en');

  const pageTitle = locale === 'es' ? 'Ciudades que Atendemos en México | EvoSystems' : 'Cities We Serve in Mexico | EvoSystems';
  const pageDescription = locale === 'es' 
    ? 'Desarrollo de software profesional en las principales ciudades de México: CDMX, Guadalajara, Monterrey, Querétaro, Cancún, Veracruz y más.'
    : 'Professional software development in major Mexican cities: Mexico City, Guadalajara, Monterrey, Queretaro, Cancun, Veracruz and more.';

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content="desarrollo software México, ciudades México, CDMX, Guadalajara, Monterrey, Querétaro" />
        <link rel="canonical" href={`https://evosystems.dev${locale === 'en' ? '/en' : ''}/ciudades`} />
        
        {/* Open Graph */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://evosystems.dev${locale === 'en' ? '/en' : ''}/ciudades`} />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "name": locale === 'es' ? "Ciudades que Atendemos" : "Cities We Serve",
              "description": pageDescription,
              "itemListElement": cities.map((city, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "item": {
                  "@type": "Place",
                  "name": city.name[locale as 'es' | 'en'],
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": city.name[locale as 'es' | 'en'],
                    "addressRegion": city.state[locale as 'es' | 'en'],
                    "addressCountry": "MX"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": city.coordinates.lat,
                    "longitude": city.coordinates.lng
                  },
                  "url": `https://evosystems.dev${locale === 'en' ? '/en' : ''}/ciudades/${city.slug}`
                }
              }))
            })
          }}
        />
      </Head>

      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
        <div className="container mx-auto px-6 py-24">

          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {locale === 'es' ? 'Desarrollo de Software en' : 'Software Development in'}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                {locale === 'es' ? 'México' : 'Mexico'}
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              {locale === 'es'
                ? 'Atendemos empresas en las principales ciudades de México con soluciones tecnológicas profesionales y soporte local.'
                : 'We serve businesses in major Mexican cities with professional technological solutions and local support.'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                as={Link}
                href="https://wa.me/5550000000"
                color="primary"
                size="lg"
                startContent={<WhatsAppIcon size={20} />}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                {locale === 'es' ? 'Consulta WhatsApp' : 'WhatsApp Consultation'}
              </Button>
              <Button
                as={Link}
                href="/contact"
                variant="bordered"
                size="lg"
                startContent={<EmailIcon size={20} />}
                className="border-slate-600 text-slate-200 hover:border-slate-500"
              >
                {locale === 'es' ? 'Contacto' : 'Contact'}
              </Button>
            </div>
          </div>

          {/* Cities Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {cities.map((city) => {
              const cityName = city.name[locale as 'es' | 'en'];
              const stateName = city.state[locale as 'es' | 'en'];
              
              return (
                <Card 
                  key={city.id} 
                  className="bg-slate-800/30 border-slate-700 hover:bg-slate-800/50 transition-all duration-300 group"
                >
                  <CardBody className="p-8">
                    {/* City Header */}
                    <div className="mb-6">
                      <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                        {cityName}
                      </h2>
                      <p className="text-slate-400">{stateName}</p>
                      <p className="text-sm text-slate-500">
                        {city.population.toLocaleString()} {locale === 'es' ? 'habitantes' : 'inhabitants'}
                      </p>
                    </div>

                    {/* Priority Services */}
                    <div className="mb-6">
                      <h3 className="text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wide">
                        {locale === 'es' ? 'Servicios Principales' : 'Main Services'}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {city.services.priority.slice(0, 3).map((service) => (
                          <Chip
                            key={service}
                            size="sm"
                            variant="flat"
                            color="primary"
                            className="text-xs"
                          >
                            {service.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                          </Chip>
                        ))}
                        {city.services.priority.length > 3 && (
                          <Chip
                            size="sm"
                            variant="flat"
                            className="text-xs bg-slate-700 text-slate-300"
                          >
                            +{city.services.priority.length - 3}
                          </Chip>
                        )}
                      </div>
                    </div>

                    {/* Industries */}
                    <div className="mb-6">
                      <h3 className="text-sm font-semibold text-slate-300 mb-3 uppercase tracking-wide">
                        {locale === 'es' ? 'Industrias' : 'Industries'}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {city.services.industries.slice(0, 3).map((industry) => (
                          <Chip
                            key={industry}
                            size="sm"
                            variant="bordered"
                            className="text-xs border-slate-600 text-slate-400"
                          >
                            {industry.charAt(0).toUpperCase() + industry.slice(1)}
                          </Chip>
                        ))}
                        {city.services.industries.length > 3 && (
                          <Chip
                            size="sm"
                            variant="bordered"
                            className="text-xs border-slate-600 text-slate-400"
                          >
                            +{city.services.industries.length - 3}
                          </Chip>
                        )}
                      </div>
                    </div>

                    {/* Action Button */}
                    <Button
                      as={Link}
                      href={`/ciudades/${city.slug}`}
                      variant="ghost"
                      className="w-full text-blue-400 hover:text-blue-300 hover:bg-blue-400/10"
                    >
                      {locale === 'es' ? 'Ver servicios en' : 'View services in'} {cityName}
                    </Button>
                  </CardBody>
                </Card>
              );
            })}
          </div>

          {/* Coverage Info */}
          <section className="bg-slate-800/30 border border-slate-700 rounded-2xl p-8 mb-16">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-6">
                {locale === 'es' ? 'Cobertura Nacional' : 'National Coverage'}
              </h2>
              <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
                {locale === 'es'
                  ? 'Aunque nos enfocamos en estas ciudades principales, ofrecemos servicios de desarrollo de software a nivel nacional con soporte remoto completo.'
                  : 'While we focus on these major cities, we offer software development services nationwide with complete remote support.'
                }
              </p>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <h3 className="text-2xl font-bold text-blue-400 mb-2">7+</h3>
                  <p className="text-slate-400">
                    {locale === 'es' ? 'Ciudades Principales' : 'Major Cities'}
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-400 mb-2">32</h3>
                  <p className="text-slate-400">
                    {locale === 'es' ? 'Estados Atendidos' : 'States Served'}
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-400 mb-2">24/7</h3>
                  <p className="text-slate-400">
                    {locale === 'es' ? 'Soporte Remoto' : 'Remote Support'}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              {locale === 'es' ? '¿Tu ciudad no está en la lista?' : 'Your city not on the list?'}
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              {locale === 'es'
                ? 'No hay problema. Trabajamos con empresas de toda la República Mexicana de forma remota.'
                : 'No problem. We work with companies throughout Mexico remotely.'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                as={Link}
                href="https://wa.me/5550000000"
                color="success"
                size="lg"
                startContent={<WhatsAppIcon size={20} />}
              >
                {locale === 'es' ? 'Consultar Disponibilidad' : 'Check Availability'}
              </Button>
              <Button
                as={Link}
                href="/contact"
                variant="bordered"
                size="lg"
                className="border-slate-600 text-slate-200 hover:border-slate-500"
              >
                {locale === 'es' ? 'Contactar por Email' : 'Contact via Email'}
              </Button>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale = 'es' }) => {
  // Sort cities by population (descending)
  const sortedCities = [...mexicanCities].sort((a, b) => b.population - a.population);

  return {
    props: {
      cities: sortedCities,
      locale,
    },
    revalidate: 3600,
  };
};