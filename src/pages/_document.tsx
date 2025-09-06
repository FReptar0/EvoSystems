import { Html, Head, Main, NextScript } from "next/document";
import clsx from "clsx";

import { fontSans } from "@/config/fonts";

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        {/* Metadatos básicos */}
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta
          content="EvoSystems - Desarrollo de software profesional: aplicaciones web, móviles, sistemas ERP y soluciones tecnológicas."
          name="description"
        />
        <link href="/favicon.ico" rel="icon" />

        {/* Metadatos para redes sociales */}
        <meta
          content="EvoSystems - Desarrollo de Software Profesional"
          property="og:title"
        />
        <meta
          content="Transformamos ideas en soluciones tecnológicas. Desarrollo web, móvil y sistemas empresariales."
          property="og:description"
        />
        <meta
          content="https://www.evosystems.dev/social-card.png"
          property="og:image"
        />
        <meta
          content="EvoSystems - Desarrollo de software y soluciones tecnológicas"
          property="og:image:alt"
        />
        <meta content="https://www.evosystems.dev" property="og:url" />
        <meta content="website" property="og:type" />

        {/* Metadatos para Twitter */}
        <meta content="summary_large_image" name="twitter:card" />
        <meta
          content="EvoSystems - Desarrollo de Software Profesional"
          name="twitter:title"
        />
        <meta
          content="Transformamos ideas en soluciones tecnológicas. Desarrollo web, móvil y sistemas empresariales."
          name="twitter:description"
        />
        <meta
          content="https://www.evosystems.dev/social-card.png"
          name="twitter:image"
        />
        <meta
          content="EvoSystems - Desarrollo de software y soluciones tecnológicas"
          name="twitter:image:alt"
        />
        <meta
          content="https://www.evosystems.dev/social-card.png"
          name="twitter:url"
        />
      </Head>
      <body
        className={clsx(
          "min-h-screen bg-slate-900 font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}