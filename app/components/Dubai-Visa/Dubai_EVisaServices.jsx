"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Dubai_EVisaServices = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-24">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              UAE / Dubai e-Visa Services for Indian Citizens
            </h2>
            
            <div className="text-gray-700 space-y-4">
              <p className="text-lg">
                If you're looking to apply for a Dubai e-visa online, we've got you covered. We specialize in helping Indian travelers apply for UAE e-visas through a smooth digital process. Just send us your documents, and we'll take care of the rest.
              </p>
              
              <p className="text-lg">
                Whether it's a short holiday or a business visit, applying for an e-visa for Dubai from India has never been easier.
              </p>
              
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-block bg-[#FF6A00] text-white font-semibold px-6 py-3 rounded-md hover:bg-[#E63C00] transition-colors shadow-md"
                >
                  Apply for e-Visa Now
                </Link>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 order-1 lg:order-2 flex justify-center">
            <div className="rounded-lg overflow-hidden shadow-xl border-4 border-[#FF6A00] max-w-md">
              <Image
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2940&auto=format&fit=crop"
              alt="Document Attestation Services"
              width={600}
              height={400}
              className="w-full h-full object-cover"
              priority
            />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dubai_EVisaServices;
