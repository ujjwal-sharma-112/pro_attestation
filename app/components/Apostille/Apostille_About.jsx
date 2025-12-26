'use client'

import { motion } from 'framer-motion'
import { FileText } from 'lucide-react'
import Image from 'next/image'
import { useRef, useEffect } from 'react'

const Apostille_About = () => {
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
      className=" px-6 py-12 opacity-0 transition-opacity duration-1000 rounded-2xl  mx-4 md:mx-auto max-w-6xl"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Right column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full bg-[#FF6A00] flex items-center justify-center text-white mr-4">
                <FileText className="h-5 w-5" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">What is Apostille?</h2>
            </div>

            <p className="text-lg text-gray-700 mb-6">
              Apostille is a type of document legalization accepted by countries that are part of the Hague Convention of 1961. 
              It eliminates the need for further embassy legalization. The MEA apostille stamp is proof that your document is 
              authentic and recognized for international use.
            </p>

            <p className="text-base text-gray-600">
              (Also searched as: apostile, apostil, or apostle service)
            </p>
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
              alt="Apostille Services"
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

export default Apostille_About