"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {Separator} from '@/components/ui/separator'

type PortfolioItem = {
  id: number;
  title: string;
  category: "web" | "photo" | "video" | "design";
  image: string;
  link?: string;
};

const items: PortfolioItem[] = [
  {
    id: 1,
    title: "Site / application",
    category: "web",
    image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg",
  },
  {
    id: 2,
    title: "E-commerce",
    category: "web",
    image:
      "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?_gl=1*1j6p4x1*_ga*ODM1NDg5LjE3NTM5MzUzNTA.*_ga_8JE65Q40S6*czE3NTQwMDI5NTEkbzQkZzEkdDE3NTQwMDMzMDEkajU5JGwwJGgw",
  },
  {
    id: 3,
    title: "Shooting Studio",
    category: "photo",
    image: "https://images.pexels.com/photos/1983036/pexels-photo-1983036.jpeg",
  },
  {
    id: 4,
    title: "Spot publicitaire YouTube",
    category: "video",
    image: "https://images.pexels.com/photos/7595266/pexels-photo-7595266.jpeg",
  },
  {
    id: 5,
    title: "Affiche Insta",
    category: "design",
    image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg",
  },
  {
    id: 6,
    title: "Montage Video",
    category: "video",
    image:
      "https://images.pexels.com/photos/8102676/pexels-photo-8102676.jpeg?_gl=1*1yfslwm*_ga*ODM1NDg5LjE3NTM5MzUzNTA.*_ga_8JE65Q40S6*czE3NTQwMDI5NTEkbzQkZzEkdDE3NTQwMDI5ODMkajI4JGwwJGgw",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="py-20 px-6 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white"
    >
      <motion.div
        className="max-w-6xl mx-auto text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-10">
          <Separator />
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {items.map((item) => {
            const CardContent = (
              <div className="relative w-full h-64 overflow-hidden rounded-xl shadow-md group">
                {/* Image */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

                {/* Text */}
                <div className="absolute bottom-0 left-0 w-full p-4 text-white z-10">
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="text-sm text-ring capitalize">
                    {item.category}
                  </p>
                </div>
              </div>
            );

            return (
              <motion.div
                key={item.id}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {item.link ? (
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {CardContent}
                  </a>
                ) : (
                  CardContent
                )}
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
