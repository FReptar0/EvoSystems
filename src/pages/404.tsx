import Head from "next/head";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import NextLink from "next/link";

import DefaultLayout from "@/pages/layouts/default";
import { title, subtitle } from "@/components/primitives";
import { CodeIcon, CompassIcon } from "@/components/icons";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Página No Encontrada - 404 | EvoSystems</title>
        <meta
          name="description"
          content="Lo sentimos, la página que buscas no existe. Explora nuestros servicios de desarrollo de software y soluciones tecnológicas."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      
      <DefaultLayout>
        <section className="flex flex-col items-center justify-center min-h-screen py-8 md:py-10 bg-gradient-to-br from-slate-900 to-slate-800">
          <div className="inline-block max-w-lg text-center">
            <div className="flex justify-center mb-8">
              <div className="bg-red-600/20 w-24 h-24 rounded-full flex items-center justify-center">
                <CompassIcon className="text-red-400" size={48} />
              </div>
            </div>
            
            <h1 className={`${title({ size: "lg" })} text-white mb-6`}>
              Oops!{" "}
              <span className={title({ color: "blue", size: "lg" })}>
                Página no encontrada
              </span>
            </h1>
            
            <div className={`${subtitle()} text-slate-300 mb-8`}>
              Parece que has llegado a una página que no existe. 
              La URL que buscas no está disponible o ha sido movida.
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button
                as={NextLink}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 shadow-lg"
                href="/"
                size="lg"
              >
                <CodeIcon size={20} />
                Volver al Inicio
              </Button>
              <Button
                as={NextLink}
                className="bg-slate-700 hover:bg-slate-600 text-slate-200 font-semibold px-8 py-3 shadow-lg"
                href="/services"
                size="lg"
                variant="flat"
              >
                Ver Servicios
              </Button>
            </div>

            <div className="text-sm text-slate-400">
              <p className="mb-2">¿Buscabas algo específico?</p>
              <div className="flex flex-wrap justify-center gap-2">
                <Link
                  as={NextLink}
                  className="text-blue-400 hover:text-blue-300"
                  href="/services"
                >
                  Servicios
                </Link>
                <span>•</span>
                <Link
                  as={NextLink}
                  className="text-blue-400 hover:text-blue-300"
                  href="/solutions"
                >
                  Soluciones
                </Link>
                <span>•</span>
                <Link
                  as={NextLink}
                  className="text-blue-400 hover:text-blue-300"
                  href="/about"
                >
                  Nosotros
                </Link>
                <span>•</span>
                <Link
                  as={NextLink}
                  className="text-blue-400 hover:text-blue-300"
                  href="/contact"
                >
                  Contacto
                </Link>
              </div>
            </div>
          </div>
        </section>
      </DefaultLayout>
    </>
  );
}