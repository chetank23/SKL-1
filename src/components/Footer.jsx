import React from 'react'
import { Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-[#1e2a5e] text-white py-10 w-full">
      <div className="w-full px-6">
        <div className="grid grid-cols-12 items-start">
          {/* Left: Plant Location */}
          <div className="col-span-12 md:col-span-4 mb-8 md:mb-0">
            <h3 className="font-semibold text-[24px] leading-tight mb-3">Plant Location</h3>
            <p className="text-[14px] leading-6 text-gray-300 max-w-sm">
              Sy No. 105, Bagalur Post,<br />
              Byappanahalli North Taluk,<br />
              Bengaluru, Karnataka - 562149
            </p>
          </div>

          {/* Center: Links and Socials */}
          <div className="col-span-12 md:col-span-4 flex flex-col items-center gap-6">
            <nav className="flex items-center gap-16 text-[14px]">
              <NavLink to="/about" className="hover:text-orange-400">About</NavLink>
              <NavLink to="/gallery" className="hover:text-orange-400">Gallery</NavLink>
              <NavLink to="/contact" className="hover:text-orange-400">Contact Us</NavLink>
            </nav>
            <div className="flex items-center gap-24 text-orange-400">
              <a href="https://www.facebook.com/profile.php?id=61583022466033" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook size={22} />
              </a>
              <a href="https://x.com/sklpconcrete" target="_blank" rel="noopener noreferrer" aria-label="X">
                <Twitter size={22} />
              </a>
              <a href="https://www.instagram.com/sklpconcreteproducts/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram size={22} />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin size={22} />
              </a>
            </div>
          </div>

          {/* Right: Contact */}
          <div className="col-span-12 md:col-span-4 flex flex-col items-start md:items-end gap-4 text-left md:text-right">
            <div className="flex items-center gap-3 text-[14px]">
              <span className="text-orange-400"><Phone size={18} /></span>
              <span className="text-gray-200">+91 9900075805</span>
            </div>
            <div className="flex items-center gap-3 text-[14px]">
              <span className="text-orange-400"><Mail size={18} /></span>
              <span className="text-gray-200">Mr. Nataraj D.K. Gowda</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-6 border-t border-white/20" />

        {/* Bottom copyright */}
        <div className="pt-4 text-center">
          <p className="text-[14px] text-gray-300">
            © 2025{' '}
            <a
              href="https://devcreationsblr.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-400 hover:text-orange-300"
            >
              Dev Creations and Solutions
            </a>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}






