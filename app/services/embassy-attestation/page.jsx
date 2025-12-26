import Embassy_Countries from "../../components/Embassy-Attestation/Embassy_Countries";
import Embassy_About from "../../components/Embassy-Attestation/Embassy_About";
import Embassy_Header from "../../components/Embassy-Attestation/Embassy_Header";
import Embassy_Process from "../../components/Embassy-Attestation/Embassy_Process";
import Embassy_Documents from "../../components/Embassy-Attestation/Embassy_Documents";
import Embassy_Fees from "../../components/Embassy-Attestation/Embassy_Fees";
import Embassy_WhyChooseUs from "../../components/Embassy-Attestation/Embassy_WhyChooseUs";
import Embassy_FAQ from "../../components/Embassy-Attestation/Embassy_FAQ";

export const metadata = {
  title: "Embassy Attestation Services in India | Pro Attestation",
  description: "Fast, reliable & government-approved embassy attestation services for UAE, Saudi Arabia, Qatar & 25+ countries. Educational, personal & commercial document attestation.",
};

export default function EmbassyAttestation() {
  return (
    <main>
      <Embassy_Header />
      <Embassy_About />
      <Embassy_Process />
      <Embassy_Countries />
      <Embassy_Documents />
      <Embassy_Fees />
      <Embassy_WhyChooseUs />
      <Embassy_FAQ />
    </main>
  );
}