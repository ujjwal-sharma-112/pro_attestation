'use client'

import { motion } from 'framer-motion'
import { Target } from 'lucide-react'
import { useRef, useEffect } from 'react'

const MOFA_Importance = () => {
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

  const importancePoints = [
    {
      title: "Employment visas",
      description: "Required by most employers abroad"
    },
    {
      title: "Educational purposes",
      description: "Needed for university admissions or equivalency"
    },
    {
      title: "Family or dependent visas",
      description: "Verifies marriage, birth, or relationship documents"
    },
    {
      title: "Business and legal use",
      description: "Confirms authenticity for company formation or contracts"
    }
  ]

  return (
    <div
      ref={(el) => (sectionRefs.current[0] = el)}
      className="px-4 py-16 opacity-0 transition-opacity duration-1000 max-w-6xl mx-auto"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-8">
          <div className="w-12 h-12 rounded-full bg-[#FF6A00] flex items-center justify-center text-white mr-4 shadow-lg">
            <Target className="h-6 w-6" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Why Is MOFA Attestation Important?</h2>
        </div>

        <p className="text-lg text-gray-700 mb-8">
          Your documents represent your identity, education, and achievements. To use them internationally, they must go through MOFA Attestation. By completing MOFA Attestation correctly, you ensure that your papers are fully recognized by foreign governments and organizations.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {importancePoints.map((point, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#FF6A00]"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{point.title}</h3>
              <p className="text-gray-600">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MOFA_Importance