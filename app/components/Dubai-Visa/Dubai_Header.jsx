"use client"


import { ChevronRight } from "lucide-react"
import Link from "next/link"

export default function Dubai_Header() {
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
        <div
          className="px-4 py-8 md:py-12 max-w-6xl mx-auto"
        >
          <h1
            className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight"
          >
            UAE / Dubai Visa Services in {" "}
            <span className="text-[#FF6A00] relative">
             Delhi NCR
              <span className="absolute bottom-1 left-0 w-full h-2 bg-[#FF6A00]/10 -z-10 rounded-full"></span>
            </span>{" "}
            
          </h1>

          <p
            className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl"
          >
            Planning to travel to Dubai or anywhere in the UAE? Whether you're applying for a Dubai tourist visa from India, a UAE employment visa, or a business visa, our expert team at Pro Attestation is here to provide fast, reliable, and transparent visa assistance.
          </p>

        <p
            className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl"
          >
          We are a trusted Dubai visa agency in Delhi, offering end-to-end support for all types of UAE visa applications. From documentation and online submission to follow-ups and final approvals, we handle the entire process for you so you don’t have to worry about the complexities. Our goal is to make UAE visa processing smooth, fast, and hassle-free — whether it’s a short visit or a long-term work opportunity.
          </p>

          <p
            className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl"
          >
            With a dedicated team and years of experience, we are known for our Dubai visa services in Delhi, and we’ve assisted hundreds of Indian travelers in getting their visas approved successfully. If you're searching for a UAE visa agent near me, look no further than Pro Attestation.
        </p>

          <Link href="/contact">
          <button
            className="bg-[#FF6A00] text-white px-8 py-3 rounded-lg font-medium flex items-center shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Contact Now
            <ChevronRight className="ml-2 h-5 w-5" />
          </button>
          </Link>
        </div>
      </div>
    </section>
  )
}