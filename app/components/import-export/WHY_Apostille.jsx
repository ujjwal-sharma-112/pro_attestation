'use client'

import { motion } from 'framer-motion'
import { useRef, useEffect } from 'react'

const WHY_Apostille = () => {
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

  const requirements = [
    {
      title: "International Trade and Customs Clearance",
      description: "Managing international trade processes and handling customs clearance"
    },
    {
      title: "Setting Up Export Businesses Abroad",
      description: "Establishing and managing export-focused businesses in foreign markets"
    },
    {
      title: "Government Registrations Abroad",
      description: "Registering businesses and obtaining necessary permits from foreign governments"
    }
  ];
  
  

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
            Why is Import-Export Code Apostille/Attestation Required?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {requirements.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-base text-gray-600">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default WHY_Apostille