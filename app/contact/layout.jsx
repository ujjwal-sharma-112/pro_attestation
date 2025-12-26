import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export const metadata = {
  metadataBase: new URL('https://proattestation.com'),
  title: "Contact Us | Get Help With Apostille & Attestation Services in India",
  description: "Need help with apostille or attestation services? Contact our expert support team for document queries, process assistance, or to book a doorstep pickup.",
  robots: "index, follow",
  openGraph: {
    title: "Contact Apostille & Attestation Experts in India",
    description: "Reach out to our support team for any questions related to apostille, MEA, or embassy attestation services. We're available 7 days a week.",
    url: "https://proattestation.com/contact-us",
    type: "website",
  },
  alternates: {
    canonical: "https://proattestation.com/contact-us"
  }
};

export default function ServicesLayout({ children }) {
  return <>
    <Navbar />
    {children}
    <Footer />
  </>;
}