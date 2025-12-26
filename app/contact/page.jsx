'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Check } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'MEA Attestation',
    message: ''
  })

  return (
    <div className="min-h-screen bg-[#FFF7F0] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with improved spacing */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Get in touch with us for all your document attestation needs</p>
        </div>

        {/* Main content area with improved grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Information - wider column */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-8 transform hover:shadow-xl transition-all duration-300">
            <h2 className="text-2xl font-semibold text-gray-900 mb-8 pb-2 border-b border-gray-100">Contact Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start">
                <Phone className="text-[#FF6A00] h-6 w-6 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-gray-900">Phone</h3>
                  <p className="text-gray-600 mt-1">Mobile: +91 8700770603</p>
                  <p className="text-gray-600">Mobile: +91 8595563930</p>
                  <a 
                    href="tel:+918700770603" 
                    className="inline-block mt-3 bg-[#FF6A00] text-white px-4 py-2 rounded-lg hover:bg-[#E63C00] transition-colors"
                  >
                    Call Now
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="text-[#FF6A00] h-6 w-6 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-gray-900">Email</h3>
                  <p className="text-gray-600 mt-1">info@proattestation.com</p>
                  <p className="text-gray-600">support@proattestation.com</p>
                  <a 
                    href="mailto:info@proattestation.com" 
                    className="inline-block mt-3 bg-[#FF6A00] text-white px-4 py-2 rounded-lg hover:bg-[#E63C00] transition-colors"
                  >
                    Send Email
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="text-[#FF6A00] h-6 w-6 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-gray-900">Office Address</h3>
                  <p className="text-gray-600 mt-1">Office # S205, 2nd floor, Balaji Building, Corner Market,</p>
                  <p className="text-gray-600">Property # 40-A, Malviya Nagar,</p>
                  <p className="text-gray-600">Opp - Malviya Nagar Post Office,</p>
                  <p className="text-gray-600">New Delhi - 110017</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="text-[#FF6A00] h-6 w-6 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-gray-900">Business Hours</h3>
                  <p className="text-gray-600 mt-1">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Pro Attestation - narrower column */}
          <div className="bg-white rounded-xl shadow-lg p-8 transform hover:shadow-xl transition-all duration-300">
            <h2 className="text-2xl font-semibold text-gray-900 mb-8 pb-2 border-b border-gray-100">Why Choose Pro Attestation</h2>
            
            <div className="space-y-6">
              <div className="flex items-start group">
                <div className="flex-shrink-0">
                  <div className="h-8 w-8 rounded-full bg-[#FF6A00]/10 flex items-center justify-center group-hover:bg-[#FF6A00]/20 transition-colors">
                    <Check className="h-5 w-5 text-[#FF6A00]" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Fast & Reliable Services</h3>
                  <p className="text-gray-600 mt-1">Quick processing and reliable document attestation services</p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="flex-shrink-0">
                  <div className="h-8 w-8 rounded-full bg-[#FF6A00]/10 flex items-center justify-center group-hover:bg-[#FF6A00]/20 transition-colors">
                    <Check className="h-5 w-5 text-[#FF6A00]" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Verified by Government</h3>
                  <p className="text-gray-600 mt-1">All processes follow official guidelines and embassy requirements</p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="flex-shrink-0">
                  <div className="h-8 w-8 rounded-full bg-[#FF6A00]/10 flex items-center justify-center group-hover:bg-[#FF6A00]/20 transition-colors">
                    <Check className="h-5 w-5 text-[#FF6A00]" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Affordable & Transparent</h3>
                  <p className="text-gray-600 mt-1">Competitive pricing with no hidden charges</p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="flex-shrink-0">
                  <div className="h-8 w-8 rounded-full bg-[#FF6A00]/10 flex items-center justify-center group-hover:bg-[#FF6A00]/20 transition-colors">
                    <Check className="h-5 w-5 text-[#FF6A00]" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Doorstep Service</h3>
                  <p className="text-gray-600 mt-1">Convenient document pickup and delivery to your location</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}