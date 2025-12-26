'use client'

import { motion } from 'framer-motion'
import { Building2, Globe } from 'lucide-react'
import { useRef, useEffect } from 'react'

const MOFA_UAE_Specialization = () => {
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
      className="px-4 py-16 opacity-0 transition-opacity duration-1000 max-w-6xl mx-auto"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* UAE Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-[#FF6A00] flex items-center justify-center text-white mr-4">
                <Building2 className="h-6 w-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">MOFA Attestation UAE</h2>
            </div>

            <p className="text-lg text-gray-700">
              The United Arab Emirates (UAE) has strict verification standards for all documents submitted in the country. MOFA Attestation UAE validates your papers for legal use across various Emirates.
            </p>

            <p className="text-base text-gray-700">
              At Pro Attestation, we manage this process end-to-end — from document collection to final attestation. Whether you're applying for a job, university admission, or family visa in the UAE, our experts make the MOFA Attestation UAE process quick and accurate.
            </p>
          </motion.div>

          {/* Dubai Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-[#FF6A00] flex items-center justify-center text-white mr-4">
                <Globe className="h-6 w-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">MOFA Attestation Dubai</h2>
            </div>

            <p className="text-lg text-gray-700">
              Living or working in Dubai often requires your documents to be verified by the Ministry of Foreign Affairs in Dubai. With Pro Attestation, you don't have to worry about navigating complex paperwork or long queues.
            </p>

            <p className="text-base text-gray-700">
              Our professional team takes care of every step involved in MOFA Attestation Dubai, ensuring your certificates are processed efficiently and returned safely. We value your time and understand the importance of accuracy in every attestation.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default MOFA_UAE_Specialization