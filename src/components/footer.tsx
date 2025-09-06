import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

import { siteConfig } from "@/config/site";
import { LinkedInIcon, GithubIcon, WhatsAppIcon } from "@/components/icons";

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12 border-t border-slate-700/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-8">
          <div className="col-span-2">
            <h3 className="text-xl font-bold mb-4">EvoSystems</h3>
            <p className="text-slate-400 mb-6 max-w-md">
              Transformamos ideas en soluciones tecnológicas. Desarrollo de software 
              profesional para impulsar tu negocio.
            </p>
            <div className="flex gap-4">
              <Button
                isExternal
                isIconOnly
                as={Link}
                className="bg-transparent hover:bg-slate-800 border border-slate-700"
                href={siteConfig.links.linkedin}
                variant="ghost"
              >
                <LinkedInIcon className="text-blue-400" size={20} />
              </Button>
              <Button
                isExternal
                isIconOnly
                as={Link}
                className="bg-transparent hover:bg-slate-800 border border-slate-700"
                href={siteConfig.links.github}
                variant="ghost"
              >
                <GithubIcon className="text-slate-300" size={20} />
              </Button>
              <Button
                isExternal
                isIconOnly
                as={Link}
                className="bg-transparent hover:bg-slate-800 border border-slate-700"
                href={siteConfig.links.whatsapp}
                variant="ghost"
              >
                <WhatsAppIcon className="text-emerald-400" size={20} />
              </Button>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Servicios</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link className="text-slate-400 hover:text-blue-400 transition-colors" href="/services">
                  Desarrollo Web
                </Link>
              </li>
              <li>
                <Link className="text-slate-400 hover:text-blue-400 transition-colors" href="/services">
                  Apps Móviles
                </Link>
              </li>
              <li>
                <Link className="text-slate-400 hover:text-blue-400 transition-colors" href="/services">
                  Sistemas ERP
                </Link>
              </li>
              <li>
                <Link className="text-slate-400 hover:text-blue-400 transition-colors" href="/services">
                  Integraciones
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Información</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link className="text-slate-400 hover:text-blue-400 transition-colors" href="/about">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link className="text-slate-400 hover:text-blue-400 transition-colors" href="/contact">
                  Contacto
                </Link>
              </li>
              <li>
                <Link className="text-slate-400 hover:text-blue-400 transition-colors" href="/solutions">
                  Soluciones
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Legal</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link className="text-slate-400 hover:text-blue-400 transition-colors" href="/terms">
                  Términos
                </Link>
              </li>
              <li>
                <Link className="text-slate-400 hover:text-blue-400 transition-colors" href="/privacy">
                  Privacidad
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p>
              © 2025 EvoSystems. Todos los derechos reservados.
            </p>
            <div className="flex gap-4 text-sm">
              <Link className="text-slate-400 hover:text-blue-400 transition-colors" href="/terms">
                Términos
              </Link>
              <span>•</span>
              <Link className="text-slate-400 hover:text-blue-400 transition-colors" href="/privacy">
                Privacidad
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};