'use client'

import { motion } from 'framer-motion'
import { Search } from 'lucide-react'
import { useRef, useEffect } from 'react'

const Embassy_FAQ = () => {
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

  const faqs = [
    {
      question: "What is Embassy Attestation?",
      answer: "Embassy attestation is the final step in document legalization where a foreign embassy certifies the authenticity of your Indian-issued documents."
    },
    {
      question: "Is Embassy Attestation mandatory?",
      answer: "Yes, for non-Apostille countries like UAE, Saudi, Qatar, etc., it is mandatory."
    },
    {
      question: "What is the difference between Apostille and Embassy Attestation?",
      answer: "Apostille is for countries in the Hague Convention. Embassy Attestation is needed for all others and includes a more extensive process."
    },
    {
      question: "What is the process for Embassy Attestation in India?",
      answer: "Local verification → MEA Attestation → Embassy Attestation."
    },
    {
      question: "Can I track my document status?",
      answer: "Yes, we offer real-time tracking and support throughout the process."
    }
  ]
    
  return (
    <div
      ref={(el) => (sectionRefs.current[6] = el)}
      className="px-6 py-12 opacity-0 transition-opacity duration-1000 rounded-2xl mx-4 md:mx-auto max-w-6xl"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-8">
          <div className="w-10 h-10 rounded-full bg-[#FF6A00] flex items-center justify-center text-white mr-4">
            <Search className="h-5 w-5" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">FAQs – Embassy Attestation Services</h2>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -3 }}
              className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#FF6A00]"
            >
              <h3 className="font-semibold text-lg text-gray-900 mb-3">Q. {faq.question}</h3>
              <p className="text-gray-700">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Embassy_FAQ