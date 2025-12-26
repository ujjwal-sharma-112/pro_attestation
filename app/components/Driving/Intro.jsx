'use client'

import { motion } from 'framer-motion'
import { useRef, useEffect } from 'react'
import Image from 'next/image'

const Intro = () => {
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
      className="px-6 py-12 md:py-16 opacity-0 transition-opacity duration-1000 rounded-2xl mx-4 md:mx-auto max-w-7xl"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Right column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <article className="space-y-6">
              <p className="text-lg text-gray-700">
              Going abroad and need to drive? Your Indian Driving License Apostille or Driving License Attestation is necessary. We assist with quick legalization for international driving permits, car rentals, or license conversions abroad.

</p>
            </article>
          </motion.div>

          {/* Left column - Image */}
          <motion.div 
            className="bg-[#FFF7F0] w-full h-[400px] rounded-lg shadow-sm flex items-center justify-center overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2940&auto=format&fit=crop"
              alt="Document Attestation Services"
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

export default Intro
