"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Calendar, Users, Send, Sparkles } from "lucide-react";
import { SiteSettings } from "@/lib/types";
import MotionSection from "@/components/ui/MotionSection";

interface ContactCTAProps {
  siteSettings: SiteSettings;
}

export const ContactCTA: React.FC<ContactCTAProps> = ({ siteSettings }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "09:00",
    guests: "2",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanPhone = (siteSettings.phone || "+15553492821").replace(/[^0-9]/g, "");
    const message = `Hello Cafe Manana! I'd like to reserve a table:\n\n- Name: ${formData.name}\n- Phone: ${formData.phone}\n- Date: ${formData.date}\n- Time: ${formData.time}\n- Guests: ${formData.guests} person(s)`;
    window.open(`https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section id="contact" className="py-24 bg-cream-dark relative overflow-hidden">
      {/* Subtle Background Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-terracotta/10 rounded-full filter blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Visit Us & Contact Info (6 cols) */}
          <div className="lg:col-span-6 space-y-8">
            <MotionSection className="space-y-4">
              <span className="text-terracotta text-xs sm:text-sm font-bold uppercase tracking-[0.25em] inline-flex items-center gap-2 block">
                <Sparkles className="w-4 h-4 text-terracotta animate-pulse" />
                <span>Reservations & Location</span>
              </span>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-brown-deep">
                Come Visit Us
              </h2>
              <p className="font-body text-brown-mid text-base sm:text-lg leading-relaxed">
                Whether you're looking for a quiet corner to sip your morning pour-over, a fresh sourdough pastry, or hosting a gathering, our doors are open.
              </p>
            </MotionSection>

            {/* Info Cards with Hover Springs */}
            <MotionSection delay={0.2} className="space-y-6">
              {/* Address */}
              <motion.div
                whileHover={{ scale: 1.02, x: 4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex items-start gap-4 p-4 rounded-2xl bg-cream/80 border border-brown-mid/10 shadow-sm hover:shadow-md transition-shadow cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-terracotta/15 text-terracotta flex items-center justify-center shrink-0 shadow-inner">
                  <MapPin className="w-6 h-6 animate-bounce" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-brown-deep text-lg">Address</h4>
                  <p className="font-body text-brown-mid text-sm">{siteSettings.address}</p>
                </div>
              </motion.div>

              {/* Hours */}
              <motion.div
                whileHover={{ scale: 1.02, x: 4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex items-start gap-4 p-4 rounded-2xl bg-cream/80 border border-brown-mid/10 shadow-sm hover:shadow-md transition-shadow cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-sage/15 text-sage flex items-center justify-center shrink-0 shadow-inner">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="w-full">
                  <h4 className="font-display font-bold text-brown-deep text-lg mb-1">
                    Operating Hours
                  </h4>
                  <div className="space-y-1 text-sm font-body text-brown-mid">
                    {siteSettings.openingHours?.map((sch, i) => (
                      <div key={i} className="flex justify-between max-w-xs">
                        <span className="font-medium text-brown-deep">{sch.day}:</span>
                        <span>{sch.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Phone */}
              <motion.div
                whileHover={{ scale: 1.02, x: 4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex items-center gap-3 p-4 rounded-2xl bg-cream/80 border border-brown-mid/10 shadow-sm hover:shadow-md transition-shadow cursor-default"
              >
                <Phone className="w-5 h-5 text-terracotta shrink-0" />
                <span className="font-body text-sm font-semibold text-brown-deep">
                  {siteSettings.phone}
                </span>
              </motion.div>
            </MotionSection>
          </div>

          {/* Right Column: Reservation Form Intent Card (6 cols) */}
          <div className="lg:col-span-6">
            <MotionSection delay={0.3}>
              <div className="bg-white-soft p-8 sm:p-10 rounded-3xl shadow-xl border border-cream-dark space-y-6">
                <div className="space-y-2">
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-brown-deep">
                    Reserve a Table
                  </h3>
                  <p className="font-body text-brown-mid text-sm">
                    Fill in your details below to send an instant reservation request via WhatsApp.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-brown-deep mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Elena Rostova"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-cream border border-brown-mid/20 text-brown-deep placeholder:text-brown-mid/40 focus:outline-none focus:ring-2 focus:ring-terracotta transition-all font-body text-sm"
                    />
                  </div>

                  {/* Phone Input */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-brown-deep mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-cream border border-brown-mid/20 text-brown-deep placeholder:text-brown-mid/40 focus:outline-none focus:ring-2 focus:ring-terracotta transition-all font-body text-sm"
                    />
                  </div>

                  {/* Date & Time Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-brown-deep mb-1.5">
                        Date
                      </label>
                      <div className="relative">
                        <input
                          type="date"
                          required
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-cream border border-brown-mid/20 text-brown-deep focus:outline-none focus:ring-2 focus:ring-terracotta transition-all font-body text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-brown-deep mb-1.5">
                        Time
                      </label>
                      <input
                        type="time"
                        required
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-cream border border-brown-mid/20 text-brown-deep focus:outline-none focus:ring-2 focus:ring-terracotta transition-all font-body text-sm"
                      />
                    </div>
                  </div>

                  {/* Guests Select */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-brown-deep mb-1.5">
                      Number of Guests
                    </label>
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-cream border border-brown-mid/20 text-brown-deep focus:outline-none focus:ring-2 focus:ring-terracotta transition-all font-body text-sm"
                    >
                      <option value="1">1 Person</option>
                      <option value="2">2 People</option>
                      <option value="3">3 People</option>
                      <option value="4">4 People</option>
                      <option value="5+">5+ People (Group)</option>
                    </select>
                  </div>

                  {/* Submit Button with Hover Spring */}
                  <motion.button
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    type="submit"
                    className="w-full btn-primary py-4 text-base font-bold shadow-md hover:shadow-xl mt-4 flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5 animate-pulse" />
                    <span>Confirm Table via WhatsApp</span>
                  </motion.button>
                </form>
              </div>
            </MotionSection>
          </div>
        </div>

        {/* Map Embed & FSSAI Section */}
        <MotionSection delay={0.4} className="mt-16 rounded-3xl overflow-hidden shadow-xl border-4 border-white-soft relative">
          <div className="h-[360px] relative">
            <iframe
              title="Cafe Manana Anna Nagar Location Map"
              src="https://maps.google.com/maps?q=38+21st+Street+L+Block+Anna+Nagar+East+Chennai+600102&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
            />
          </div>
          <div className="bg-brown-deep text-cream/90 px-6 py-3 flex flex-col sm:flex-row items-center justify-between text-xs font-body gap-2">
            <span>📍 New No. 38, Old No. L72/A2, L Block, 21st Street, Anna Nagar East, Chennai 600102</span>
            <span className="font-mono bg-cream/10 px-3 py-1 rounded-md">FSSAI Lic. No: 12424002000124</span>
          </div>
        </MotionSection>
      </div>
    </section>
  );
};

export default ContactCTA;
