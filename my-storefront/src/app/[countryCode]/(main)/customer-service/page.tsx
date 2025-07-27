"use client"

import React from "react"

export default function CustomerServicePage() {
  React.useEffect(() => {
    // Load Pinchie chatbot script
    const script = document.createElement("script")
    script.src = "https://cdn.pinchie.ai/widget.js"
    script.async = true
    script.onload = () => {
      // Initialize Pinchie chatbot with default config
      if ((window as any).Pinchie) {
        (window as any).Pinchie.init({
          // Add any required config here, e.g. API key, user info
          apiKey: "YOUR_PINCHIE_API_KEY",
          welcomeMessage: "Hi! How can I help you today?",
          position: "bottom-right",
        })
      }
    }
    document.body.appendChild(script)

    return () => {
      // Cleanup script on unmount
      document.body.removeChild(script)
    }
  }, [])

  return (
    <main className="content-container py-12 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Customer Service</h1>
      <p>Welcome to our customer service page. How can we assist you?</p>
      {/* The Pinchie chatbot widget will appear automatically */}
    </main>
  )
}
