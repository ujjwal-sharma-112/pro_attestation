'use client'

import { motion } from "framer-motion"
import { FileCheck, FileText } from 'lucide-react'

export default function MOFA_AttestationProcess() {
  const attestationSteps = [
    "Notary Attestation - Documents are first verified by a local notary to confirm authenticity.",
    "State or HRD Attestation - Educational and personal documents are then attested by the state's Home Department or Human Resource Department.",
    "MEA Attestation - The Ministry of External Affairs (MEA) verifies the document at the national level.",
    "Embassy Attestation - The respective foreign embassy or consulate attests the document for international use.",
    "MOFA Attestation - Finally, the Ministry of Foreign Affairs attests the document, giving it global legal acceptance."
  ]

  return (
    <div className="w-full bg-[#FFF7F0] py-24 px-8 md:px-16 lg:px-36">
      <div className="max-w-7xl mx-auto">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col items-start mb-8">
            <div className="flex">
                <div className="w-12 h-12 rounded-full px-4 md:px-0 bg-[#FF6A00] flex items-center justify-center text-white mr-4 shadow-lg">
                    <FileText className="h-6 w-6 " />
                </div>

                <h2 className="text-2xl md:text-3xl pt-2 font-bold text-gray-900">How the MOFA Attestation Process Works</h2>
            </div>
            <p className="py-4 text-gray-800">Here's how Pro Attestation manages your MOFA Attestation step by step:</p>
            </div>

            <ul className="space-y-5 ">
              {attestationSteps.map((step, index) => (
                <li key={index} className="flex items-start group">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#FF6A00] text-white flex items-center justify-center text-sm mr-4 mt-0.5 group-hover:scale-110 transition-transform">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-medium text-lg text-[#222222]">{step}</h3>
                  </div>
                </li>
              ))}
            </ul>

            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-[#FF6A00] mt-8">
              <div className="flex items-center mb-2">
                <FileCheck className="h-5 w-5 text-[#FF6A00] mr-2" />
                <h3 className="text-lg font-semibold text-[#222222]">
                  Pro Attestation Ensures
                </h3>
              </div>
              <p className="text-[#555555]">
                Every step is completed correctly, with full tracking and timely updates. We ensure that every step is completed correctly, with full tracking and timely updates.
              </p>
            </div>
          </motion.div>
      </div>
    </div>
  )
}