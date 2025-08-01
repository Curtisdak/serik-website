"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <motion.footer
      className="bg-gradient-to-t from-primary/50 to-background py-10 px-6 mt-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <div className=" flex items-center text-center">
            {" "}
            <Image
              src="/serikLogo.svg"
              alt="Serik Logo"
              width={40}
              height={40}
              priority
            />{" "}
            
            <h2 className="text-xl font-bold mb-2"> Serik.io</h2>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Serik. Tous droits réservés.
          </p>
        </div>

        <nav className="flex gap-6 text-sm">
          <Link href="/" className="hover:text-ring transition">
            Accueil
          </Link>
          <Link href="#services" className="hover:text-ring transition">
            Services
          </Link>
          <Link href="/contact" className="hover:text-ring transition">
            Contact
          </Link>
        </nav>

        <div className="flex gap-4 text-muted-foreground">
          <a
            href="https://github.com/curtisdak"
            target="_blank"
            className="hover:text-white transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            className="hover:text-white transition"
          >
            LinkedIn
          </a>
          <a
            href="mailto:contact@serik.io"
            className="hover:text-white transition"
          >
            Email
          </a>
        </div>
      </div>
    </motion.footer>
  );
}
