"use client"

import { User, ShoppingBag, Menu, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { MalajeLogo } from "@/components/malaje-logo"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-transparent backdrop-blur-xl transition-colors duration-300">
      <div className="flex justify-between items-center w-full px-8 py-6">
        {/* Brand Logo */}
        <Link href="/" className="block text-foreground">
          <MalajeLogo size="sm" />
        </Link>

        {/* Navigation Links - Desktop */}
        <div className="hidden md:flex gap-12">
          <Link href="/coleccion" className="font-[var(--font-headline)] font-bold tracking-widest text-xs uppercase text-accent transition-none">
            SHOP
          </Link>
          <Link href="/coleccion" className="font-[var(--font-headline)] font-bold tracking-widest text-xs uppercase text-foreground hover:text-accent transition-none">
            COLLECTIONS
          </Link>
          <Link href="/historia" className="font-[var(--font-headline)] font-bold tracking-widest text-xs uppercase text-foreground hover:text-accent transition-none">
            STORY
          </Link>
          <Link href="/contacto" className="font-[var(--font-headline)] font-bold tracking-widest text-xs uppercase text-foreground hover:text-accent transition-none">
            CONTACT
          </Link>
        </div>

        {/* Trailing Icons */}
        <div className="flex items-center gap-6">
          <button className="text-foreground hover:text-accent transition-none hidden md:block">
            <User className="w-6 h-6" />
          </button>
          <button className="text-foreground hover:text-accent transition-none">
            <ShoppingBag className="w-6 h-6" />
          </button>
          <button 
            className="text-foreground hover:text-accent transition-none md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border">
          <div className="flex flex-col gap-6 px-8 py-8">
            <Link href="/coleccion" className="font-[var(--font-headline)] font-bold tracking-widest text-sm uppercase text-accent">
              SHOP
            </Link>
            <Link href="/coleccion" className="font-[var(--font-headline)] font-bold tracking-widest text-sm uppercase text-foreground hover:text-accent">
              COLLECTIONS
            </Link>
            <Link href="/historia" className="font-[var(--font-headline)] font-bold tracking-widest text-sm uppercase text-foreground hover:text-accent">
              STORY
            </Link>
            <Link href="/contacto" className="font-[var(--font-headline)] font-bold tracking-widest text-sm uppercase text-foreground hover:text-accent">
              CONTACT
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
