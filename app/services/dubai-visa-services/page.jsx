import Dubai_Header from "../../components/Dubai-Visa/Dubai_Header";
import Dubai_Services from "../../components/Dubai-Visa/Dubai_Services";
import Dubai_Documents from "../../components/Dubai-Visa/Dubai_Documents";
import Dubai_WhyChooseUs from "../../components/Dubai-Visa/Dubai_WhyChooseUs";
import Dubai_EVisaServices from "../../components/Dubai-Visa/Dubai_EVisaServices";
import Dubai_ProcessingTime from "../../components/Dubai-Visa/Dubai_ProcessingTime";

export const metadata = {
  title: "UAE / Dubai Visa Services in Delhi NCR | Pro Attestation",
  description: "Fast & reliable Dubai visa services for Indian citizens. Tourist, work, business visas with expert assistance. Apply for Dubai e-visa with Pro Attestation.",
};

export default function DubaiVisaServices() {
  return (
    <div>
      <Dubai_Header />
      <Dubai_Services />
      <Dubai_Documents />
      <Dubai_WhyChooseUs />
      <Dubai_EVisaServices />
      <Dubai_ProcessingTime />
    </div>
  );
}
