import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { 
  Navbar, 
  NavbarBrand, 
  NavbarContent, 
  NavbarItem, 
  NavbarMenuToggle, 
  NavbarMenu, 
  NavbarMenuItem, 
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem
} from '@heroui/react';
import { Logo, ChevronDownIcon } from '@/components/icons';
import { LanguageSwitcher } from '@/components/language-switcher';
import { Search } from '@/components/search';
import { useTranslations } from '@/config/i18n';

export const SiteNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const locale = router.locale as 'es' | 'en';
  const t = useTranslations(locale);

  const menuItems = [
    {
      label: t.navigation.home,
      href: '/',
      isActive: router.pathname === '/'
    },
    {
      label: t.navigation.services,
      href: '/services',
      isActive: router.pathname === '/services',
      hasDropdown: true,
      dropdownItems: [
        { label: locale === 'es' ? 'Desarrollo Web' : 'Web Development', href: '/services#web-development' },
        { label: locale === 'es' ? 'Apps Móviles' : 'Mobile Apps', href: '/services#mobile-apps' },
        { label: locale === 'es' ? 'Sistemas ERP' : 'ERP Systems', href: '/services#erp-systems' },
        { label: locale === 'es' ? 'Integraciones' : 'Integrations', href: '/services#integrations' },
        { label: locale === 'es' ? 'Análisis de Datos' : 'Data Analytics', href: '/services#analytics' },
        { label: locale === 'es' ? 'Apps de Escritorio' : 'Desktop Apps', href: '/services#desktop-apps' }
      ]
    },
    {
      label: t.navigation.solutions,
      href: '/solutions',
      isActive: router.pathname === '/solutions'
    },
    {
      label: t.navigation.about,
      href: '/about',
      isActive: router.pathname === '/about'
    },
    {
      label: t.navigation.blog,
      href: '/blog',
      isActive: router.pathname.startsWith('/blog')
    },
    {
      label: locale === 'es' ? 'Ciudades' : 'Cities',
      href: '/ciudades',
      isActive: router.pathname.startsWith('/ciudades')
    },
    {
      label: t.navigation.contact,
      href: '/contact',
      isActive: router.pathname === '/contact'
    }
  ];

  return (
    <Navbar 
      onMenuOpenChange={setIsMenuOpen}
      className="bg-slate-900/95 backdrop-blur-md border-b border-slate-800"
      maxWidth="full"
      position="sticky"
    >
      {/* Mobile Menu Toggle */}
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-white"
        />
        <NavbarBrand>
          <Link href="/" className="flex items-center gap-2">
            <Logo className="text-blue-400" />
            <p className="font-bold text-white text-lg">EvoSystems</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      {/* Desktop Navigation */}
      <NavbarContent className="hidden sm:flex gap-6" justify="center">
        {menuItems.map((item) => (
          <NavbarItem key={item.href}>
            {item.hasDropdown ? (
              <Dropdown>
                <DropdownTrigger>
                  <Button
                    variant="light"
                    className={`text-white hover:text-blue-400 transition-colors ${
                      item.isActive ? 'text-blue-400' : ''
                    }`}
                    endContent={<ChevronDownIcon size={16} />}
                  >
                    {item.label}
                  </Button>
                </DropdownTrigger>
                <DropdownMenu 
                  aria-label={`${item.label} menu`}
                  className="bg-slate-800 border-slate-700"
                >
                  {item.dropdownItems?.map((dropdownItem) => (
                    <DropdownItem 
                      key={dropdownItem.href}
                      className="text-slate-200 hover:text-white hover:bg-slate-700"
                    >
                      <Link href={dropdownItem.href} className="block w-full">
                        {dropdownItem.label}
                      </Link>
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
            ) : (
              <Link
                href={item.href}
                className={`text-white hover:text-blue-400 transition-colors font-medium ${
                  item.isActive ? 'text-blue-400' : ''
                }`}
              >
                {item.label}
              </Link>
            )}
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Right Side Content */}
      <NavbarContent justify="end">
        {/* Search - Hidden on mobile, shown on tablet and up */}
        <NavbarItem className="hidden md:flex">
          <Search className="w-64" />
        </NavbarItem>

        {/* Language Switcher */}
        <NavbarItem>
          <LanguageSwitcher variant="compact" />
        </NavbarItem>

        {/* CTA Button */}
        <NavbarItem className="hidden lg:flex">
          <Button
            as={Link}
            href="/contact"
            color="primary"
            variant="solid"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
          >
            {locale === 'es' ? 'Cotizar' : 'Get Quote'}
          </Button>
        </NavbarItem>
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu className="bg-slate-900/98 backdrop-blur-md pt-6">
        {/* Mobile Search */}
        <NavbarMenuItem className="mb-6">
          <Search 
            className="w-full" 
            onResultClick={() => setIsMenuOpen(false)}
          />
        </NavbarMenuItem>

        {/* Mobile Menu Items */}
        {menuItems.map((item) => (
          <NavbarMenuItem key={item.href}>
            {item.hasDropdown ? (
              <div className="space-y-2">
                <Link
                  href={item.href}
                  className={`block text-lg font-medium transition-colors ${
                    item.isActive ? 'text-blue-400' : 'text-white hover:text-blue-400'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
                <div className="ml-4 space-y-2">
                  {item.dropdownItems?.map((dropdownItem) => (
                    <Link
                      key={dropdownItem.href}
                      href={dropdownItem.href}
                      className="block text-sm text-slate-300 hover:text-white transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {dropdownItem.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                href={item.href}
                className={`block text-lg font-medium transition-colors ${
                  item.isActive ? 'text-blue-400' : 'text-white hover:text-blue-400'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            )}
          </NavbarMenuItem>
        ))}

        {/* Mobile CTA */}
        <NavbarMenuItem className="mt-6">
          <Button
            as={Link}
            href="/contact"
            color="primary"
            variant="solid"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600"
            onClick={() => setIsMenuOpen(false)}
          >
            {locale === 'es' ? 'Solicitar Cotización' : 'Get Quote'}
          </Button>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};

export default SiteNavbar;