import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

export const metadata = {
  metadataBase: new URL('https://proattestation.com'),
  title: "MEA Attestation Services in India | Fast & Reliable Document Attestation",
  description: "Get your documents attested by the Ministry of External Affairs (MEA) in India. Affordable MEA attestation services for personal, educational, and commercial documents.",
  robots: "index, follow",
  openGraph: {
    title: "MEA Attestation Services in India",
    description: "Fast and reliable MEA attestation for documents like degrees, birth certificates, and commercial papers. Trusted service with end-to-end support.",
    url: "https://proattestation.com/mea-attestation",
    type: "website",
  },
  alternates: {
    canonical: "https://proattestation.com/mea-attestation"
  }
};

export default function MEAAttestationLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
