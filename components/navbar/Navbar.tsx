"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import "./navbar.css"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const portfolioItems: { title: string; href: string; description: string }[] = [
  {
    title: "E-commerce Solutions",
    href: "/portfolio/ecommerce",
    description:
      "Complete online stores with payment processing, inventory management, and modern design.",
  },
  {
    title: "Mobile Applications",
    href: "/portfolio/mobile",
    description:
      "Cross-platform mobile apps for iOS and Android with native performance.",
  },
  {
    title: "UI/UX Design",
    href: "/portfolio/design",
    description:
      "User-centered designs that enhance user experience and drive conversions.",
  },
  {
    title: "Analytics & Insights",
    href: "/portfolio/analytics",
    description: "Data-driven solutions to track performance and optimize business growth.",
  },
  {
    title: "Cloud Integration",
    href: "/portfolio/cloud",
    description:
      "Scalable cloud solutions for modern businesses with high availability and security.",
  },
  {
    title: "Digital Marketing",
    href: "/portfolio/marketing",
    description:
      "Comprehensive digital marketing strategies to boost your online presence.",
  },
]

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)

  const toggleNavbar = () => {
    setIsOpen(!isOpen)
  }

  const closeNavbar = () => {
    setIsOpen(false)
  }
  // Prevent body scrolling when mobile menu is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    // Cleanup function to restore scrolling when component unmounts
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // Close menu on escape key
  React.useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        closeNavbar()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen])

  return (
    <nav className="navbar">      
    <div className="navbar-container">
        {/* Mobile menu button */}
        <div className="navbar-mobile-header">
          <div className="navbar-logo">
            <Link href="/" onClick={closeNavbar}>
              Gravixel
            </Link>
          </div>
          <button
            className="navbar-mobile-toggle"
            onClick={toggleNavbar}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="navbar-desktop">
          <NavigationMenu viewport={false}>            <NavigationMenuList className="navbar-menu">
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()} navbar-trigger`}>
                  <Link href="/">Home</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger className="navbar-trigger">About</NavigationMenuTrigger>
                <NavigationMenuContent className="navbar-content">
                  <ul className="navbar-grid-featured">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link className="navbar-link-featured" href="/">
                          <div className="navbar-link-title">Gravixel Digital Solutions</div>
                          <p className="navbar-link-description">Leading digital transformation with innovative web solutions and cutting-edge technology.</p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/about" title="Our Story">Learn about our journey and mission to transform businesses digitally.</ListItem>
                    <ListItem href="/about/team" title="Our Team">Meet the talented professionals behind our innovative solutions.</ListItem>
                    <ListItem href="/about/careers" title="Join Us">Explore career opportunities and become part of our growing team.</ListItem>                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="navbar-trigger">Portfolio</NavigationMenuTrigger>
                <NavigationMenuContent className="navbar-content">
                  <ul className="navbar-grid-components">
                    {portfolioItems.map((item) => (
                      <ListItem
                        key={item.title}
                        title={item.title}
                        href={item.href}
                      >
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger className="navbar-trigger">Services</NavigationMenuTrigger>
                <NavigationMenuContent className="navbar-content">
                  <ul className="navbar-grid-simple">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/services/web-development" className="navbar-link">
                          <div className="navbar-link-title">Web Development</div>
                          <div className="navbar-link-description">
                            Custom websites and web applications built with modern technologies.
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/services/mobile-apps" className="navbar-link">
                          <div className="navbar-link-title">Mobile Applications</div>
                          <div className="navbar-link-description">
                            Cross-platform mobile apps for iOS and Android.
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/services/digital-marketing" className="navbar-link">
                          <div className="navbar-link-title">Digital Marketing</div>
                          <div className="navbar-link-description">
                            Comprehensive digital marketing strategies to grow your business.
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()} navbar-trigger`}>
                  <Link href="/contact">Contact</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              
              
            </NavigationMenuList>
          </NavigationMenu>
        </div>        {/* Mobile Navigation */}
        <div className={`navbar-mobile ${isOpen ? 'navbar-mobile-open' : ''}`}>
          <div className="navbar-mobile-content">
            {/* Mobile menu header with close button */}
            <div className="navbar-mobile-header-inside">
              <div className="navbar-mobile-logo">
                <Link href="/" onClick={closeNavbar}>
                  Gravixel
                </Link>
              </div>
              <button
                className="navbar-mobile-close"
                onClick={closeNavbar}
                aria-label="Close navigation menu"
              >
                <X size={24} />
              </button>
            </div>
              <div className="navbar-mobile-section">
              <h3 className="navbar-mobile-title">Navigation</h3>
              <Link href="/" className="navbar-mobile-link" onClick={closeNavbar}>
                Home
              </Link>
              <Link href="/about" className="navbar-mobile-link" onClick={closeNavbar}>
                About
              </Link>
              <Link href="/services" className="navbar-mobile-link" onClick={closeNavbar}>
                Services
              </Link>
              <Link href="/portfolio" className="navbar-mobile-link" onClick={closeNavbar}>
                Portfolio
              </Link>
              <Link href="/contact" className="navbar-mobile-link" onClick={closeNavbar}>
                Contact
              </Link>
            </div>
              <div className="navbar-mobile-section">
              <h3 className="navbar-mobile-title">Our Services</h3>
              <Link href="/services/web-development" className="navbar-mobile-link" onClick={closeNavbar}>
                Web Development
              </Link>
              <Link href="/services/mobile-apps" className="navbar-mobile-link" onClick={closeNavbar}>
                Mobile Applications
              </Link>
              <Link href="/services/digital-marketing" className="navbar-mobile-link" onClick={closeNavbar}>
                Digital Marketing
              </Link>
              <Link href="/services/cloud-solutions" className="navbar-mobile-link" onClick={closeNavbar}>
                Cloud Solutions
              </Link>
            </div>

            <div className="navbar-mobile-section">
              <h3 className="navbar-mobile-title">Recent Projects</h3>
              {portfolioItems.slice(0, 4).map((item) => (
                <Link 
                  key={item.title} 
                  href={item.href} 
                  className="navbar-mobile-link"
                  onClick={closeNavbar}
                >
                  {item.title}
                </Link>
              ))}
            </div>

            
          </div>
        </div>

        {/* Mobile overlay */}
        {isOpen && <div className="navbar-mobile-overlay" onClick={closeNavbar}></div>}
      </div>
    </nav>
  )
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href} className="navbar-link">
          <div className="navbar-link-title">{title}</div>
          <p className="navbar-link-description">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
