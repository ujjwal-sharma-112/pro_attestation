'use client'

import { motion } from 'framer-motion'
import { Building2 } from 'lucide-react'
import { useRef, useEffect } from 'react'

const HRD_HomeProcess = () => {
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
    "Submission of original personal document",
    "Verification by the respective district/municipality",
    "Authentication by Delhi Home Department",
    "Proceed to MEA and Embassy Attestation (if needed)"
  ]
    
  return (
    <div
      ref={(el) => (sectionRefs.current[7] = el)}
      className="px-4 py-16 opacity-0 transition-opacity duration-1000 max-w-6xl mx-auto"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-8">
          <div className="w-12 h-12 rounded-full bg-[#FF6A00] flex items-center justify-center text-white mr-4 shadow-lg">
            <Building2 className="h-6 w-6" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Process for Delhi Home Department Attestation</h2>
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
                  <p className="text-gray-800 text-lg">{step}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HRD_HomeProcess