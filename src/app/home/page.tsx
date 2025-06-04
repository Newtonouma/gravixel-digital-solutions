"use client"

import { Hero } from "../../../components/heros/Hero"
import { About } from "../../../components/about/About"
import Services from "../../../components/services/Services"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Services />
    </div>
  )
}
