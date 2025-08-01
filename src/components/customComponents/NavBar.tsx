"use client";

import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { LittleMenu } from "./LittleMenu";
import Image from "next/image";

export const navItems = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 lg:top-3 left-1/2 -translate-x-1/2 z-50 w-[100%] lg:w-[50%] lg:rounded-full bg-background backdrop-blur-sm  shadow-md">
      <nav className="flex items-center justify-between px-4 py-2 max-w-6xl mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/serikLogo.svg"
            alt="Serik Logo"
            width={38}
            height={38}
            priority
          />
          <span className="text-xl font-bold text-primary">serik.io</span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-6 text-md font-semibold">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-muted-foreground hover:text-ring/80 transition-colors duration-300 "
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right icons (mobile menu + theme toggle) */}
        <div className="flex items-center gap-4">
          <div className="block md:hidden">
            <LittleMenu />
          </div>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
