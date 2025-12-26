'use client'

import { motion } from 'framer-motion'
import { Award, Check } from 'lucide-react'
import { useRef, useEffect } from 'react'

const MEA_WhyChooseUs = () => {
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

  const features = [
    "10+ years of expertise in MEA attestation in India",
    "Authorized, secure & 100% reliable service",
    "Transparent pricing with no hidden charges",
    "Pickup & delivery from your doorstep",
    "Fast-track / express options available",
  ]
    
  return (
    <div
      ref={(el) => (sectionRefs.current[5] = el)}
      className="px-4 py-16 opacity-0 transition-opacity duration-1000 max-w-6xl mx-auto"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-8">
          <div className="w-12 h-12 rounded-full bg-[#FF6A00] flex items-center justify-center text-white mr-4 shadow-lg">
            <Award className="h-6 w-6" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Why Choose Pro Attestation?</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6  p-8 rounded-2xl ">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="bg-white p-5 rounded-lg shadow-sm flex items-start border border-[#FF6A00]/10"
            >
              <Check className="text-[#FF6A00] h-6 w-6 mr-3 mt-1 flex-shrink-0" />
              <p className="text-gray-800">{feature}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MEA_WhyChooseUs