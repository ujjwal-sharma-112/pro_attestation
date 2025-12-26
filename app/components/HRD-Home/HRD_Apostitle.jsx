'use client'

import { motion } from 'framer-motion'
import { Stamp } from 'lucide-react'
import { useRef, useEffect } from 'react'

const HRD_Apostille = () => {
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
      ref={(el) => (sectionRefs.current[3] = el)}
      className="px-4 py-16 opacity-0 transition-opacity duration-1000 max-w-6xl mx-auto"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl p-8 shadow-sm border border-[#FF6A00]/10"
        >
          <div className="flex items-start gap-6">
            <div className="w-12 h-12 rounded-full bg-[#FF6A00] flex items-center justify-center text-white flex-shrink-0">
              <Stamp className="h-6 w-6" />
            </div>
            
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                What is HRD Apostille?
              </h2>
              
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg text-gray-700 leading-relaxed"
              >
                If you're traveling to a country that is a member of the Hague Apostille Convention, your degree certificate will go through HRD verification first, followed by MEA Apostille, instead of Embassy Attestation.
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default HRD_Apostille