"use client";

import type React from "react";

import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

/**
 * Contact form component with contact information and form inputs.
 * 
 * Features:
 * - Animated contact information cards with icons
 * - Form with validation and focus states
 * - Success message display
 * - Responsive design for mobile and desktop
 * 
 * @component
 * @example
 * ```tsx
 * <ContactForm />
 * ```
 */
export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactItems = [
    {
      icon: Mail,
      title: "Email",
      value: "hello@pickify.com",
      href: "mailto:hello@pickify.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (234) 567-890",
      href: "tel:+1234567890",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "San Francisco, CA",
      href: null,
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
      {/* Contact Information */}
      <motion.div
        className="lg:col-span-1"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-2xl font-bold mb-8" style={{ color: "#0b464f" }}>
          Get in Touch
        </h3>

        <div className="space-y-8">
          {contactItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                className="flex gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <motion.div
                  className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "#ab2645" }}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon size={24} className="text-white" />
                </motion.div>
                <div>
                  <p
                    className="font-semibold mb-1"
                    style={{ color: "#0b464f" }}
                  >
                    {item.title}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-gray-600 smooth-transition"
                      style={{
                        transition: "color 0.3s ease",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "#ab2645")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "rgb(75, 85, 99)")
                      }
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-gray-600">{item.value}</p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Response Time */}
        <motion.div
          className="mt-12 p-6 rounded-lg border border-gray-100 bg-white shadow-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          whileHover={{ y: -5 }}
        >
          <p className="text-sm text-gray-600">
            <span className="font-semibold" style={{ color: "#ab2645" }}>
              Average response time:
            </span>{" "}
            Within 2 hours during business hours
          </p>
        </motion.div>
      </motion.div>

      {/* Contact Form */}
      <motion.div
        className="lg:col-span-2"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium mb-2"
                style={{ color: "#0b464f" }}
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white smooth-transition focus:outline-none focus:ring-2"
                style={{
                  transition: "all 0.3s ease",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "#ab2645";
                  e.currentTarget.style.boxShadow =
                    "0 0 0 3px rgba(171, 38, 69, 0.1)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "rgb(229, 231, 235)";
                  e.currentTarget.style.boxShadow = "none";
                }}
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-2"
                style={{ color: "#0b464f" }}
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white smooth-transition focus:outline-none focus:ring-2"
                style={{
                  transition: "all 0.3s ease",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "#ab2645";
                  e.currentTarget.style.boxShadow =
                    "0 0 0 3px rgba(171, 38, 69, 0.1)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "rgb(229, 231, 235)";
                  e.currentTarget.style.boxShadow = "none";
                }}
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium mb-2"
                style={{ color: "#0b464f" }}
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white smooth-transition focus:outline-none focus:ring-2"
                style={{
                  transition: "all 0.3s ease",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "#ab2645";
                  e.currentTarget.style.boxShadow =
                    "0 0 0 3px rgba(171, 38, 69, 0.1)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "rgb(229, 231, 235)";
                  e.currentTarget.style.boxShadow = "none";
                }}
                placeholder="+1 (234) 567-890"
              />
            </div>
            <div>
              <label
                htmlFor="company"
                className="block text-sm font-medium mb-2"
                style={{ color: "#0b464f" }}
              >
                Company/Store Name
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white smooth-transition focus:outline-none focus:ring-2"
                style={{
                  transition: "all 0.3s ease",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "#ab2645";
                  e.currentTarget.style.boxShadow =
                    "0 0 0 3px rgba(171, 38, 69, 0.1)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "rgb(229, 231, 235)";
                  e.currentTarget.style.boxShadow = "none";
                }}
                placeholder="Your store name"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium mb-2"
              style={{ color: "#0b464f" }}
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white smooth-transition focus:outline-none focus:ring-2 resize-none"
              style={{
                transition: "all 0.3s ease",
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = "#ab2645";
                e.currentTarget.style.boxShadow =
                  "0 0 0 3px rgba(171, 38, 69, 0.1)";
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = "rgb(229, 231, 235)";
                e.currentTarget.style.boxShadow = "none";
              }}
              placeholder="Tell us about your project..."
            />
          </div>

          <button
            type="submit"
            className="w-full px-8 py-4 text-white rounded-lg font-semibold smooth-transition hover:shadow-xl hover:scale-[1.02]"
            style={{
              backgroundColor: "#ab2645",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.02)";
              e.currentTarget.style.boxShadow =
                "0 20px 25px -5px rgba(171, 38, 69, 0.3), 0 10px 10px -5px rgba(171, 38, 69, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Send Message
          </button>

          {submitted && (
            <motion.div
              className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
            >
              Thank you! We'll get back to you soon.
            </motion.div>
          )}
        </form>
      </motion.div>
    </div>
  );
}
