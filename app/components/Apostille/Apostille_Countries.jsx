'use client'

import { motion } from 'framer-motion'
import { Globe } from 'lucide-react'
import { useRef, useEffect } from 'react'

const Apostille_Countries = () => {
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

  const countries = [
    {
      name: "Italy",
      flag: "🇮🇹",
      link: "/services/apostille/italy"
    },
    {
      name: "France",
      flag: "🇫🇷",
      link: "/services/apostille/france"
    },
    {
      name: "Germany",
      flag: "🇩🇪",
      link: "/services/apostille/germany"
    },
    {
      name: "Spain",
      flag: "🇪🇸",
      link: "/services/apostille/spain"
    },
    {
      name: "Netherlands",
      flag: "🇳🇱",
      link: "/services/apostille/netherlands"
    },
    {
      name: "USA",
      flag: "🇺🇸",
      link: "/services/apostille/usa"
    },
    {
      name: "Saudi Arabia",
      flag: "🇸🇦",
      link: "/services/apostille/Saudi_Arabia"
    },
    {
      name: "Australia",
      flag: "🇦🇺",
      link: "/services/apostille/australia"
    }
  ]
    
  return (
    <div
      ref={(el) => (sectionRefs.current[2] = el)}
      className=" px-6 py-12 opacity-0 transition-opacity duration-1000 rounded-2xl  mx-4 md:mx-auto max-w-6xl"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-8">
          <div className="w-10 h-10 rounded-full bg-[#FF6A00] flex items-center justify-center text-white mr-4">
            <Globe className="h-5 w-5" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Countries We Apostille Documents For</h2>
        </div>

        <p className="text-lg text-gray-700 mb-8">
          We offer apostille services for over 100+ Hague Convention countries, including:
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {countries.map((country, index) => (
            <motion.a
              key={index}
              href={country.link}
              whileHover={{ scale: 1.03 }}
              className="flex items-center p-4 bg-white rounded-lg shadow-sm border border-[#FF6A00]/10 cursor-pointer"
            >
              <span className="text-2xl mr-3">{country.flag}</span>
              <span className="text-lg  text-gray-900">
                Apostille for {country.name}
              </span>
            </motion.a>
          ))}
        </div>

        <motion.a
          href="/countries"
          className="flex items-center justify-center mt-8 text-[#FF6A00] font-medium hover:underline"
        >
          View full list of countries →
        </motion.a>
      </div>
    </div>
  )
}

export default Apostille_Countries