"use client"

import { Navbar } from "../../../components/navbar/Navbar"
import { Hero } from "../../../components/heros/Hero"
import { About } from "../../../components/about/About"
import Services from "../../../components/services/Services"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
    </div>
  )
}
