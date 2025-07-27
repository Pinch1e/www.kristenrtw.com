"use client"

import { usePathname } from "next/navigation"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import dynamic from "next/dynamic"
import { Suspense } from "react"
import CartButtonClient from "@modules/layout/components/cart-button/cart-button-client"

export default function NavLinks() {
  const pathname = usePathname()

  const isActive = (href: string) => pathname === href

  const baseLink = "relative group transition-all hover:text-[#D4AF37]"

  return (
    <div className="hidden small:flex items-center gap-x-8 h-full flex-1 basis-0 justify-end uppercase font-medium tracking-wide">
      {[ 
        { href: "/", label: "Home" },
        { href: "/store", label: "Shop" },
        { href: "/about", label: "About" },
        { href: "/contact", label: "Contact" },
        { href: "/account", label: "Account" },
      ].map(({ href, label }) => (
        <LocalizedClientLink
          key={href}
          href={href}
          className={`${baseLink} ${isActive(href) ? "text-black font-bold" : ""}`}
        >
          {label}
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
        </LocalizedClientLink>
      ))}

      <CartButtonClient />
    </div>
  )
}
