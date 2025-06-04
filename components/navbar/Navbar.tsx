"use client"

import * as React from "react"
import Link from "next/link"
import { CircleCheckIcon, CircleHelpIcon, CircleIcon, Menu, X } from "lucide-react"
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

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
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
          <NavigationMenu viewport={false}>
            <NavigationMenuList className="navbar-menu">              <NavigationMenuItem>
                <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()} navbar-trigger`}>
                  <Link href="/docs">Docs</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="navbar-trigger">Home</NavigationMenuTrigger>                <NavigationMenuContent className="navbar-content">
                  <ul className="navbar-grid-featured">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link className="navbar-link-featured" href="/">
                          <div className="navbar-link-title">shadcn/ui</div>
                          <p className="navbar-link-description">Beautifully designed components built with Tailwind CSS.</p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/docs" title="Introduction">Re-usable components built using Radix UI and Tailwind CSS.</ListItem>
                    <ListItem href="/docs/installation" title="Installation">How to install dependencies and structure your app.</ListItem>
                    <ListItem href="/docs/primitives/typography" title="Typography">Styles for headings, paragraphs, lists...etc</ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem><NavigationMenuItem>
                <NavigationMenuTrigger className="navbar-trigger">Components</NavigationMenuTrigger>
                <NavigationMenuContent className="navbar-content">
                  <ul className="navbar-grid-components">
                    {components.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="navbar-trigger">List</NavigationMenuTrigger>
                <NavigationMenuContent className="navbar-content">
                  <ul className="navbar-grid-simple">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="#" className="navbar-link">
                          <div className="navbar-link-title">Components</div>
                          <div className="navbar-link-description">
                            Browse all components in the library.
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="#" className="navbar-link">
                          <div className="navbar-link-title">Documentation</div>
                          <div className="navbar-link-description">
                            Learn how to use the library.
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="#" className="navbar-link">
                          <div className="navbar-link-title">Blog</div>
                          <div className="navbar-link-description">
                            Read our latest blog posts.
                          </div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="navbar-trigger">Simple</NavigationMenuTrigger>
                <NavigationMenuContent className="navbar-content">
                  <ul className="navbar-grid-simple">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="#" className="navbar-link">Components</Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="#" className="navbar-link">Documentation</Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="#" className="navbar-link">Blocks</Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="navbar-trigger">With Icon</NavigationMenuTrigger>
                <NavigationMenuContent className="navbar-content">
                  <ul className="navbar-grid-simple">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="#" className="navbar-icon-link">
                          <CircleHelpIcon />
                          Backlog
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="#" className="navbar-icon-link">
                          <CircleIcon />
                          To Do
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="#" className="navbar-icon-link">
                          <CircleCheckIcon />
                          Done
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
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
              <Link href="/docs" className="navbar-mobile-link" onClick={closeNavbar}>
                Docs
              </Link>
              <Link href="/" className="navbar-mobile-link" onClick={closeNavbar}>
                Home
              </Link>
            </div>
            
            <div className="navbar-mobile-section">
              <h3 className="navbar-mobile-title">Components</h3>
              {components.slice(0, 4).map((component) => (
                <Link 
                  key={component.title} 
                  href={component.href} 
                  className="navbar-mobile-link"
                  onClick={closeNavbar}
                >
                  {component.title}
                </Link>
              ))}
            </div>

            <div className="navbar-mobile-section">
              <h3 className="navbar-mobile-title">Quick Links</h3>
              <Link href="#" className="navbar-mobile-link" onClick={closeNavbar}>
                <CircleHelpIcon size={16} />
                Backlog
              </Link>
              <Link href="#" className="navbar-mobile-link" onClick={closeNavbar}>
                <CircleIcon size={16} />
                To Do
              </Link>
              <Link href="#" className="navbar-mobile-link" onClick={closeNavbar}>
                <CircleCheckIcon size={16} />
                Done
              </Link>
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
