import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export const metadata = {
  metadataBase: new URL('https://proattestation.com'),
  title: "Embassy Attestation Services for UAE, Saudi, Qatar & Other Countries",
  description: "Expert document attestation services for UAE, Saudi Arabia, Qatar, Kuwait, Oman, and other GCC countries. Fast embassy legalization with MEA and HRD attestation.",
  robots: "index, follow",
  keywords: "UAE attestation, Saudi Arabia attestation, Qatar attestation, Kuwait embassy attestation, Oman document attestation, GCC countries attestation",
  openGraph: {
    title: "Document Attestation for Middle East & GCC Countries | Pro Attestation",
    description: "Complete embassy attestation solutions for UAE, KSA, Qatar & other countries. Trusted by 50,000+ clients for fast & reliable document legalization.",
    url: "https://proattestation.com/countries",
    type: "website",
  },
  alternates: {
    canonical: "https://proattestation.com/countries"
  }
};

export default function CountriesLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
