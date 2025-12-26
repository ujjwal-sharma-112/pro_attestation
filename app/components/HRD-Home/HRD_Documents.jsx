'use client'

import { motion } from 'framer-motion'
import { FileText, Check } from 'lucide-react'
import { useRef, useEffect } from 'react'

const HRD_Documents = () => {
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

  const requiredDocuments = [
    "Original degree/diploma certificate",
    "All semester/year mark sheets",
    "Passport copy",
    "Offer letter (if available)",
    "Passport-size photos",
    "Application form (provided by the respective HRD department)"
  ]
    
  return (
    <div
      ref={(el) => (sectionRefs.current[1] = el)}
      className="px-4 py-16 opacity-0 transition-opacity duration-1000 max-w-6xl mx-auto"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-8">
          <div className="w-12 h-12 rounded-full px-4 md:px-0 bg-[#FF6A00] flex items-center justify-center text-white mr-4 shadow-lg">
            <FileText className="h-6 w-6" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Documents Required for HRD Attestation</h2>
        </div>

        <p className="text-lg text-gray-700 mb-6">To apply for HRD attestation in India, you'll need the following:</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {requiredDocuments.map((doc, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#FF6A00]"
            >
              <div className="flex items-start">
                <Check className="text-[#FF6A00] h-6 w-6 mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-800 text-lg">{doc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HRD_Documents