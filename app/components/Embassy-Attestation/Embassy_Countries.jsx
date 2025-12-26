'use client'

import { motion } from 'framer-motion'
import { Globe, ChevronRight } from 'lucide-react'
import { useRef, useEffect } from 'react'

const Embassy_Countries = () => {
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

  const countries = [
    { country: "UAE Embassy Attestation", flag: "🇦🇪" },
    { country: "Qatar Embassy Attestation", flag: "🇶🇦" },
    { country: "Oman Embassy Attestation", flag: "🇴🇲" },
    { country: "Kuwait Embassy Attestation", flag: "🇰🇼" },
    { country: "Egypt Embassy Attestation", flag: "🇪🇬" },
    { country: "Bahrain Embassy Attestation", flag: "🇧🇭" },
    { country: "Libya Embassy Attestation", flag: "🇱🇾" },
  ]
    
  return (
    <div
      ref={(el) => (sectionRefs.current[2] = el)}
      className="px-6 py-12 opacity-0 transition-opacity duration-1000 rounded-2xl mx-4 md:mx-auto max-w-6xl"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-8">
          <div className="w-10 h-10 rounded-full px-2 bg-[#FF6A00] flex items-center justify-center text-white mr-4">
            <Globe className="h-5 w-5" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Countries We Serve for Embassy Attestation</h2>
        </div>

        <p className="text-lg text-gray-700 mb-6">
          We offer attestation for over 25+ countries, including:
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {countries.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-4 rounded-lg shadow-sm flex items-center border border-[#FF6A00]/20 cursor-pointer"
            >
              <span className="text-2xl mr-3">{item.flag}</span>
              <span className="text-gray-800">{item.country}</span>
            </motion.div>
          ))}
        </div>


        <motion.a
          href="/countries"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="text-[#FF6A00] font-medium flex items-center hover:underline mt-6"
        >
          View full list of countries
          <ChevronRight className="ml-1 h-5 w-5" />
        </motion.a>
      </div>
    </div>
  )
}

export default Embassy_Countries