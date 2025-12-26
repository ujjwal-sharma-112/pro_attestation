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
            What is Import-Export Code Apostille and Attestation?
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
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Apostille</h3>
              <p className="text-base text-gray-600">
              Apostille certifies your Import-Export Code for Hague Convention countries.
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
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Attestation</h3>
              <p className="text-base text-gray-600">
              Attestation is for non-Hague countries through embassy validation
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default What_Apostille