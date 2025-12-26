'use client'

import { motion } from 'framer-motion'
import { FileText, Folder, Building2 } from 'lucide-react'
import { useRef, useEffect } from 'react'

const Apostille_Documents = () => {
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

  const documentCategories = [
    {
      title: "Educational Certificates",
      description: "Degree, Diploma, Transcript",
      icon: FileText,
      color: "bg-blue-500"
    },
    {
      title: "Personal Documents",
      description: "Birth Certificate, Marriage Certificate, PCC",
      icon: Folder,
      color: "bg-green-500"
    },
    {
      title: "Commercial Documents",
      description: "Company Registration, Export Licenses",
      icon: Building2,
      color: "bg-purple-500"
    }
  ]
    
  return (
    <div
      ref={(el) => (sectionRefs.current[1] = el)}
      className=" px-6 py-12 opacity-0 transition-opacity duration-1000 rounded-2xl  mx-4 md:mx-auto max-w-6xl"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-8">
          <div className="w-10 h-10 rounded-full bg-[#FF6A00] flex items-center justify-center text-white mr-4">
            <FileText className="h-5 w-5" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Documents We Apostille</h2>
        </div>

        <p className="text-lg text-gray-700 mb-8">
          We handle apostille of all major document categories:
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {documentCategories.map((category, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="bg-white p-6 rounded-lg shadow-sm border border-[#FF6A00]/10"
            >
              <div className={`w-12 h-12 rounded-full ${category.color} flex items-center justify-center text-white mb-4`}>
                <category.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.title}</h3>
              <p className="text-gray-700">{category.description}</p>
            </motion.div>
          ))}
        </div>

        <p className="text-lg text-gray-700 mt-8 text-center">
          All documents are apostilled directly through the Ministry of External Affairs (MEA) in India.
        </p>
      </div>
    </div>
  )
}

export default Apostille_Documents