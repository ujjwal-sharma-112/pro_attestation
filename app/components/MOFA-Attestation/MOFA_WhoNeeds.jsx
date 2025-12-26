'use client'

import { motion } from 'framer-motion'
import { Users, GraduationCap, Briefcase, Heart, Building } from 'lucide-react'
import { useRef, useEffect } from 'react'

const MOFA_WhoNeeds = () => {
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

  const categories = [
    {
      icon: Briefcase,
      title: "Job Seekers",
      description: "Moving abroad for a job opportunity"
    },
    {
      icon: GraduationCap,
      title: "Students",
      description: "Applying for higher education overseas"
    },
    {
      icon: Heart,
      title: "Families",
      description: "Bringing your family to a foreign country"
    },
    {
      icon: Building,
      title: "Entrepreneurs",
      description: "Setting up a business abroad"
    },
    {
      icon: Users,
      title: "Professionals",
      description: "Submitting documents for medical or legal reasons"
    }
  ]

  return (
    <div
      ref={(el) => (sectionRefs.current[0] = el)}
      className="px-4 py-16 opacity-0 transition-opacity duration-1000 max-w-6xl mx-auto"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Who Needs MOFA Attestation?</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            You may require MOFA Attestation if you fall under any of these categories. Our expert team at Pro Attestation can help you with complete guidance and support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-white p-6 rounded-xl shadow-md border border-[#FF6A00]/10 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-[#FF6A00] flex items-center justify-center text-white mx-auto mb-4">
                <category.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.title}</h3>
              <p className="text-gray-600">{category.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MOFA_WhoNeeds