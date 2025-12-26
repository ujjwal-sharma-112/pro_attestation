'use client'

import { motion } from 'framer-motion'
import { FileText, FileChartPie, FileCheck, ClipboardList } from 'lucide-react'
import { useRef, useEffect } from 'react'

const Documents = () => {
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
    {
      title: "Original Marriage Certificate",
      description: "The primary document that needs to be apostilled/attested",
      icon: FileText
    },
    {
      title: "Copy of Passport",
      description: "Passport Copy (husband and wife)",
      icon: FileChartPie
    },

    {
      title: "Application Form",
      description: "If applicable for your specific case",
      icon: ClipboardList
    }
  ]

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
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
            Documents Required for Marriage Certificate Apostille/Attestation
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {requiredDocuments.map((doc, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-12 h-12 bg-[#FFF7F0] rounded-full flex items-center justify-center">
                    <doc.icon className="w-6 h-6 text-[#FF6A00]" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {doc.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {doc.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Documents