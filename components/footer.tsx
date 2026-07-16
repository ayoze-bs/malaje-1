import { Share2, Globe } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="w-full pt-12 md:pt-16 pb-16 md:pb-20 bg-surface-container-highest">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 px-6 md:px-8">
        {/* Brand & Tagline */}
        <div>
          <div className="mb-8">
            <Image 
              src="/images/malaje-raven-logo.jpg" 
              alt="MALAJE" 
              width={180} 
              height={60}
              className="h-14 w-auto invert"
            />
          </div>
          <p className="font-[var(--font-headline)] font-bold tracking-widest text-[10px] uppercase text-muted-foreground">
            © 2024 MALAJE. TECHNICAL PRECISION.
          </p>
        </div>
        
        {/* Navigation Links */}
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col gap-4">
            <Link 
              href="#" 
              className="font-[var(--font-headline)] font-bold tracking-widest text-[10px] uppercase text-muted-foreground hover:text-accent"
            >
              PRIVACY
            </Link>
            <Link 
              href="#" 
              className="font-[var(--font-headline)] font-bold tracking-widest text-[10px] uppercase text-muted-foreground hover:text-accent"
            >
              TERMS
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <Link
              href="/contacto"
              className="font-[var(--font-headline)] font-bold tracking-widest text-[10px] uppercase text-muted-foreground hover:text-accent"
            >
              CONTACT
            </Link>
            <Link
              href="/coleccion"
              className="font-[var(--font-headline)] font-bold tracking-widest text-[10px] uppercase text-muted-foreground hover:text-accent"
            >
              ARCHIVE
            </Link>
          </div>
        </div>
        
        {/* Social/Status */}
        <div className="flex flex-col items-start md:items-end justify-between gap-8">
          <div className="flex gap-6">
            <button className="text-foreground cursor-pointer hover:text-accent">
              <Share2 className="w-5 h-5" />
            </button>
            <button className="text-foreground cursor-pointer hover:text-accent">
              <Globe className="w-5 h-5" />
            </button>
          </div>
          <div className="text-left md:text-right">
            <span className="font-[var(--font-headline)] font-bold tracking-widest text-[10px] uppercase text-foreground">
              STATUS: OPERATIONAL
            </span>
            <div className="w-full h-[2px] bg-accent mt-2" />
          </div>
        </div>
      </div>
    </footer>
  )
}
