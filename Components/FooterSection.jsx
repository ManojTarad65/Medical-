"use client";
import Link from "next/link";
import React from "react";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

export default function FooterSection() {
  return (
    <footer className="bg-black text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-3xl font-bold text-[#FFD700]">MediCare</h2>
          <p className="mt-4 text-gray-400">
            Your trusted healthcare partner, providing expert medical services with care and precision.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-[#FFD700]">Quick Links</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <Link href="/" className="hover:text-[#FFD700] transition">Home</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-[#FFD700] transition">About Us</Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-[#FFD700] transition">Services</Link>
            </li>
            <li>
              <Link href="/appointments" className="hover:text-[#FFD700] transition">Book Appointment</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[#FFD700] transition">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-[#FFD700]">Contact Us</h3>
          <ul className="mt-4 space-y-3">
            <li className="flex items-center gap-2">
              <MapPin size={20} className="text-[#FFD700]" />
              <span>Bikaner Technical University, Bikaner</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={20} className="text-[#FFD700]" />
              <span>+91 8852001611</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={20} className="text-[#FFD700]" />
              <span>jaiparkashrankawat2@gmail.com</span>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold text-[#FFD700]">Follow Us</h3>
          <div className="mt-4 flex gap-4">
            <Link href="#" className="hover:text-[#FFD700] transition">
              <Facebook size={24} />
            </Link>
            <Link href="#" className="hover:text-[#FFD700] transition">
              <Twitter size={24} />
            </Link>
            <Link href="#" className="hover:text-[#FFD700] transition">
              <Instagram size={24} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} MediCare. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
