"use client"

import { useEffect, useRef } from "react"
import MOFA_About from "../../components/MOFA-Attestation/MOFA_About"
import MOFA_AttestationProcess from "../../components/MOFA-Attestation/MOFA_AttestationProcess"
import MOFA_CTA from "../../components/MOFA-Attestation/MOFA_CTA"
import MOFA_Digital from "../../components/MOFA-Attestation/MOFA_Digital"
import MOFA_Documents from "../../components/MOFA-Attestation/MOFA_Documents"
import MOFA_FAQ from "../../components/MOFA-Attestation/MOFA_FAQ"
import MOFA_Fees from "../../components/MOFA-Attestation/MOFA_Fees"
import MOFA_Header from "../../components/MOFA-Attestation/MOFA_Header"
import MOFA_Importance from "../../components/MOFA-Attestation/MOFA_Importance"
import MOFA_UAE_Specialization from "../../components/MOFA-Attestation/MOFA_UAE_Speacialization"
import MOFA_WhoNeeds from "../../components/MOFA-Attestation/MOFA_WhoNeeds"
import MOFA_WhyChooseUs from "../../components/MOFA-Attestation/MOFA_WhyChooseUs"

export default function MEAAttestationPage() {
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

  return (
    <>
      <MOFA_Header />
      <div className="min-h-screen bg-white py-12">
        <MOFA_About />
        <MOFA_Importance />
        <MOFA_UAE_Specialization />
        <MOFA_Documents />
        <MOFA_AttestationProcess />
        <MOFA_Digital />
        <MOFA_WhyChooseUs />
        <MOFA_WhoNeeds />
        <MOFA_Fees />
        <MOFA_FAQ />
        <MOFA_CTA />
      </div>
    </>
  )
}