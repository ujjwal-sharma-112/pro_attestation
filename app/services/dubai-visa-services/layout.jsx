import Dubai_CTA from "../../components/Dubai-Visa/Dubai_CTA";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import React from "react";

export const metadata = {
  title: "UAE / Dubai Visa Services in Delhi NCR | Tourist, Work & Business Visa",
  description: "Professional Dubai visa services for Indian citizens. Fast processing for tourist, work, business visas with complete documentation support.",
  alternates: {
    canonical: "https://www.proattestation.com/services/dubai-visa-services",
  },
};

export default function DubaiVisaServicesLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Dubai_CTA/>
      <Footer />
    </>
  );
}
