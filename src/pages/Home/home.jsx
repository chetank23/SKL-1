import React, { useEffect, useRef, useState } from 'react'
import './home.css'
import HomeNavbar from '../../components/HomeNavbar.jsx'

export default function Home({ companyName = 'SKLP' }) {
  function Counter({ to, duration = 1500, formatter = (n) => n.toString() }) {
    const [value, setValue] = useState(0)
    const ref = useRef(null)
    const hasRunRef = useRef(false)

    useEffect(() => {
      const node = ref.current
      if (!node) return

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasRunRef.current) {
            hasRunRef.current = true
            const start = performance.now()
            const startVal = 0
            const diff = to - startVal
            const step = (t) => {
              const elapsed = t - start
              const progress = Math.min(elapsed / duration, 1)
              const current = Math.floor(startVal + diff * progress)
              setValue(current)
              if (progress < 1) requestAnimationFrame(step)
            }
            requestAnimationFrame(step)
          }
        })
      }, { threshold: 0.4 })

      observer.observe(node)
      return () => observer.disconnect()
    }, [to, duration])

    return (
      <span ref={ref}>{formatter(value)}</span>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <HomeNavbar />
      <div className="pt-0">
        <div className="relative w-full">
          <img 
            src="/assests/homehero.jpg" 
            alt="Construction site" 
            className="w-full h-auto object-contain block"
          />
        </div>

        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                SKLP (Shri Kodilingeshwara Prasanna) is a fast-growing construction solutions company based in Bengaluru, Karnataka.
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Founded in May 2024 with 30+ dedicated members, 2.5 acres land of RMC production, and a fleet of 8+ vehicles, SKLP is now a key supplier, innovation to infrastructure and diverse sectors Karnataka.
              </p>
              <button className="bg-orange-500 text-white px-8 py-3 rounded font-semibold hover:bg-orange-600">
                More About us
              </button>
            </div>
            <div>
              <img 
                src="/assests/aboutus.png" 
                alt="Construction work" 
                className="w-full h-[400px] object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        <section className="bg-[#1e2a5e] py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-orange-500 text-4xl font-bold mb-2">
                  <Counter to={75} duration={1200} /> <span className="text-2xl">m³/hour</span>
                </div>
                <div className="text-white text-sm">Plant Capacity</div>
              </div>
              <div>
                <div className="text-orange-500 text-4xl font-bold mb-2">
                  <Counter to={10} duration={1000} />+
                </div>
                <div className="text-white text-sm">vehicles</div>
              </div>
              <div>
                <div className="text-orange-500 text-4xl font-bold mb-2">
                  <Counter to={5000} duration={1400} formatter={(n) => new Intl.NumberFormat('en-IN').format(n)} />+
                </div>
                <div className="text-white text-sm">Projects</div>
              </div>
              <div>
                <div className="text-orange-500 text-4xl font-bold mb-2">
                  <Counter to={2500} duration={1400} formatter={(n) => new Intl.NumberFormat('en-IN').format(n)} />+
                </div>
                <div className="text-white text-sm">customers</div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Happy Customers</h2>
            <div className="overflow-hidden">
              <div className="customer-scroll">
                <div className="customer-scroll-inner">
                  <img src="" alt="Customer 1" className="h-16 grayscale hover:grayscale-0 transition flex-shrink-0" />
                  <img src="" alt="Customer 2" className="h-16 grayscale hover:grayscale-0 transition flex-shrink-0" />
                  <img src="" alt="Customer 3" className="h-16 grayscale hover:grayscale-0 transition flex-shrink-0" />
                  <img src="" alt="Customer 4" className="h-16 grayscale hover:grayscale-0 transition flex-shrink-0" />
                  <img src="" alt="Customer 5" className="h-16 grayscale hover:grayscale-0 transition flex-shrink-0" />
                  <img src="" alt="Customer 6" className="h-16 grayscale hover:grayscale-0 transition flex-shrink-0" />
                  <img src="" alt="Customer 7" className="h-16 grayscale hover:grayscale-0 transition flex-shrink-0" />
                  <img src="" alt="Customer 8" className="h-16 grayscale hover:grayscale-0 transition flex-shrink-0" />
                  {/* Duplicate for seamless loop */}
                  <img src="" alt="Customer 1" className="h-16 grayscale hover:grayscale-0 transition flex-shrink-0" />
                  <img src="" alt="Customer 2" className="h-16 grayscale hover:grayscale-0 transition flex-shrink-0" />
                  <img src="" alt="Customer 3" className="h-16 grayscale hover:grayscale-0 transition flex-shrink-0" />
                  <img src="" alt="Customer 4" className="h-16 grayscale hover:grayscale-0 transition flex-shrink-0" />
                  <img src="" alt="Customer 5" className="h-16 grayscale hover:grayscale-0 transition flex-shrink-0" />
                  <img src="" alt="Customer 6" className="h-16 grayscale hover:grayscale-0 transition flex-shrink-0" />
                  <img src="" alt="Customer 7" className="h-16 grayscale hover:grayscale-0 transition flex-shrink-0" />
                  <img src="" alt="Customer 8" className="h-16 grayscale hover:grayscale-0 transition flex-shrink-0" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}


