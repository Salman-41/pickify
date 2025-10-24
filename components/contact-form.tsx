"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
      {/* Contact Information */}
      <div className="lg:col-span-1">
        <h3 className="text-2xl font-bold mb-8">Get in Touch</h3>

        <div className="space-y-8">
          <div className="flex gap-4">
            <div
              className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ background: "linear-gradient(to right, #E34D78, #FF6F91)" }}
            >
              <Mail size={24} className="text-white" />
            </div>
            <div>
              <p className="font-semibold mb-1">Email</p>
              <a href="mailto:hello@pickify.com" className="text-foreground/60 hover:text-primary smooth-transition">
                hello@pickify.com
              </a>
            </div>
          </div>

          <div className="flex gap-4">
            <div
              className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ background: "linear-gradient(to right, #E34D78, #FF6F91)" }}
            >
              <Phone size={24} className="text-white" />
            </div>
            <div>
              <p className="font-semibold mb-1">Phone</p>
              <a href="tel:+1234567890" className="text-foreground/60 hover:text-primary smooth-transition">
                +1 (234) 567-890
              </a>
            </div>
          </div>

          <div className="flex gap-4">
            <div
              className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ background: "linear-gradient(to right, #E34D78, #FF6F91)" }}
            >
              <MapPin size={24} className="text-white" />
            </div>
            <div>
              <p className="font-semibold mb-1">Location</p>
              <p className="text-foreground/60">San Francisco, CA</p>
            </div>
          </div>
        </div>

        {/* Response Time */}
        <div className="mt-12 p-6 bg-primary/10 rounded-lg">
          <p className="text-sm text-foreground/70">
            <span className="font-semibold text-primary">Average response time:</span> Within 2 hours during business
            hours
          </p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="lg:col-span-2">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-border bg-white smooth-transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-border bg-white smooth-transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-border bg-white smooth-transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="+1 (234) 567-890"
              />
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium mb-2">
                Company/Store Name
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-border bg-white smooth-transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="Your store name"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-3 rounded-lg border border-border bg-white smooth-transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
              placeholder="Tell us about your project..."
            />
          </div>

          <button
            type="submit"
            className="w-full px-8 py-4 text-white rounded-lg font-semibold smooth-transition hover:shadow-xl hover:scale-105"
            style={{ background: "linear-gradient(to right, #E34D78, #FF6F91)" }}
          >
            Send Message
          </button>

          {submitted && (
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-center">
              Thank you! We'll get back to you soon.
            </div>
          )}
        </form>
      </div>
    </div>
  )
}
