"use client"

import { Hero } from "../../../components/heros/Hero"
import { About } from "../../../components/about/About"
import Services from "../../../components/services/Services"
import WhyChooseUs from "../../../components/whychooseus/WhyChooseUs"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
    </div>
  )
}
