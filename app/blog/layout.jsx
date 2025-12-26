import Footer from "../components/Footer";
import Navbar from "../components/Navbar";



export default function CountriesLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
