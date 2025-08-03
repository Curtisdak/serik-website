"use client";

import { motion } from "framer-motion";
import Image from "next/image";
export default function Hero() {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-primary to-background text-white">
      <motion.h1
        className="flex items-center flex-col gap-2 text-4xl md:text-6xl font-bold mb-4"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src="/serikLogo.svg"
          alt="Serik Logo"
          width={68}
          height={68}
          priority
        />
        <span className="text-white text-4xl">SERIK</span>
      </motion.h1>

      <motion.p
        className="text-lg md:text-2xl mb-6 max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        Développeur Full Stack · Créateur de contenu · Photographe · Vidéaste ·
        Publicitaire
      </motion.p>

      <motion.a
        href="#services"
        className="bg-ring/50 text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary transition  "
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        Découvrir mes services
      </motion.a>
    </section>
  );
}
