"use client"

import Image from "next/image"

export default function AboutPage() {
  return (
    <main className="relative h-screen py-12">
      <div className="absolute inset-0 -z-10 min-h-screen">
        <Image
          src="/images/About.jpg" 
          alt="Background"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>
      <div className="relative text-white max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">About Us</h1>
        <h2 className="text-2xl font-semibold mb-4">
          Welcome to Kristen – Where African Elegance Meets Bold Expression.
        </h2>
        <p className="text-lg leading-relaxed">
          Welcome to Kristen – Where African Elegance Meets Bold Expression.
          At Kristen, we celebrate the richness of African culture through ready-to-wear fashion that speaks volumes. Our collections are a vibrant fusion of tradition and modernity, crafted for those who wear their heritage with pride and confidence. From bold prints to timeless silhouettes, every piece tells a story of identity, resilience, and unapologetic style.
          We’re more than an e-commerce store – we’re a movement redefining African fashion, one outfit at a time.
        </p>
      </div>
    </main>
  )
}
