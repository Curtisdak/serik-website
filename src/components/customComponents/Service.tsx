'use client'

import { motion } from "framer-motion"
import { Code, Camera, Video, Megaphone, PenTool,Brush  } from "lucide-react"

const services = [
  { icon: <Code />, title: "Développement Web", desc: "Sites web modernes, apps, landing pages." },
  { icon: <PenTool />, title: "Création de contenu", desc: "Rédaction, posts, design visuel." },
  { icon: <Camera />, title: "Photographie", desc: "Portraits, produits, évènements." },
  { icon: <Video />, title: "Vidéo", desc: "Tournage, montage, vidéos pro." },
  { icon: <Megaphone />, title: "Publicité", desc: "Stratégies marketing & publicité digitale." },
  { icon: <Brush  />, title: "Design", desc: "Création  de flyers, affiches , covers, logos " },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Mes Services
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="p-6 border border-zinc-200 dark:border-zinc-700 rounded-xl shadow-md bg-white dark:bg-zinc-800 ring ring-ring/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center mb-4 text-primary text-4xl">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
