"use client"

import { useEffect, useRef } from "react"
import HRD_Header from "../../components/HRD-Home/HRD_Header"
import HRD_About from "../../components/HRD-Home/HRD_About"
import HRD_Documents from "../../components/HRD-Home/HRD_Documents"
import HRD_Process from "../../components/HRD-Home/HRD_Process"
import HRD_WhyChooseUs from "../../components/HRD-Home/HRD_WhyChooseUs"
import HRD_FAQ from "../../components/HRD-Home/HRD_FAQ"
import HRD_Purpose from "../../components/HRD-Home/HRD_Purpose"
import HRD_Apostille from "../../components/HRD-Home/HRD_Apostitle"
import HRD_Guidance from "../../components/HRD-Home/HRD_Guidance"
import HRD_HomeAttestation from "../../components/HRD-Home/HRD_HomeAttestation"
import HRD_HomePurposes from "../../components/HRD-Home/HRD_HomePurposes"
import HRD_HomeProcess from "../../components/HRD-Home/HRD_HomeProcess"

export default function HRDAttestationPage() {
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
      <HRD_Header />
      <div className="min-h-screen bg-[#FFF7F0] py-12">
        <HRD_About />
        <HRD_Purpose />
        <HRD_Apostille />
        <HRD_Documents />
        <HRD_Process />
        <HRD_Guidance />
        <HRD_HomeAttestation />
        <HRD_HomePurposes />
        <HRD_HomeProcess />
        <HRD_WhyChooseUs />
        <HRD_FAQ />
      </div>
    </>
  )
}