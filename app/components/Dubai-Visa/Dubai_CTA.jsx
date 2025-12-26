'use client'

import { motion } from 'framer-motion'
import { Phone, MessageSquare } from 'lucide-react' 
import Link from 'next/link' 
import { useRef, useEffect } from 'react'

const Dubai_CTA = () => {
  const sectionRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref)
      })
    }
  }, [])
    
  return (
    <div
      ref={(el) => (sectionRefs.current[7] = el)} 
      className="px-4 py-16 opacity-0 transition-opacity duration-1000 max-w-6xl mx-auto"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-gradient-to-r from-[#FF6A00] to-[#FF8A30] rounded-2xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-4"> {/* Reduced margin-bottom slightly */}
              Get Started with Your UAE Visa Today
            </h2>
            <p className="text-lg mb-6 max-w-3xl"> {/* Reduced margin-bottom slightly */}
              Looking for Dubai visa services near you? We’re just a call or message away. Contact us today to apply for your Dubai tourist visa, UAE work visa, or any other visa requirement. Our expert team will guide you throughout the process and ensure you get your visa without delays.
            </p>
            <p className="text-md font-semibold mb-8 max-w-3xl"> {/* Added emphasis and margin */}
              Pro Attestation – Your trusted partner for Dubai Visa Services in Delhi NCR
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="tel:+918700770603" 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#FF6A00] px-6 py-3 rounded-lg font-semibold flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </motion.a>
              
              <motion.a
                href="https://wa.link/hfhd41" 
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#25D366] px-6 py-3 rounded-lg font-semibold flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300" 
              >
                <MessageSquare className="mr-2 h-5 w-5" /> {/* Using MessageSquare as a WhatsApp icon */}
                WhatsApp
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Dubai_CTA