import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

export const metadata = {
  metadataBase: new URL('https://proattestation.com'),
  title: "Apostille Services in India | Fast Apostille for Documents",
  description: "Get MEA Apostille services for personal, educational, and commercial documents in India. Quick turnaround, doorstep pickup, and trusted support.",
  robots: "index, follow",
  openGraph: {
    title: "Apostille Services in India | MEA Certified",
    description: "Reliable Apostille services for birth certificates, degrees, marriage certificates & more. Used for visa, immigration, and study abroad.",
    url: "https://proattestation.com/apostille-services",
    type: "website",
  },
  alternates: {
    canonical: "https://proattestation.com/apostille-attestaion-services"
  }
};
  
export default function ApostilleLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
