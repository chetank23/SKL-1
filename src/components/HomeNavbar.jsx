import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Clock, ClipboardCheck, CheckCircle } from 'lucide-react'

export default function HomeNavbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const closeMobile = () => setIsMobileOpen(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top info bar */}
      <div className="bg-[#1e2a5e] text-white py-1 px-4 text-xs">
        <div className="max-w-7xl mx-auto flex justify-center md:justify-end items-center gap-2">
          <span className="hidden sm:inline font-semibold">Contact:</span>
          <span className="text-center">Mr. Nataraj D.K. Gowda - 9900075805</span>
        </div>
      </div>
      {/* Middle white brand + badges bar */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 items-center px-4 py-2 sm:py-3">
          {/* Logo (left) */}
          <div className="flex items-center">
            <NavLink to="/" onClick={closeMobile} className="flex items-center">
              <img src="/assests/logo.png" alt="SKLP Logo" className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain"/>
            </NavLink>
          </div>
          {/* Badges (center) */}
          <div className="hidden md:flex items-center justify-center gap-20 text-gray-700">
            <div className="flex items-center gap-5">
              <span className="text-orange-500">
                <Clock size={28} strokeWidth={2.5} />
              </span>
              <div className="leading-tight">
                <div className="font-semibold text-[16px]">24-hour</div>
                <div className="text-[13px] text-gray-500">Production</div>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <span className="text-orange-500">
                <ClipboardCheck size={28} strokeWidth={2.5} />
              </span>
              <div className="leading-tight">
                <div className="font-semibold text-[16px]">ISO</div>
                <div className="text-[13px] text-gray-500">Certification</div>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <span className="text-orange-500">
                <CheckCircle size={28} strokeWidth={2.5} />
              </span>
              <div className="leading-tight">
                <div className="font-semibold text-[16px]">Quality</div>
                <div className="text-[13px] text-gray-500">Assured</div>
              </div>
            </div>
          </div>
          {/* Right spacer to balance grid */}
          <div />
        </div>
      </div>
      {/* Main nav bar */}
      <div className="bg-[#1e2a5e] shadow-md">
        <div className="max-w-7xl mx-auto relative flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
          {/* Desktop nav */}
          <nav className="hidden md:block mx-auto">
            <ul className="flex gap-6 lg:gap-10 text-white text-sm font-medium uppercase">
              <li><NavLink onClick={closeMobile} className={({isActive}) => isActive ? 'text-orange-500' : 'hover:text-orange-400'} to="/">HOME</NavLink></li>
              <li><NavLink onClick={closeMobile} className={({isActive}) => isActive ? 'text-orange-500' : 'hover:text-orange-400'} to="/services">SERVICES</NavLink></li>
              <li><NavLink onClick={closeMobile} className={({isActive}) => isActive ? 'text-orange-500' : 'hover:text-orange-400'} to="/about">ABOUT US</NavLink></li>
              <li><NavLink onClick={closeMobile} className={({isActive}) => isActive ? 'text-orange-500' : 'hover:text-orange-400'} to="/gallery">GALLERY</NavLink></li>
              <li><NavLink onClick={closeMobile} className={({isActive}) => isActive ? 'text-orange-500' : 'hover:text-orange-400'} to="/contact">CONTACT US</NavLink></li>
            </ul>
          </nav>

          {/* CTA desktop */}
          <NavLink to="/contact" className="hidden md:inline-block bg-orange-500 text-white px-4 lg:px-6 py-2.5 rounded font-semibold text-sm transition hover:bg-orange-600 shadow-[0_0_18px_6px_rgba(249,115,22,0.45)]">
            REQUEST QUOTE
          </NavLink>

          {/* Mobile menu toggle */}
          <button
            aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
            className="md:hidden inline-flex items-center justify-center p-2 rounded text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
            onClick={() => setIsMobileOpen((v) => !v)}
          >
            <span className="sr-only">Toggle navigation</span>
            <div className="space-y-1.5">
              <span className={`block h-0.5 w-6 bg-current transition-transform ${isMobileOpen ? 'translate-y-2 rotate-45' : ''}`}></span>
              <span className={`block h-0.5 w-6 bg-current transition-opacity ${isMobileOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`block h-0.5 w-6 bg-current transition-transform ${isMobileOpen ? '-translate-y-2 -rotate-45' : ''}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div className={`md:hidden bg-[#1e2a5e] border-t border-white/10 transition-[max-height] overflow-hidden ${isMobileOpen ? 'max-h-96' : 'max-h-0'}`}>
        <nav className="px-4 py-2">
          <ul className="flex flex-col gap-1 text-white text-sm font-medium uppercase">
            <li><NavLink onClick={closeMobile} className={({isActive}) => isActive ? 'block px-2 py-3 bg-white/10 rounded' : 'block px-2 py-3 hover:bg-white/10 rounded'} to="/">HOME</NavLink></li>
            <li><NavLink onClick={closeMobile} className={({isActive}) => isActive ? 'block px-2 py-3 bg-white/10 rounded' : 'block px-2 py-3 hover:bg-white/10 rounded'} to="/services">SERVICES</NavLink></li>
            <li><NavLink onClick={closeMobile} className={({isActive}) => isActive ? 'block px-2 py-3 bg-white/10 rounded' : 'block px-2 py-3 hover:bg-white/10 rounded'} to="/about">ABOUT US</NavLink></li>
            <li><NavLink onClick={closeMobile} className={({isActive}) => isActive ? 'block px-2 py-3 bg-white/10 rounded' : 'block px-2 py-3 hover:bg-white/10 rounded'} to="/gallery">GALLERY</NavLink></li>
            <li><NavLink onClick={closeMobile} className={({isActive}) => isActive ? 'block px-2 py-3 bg-white/10 rounded' : 'block px-2 py-3 hover:bg-white/10 rounded'} to="/contact">CONTACT US</NavLink></li>
            <li className="pt-1">
              <NavLink
                to="/contact"
                onClick={closeMobile}
                className="block text-center bg-orange-500 text-white px-4 py-3 rounded font-semibold text-sm transition hover:bg-orange-600"
              >
                REQUEST QUOTE
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}







