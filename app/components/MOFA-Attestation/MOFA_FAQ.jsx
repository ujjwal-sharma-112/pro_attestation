'use client'

import { motion } from 'framer-motion'
import { Search } from 'lucide-react'
import { useRef, useEffect } from 'react'

const MOFA_FAQ = () => {
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
      question: "What is MOFA Attestation?",
      answer: "It's the final verification done by the Ministry of Foreign Affairs, now processed digitally through authorized agencies, to make your documents legally valid for international use."
    },
    {
      question: "Is MOFA Attestation mandatory for UAE?",
      answer: "Yes, MOFA Attestation UAE is required for employment, education, and visa purposes in the Emirates."
    },
    {
      question: "Can Pro Attestation help with MOFA Attestation in Dubai?",
      answer: "Absolutely. We offer expert support for MOFA Attestation Dubai, ensuring accuracy, compliance, and timely completion."
    },
    {
      question: "How can I find MOFA Attestation Near Me?",
      answer: "You can contact Pro Attestation directly — we offer convenient document collection, delivery, and online submission options."
    },
    {
      question: "How long does MOFA Attestation take?",
      answer: "Usually 2–5 working days, depending on the document type and prior verification stages. The new digital MOFA system ensures quicker and more transparent processing."
    }
  ]

  return (
    <div
      ref={(el) => (sectionRefs.current[6] = el)}
      className=" px-6 py-12 opacity-0 transition-opacity duration-1000 rounded-2xl  mx-4 md:mx-auto max-w-6xl"
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
              <h3 className="font-semibold text-lg text-gray-900 mb-3">Q{index + 1}. {faq.question}</h3>
              <p className="text-gray-700">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MOFA_FAQ