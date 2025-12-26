'use client'

import { motion } from 'framer-motion'
import { DollarSign, Clock } from 'lucide-react'
import { useRef, useEffect } from 'react'

const MOFA_Fees = () => {
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
      ref={(el) => (sectionRefs.current[4] = el)}
      className=" px-6 py-12 opacity-0 transition-opacity duration-1000 rounded-2xl  mx-4 md:mx-auto max-w-6xl"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-8">
          <div className="w-10 h-10 rounded-full bg-[#FF6A00] flex items-center justify-center text-white mr-4">
            <Clock className="h-5 w-5" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">How Long Does MOFA Attestation Take?</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#FF6A00] flex"
          >
            <Clock className="text-[#FF6A00] h-6 w-6 mr-4 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">Processing Time</h3>
              <p className="text-gray-700">Between 2 to 5 working days</p>
              <p className="text-gray-700 mt-1">Once all prior attestations are completed</p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#FF6A00] flex"
          >
            <DollarSign className="text-[#FF6A00] h-6 w-6 mr-4 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">Digital Advantage</h3>
              <p className="text-gray-700 mt-1">Thanks to the digital submission system, Pro Attestation ensures a faster and more reliable turnaround time</p>
            </div>
          </motion.div>
        </div>

        <p className="text-lg text-gray-700">
          The timeline depends on your document type and issuing authority. We offer faster processing especially for clients requiring MOFA Attestation UAE or MOFA Attestation Dubai.
        </p>
      </div>
    </div>
  )
}

export default MOFA_Fees