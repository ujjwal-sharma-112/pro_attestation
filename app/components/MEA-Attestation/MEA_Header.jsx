"use client"

import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

export default function MEA_Header() {
  return (
    <section className="relative text-white py-4 md:py-8 px-8 md:px-16 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          zIndex: 0,
        }}
      ></div>

      {/* Dark Overlay */}
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
            className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight"
          >
            MEA Attestation Services in India –{" "}
            <span className="text-[#FF6A00] relative">
              Fast & Reliable
              <span className="absolute bottom-1 left-0 w-full h-2 bg-[#FF6A00]/10 -z-10 rounded-full"></span>
            </span>{" "}
            Document Legalization
          </motion.h1>

          <motion.p
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5}}
            className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl"
          >
            Need verified and hassle-free MEA attestation in India? Pro Attestation offers secure, fast, and trusted MEA document attestation services for all types of certificates. Whether you’re applying for a work visa, studying abroad, or doing international business, we handle your document legalization with precision and care.
          </motion.p>

          <Link href="/contact">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#FF6A00] text-white px-8 py-3 rounded-lg font-medium flex items-center shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Contact Now
            <ChevronRight className="ml-2 h-5 w-5" />
          </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}