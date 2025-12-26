"use client"

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div id="aboutus" className="w-full bg-[#FFF7F0] py-24 px-8 md:px-16 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-4">
              <span className="inline-block text-lg font-semibold text-[#FF6A00] pb-1 border-b-2 border-[#FF6A00]">
                About Us
              </span>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#222222] leading-tight">
                Trusted Certificate Attestation Experts
              </h2>
              
              <p className="text-xl text-[#222222]">
                PAN India Service with Global Reach
              </p>
            </div>
            
            <p className="text-[#555555] text-sm leading-relaxed">
              At Pro Attestation, we specialize in document attestation, apostille, and embassy 
              legalization services for over 120+ countries including UAE, Saudi Arabia, Qatar, 
              Kuwait, Oman, and more. Whether you're applying for a job abroad, planning higher 
              education overseas, or relocating with family — we ensure your documents are 
              processed securely and efficiently.
            </p>
            
            <ul className="space-y-5 pt-2">
              {[
                "100% genuine attestation",
                "Real-time status updates",
                "Dedicated support agents"
              ].map((item, index) => (
                <li key={index} className="flex items-start group">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#FF6A00] text-white flex items-center justify-center text-sm mr-4 mt-0.5 group-hover:scale-110 transition-transform">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-medium text-lg text-[#222222]">{item}</h3>
                  </div>
                </li>
              ))}
            </ul>
            
            {/* <div className="pt-2">
              <button className="px-4 py-2 bg-[#FF6A00] text-white font-medium rounded-md hover:bg-[#E63C00] transition-all hover:shadow-lg transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#FF6A00] focus:ring-opacity-50">
                Get Started
              </button>
            </div> */}
          </motion.div>
          
          {/* Right column - Image */}
          <motion.div 
            className="bg-white w-full h-full min-h-96 rounded-lg shadow-sm flex items-center justify-center overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="https://images.unsplash.com/flagged/photo-1576485436509-a7d286952b65?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
              alt="Document Attestation Services"
              width={900}
              height={600}
              className="w-full h-full object-cover"
              priority
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}