'use client'

import { motion } from 'framer-motion'
import { Search } from 'lucide-react'
import { useRef, useEffect } from 'react'

const MEA_Process = () => {
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
      title: "Document Collection & Verification",
      description: "We check document accuracy and validity.",
    },
    {
      title: "State Authentication",
      description: "Based on document type, verified by:",
      subPoints: ["HRD (Educational)", "Home Department (Personal)", "Chamber of Commerce (Commercial)"]
    },
    {
      title: "Submission to MEA",
      description: "We submit the document to MEA, New Delhi, for central attestation.",
    },
    {
      title: "Return with MEA Stamp/Sticker",
      description: "The document is returned with the official MEA seal, validating it for international use.",
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
                    <Search className="h-6 w-6 " />
                </div>
                
                <h2 className="text-2xl md:text-3xl pt-2  font-bold text-gray-900">MEA Attestation in India – Step-by-Step Process</h2>
            </div>
            <p className="py-4 text-gray-800 lg:pl-12">Here’s how we help you::</p>
        </div>

        <div className="relative px-8 rounded-2xl">
          
          {/* Process steps with connecting line */}
          <div className="hidden md:block absolute left-[55px] top-10 bottom-16 w-1 bg-[#FF6A00]/20 z-0"></div>

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
                  {step.subPoints && (
                    <ul className="mt-2 space-y-1">
                      {step.subPoints.map((point, idx) => (
                        <li key={idx} className="text-gray-700 flex items-center">
                          <span className="w-1.5 h-1.5 bg-[#FF6A00] rounded-full mr-2"></span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* <div className="mt-8 text-center">
          <p className="text-lg text-gray-700">We offer doorstep pickup & delivery across India.</p>
          <p className="text-lg text-gray-700 mt-2">Average processing time: 7-10 working days</p>
        </div> */}
      </div>
    </div>
  )
}

export default MEA_Process