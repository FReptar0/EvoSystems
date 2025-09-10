import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardBody, Button, Chip } from '@heroui/react';
import { Navbar } from '@/components/navbar';
import { WhatsAppIcon, EmailIcon, PhoneIcon, WebIcon, MobileIcon, ERPIcon, IntegrationIcon, AnalyticsIcon, DesktopIcon } from '@/components/icons';
import { useTranslations } from '@/config/i18n';
import { mexicanCities, getCityBySlug, CityData } from '@/data/cities';

const serviceIcons = {
  'web-development': WebIcon,
  'mobile-apps': MobileIcon,
  'erp-systems': ERPIcon,
  'integrations': IntegrationIcon,
  'analytics': AnalyticsIcon,
  'desktop-apps': DesktopIcon
};

interface CityPageProps {
  city: CityData;
  locale: string;
}

export default function CityPage({ city, locale }: CityPageProps) {
  const t = useTranslations(locale as 'es' | 'en');
  
  const seoData = city.seo[locale as 'es' | 'en'];
  const cityName = city.name[locale as 'es' | 'en'];
  const stateName = city.state[locale as 'es' | 'en'];

  const serviceNames = {
    'web-development': locale === 'es' ? 'Desarrollo Web' : 'Web Development',
    'mobile-apps': locale === 'es' ? 'Apps Móviles' : 'Mobile Apps',
    'erp-systems': locale === 'es' ? 'Sistemas ERP' : 'ERP Systems',
    'integrations': locale === 'es' ? 'Integraciones' : 'Integrations',
    'analytics': locale === 'es' ? 'Análisis de Datos' : 'Data Analytics',
    'desktop-apps': locale === 'es' ? 'Apps de Escritorio' : 'Desktop Apps'
  };

  const industryNames = {
    finance: locale === 'es' ? 'Finanzas' : 'Finance',
    technology: locale === 'es' ? 'Tecnología' : 'Technology',
    manufacturing: locale === 'es' ? 'Manufactura' : 'Manufacturing',
    healthcare: locale === 'es' ? 'Salud' : 'Healthcare',
    retail: locale === 'es' ? 'Retail' : 'Retail',
    tourism: locale === 'es' ? 'Turismo' : 'Tourism',
    hospitality: locale === 'es' ? 'Hotelería' : 'Hospitality',
    logistics: locale === 'es' ? 'Logística' : 'Logistics',
    automotive: locale === 'es' ? 'Automotriz' : 'Automotive',
    aerospace: locale === 'es' ? 'Aeroespacial' : 'Aerospace',
    education: locale === 'es' ? 'Educación' : 'Education',
    government: locale === 'es' ? 'Gobierno' : 'Government'
  };

  return (
    <>
      <Head>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords.join(', ')} />
        <link rel="canonical" href={`https://evosystems.dev${locale === 'en' ? '/en' : ''}/ciudades/${city.slug}`} />
        
        {/* Open Graph */}
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://evosystems.dev${locale === 'en' ? '/en' : ''}/ciudades/${city.slug}`} />
        <meta property="og:image" content={`https://evosystems.dev/cities/${city.slug}-hero.jpg`} />
        
        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": `EvoSystems - ${cityName}`,
              "description": seoData.description,
              "url": `https://evosystems.dev${locale === 'en' ? '/en' : ''}/ciudades/${city.slug}`,
              "telephone": "+52-55-0000-0000",
              "email": "info@evosystems.dev",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": cityName,
                "addressRegion": stateName,
                "addressCountry": "MX"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": city.coordinates.lat,
                "longitude": city.coordinates.lng
              },
              "areaServed": {
                "@type": "City",
                "name": cityName
              },
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": city.coordinates.lat,
                  "longitude": city.coordinates.lng
                },
                "geoRadius": 50000
              },
              "services": city.services.priority.map(service => serviceNames[service as keyof typeof serviceNames])
            })
          }}
        />
      </Head>

      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
        <div className="container mx-auto px-6 py-24">

          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {locale === 'es' ? 'Desarrollo de Software en' : 'Software Development in'}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                {cityName}
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              {locale === 'es' 
                ? `Soluciones tecnológicas profesionales para empresas en ${cityName}, ${stateName}. Desarrollo web, aplicaciones móviles, sistemas ERP y más.`
                : `Professional technological solutions for businesses in ${cityName}, ${stateName}. Web development, mobile applications, ERP systems and more.`
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
                {locale === 'es' ? 'Cotización WhatsApp' : 'WhatsApp Quote'}
              </Button>
              <Button
                as={Link}
                href="/contact"
                variant="bordered"
                size="lg"
                startContent={<EmailIcon size={20} />}
                className="border-slate-600 text-slate-200 hover:border-slate-500"
              >
                {locale === 'es' ? 'Contacto Formal' : 'Formal Contact'}
              </Button>
            </div>
          </div>

          {/* City Stats */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-slate-800/30 border-slate-700">
              <CardBody className="text-center p-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {city.population.toLocaleString()}
                </h3>
                <p className="text-slate-400">
                  {locale === 'es' ? 'Habitantes' : 'Inhabitants'}
                </p>
              </CardBody>
            </Card>
            <Card className="bg-slate-800/30 border-slate-700">
              <CardBody className="text-center p-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {city.economicSectors.length}+
                </h3>
                <p className="text-slate-400">
                  {locale === 'es' ? 'Sectores Industriales' : 'Industrial Sectors'}
                </p>
              </CardBody>
            </Card>
            <Card className="bg-slate-800/30 border-slate-700">
              <CardBody className="text-center p-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  24/7
                </h3>
                <p className="text-slate-400">
                  {locale === 'es' ? 'Soporte WhatsApp' : 'WhatsApp Support'}
                </p>
              </CardBody>
            </Card>
          </div>

          {/* Priority Services */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              {locale === 'es' ? `Servicios Principales en ${cityName}` : `Main Services in ${cityName}`}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {city.services.priority.map((serviceKey) => {
                const ServiceIcon = serviceIcons[serviceKey as keyof typeof serviceIcons];
                const serviceName = serviceNames[serviceKey as keyof typeof serviceNames];
                
                return (
                  <Card key={serviceKey} className="bg-slate-800/30 border-slate-700 hover:bg-slate-800/50 transition-all duration-300">
                    <CardBody className="p-8 text-center">
                      <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center">
                        <ServiceIcon size={32} className="text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4">{serviceName}</h3>
                      <Button
                        as={Link}
                        href={`/services#${serviceKey}`}
                        variant="ghost"
                        size="sm"
                        className="text-blue-400 hover:text-blue-300"
                      >
                        {locale === 'es' ? 'Ver detalles' : 'View details'}
                      </Button>
                    </CardBody>
                  </Card>
                );
              })}
            </div>
          </section>

          {/* Industries */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              {locale === 'es' ? `Industrias que Atendemos en ${cityName}` : `Industries We Serve in ${cityName}`}
            </h2>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {city.services.industries.map((industry) => (
                <Chip 
                  key={industry}
                  size="lg"
                  variant="flat"
                  color="primary"
                  className="text-white"
                >
                  {industryNames[industry as keyof typeof industryNames] || industry}
                </Chip>
              ))}
            </div>
            <div className="text-center">
              <p className="text-slate-300 mb-6">
                {locale === 'es' 
                  ? `Tenemos experiencia trabajando con empresas de ${cityName} en diversos sectores industriales.`
                  : `We have experience working with companies in ${cityName} across various industrial sectors.`
                }
              </p>
              <Button
                as={Link}
                href="/solutions"
                variant="bordered"
                className="border-slate-600 text-slate-200 hover:border-slate-500"
              >
                {locale === 'es' ? 'Ver Soluciones por Industria' : 'View Industry Solutions'}
              </Button>
            </div>
          </section>

          {/* Local Benefits */}
          <section className="mb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">
                  {locale === 'es' ? `¿Por qué elegir EvoSystems en ${cityName}?` : `Why choose EvoSystems in ${cityName}?`}
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-slate-300">
                      {locale === 'es' 
                        ? 'Conocimiento profundo del mercado local y las necesidades empresariales'
                        : 'Deep knowledge of local market and business needs'
                      }
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-slate-300">
                      {locale === 'es' 
                        ? 'Soporte técnico en zona horaria local y en español'
                        : 'Technical support in local time zone and language'
                      }
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-slate-300">
                      {locale === 'es' 
                        ? 'Experiencia en regulaciones y normativas locales'
                        : 'Experience with local regulations and standards'
                      }
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-slate-300">
                      {locale === 'es' 
                        ? 'Red de partners y proveedores locales'
                        : 'Network of local partners and providers'
                      }
                    </span>
                  </li>
                </ul>
              </div>
              <Card className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border-slate-700">
                <CardBody className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-white mb-6">
                    {locale === 'es' ? '¿Listo para comenzar?' : 'Ready to get started?'}
                  </h3>
                  <p className="text-slate-300 mb-6">
                    {locale === 'es' 
                      ? 'Obtén una cotización gratuita y personalizada para tu proyecto'
                      : 'Get a free and personalized quote for your project'
                    }
                  </p>
                  <div className="space-y-4">
                    <Button
                      as={Link}
                      href="https://wa.me/5550000000"
                      color="success"
                      size="lg"
                      startContent={<WhatsAppIcon size={20} />}
                      className="w-full"
                    >
                      {locale === 'es' ? 'Consulta por WhatsApp' : 'WhatsApp Consultation'}
                    </Button>
                    <Button
                      as={Link}
                      href="tel:+525550000000"
                      variant="bordered"
                      size="lg"
                      startContent={<PhoneIcon size={20} />}
                      className="w-full border-slate-600 text-slate-200 hover:border-slate-500"
                    >
                      +52 55 0000 0000
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </div>
          </section>

          {/* Related Cities */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              {locale === 'es' ? 'También atendemos otras ciudades' : 'We also serve other cities'}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mexicanCities
                .filter(c => c.id !== city.id)
                .slice(0, 6)
                .map((relatedCity) => (
                  <Card 
                    key={relatedCity.id} 
                    className="bg-slate-800/30 border-slate-700 hover:bg-slate-800/50 transition-all duration-300"
                  >
                    <CardBody className="p-6 text-center">
                      <h3 className="text-lg font-bold text-white mb-2">
                        {relatedCity.name[locale as 'es' | 'en']}
                      </h3>
                      <p className="text-slate-400 text-sm mb-4">
                        {relatedCity.state[locale as 'es' | 'en']}
                      </p>
                      <Button
                        as={Link}
                        href={`/ciudades/${relatedCity.slug}`}
                        variant="ghost"
                        size="sm"
                        className="text-blue-400 hover:text-blue-300"
                      >
                        {locale === 'es' ? 'Ver servicios' : 'View services'}
                      </Button>
                    </CardBody>
                  </Card>
                ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = mexicanCities.flatMap(city => [
    { params: { city: city.slug }, locale: 'es' },
    { params: { city: city.slug }, locale: 'en' }
  ]);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params, locale = 'es' }) => {
  const citySlug = params?.city as string;
  const city = getCityBySlug(citySlug);

  if (!city) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      city,
      locale,
    },
    revalidate: 3600,
  };
};