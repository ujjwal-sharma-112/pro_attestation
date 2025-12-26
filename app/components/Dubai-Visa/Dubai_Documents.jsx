"use client";
import React from "react";

const Dubai_Documents = () => {
  const documents = [
    "Passport (valid for 6 months)",
    "Passport-sized photograph (white background)",
    "Confirmed return flight tickets",
    "Hotel booking details or UAE resident inviter info",
    "Financial documents (if required for visa type)",
    "Offer letter or employment contract (for work visa)"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800 text-center">
            Documents Required for Dubai Visa Application
          </h2>
          
          <div className="bg-gray-50 rounded-lg p-8 shadow-md">
            <ul className="space-y-4">
              {documents.map((doc, index) => (
                <li key={index} className="flex items-start">
                  <svg className="h-6 w-6 text-[#FF6A00] mr-3 mt-0.5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700 text-lg">{doc}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-gray-700">
                We provide complete help with the Dubai visa documentation process and ensure all documents meet embassy requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dubai_Documents;
