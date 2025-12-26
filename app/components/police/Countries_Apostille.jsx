'use client'

import { motion } from 'framer-motion'
import { Globe } from 'lucide-react'
import { useRef, useEffect } from 'react'

const Countries_Apostille = () => {
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
    "USA",
    "South Korea", 
    "Japan", 
    "Poland", 
    "UK", 
    "Switzerland",
    "Oman",

    "Italy",
    "Germany",
    "Spain",
    "Netherlands",
    "Australia",
    "New Zealand",
    "France",
    "Portugal",
    "Austria"
  ]

  return (
    <div
      ref={(el) => (sectionRefs.current[0] = el)}
      className="px-6 py-12 md:py-16 opacity-0 transition-opacity duration-1000 rounded-2xl mx-4 md:mx-auto max-w-7xl "
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="text-center space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Countries That Commonly Require PCC Apostille
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {countries.map((country, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-center space-x-3">
                  <Globe className="w-5 h-5 text-[#FF6A00]" />
                  <span className="text-gray-800 font-medium">{country}</span>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.a
          href="/countries"
          className="flex items-start mt-8 text-[#FF6A00] font-medium hover:underline"
        >
          View full list of countries →
        </motion.a>
        </motion.div>
      </div>
    </div>
  )
}

export default Countries_Apostille