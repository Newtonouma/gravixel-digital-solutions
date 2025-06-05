"use client"

import { Hero } from "../../../components/heros/Hero"
import { About } from "../../../components/about/About"
import Services from "../../../components/services/Services"
import WhyChooseUs from "../../../components/whychooseus/WhyChooseUs"
import CaseStudy from "../../../components/casestudy/CaseStudy"
import Testimonials from "../../../components/testimonials/Testimonials"
import FAQ from "../../../components/faq/FAQ"
import Message from "../../../components/message/Message"
import Footer from "../../../components/footer/Footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <CaseStudy />
      <Testimonials />
      <FAQ />
      <Message />
      <Footer />
    </div>
  )
}