'use client'

import { motion } from 'framer-motion'
import { FileText } from 'lucide-react'
import Image from 'next/image'
import { useRef, useEffect } from 'react'

const MEA_About = () => {
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
      className=" px-6 py-12 opacity-0 transition-opacity duration-1000 rounded-2xl  mx-4 md:mx-auto max-w-7xl"
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
            {/* Header Section */}
            <header className="flex items-center"></header>
              
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                What is MEA Attestation?
              </h1>
           

            {/* Main Content Section */}
            <article className="space-y-6">
              <p className="text-lg text-gray-700">
                MEA Attestation full form is Ministry of External Affairs Attestation. It refers to the legal authentication of documents by the Ministry of External Affairs, Government of India.
                This attestation confirms that your educational, personal, or commercial documents are genuine and can be recognized by foreign authorities.
              </p>

              <p className="text-base text-gray-600">
                This process is essential for individuals and businesses who need their documents validated for use outside India.
              </p>
            </article>

            {/* Additional Information Section */}
            <section>
              <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                MEA Attestation Meaning:
              </h2>
              <p className="text-base text-gray-600">
                Simply put, it's an official stamp or sticker from the MEA that makes your document internationally valid.
              </p>
            </section>
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
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2940&auto=format&fit=crop"
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

export default MEA_About
