'use client'

import { motion } from 'framer-motion'
import { Target, Check, Plane, Users, Heart, Baby, Shield } from 'lucide-react'
import { useRef, useEffect } from 'react'

const HRD_HomePurposes = () => {
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

  const purposes = [
    { icon: <Plane className="h-6 w-6 text-[#FF6A00]" />, text: "Immigration / PR application" },
    { icon: <Users className="h-6 w-6 text-[#FF6A00]" />, text: "Family visa or sponsorship" },
    { icon: <Heart className="h-6 w-6 text-[#FF6A00]" />, text: "Marriage abroad" },
    { icon: <Baby className="h-6 w-6 text-[#FF6A00]" />, text: "Birth certificate legalization" },
    { icon: <Shield className="h-6 w-6 text-[#FF6A00]" />, text: "Police Clearance submission overseas" }
  ]
    
  return (
    <div
      ref={(el) => (sectionRefs.current[6] = el)}
      className="px-6 py-12 opacity-0 transition-opacity duration-1000 rounded-2xl mx-4 md:mx-auto max-w-6xl"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-8">
          <div className="w-12 h-12 rounded-full bg-[#FF6A00] flex items-center justify-center text-white mr-4 shadow-lg">
            <Target className="h-6 w-6" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Purposes of Home Department Attestation</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {purposes.map((purpose, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="bg-white p-5 rounded-lg shadow-sm flex items-start border border-[#FF6A00]/10"
            >
              <span className="text-2xl mr-3 flex-shrink-0">{purpose.icon}</span>
              <p className="text-gray-800 text-lg">{purpose.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HRD_HomePurposes