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
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { CodeIcon, WhatsAppIcon } from "@/components/icons";

export const Navbar = () => {
  return (
    <HeroUINavbar 
      className="bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50 shadow-lg"
      maxWidth="xl" 
      position="sticky"
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-2" href="/">
            <CodeIcon className="text-blue-400" size={32} />
            <p className="font-bold text-xl text-white">EvoSystems</p>
          </NextLink>
        </NavbarBrand>
        <div className="hidden lg:flex gap-6 justify-start ml-8">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-blue-400 data-[active=true]:font-medium hover:text-blue-400 transition-colors font-medium text-slate-300",
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </div>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden md:flex">
          <Button
            isExternal
            as={Link}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-md transition-all duration-300"
            href={siteConfig.links.whatsapp}
            rel="noopener noreferrer"
            size="sm"
            startContent={<WhatsAppIcon size={16} />}
          >
            Contáctanos
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <NavbarMenuToggle className="text-slate-300" />
      </NavbarContent>

      <NavbarMenu className="bg-slate-900/95 backdrop-blur-md border-slate-700/50">
        <div className="mx-4 mt-6 flex flex-col gap-4">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="font-medium text-lg hover:text-blue-400 transition-colors text-slate-300"
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                      ? "danger"
                      : "foreground"
                }
                href={item.href}
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
          <NavbarMenuItem>
            <Button
              isExternal
              as={Link}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-md w-fit mt-4"
              href={siteConfig.links.whatsapp}
              rel="noopener noreferrer"
              size="md"
              startContent={<WhatsAppIcon size={18} />}
            >
              Contáctanos por WhatsApp
            </Button>
          </NavbarMenuItem>
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};