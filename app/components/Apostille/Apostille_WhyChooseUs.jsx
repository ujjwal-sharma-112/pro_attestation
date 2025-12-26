'use client'

import { motion } from 'framer-motion'
import { Award, BadgeCheck, Clock, MapPin, Shield } from 'lucide-react'
import { useRef, useEffect } from 'react'

const Apostille_WhyChooseUs = () => {
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

  const features = [
    {
      title: "MEA-authorized agent",
      description: "10+ years of experience",
      icon: Award
    },
    {
      title: "Real-time tracking",
      description: "Dedicated support available",
      icon: Clock
    },
    {
      title: "PAN India service",
      description: "Collection & delivery across India",
      icon: MapPin
    },
    {
      title: "Safe document handling",
      description: "Your originals are secure with us",
      icon: Shield
    },
    {
      title: "Express service",
      description: "Urgent apostille options available",
      icon: BadgeCheck
    }
  ]

  return (
    <div
      ref={(el) => (sectionRefs.current[6] = el)}
      className=" px-6 py-12 opacity-0 transition-opacity duration-1000 rounded-2xl  mx-4 md:mx-auto max-w-6xl"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-8">
          <div className="w-10 h-10 rounded-full bg-[#FF6A00] flex items-center justify-center text-white mr-4">
            <Award className="h-5 w-5" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Why Choose Pro Attestation?</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-sm border border-[#FF6A00]/10"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-[#FF6A00]/10 flex items-center justify-center mr-4">
                  <feature.icon className="h-5 w-5 text-[#FF6A00]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Apostille_WhyChooseUs