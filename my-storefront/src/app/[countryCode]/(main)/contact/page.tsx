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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // For now, just simulate submission
    setSubmitted(true)
  }

  return (
    <main className="content-container py-12 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      {submitted ? (
        <p className="text-gold-600">Thank you for your message! We will get back to you soon.</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label className="flex flex-col">
            Name
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded p-2"
            />
          </label>
          <label className="flex flex-col">
            Email
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded p-2"
            />
          </label>
          <label className="flex flex-col">
            Message
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="border border-gray-300 rounded p-2"
            />
          </label>
          <button
            type="submit"
            className="bg-black text-white py-2 rounded border border-black hover:bg-gold hover:text-white transition max-w-md mx-auto px-6"
          >
            Send Message
          </button>
        </form>
      )}
      <div className="mt-8 flex gap-4 text-xl">
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
            className="transition"
            style={{ fontSize: "1.25rem" }}
          >
            {social.icon}
          </a>
        ))}
      </div>
    </main>
  )
}
