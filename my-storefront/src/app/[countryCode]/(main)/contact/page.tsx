"use client"

import React, { useState } from "react"
import { FaInstagram, FaFacebookF } from "react-icons/fa"
import { SiTiktok } from "react-icons/si"

const socialLinks = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/kristen_rtw_couture/",
    icon: <FaInstagram className="text-pink-600 hover:text-pink-400 transition" />,
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@kristen_rtw_couture",
    icon: <SiTiktok className="text-black hover:text-gray-600 transition" />,
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/yourprofile",
    icon: <FaFacebookF className="text-blue-600 hover:text-blue-400 transition" />,
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="content-container py-12 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>

      {submitted ? (
        <p className="text-gold-600 text-center">Thank you for your message! We will get back to you soon.</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative">
          {/* NAME */}
          <div className="relative w-full">
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder=" "
              className="peer w-full border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-gold"
            />
            <label
              htmlFor="name"
              className="absolute left-3 top-3 text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:left-3 peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:left-0 peer-focus:text-gold peer-focus:text-sm"
            >
              Name
            </label>
          </div>

          {/* EMAIL */}
          <div className="relative w-full">
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder=" "
              className="peer w-full border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-gold"
            />
            <label
              htmlFor="email"
              className="absolute left-3 top-3 text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:left-3 peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:left-0 peer-focus:text-gold peer-focus:text-sm"
            >
              Email
            </label>
          </div>

          {/* MESSAGE */}
          <div className="relative w-full">
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder=" "
              className="peer w-full border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-gold resize-none"
            />
            <label
              htmlFor="message"
              className="absolute left-3 top-3 text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:left-3 peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:left-0 peer-focus:text-gold peer-focus:text-sm"
            >
              Message
            </label>
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="bg-black text-white py-3 rounded border border-black hover:bg-gold hover:text-gold transition max-w-md mx-auto px-8"
          >
            Send Message
          </button>
        </form>
      )}

      {/* SOCIAL LINKS */}
      <div className="mt-8 flex gap-6 text-2xl justify-center">
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
            className="transition"
            style={{ fontSize: "1.5rem" }}
          >
            {social.icon}
          </a>
        ))}
      </div>
    </main>
  )
}
