'use client'

import { motion } from 'framer-motion'
import { Award, BookOpen, GraduationCap, Briefcase, Plane, FileText } from 'lucide-react'
import { useRef, useEffect } from 'react'

const HRD_Purpose = () => {
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

  const purposes = [
    {
      text: "Higher education abroad",
      icon: <GraduationCap className="h-5 w-5 mr-2" />
    },
    {
      text: "Employment visas in countries like UAE, Saudi Arabia, Qatar, etc.",
      icon: <Briefcase className="h-5 w-5 mr-2" />
    },
    {
      text: "Migration or residency purposes",
      icon: <Plane className="h-5 w-5 mr-2" />
    },
    {
      text: "Government or embassy documentation",
      icon: <FileText className="h-5 w-5 mr-2" />
    }
  ]
    
  return (
    <div
      ref={(el) => (sectionRefs.current[2] = el)}
      className="px-4 py-16 opacity-0 transition-opacity duration-1000 max-w-6xl mx-auto"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-8">
          <div className="w-12 h-12 rounded-full bg-[#FF6A00] flex items-center justify-center text-white mr-4 shadow-lg">
            <BookOpen className="h-6 w-6" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Purpose of HRD Attestation</h2>
        </div>

        <p className="text-lg text-gray-700 mb-8">
          HRD attestation is mandatory for validating the authenticity of your educational documents when applying for:
        </p>

        <div className="grid md:grid-cols-2  lg:grid-cols-2 gap-6 mb-6 p-8 rounded-2xl">
          {purposes.map((purpose, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="bg-white p-5 rounded-lg shadow-sm flex items-start border border-[#FF6A00]/10"
            >
              <div className="flex text-[#FF6A00] items-center ">
                {purpose.icon}
                <p className="text-gray-800  text-lg">{purpose.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          whileHover={{ scale: 1.01 }}
          className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#FF6A00] mt-8"
        >
          <div className="flex items-center">
            <Award className="h-5 w-5 mr-3 text-[#FF6A00]" />
            <p className="text-gray-700 text-lg">
              If you are applying for a work permit or student visa, HRD Certificate Attestation is often a compulsory step in the document legalization process.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default HRD_Purpose