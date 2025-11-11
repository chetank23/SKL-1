import React from 'react'
import './gallery.css'
import Navbar from '../../components/Navbar.jsx'

export default function Gallery({ companyName = 'SKLP' }) {
  return (
    <div className="gallery-page">
      <Navbar />
      {/* Hero Section */}
      <section className="hero" style={{ backgroundImage: `url('/assests/cement.png')` }}>
        <div className="hero-overlay">
          <h1>GALLERY</h1>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="gallery-grid">
        <div className="container">
          <div className="grid">
            <div className="grid-item tall">
              <img src="/assests/4.jpg" alt="Gallery image 4" />
            </div>
            <div className="grid-item small">
              <img src="/assests/2.jpg" alt="Gallery image 2" />
            </div>
            <div className="grid-item small">
              <img src="/assests/3.jpg" alt="Gallery image 3" />
            </div>
            <div className="grid-item tall">
              <img src="/assests/7.jpg" alt="Gallery image 7" />
            </div>
            <div className="grid-item small">
              <img src="/assests/5.jpg" alt="Gallery image 5" />
            </div>
            <div className="grid-item small">
              <img src="/assests/6.jpg" alt="Gallery image 6" />
            </div>
            <div className="grid-item tall">
              <img src="/assests/1.jpg" alt="Gallery image 1" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


