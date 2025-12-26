'use client'

import { motion } from 'framer-motion'
import { HelpCircle } from 'lucide-react'
import { useRef, useEffect } from 'react'

const Apostille_FAQ = () => {
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
      question: "Is apostille the same as attestation?",
      answer: "Apostille is for Hague Convention countries; attestation is for others like UAE or Saudi Arabia."
    },
    {
      question: "Can I apostille my documents without going to Delhi?",
      answer: "Yes, we offer apostille services from anywhere in India — no physical visit required."
    },
    {
      question: "What's the difference between apostile and apostille?",
      answer: '"Apostile" is a common misspelling. The correct term is "apostille", meaning international legalization of a document.'
    }
  ]

  return (
    <div
      ref={(el) => (sectionRefs.current[5] = el)}
      className=" px-6 py-12 opacity-0 transition-opacity duration-1000 rounded-2xl  mx-4 md:mx-auto max-w-6xl"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-8">
          <div className="w-10 h-10 rounded-full bg-[#FF6A00] flex items-center justify-center text-white mr-4">
            <HelpCircle className="h-5 w-5" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">FAQs about Apostille Services</h2>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-sm border border-[#FF6A00]/10"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
              <p className="text-gray-700">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Apostille_FAQ