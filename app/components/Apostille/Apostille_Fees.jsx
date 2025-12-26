'use client'

import { motion } from 'framer-motion'
import { Clock, IndianRupee } from 'lucide-react'
import { useRef, useEffect } from 'react'

const Apostille_Fees = () => {
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
            <IndianRupee className="h-5 w-5" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Apostille Stamp Fees & Timelines</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white p-6 rounded-lg shadow-sm border border-[#FF6A00]/10"
          >
            <div className="flex items-center mb-4">
              <Clock className="h-6 w-6 text-[#FF6A00] mr-3" />
              <h3 className="text-xl font-semibold text-gray-900">Processing Time</h3>
            </div>
            <p className="text-gray-700">
              2–3 working days (depending on document type and state)
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white p-6 rounded-lg shadow-sm border border-[#FF6A00]/10"
          >
            <div className="flex items-center mb-4">
              <IndianRupee className="h-6 w-6 text-[#FF6A00] mr-3" />
              <h3 className="text-xl font-semibold text-gray-900">Apostille Stamp Fees</h3>
            </div>
            <p className="text-gray-700">
              Varies per document — reach out for a quick quote
            </p>
          </motion.div>
        </div>

        <div className="text-center mt-8">
          <p className="text-lg text-gray-700 font-medium">
            No hidden charges. Transparent pricing. Fastest apostille service guaranteed.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Apostille_Fees