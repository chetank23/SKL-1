import React from 'react'
import { Phone, Mail, Facebook, Twitter, Instagram } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-[#1e2a5e] text-white py-12 w-full">
      <div className="w-full px-4">
        <div className="grid grid-cols-4 gap-8 mb-8 relative">
          <div>
            <h3 className="font-bold text-xl mb-4">Plant Location</h3>
            <p className="text-base text-gray-300">
              Sy No. 100, Sompura,<br />
              Kasaba and Taluk Malur,<br />
              Kolar, Karnataka - 563130
            </p>
            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2 text-base">
                <Phone size={18} />
                <span>+91 9900078808</span>
              </div>
              <div className="flex items-center gap-2 text-base">
                <Mail size={18} />
                <span>Mr.Mataraj S.K. Gowda</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-4">Our Services</h3>
            <ul className="space-y-2 text-base text-gray-300">
              <li className="hover:text-orange-500 cursor-pointer">Ready Mix Concrete</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-4">Company</h3>
            <ul className="space-y-2 text-base text-gray-300">
              <li className="hover:text-orange-500 cursor-pointer">Contact Us</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-4">Legal</h3>
            <ul className="space-y-2 text-base text-gray-300">
              <li>
                <Link to="/terms" className="hover:text-orange-500 transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-orange-500 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/support" className="hover:text-orange-500 transition-colors">
                  Support
                </Link>
              </li>
            </ul>
          </div>
          {/* Social Media Icons - Right Side, Vertical */}
          <div className="absolute right-4 top-0 flex flex-col gap-4">
            <a 
              href="https://www.facebook.com/profile.php?id=61583022466033" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-orange-500 transition-colors"
            >
              <Facebook size={24} className="cursor-pointer" />
            </a>
            <a 
              href="https://x.com/sklpconcrete" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-orange-500 transition-colors"
            >
              <Twitter size={24} className="cursor-pointer" />
            </a>
            <a 
              href="https://www.instagram.com/sklpconcreteproducts/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-orange-500 transition-colors"
            >
              <Instagram size={24} className="cursor-pointer" />
            </a>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-base text-gray-400 mb-2">© SKLP— All rights reserved.</p>
          <p className="text-base text-gray-400">
            Powered by{' '}
            <a 
              href="https://devcreationsblr.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-orange-500 hover:text-orange-400 transition-colors"
            >
              Dev Creations and Solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}






