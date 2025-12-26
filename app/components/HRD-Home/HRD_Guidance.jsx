'use client'

import { motion } from 'framer-motion'
import { Building2, Clock, DollarSign } from 'lucide-react'
import { useRef, useEffect } from 'react'

const HRD_Guidance = () => {
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

  const processSteps = [
    "Local university verification",
    "Document submission to the Delhi HRD/ Higher Education Department",
    "Attestation stamp/seal on the original certificate"
  ]
    
  return (
    <div
      ref={(el) => (sectionRefs.current[4] = el)}
      className="px-6 py-12 opacity-0 transition-opacity duration-1000 rounded-2xl mx-4 md:mx-auto max-w-6xl"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-8">
          <div className="w-12 h-12 rounded-full bg-[#FF6A00] flex items-center justify-center text-white mr-4 shadow-lg">
            <Building2 className="h-6 w-6" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">HRD Attestation Delhi – Complete Guidance</h2>
        </div>

        <p className="text-lg text-gray-700 mb-6">If you're based in the capital, here's what you need to know:</p>

        {/* Process Section */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">What is the Process for Delhi HRD Attestation?</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#FF6A00]"
              >
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-[#FF6A00]/10 flex items-center justify-center text-[#FF6A00] font-semibold mr-3">
                    {index + 1}
                  </div>
                  <p className="text-gray-800">{step}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline and Fees Section */}
        <h3 className="text-xl font-semibold text-gray-900 mb-4">How many days will it take for Delhi HRD Attestation?</h3>
        <div className="grid md:grid-cols-2 gap-6">
          
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#FF6A00] flex"
          >
            <Clock className="text-[#FF6A00] h-6 w-6 mr-4 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">Processing Time</h3>
              <p className="text-gray-700">2-3 working days</p>
              <p className="text-gray-700 mt-1">(Depending on document type and university response)</p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#FF6A00] flex"
          >
            <DollarSign className="text-[#FF6A00] h-6 w-6 mr-4 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">Charges for HRD Attestation  in Delhi:</h3>
              <p className="text-gray-700 mt-1">(Varies by state, urgency, and type of document)</p>
            </div>
          </motion.div>
        </div>

        <div className="mt-8">
          <p className="text-lg text-gray-700 bg-white p-4 rounded-lg border border-[#FF6A00]/10 shadow-sm italic">
            Custom quotes provided based on your specific case.
          </p>
        </div>
      </div>
    </div>
  )
}

export default HRD_Guidance