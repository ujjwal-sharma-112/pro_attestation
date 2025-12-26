import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

export const metadata = {
  metadataBase: new URL('https://proattestation.com'),
  title: "HRD Attestation & Home Department Attestation Services in India",
  description: "HRD and Home Department attestation services for educational and personal documents. Valid for MEA attestation, apostille, and foreign embassy legalization.",
  robots: "index, follow",
  openGraph: {
    title: "HRD Attestation Services | Home Department Document Verification",
    description: "Get state HRD attestation for degrees and certificates. Also offering Home Department verification for personal documents across India.",
    url: "https://proattestation.com/hrd-attestation",
    type: "website",
  },
  alternates: {
    canonical: "https://proattestation.com/hrd-attestation"
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
