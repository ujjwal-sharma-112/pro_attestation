'use client'

import { motion } from 'framer-motion'
import { DollarSign, Clock } from 'lucide-react'
import { useRef, useEffect } from 'react'

const MEA_Fees = () => {
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
            <DollarSign className="h-5 w-5" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">MEA Attestation Fees & Timelines</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#FF6A00] flex"
          >
            <Clock className="text-[#FF6A00] h-6 w-6 mr-4 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">Processing Time</h3>
              <p className="text-gray-700">2–3 working days</p>
              <p className="text-gray-700 mt-1">(Depending on document type and state)</p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#FF6A00] flex"
          >
            <DollarSign className="text-[#FF6A00] h-6 w-6 mr-4 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">MEA Attestation Fees:</h3>
              <p className="text-gray-700 mt-1">Our service fees are additional — contact us for a custom quote</p>
            </div>
          </motion.div>
        </div>

        <p className="text-lg text-gray-700">
        We offer PAN India pickup and delivery, urgent options, and full tracking.
        </p>
      </div>
    </div>
  )
}

export default MEA_Fees