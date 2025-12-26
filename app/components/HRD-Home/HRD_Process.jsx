'use client'

import { motion } from 'framer-motion'
import { Search } from 'lucide-react'
import { useRef, useEffect } from 'react'

const HRD_Process = () => {
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
    {
      title: "Document Collection",
      description: "From your doorstep (anywhere in India)",
    },
    {
      title: "Verification",
      description: "By the university or educational board",
    },
    {
      title: "HRD Attestation",
      description: "State-level HRD seals/stamps",
    },
    {
      title: "Further Attestation",
      description: "MEA, Embassy, MOFA (if required)",
    }
  ]
    
  return (
    <div
      ref={(el) => (sectionRefs.current[3] = el)}
      className="px-4 py-16 opacity-0 transition-opacity duration-1000 max-w-6xl mx-auto"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-start mb-8">
          <div className="flex">
            <div className="w-12 h-12 rounded-full px-4 md:px-0 bg-[#FF6A00] flex items-center justify-center text-white mr-4 shadow-lg">
              <Search className="h-6 w-6" />
            </div>
            <h2 className="text-2xl md:text-3xl pt-2 font-bold text-gray-900">HRD Attestation Process</h2>
          </div>
          <p className="py-4 text-gray-800 lg:pl-12">Here's how we manage the HRD Attestation Process for you:</p>
        </div>

        <div className="relative px-8 rounded-2xl">
          {/* Process steps with connecting line */}
          <div className="hidden md:block absolute left-[52px] top-10 bottom-16 w-1 bg-[#FF6A00]/20 z-0"></div>

          <div className="space-y-8 relative z-10">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ x: -10, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#FF6A00] text-white flex items-center justify-center font-bold text-lg shadow-md z-10">
                  {index + 1}
                </div>
                <div className="ml-6 bg-white p-5 rounded-lg shadow-sm flex-grow border border-[#FF6A00]/10">
                  <h3 className="font-semibold text-lg text-gray-900">{step.title}</h3>
                  <p className="text-gray-700 mt-2">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-8 px-8">
          <p className="text-lg text-gray-700 bg-white p-4 rounded-lg border border-[#FF6A00]/10 shadow-sm">
            📍 We provide State HRD Attestation for all major states including Delhi, Maharashtra, Tamil Nadu, Kerala, Punjab, and more.
          </p>
        </div>
      </div>
    </div>
  )
}

export default HRD_Process