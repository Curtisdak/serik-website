'use client'

import { useState, ChangeEvent, FormEvent } from "react"
import { supabase } from "@/lib/supabase"
import { motion } from "framer-motion"
import { Button } from "../ui/button"
import Image from "next/image"
import { toast } from "sonner"

type FormData = {
  name: string
  email: string
  message: string
}

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  })

  

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const { error } = await supabase.from('messages').insert([form])
    if (error) {
      toast.error("Erreur lors de l'envoi : " + error.message)
    } else {
      
       toast.success(`Merci ${form.name} pour votre message , vous serez contacté au plus vite par notre equipe`)
      setForm({ name: '', email: '', message: '' })
    }
  }

  return (
    <section id="contact" className="py-20 px-6  ">
      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Left Section: Image + Encouragement Text */}
        <div className="relative h-96 md:h-[500px] w-full overflow-hidden rounded-xl shadow-md">
          <Image
            src="https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg"
            alt="Contact illustration"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60 hover:bg-black/80 transition-all duration-500 flex flex-col justify-center items-center text-center px-4">
            <h3 className="text-white text-3xl md:text-3xl font-bold mb-2">
              Travaillons ensemble
            </h3>
            <p className="text-white text-lg  max-w-md">
              Vous avez une idée, un projet ou besoin de mes services ?
              <br />
              Contactez-moi dès maintenant pour en discuter !
            </p>
          </div>
        </div>

        {/* Right Section: Contact Form */}
        <div className="text-left">
          <h2 className="text-3xl font-bold mb-6 text-secondary-foreground">Contactez-moi</h2>


          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Votre nom"
              className="w-full p-3 rounded-lg bg-input outline-none focus:border-2 focus:border-primary transition-all duration-500"
              onChange={handleChange}
              value={form.name}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Votre email"
              className="w-full p-3 rounded-lg bg-input outline-none focus:border-2 focus:border-primary transition-all duration-500"
              onChange={handleChange}
              value={form.email}
              required
            />
            <textarea
              name="message"
              rows={5}
              placeholder="Votre message"
              className="w-full p-3 rounded-lg bg-input outline-none focus:border-2 focus:border-primary transition-all duration-500"
              onChange={handleChange}
              value={form.message}
              required
            />
            <Button
              type="submit"
              className="bg-ring/50 hover:bg-ring/90 transition duration-500 text-white px-6 py-3 rounded-lg font-semibold "
            >
              Envoyer
            </Button>
          </form>
        </div>
      </motion.div>
    </section>
  )
}
