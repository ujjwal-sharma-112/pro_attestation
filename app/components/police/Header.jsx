"use client"

import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

export default function PersonalHeader() {
  return (
    <section className="relative text-white py-4 md:py-8 px-8 md:px-16 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2944&auto=format&fit=crop')",
          zIndex: 0,
        }}
      ></div>

      {/* Dark Overlay with brand color */}
      <div className="absolute inset-0 bg-black opacity-70 z-0"></div>

      {/* Content */}
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="px-4 py-8 md:py-12 max-w-6xl mx-auto"
        >
          <motion.h1
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-5xl  font-bold mb-6 text-white leading-tight"
          >
            Police Clearance Certificate (PCC)
            <br/>
            <span className="relative text-[#FF6A00]">
              Apostille & Attestation
               </span>{" "}
            Services
          </motion.h1>


          <Link href="/contact"><motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#FF6A00] text-white px-8 py-3 rounded-lg font-medium flex items-center shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Contact Us
            <ChevronRight className="ml-2 h-5 w-5" />
          </motion.button> </Link>
        </motion.div>
      </div>
    </section>
  )
}