import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

export const metadata = {
  metadataBase: new URL('https://proattestation.com'),
  title: "Embassy Attestation Services | Document Legalization for All Countries",
  description: "Trusted embassy attestation services in India. Legalize your documents for UAE, Qatar, Kuwait, Saudi Arabia, and other countries. Fast, affordable & compliant.",
  robots: "index, follow",
  openGraph: {
    title: "Embassy Attestation Services | Legalize Documents for Abroad",
    description: "We provide end-to-end Embassy Attestation services for all types of documents. Accepted by embassies in UAE, Saudi, Qatar, and more.",
    url: "https://proattestation.com/embassy-attestation",
    type: "website",
  },
  alternates: {
    canonical: "https://proattestation.com/embassy-attestation"
  }
};

export default function EmbassyAttestationLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
