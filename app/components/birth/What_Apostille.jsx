'use client'

import { motion } from 'framer-motion'
import { useRef, useEffect } from 'react'

const What_Apostille = () => {
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
      ref={(el) => (sectionRefs.current[0] = el)}
      className="px-6 py-12 md:py-16 opacity-0 transition-opacity duration-1000 rounded-2xl mx-4 md:mx-auto max-w-7xl"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">
            What is Birth Certificate Apostille and Attestation?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Apostille Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-6 bg-white rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Birth Certificate Apostille</h3>
              <p className="text-base text-gray-600">
                Birth Certificate Apostille is the process of authenticating a birth certificate issued in India, making it legally valid in foreign countries that are part of the Hague Apostille Convention 1961. After MEA Apostille, no further embassy legalization is needed.
              </p>
            </motion.div>

            {/* Attestation Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-6 bg-white rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Birth Certificate Attestation</h3>
              <p className="text-base text-gray-600">
                Birth Certificate Attestation is the process required for countries not under the Hague Convention, where after MEA Attestation, your document must also be attested by the respective country's Embassy.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default What_Apostille