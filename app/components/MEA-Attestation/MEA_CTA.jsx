'use client'

import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { useRef, useEffect } from 'react'

const MEA_CTA = () => {
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
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Get Your Documents Attested Today!</h2>
            <p className="text-lg mb-8 max-w-3xl">
            Whether you need an apostille for Italy, France, Germany, or USA, we’ve got you covered. Our expert team ensures smooth and quick document legalization — with complete transparency and doorstep service.
            Contact us now to get your documents apostilled quickly and securely.
            </p>

          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#FF6A00] px-8 py-3 rounded-lg font-medium flex items-center shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Contact us now
              <ChevronRight className="ml-2 h-5 w-5" />
            </motion.button>
          </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default MEA_CTA