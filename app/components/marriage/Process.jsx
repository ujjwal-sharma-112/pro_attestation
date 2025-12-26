'use client'

import { motion } from 'framer-motion'
import { Clock } from 'lucide-react'
import { useRef, useEffect } from 'react'

const Process = () => {
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

  const apostilleSteps = [
    "Notary Attestation",
    "Home Department / SDM Attestation ",
    "MEA Apostille "
  ]

  const attestationSteps = [
    "Notary Attestation",
    "State Home Department Attestation",
    "MEA Attestation",
    "Embassy Attestation"
  ]

  return (
    <div
      ref={(el) => (sectionRefs.current[0] = el)}
      className="px-6 py-12 opacity-0 transition-opacity duration-1000 rounded-2xl mx-4 md:mx-auto max-w-7xl md:py-16"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Apostille Process */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-6 bg-white rounded-lg shadow-sm"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Process for Marriage Certificate Apostille in India
            </h2>
            
            <div className="space-y-6">
              {apostilleSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-[#FFF7F0] text-[#FF6A00] rounded-full flex items-center justify-center font-semibold">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 flex-1">{step}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 flex items-center space-x-2 text-gray-600">
              <Clock className="w-5 h-5" />
              <p>Time Frame: 2-3 working days (depending on state and process)</p>
            </div>
          </motion.div>

          {/* Attestation Process */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-6 bg-white rounded-lg shadow-sm"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Process for Marriage Certificate Attestation in India
            </h2>
            
            <div className="space-y-6">
              {attestationSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-[#FFF7F0] text-[#FF6A00] rounded-full flex items-center justify-center font-semibold">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 flex-1">{step}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 flex items-center space-x-2 text-gray-600">
              <Clock className="w-5 h-5" />
              <p>Time Frame: 2-3 working days (depending on country and embassy)</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Process