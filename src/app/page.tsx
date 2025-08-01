"use client";

import ContactForm from "@/components/customComponents/ContactForm";
import Footer from "@/components/customComponents/Footer";
import Hero from "@/components/customComponents/HeroSection";
import Portfolio from "@/components/customComponents/PortofolioUI";
import Services from "@/components/customComponents/Service";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
       <Portfolio />
       <ContactForm/>
      <Footer />
    </>
  );
}
