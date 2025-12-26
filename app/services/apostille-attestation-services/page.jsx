import Apostille_Header from '../../components/Apostille/Apostille_Header'
import Apostille_About from '../../components/Apostille/Apostille_About'
import Apostille_Documents from '../../components/Apostille/Apostille_Documents'
import Apostille_Countries from '../../components/Apostille/Apostille_Countries'
import Apostille_Process from '../../components/Apostille/Apostille_Process'
import Apostille_Fees from '../../components/Apostille/Apostille_Fees'
import Apostille_FAQ from '../../components/Apostille/Apostille_FAQ'
import Apostille_WhyChooseUs from '../../components/Apostille/Apostille_WhyChooseUs'

export const metadata = {
  title: 'Apostille Services in India | Pro Attestation',
  description: 'Fast & reliable document apostille services for educational, personal, and commercial documents. Accepted across all Hague Convention countries.',
}

export default function ApostillePage() {
  return (
    <main className="min-h-screen bg-[#FFF7F0]">
      <Apostille_Header />
      <div className="space-y-8 py-16">
        <Apostille_About />
        <Apostille_Documents />
        <Apostille_Countries />
        <Apostille_Process />
        <Apostille_Fees />
        <Apostille_WhyChooseUs />
        <Apostille_FAQ />
      </div>
    </main>
  )
}