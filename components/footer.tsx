"use client"

import Link from "next/link"
import { Linkedin, Twitter, Instagram } from "lucide-react"

// Navigation links from header
const navLinks = [
  { href: "/", label: "Home" },
  { href: "#why-us", label: "Why Choose Us" },
  { href: "#products", label: "Gift Collections" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#testimonials", label: "Client Stories" },
  { href: "#quote", label: "Get a Quote" },
]

const legalLinks = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Cookies", href: "/cookies" },
]

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
]

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 pb-16 border-b border-primary-foreground/10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden shadow-md">
                <img src="/logo1.png" alt="ST" className="w-full h-full object-contain" />
              </div>
              <span className="text-xl sm:text-2xl font-serif font-semibold">Surya Traders</span>
            </Link>
            <p className="text-primary-foreground/70 mb-6 max-w-xs">
              Premium corporate gifting solutions that create lasting impressions and strengthen relationships.
            </p>

            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/10 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact - Rightmost */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-medium mb-1">Email</p>
                <a href="mailto:suryacorporategifts@gmail.com" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors break-words">
                  suryacorporategifts@gmail.com
                </a>
              </div>
              <div>
                <p className="text-sm font-medium mb-1">Phone</p>
                <div className="flex flex-col gap-1">
                  <a href="tel:+91-7545088000" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                 +91-7545088000
                  </a>
                  <a href="tel:+91-9131379151" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    +91-9131379151 
                  </a>
                </div>
              </div>
              <div>
                <p className="text-sm font-medium mb-1">GSTIN</p>
                <p className="text-sm text-primary-foreground/70">
                  09CTYPS1808P1ZH
                </p>
              </div>
              <div>
                <p className="text-sm font-medium mb-1">Address</p>
                <p className="text-sm text-primary-foreground/70 leading-relaxed">
                  FCI Godown, MIRA BHAVAN CHAURAHA<br />
                  Bela Pratapgarh, Pratapgarh<br />
                  Uttar Pradesh - 230001
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal Links */}
        <div className="py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-sm text-center sm:text-left">
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <p className="text-sm text-primary-foreground/60 text-center sm:text-right">
            © {new Date().getFullYear()} Surya Traders. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
