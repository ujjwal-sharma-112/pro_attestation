'use client'

import { motion } from 'framer-motion'
import { FileText, Check } from 'lucide-react'
import { useRef, useEffect } from 'react'

const MOFA_Documents = () => {
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

  const documentCategories = [
    {
      title: "Educational Documents",
      description: "Degree and diploma certificates, Mark sheets and transcripts, Professional qualification certificates",
      icon: Check
    },
    {
      title: "Personal Documents",
      description: "Marriage and birth certificates, Divorce certificates, Medical and police clearance certificates",
      icon: Check
    },
    {
      title: "Commercial Documents",
      description: "Power of attorney, Memorandum of Association (MOA), Trade licenses and agreements",
      icon: Check
    }
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
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Documents Covered Under MOFA Attestation</h2>
        </div>

        <p className="text-lg text-gray-700 mb-6">Pro Attestation provides MOFA Attestation for all major types of documents:</p>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {documentCategories.map((category, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#FF6A00]"
            >
              <div className="flex items-start mb-4">
                <category.icon className="text-[#FF6A00] h-6 w-6 mr-2 mt-1 flex-shrink-0" />
                <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
              </div>
              <p className="text-gray-600">{category.description}</p>
            </motion.div>
          ))}
        </div>

        <p className="text-lg text-gray-700">
          We ensure every document receives the correct verification before MOFA approval.
        </p>
      </div>
    </div>
  )
}

export default MOFA_Documents