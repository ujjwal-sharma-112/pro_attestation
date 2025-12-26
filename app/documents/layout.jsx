import Footer from "../components/Footer";
import MEA_CTA from "../components/MEA-Attestation/MEA_CTA";
import Navbar from "../components/Navbar";

export const metadata = {
    title: 'Document Attestation Services | Pro Attestation',
    description: 'Professional document attestation services including MEA attestation, embassy legalization, and apostille services for all types of certificates.',
  };
  
  export default function ServicesLayout({ children }) {
    return <>
    <Navbar />
    {children}
    <MEA_CTA />
    <Footer />
    </>;
  }