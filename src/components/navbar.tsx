import { useState } from 'react';
import { useRouter } from 'next/router';
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@heroui/react';
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { CodeIcon, WhatsAppIcon, ChevronDownIcon } from "@/components/icons";
import { LanguageSwitcher } from '@/components/language-switcher';
import { Search } from '@/components/search';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { useTranslations } from '@/config/i18n';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const locale = router.locale as 'es' | 'en';
  const t = useTranslations(locale);

  const servicesItems = [
    { label: locale === 'es' ? 'Desarrollo Web' : 'Web Development', href: '/services#web-development' },
    { label: locale === 'es' ? 'Apps Móviles' : 'Mobile Apps', href: '/services#mobile-apps' },
    { label: locale === 'es' ? 'Sistemas ERP' : 'ERP Systems', href: '/services#erp-systems' },
    { label: locale === 'es' ? 'Integraciones' : 'Integrations', href: '/services#integrations' },
    { label: locale === 'es' ? 'Análisis de Datos' : 'Data Analytics', href: '/services#analytics' },
    { label: locale === 'es' ? 'Apps de Escritorio' : 'Desktop Apps', href: '/services#desktop-apps' }
  ];

  return (
    <>
    <HeroUINavbar 
      className="bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50 shadow-lg"
      maxWidth="xl" 
      position="sticky"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-2" href="/">
            <CodeIcon className="text-blue-400" size={32} />
            <p className="font-bold text-xl text-white">EvoSystems</p>
          </NextLink>
        </NavbarBrand>
        <div className="hidden lg:flex gap-6 justify-start ml-8">
          <NavbarItem>
            <Button
              variant="light"
              className={`text-slate-300 hover:text-blue-400 transition-colors font-medium ${
                router.pathname === '/' ? 'text-blue-400' : ''
              }`}
              as={NextLink}
              href="/"
            >
              {t.navigation.home}
            </Button>
          </NavbarItem>
          
          <NavbarItem>
            <Dropdown>
              <DropdownTrigger>
                <Button
                  variant="light"
                  className={`text-slate-300 hover:text-blue-400 transition-colors font-medium ${
                    router.pathname === '/services' ? 'text-blue-400' : ''
                  }`}
                  endContent={<ChevronDownIcon size={16} />}
                >
                  {t.navigation.services}
                </Button>
              </DropdownTrigger>
              <DropdownMenu className="bg-slate-800 border-slate-700">
                {servicesItems.map((item) => (
                  <DropdownItem key={item.href} className="text-slate-200 hover:text-white hover:bg-slate-700">
                    <NextLink href={item.href} className="block w-full">
                      {item.label}
                    </NextLink>
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          </NavbarItem>
          
          <NavbarItem>
            <Button
              variant="light"
              className={`text-slate-300 hover:text-blue-400 transition-colors font-medium ${
                router.pathname === '/about' ? 'text-blue-400' : ''
              }`}
              as={NextLink}
              href="/about"
            >
              {t.navigation.about}
            </Button>
          </NavbarItem>
          
          <NavbarItem>
            <Button
              variant="light"
              className={`text-slate-300 hover:text-blue-400 transition-colors font-medium ${
                router.pathname.startsWith('/blog') ? 'text-blue-400' : ''
              }`}
              as={NextLink}
              href="/blog"
            >
              {t.navigation.blog}
            </Button>
          </NavbarItem>
          
          <NavbarItem>
            <Button
              variant="light"
              className={`text-slate-300 hover:text-blue-400 transition-colors font-medium ${
                router.pathname === '/contact' ? 'text-blue-400' : ''
              }`}
              as={NextLink}
              href="/contact"
            >
              {t.navigation.contact}
            </Button>
          </NavbarItem>
        </div>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        {/* Search - Hidden on small screens */}
        <NavbarItem className="hidden md:flex">
          <Search className="w-56" />
        </NavbarItem>
        
        {/* Language Switcher */}
        <NavbarItem>
          <LanguageSwitcher variant="compact" />
        </NavbarItem>
        
        {/* WhatsApp Button */}
        <NavbarItem className="hidden lg:flex">
          <Button
            isExternal
            as={Link}
            className="bg-green-600 hover:bg-green-700 text-white font-medium transition-all duration-300"
            href={siteConfig.links.whatsapp}
            rel="noopener noreferrer"
            size="sm"
            startContent={<WhatsAppIcon size={14} />}
          >
            WhatsApp
          </Button>
        </NavbarItem>
        
        {/* Quote Button */}
        <NavbarItem className="hidden xl:flex">
          <Button
            as={NextLink}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-md transition-all duration-300"
            href="/contact"
            size="sm"
          >
            {locale === 'es' ? 'Cotizar' : 'Get Quote'}
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <NavbarMenuToggle className="text-slate-300" />
      </NavbarContent>

      <NavbarMenu className="bg-slate-900/95 backdrop-blur-md border-slate-700/50">
        <div className="mx-4 mt-6 flex flex-col gap-4">
          {/* Mobile Search */}
          <NavbarMenuItem>
            <Search className="w-full mb-4" onResultClick={() => setIsMenuOpen(false)} />
          </NavbarMenuItem>
          
          {/* Mobile Navigation Items */}
          <NavbarMenuItem>
            <NextLink
              className="font-medium text-lg hover:text-blue-400 transition-colors text-slate-300"
              href="/"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.navigation.home}
            </NextLink>
          </NavbarMenuItem>
          
          <NavbarMenuItem>
            <div className="space-y-2">
              <NextLink
                className="font-medium text-lg hover:text-blue-400 transition-colors text-slate-300 block"
                href="/services"
                onClick={() => setIsMenuOpen(false)}
              >
                {t.navigation.services}
              </NextLink>
              <div className="ml-4 space-y-1">
                {servicesItems.map((item) => (
                  <NextLink
                    key={item.href}
                    className="block text-sm text-slate-400 hover:text-white transition-colors py-1"
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </NextLink>
                ))}
              </div>
            </div>
          </NavbarMenuItem>
          
          <NavbarMenuItem>
            <NextLink
              className="font-medium text-lg hover:text-blue-400 transition-colors text-slate-300"
              href="/about"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.navigation.about}
            </NextLink>
          </NavbarMenuItem>
          
          <NavbarMenuItem>
            <NextLink
              className="font-medium text-lg hover:text-blue-400 transition-colors text-slate-300"
              href="/blog"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.navigation.blog}
            </NextLink>
          </NavbarMenuItem>
          
          <NavbarMenuItem>
            <NextLink
              className="font-medium text-lg hover:text-blue-400 transition-colors text-slate-300"
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.navigation.contact}
            </NextLink>
          </NavbarMenuItem>
          
          {/* Mobile CTA Buttons */}
          <NavbarMenuItem className="mt-4 space-y-3">
            <Button
              isExternal
              as={Link}
              className="bg-green-600 hover:bg-green-700 text-white font-medium w-full"
              href={siteConfig.links.whatsapp}
              rel="noopener noreferrer"
              size="md"
              startContent={<WhatsAppIcon size={18} />}
              onClick={() => setIsMenuOpen(false)}
            >
              WhatsApp
            </Button>
            <Button
              as={NextLink}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold w-full"
              href="/contact"
              size="md"
              onClick={() => setIsMenuOpen(false)}
            >
              {locale === 'es' ? 'Solicitar Cotización' : 'Get Quote'}
            </Button>
          </NavbarMenuItem>
        </div>
      </NavbarMenu>
    </HeroUINavbar>
    
    {/* Breadcrumbs - Show below navbar, hide on home page */}
    {router.pathname !== '/' && (
      <div className="bg-slate-900/50 border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <Breadcrumbs className="text-sm" />
        </div>
      </div>
    )}
    </>
  );
};