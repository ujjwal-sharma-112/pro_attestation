'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useRef, useEffect } from 'react'

const HRD_About = () => {
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
      ref={(el) => (sectionRefs.current[0] = el)}
      className="px-6 py-12 opacity-0 transition-opacity duration-1000 rounded-2xl mx-4 md:mx-auto max-w-7xl"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <header>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                What is HRD Attestation?
              </h1>
            </header>

            <article className="space-y-6">
              <p className="text-lg text-gray-700">
                HRD Attestation stands for Human Resource Development Attestation, a process where your educational documents (like degrees or diplomas) are verified by the respective State's HRD department before they are submitted for MEA and Embassy attestation.
              </p>

              <div className="space-y-4 bg-white p-6 rounded-lg shadow-sm border border-[#FF6A00]/10">
                <p className="text-base text-gray-700">
                  📌 HRD Full Form: <span className="font-semibold">Human Resource Development</span>
                </p>
                <p className="text-base text-gray-700">
                  📌 HRD Attestation Full Form: <span className="font-semibold">Human Resource Development Attestation</span>
                </p>
              </div>
            </article>

          </motion.div>

          {/* Right column - Image */}
          <motion.div 
            className="bg-[#FFF7F0] w-full h-[400px] rounded-lg shadow-sm flex items-center justify-center overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2940&auto=format&fit=crop"
              alt="HRD Attestation Services"
              width={600}
              height={400}
              className="w-full h-full object-cover"
              priority
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default HRD_About