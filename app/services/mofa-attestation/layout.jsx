import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

export const metadata = {
  metadataBase: new URL('https://proattestation.com'),
  title: "MOFA Attestation Services in India | Fast & Reliable Document Attestation",
  description: "Get your documents attested by the Ministry of Foreign Affairs (MOFA) in India. Affordable MOFA attestation services for personal, educational, and commercial documents.",
  robots: "index, follow",
  openGraph: {
    title: "MOFA Attestation Services by Pro Attestation Experts",
    description: "Get reliable and fast MOFA Attestation Services with Pro Attestation. We ensure secure, verified, and hassle-free document attestation for all your needs.",
    url: "https://proattestation.com/mofa-attestation",
    type: "website",
  },
  alternates: {
    canonical: "https://proattestation.com/mofa-attestation"
  }
};

export default function MOFAAttestationLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
