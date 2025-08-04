"use client"

import { useState } from "react";
import { Menu, X } from "lucide-react";
import {Button} from "@/components/ui/button";
import LocaleSwitcher from "@/components/LocaleSwitcher";
import {NavItem} from "@/lib/queries/layout";
import {Locale} from "@/lib/i18n";
import Link from "next/link";
import {useIsMobile} from "@/hooks/use-mobile";
import Image from "next/image";


const Header = ({navItems, logo, locale}: {navItems: NavItem[], logo: string, locale: Locale}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <header className={`${isMobile ? "sticky" : "fixed"} top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Image src={logo} alt="Orion Sports Club" width={120} height={30} className="cursor-pointer w-[120px] h-auto" onClick={() => window.scrollTo(0, 0)}/>

          {/* Desktop Navigation */}
          {!isMobile && <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item: NavItem) => (
                <Link
                    key={item.url || item.label}
                    href={item.url}
                    target={item.openInNewTab ? '_blank' : '_self'}
                    className="text-foreground hover:text-primary transition-smooth relative group"
                >
                  {item.label}
                  <span
                      className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-smooth group-hover:w-full"></span>
                </Link>
            ))}
          </nav>}

          {/* Language Selector & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <LocaleSwitcher current={locale} />

            {/* Mobile menu button */}
            {isMobile && <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5"/> : <Menu className="h-5 w-5"/>}
            </Button>}
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobile && isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item:NavItem) => (
                <Link
                  key={item.url}
                  href={item.url}
                  className="text-foreground hover:text-primary transition-smooth py-2 px-4 hover:bg-accent rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;