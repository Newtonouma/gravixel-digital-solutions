"use client"

import { Hero } from "../../../components/heros/Hero"
import { About } from "../../../components/about/About"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
    </div>
  )
}
