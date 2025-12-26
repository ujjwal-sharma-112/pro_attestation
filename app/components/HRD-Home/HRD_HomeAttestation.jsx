'use client'

import { motion } from 'framer-motion'
import { Building, FileCheck } from 'lucide-react'
import { useRef, useEffect } from 'react'

const HRD_HomeAttestation = () => {
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

  const mandatoryPurposes = [
    "Marriage visa",
    "Dependent visa",
    "Family sponsorship",
    "Birth registration abroad",
    "Personal legal matters in foreign countries"
  ]
    
  return (
    <div
      ref={(el) => (sectionRefs.current[5] = el)}
      className="px-6 py-12 opacity-0 transition-opacity duration-1000 rounded-2xl mx-4 md:mx-auto max-w-6xl"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-8">
          <div className="w-12 h-12 rounded-full bg-[#FF6A00] flex items-center justify-center text-white mr-4 shadow-lg">
            <Building className="h-6 w-6" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">What is Home Department Attestation?</h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl p-8 shadow-sm border border-[#FF6A00]/10 mb-8"
        >
          <p className="text-lg text-gray-700 leading-relaxed">
            Home Department Attestation is the state-level authentication of personal documents (like birth certificates, marriage certificates, PCCs) before they are submitted for MEA or Embassy Attestation.
          </p>
        </motion.div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">It is mandatory for:</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mandatoryPurposes.map((purpose, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white p-5 rounded-lg shadow-sm flex items-start border border-[#FF6A00]/10"
              >
                <FileCheck className="text-[#FF6A00] h-6 w-6 mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-800 text-lg">{purpose}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HRD_HomeAttestation