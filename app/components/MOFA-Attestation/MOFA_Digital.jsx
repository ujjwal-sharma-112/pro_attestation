'use client'

import { motion } from 'framer-motion'
import { Laptop } from 'lucide-react'
import { useRef, useEffect } from 'react'

const MOFA_Digital = () => {
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

  const benefits = [
    "No physical office visits required",
    "Secure online document submission",
    "Real-time tracking and updates",
    "Faster processing times",
    "Enhanced accuracy and transparency"
  ]

  return (
    <div
      ref={(el) => (sectionRefs.current[0] = el)}
      className="px-4 py-16 opacity-0 transition-opacity duration-1000 max-w-6xl mx-auto"
    >
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-r from-[#FF6A00] to-[#FF8A30] rounded-2xl p-8 md:p-12 text-white">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#FF6A00] mr-4">
              <Laptop className="h-6 w-6" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold">MOFA Attestation Is Now Fully Digital for UAE</h2>
          </div>

          <p className="text-lg mb-6">
            The MOFA Attestation process in the UAE has now become completely digital, eliminating the need for individuals to visit government offices in person. You no longer have to stand in long lines or manage physical document submissions — everything can now be done online through verified and authorized agencies.
          </p>

          <p className="text-lg mb-8">
            At Pro Attestation, we are officially aligned with the UAE's new digital MOFA system, ensuring your documents are securely submitted, tracked, and attested through the official online platform. This transformation not only saves valuable time but also enhances accuracy, transparency, and speed in processing all your UAE MOFA attestation requirements.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white/20 p-4 rounded-lg backdrop-blur-sm"
              >
                <p className="font-medium">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MOFA_Digital