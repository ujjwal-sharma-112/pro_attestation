import { Hexagon } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      {/* Hero Section with Background Image + Overlay */}
      <section className="relative text-white py-16 md:py-20 px-8 md:px-16 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1530469525856-cf37954301f7?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            zIndex: 0,
          }}
        ></div>

        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black opacity-70 z-0"></div>

        {/* Content */}
        <div className="relative z-10 md:py-12">
          <div className="space-y-6 max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-medium  leading-tight text-white">
            India’s Trusted Document <br /> Attestation Services <br /> for MEA, Embassy & Apostille
            </h1>
            <p className="text-gray-200 text-lg">
              Get your educational, personal, and commercial documents attested quickly and reliably for international use. Serving clients across India with 100% genuine attestation support for UAE, Saudi Arabia, Qatar, Oman, Kuwait & more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" >
              <button className="bg-[#FF6A00] text-white px-6 py-3 rounded  hover:bg-[#FF6A00]/90 transition-colors font-medium">
              Talk to an expert 
              </button>
            </Link>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-4">
              <div className="flex items-center gap-2">
                <span className="text-lg md:text-lg font-semibold bg-[#FF6A00] bg-clip-text text-transparent">Fast Processing</span>
              </div>
              <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-[#FF6A00]"></div>
              <div className="flex items-center gap-2">
                <span className="text-lg md:text-lg font-semibold bg-[#FF6A00] bg-clip-text text-transparent">Doorstep Pickup & Delivery</span>
              </div>
              <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-[#FF6A00]"></div>
              <div className="flex items-center gap-2">
                <span className="text-lg md:text-lg font-semibold bg-[#FF6A00] bg-clip-text text-transparent">24/7 Customer Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
