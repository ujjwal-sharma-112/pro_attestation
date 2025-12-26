import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Stats from "./components/Stats"
import Services from "./components/Services"
import Countries from "./components/Countries"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFF7F0] text-[#555555] overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <Services />
      <Countries />
      <Footer />
    </main>
  )
}