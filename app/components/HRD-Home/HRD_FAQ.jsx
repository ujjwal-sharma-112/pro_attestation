'use client'

import { motion } from 'framer-motion'
import { Search } from 'lucide-react'
import { useRef, useEffect } from 'react'

const HRD_FAQ = () => {
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
      question: "What is HRD Attestation?",
      answer: " HRD attestation is the verification of educational documents by a state’s Human Resource Department before MEA/Embassy attestation."
    },
    {
      question: "What is HRD apostille?",
      answer: "HRD apostille refers to HRD verification followed by MEA Apostille (for countries under the Hague Convention)."
    },
    {
      question: "Is HRD attestation mandatory?",
      answer: "Yes, especially if you are submitting educational documents for employment/study abroad in many countries like UAE, Saudi, Germany, etc."
    },
    {
      question: "How long does HRD attestation take?",
      answer: "Typically between 2-3 business days, depending on your state and university verification speed."
    },
    {
      question: "What is the purpose of Home Department Attestation?",
      answer: "It is used to verify the authenticity of personal documents like birth, marriage, and PCCs for international purposes."
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
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Frequently Asked Questions (FAQs)</h2>
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

export default HRD_FAQ