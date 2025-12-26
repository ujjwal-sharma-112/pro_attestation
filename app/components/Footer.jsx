'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-[#1A1A1A] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-x-8 gap-y-12">
          {/* Company Info and Contact - Spans 4 columns */}
          <div className="lg:col-span-4">
            <div className="mb-8">
              <Image 
                src="/hero.svg"
                alt="Pro Attestation Services Logo"
                width={180}             
                height={120}
                className="mb-6"
                priority
              />
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                Pro Attestation provides comprehensive document attestation, apostille, and embassy legalization services across India.
              </p>
            </div>
            
            {/* Contact Info */}
            <h3 className="text-lg font-semibold mb-4 inline-flex items-center">
              <span className="border-b-2 border-[#FF6A00] pb-1">Contact Us</span>
            </h3>
            <div className="space-y-4 mt-5">
              <div className="flex items-start text-gray-400 group">
                <Phone className="h-5 w-5 mr-3 mt-0.5 text-[#FF6A00]" />
                <div>
                  <p className="group-hover:text-white transition-colors">+91 8700770603</p>
                  <p className="group-hover:text-white transition-colors">+91 8595563930</p>
                </div>
              </div>
              <div className="flex items-start text-gray-400 group">
                <Mail className="h-5 w-5 mr-3 mt-0.5 text-[#FF6A00]" />
                <div>
                  <p className="group-hover:text-white transition-colors">info@proattestation.com</p>
                  <p className="group-hover:text-white transition-colors">support@proattestation.com</p>
                </div>
              </div>
              <div className="flex items-start text-gray-400 group">
                <MapPin className="h-5 w-5 mr-3 mt-0.5 text-[#FF6A00]" />
                <div className="text-sm">
                  <p className="group-hover:text-white transition-colors">Office # S205, 2nd floor,</p>
                  <p className="group-hover:text-white transition-colors">Balaji Building, Corner Market,</p>
                  <p className="group-hover:text-white transition-colors">Malviya Nagar, New Delhi - 110017</p>
                </div>
              </div>
              <div className="flex items-start text-gray-400 group">
                <Clock className="h-5 w-5 mr-3 mt-0.5 text-[#FF6A00]" />
                <div className="text-sm">
                  <p className="group-hover:text-white transition-colors">Mon - Sat: 9:00 AM - 7:00 PM</p>
                  <p className="group-hover:text-white transition-colors">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links - Spans 8 columns divided into 3 sections */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Personal Documents */}
              <div>
                <h3 className="text-lg font-semibold mb-5 inline-flex items-center">
                  <span className="border-b-2 border-[#FF6A00] pb-1">Personal Documents</span>
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/documents/birth-certificate-apostille-attestation" className="text-gray-400 hover:text-[#FF6A00] transition-colors flex items-center">
                      <span className="mr-2 text-xs">›</span>Birth Certificate
                    </Link>
                  </li>
                  <li>
                    <Link href="/documents/death-certificate-attestation-apostille" className="text-gray-400 hover:text-[#FF6A00] transition-colors flex items-center">
                      <span className="mr-2 text-xs">›</span>Death Certificate
                    </Link>
                  </li>
                  <li>
                    <Link href="/documents/marriage-certificate-attestation" className="text-gray-400 hover:text-[#FF6A00] transition-colors flex items-center">
                      <span className="mr-2 text-xs">›</span>Marriage Certificate
                    </Link>
                  </li>
                  <li>
                    <Link href="/documents/divorce-certificate-attestation" className="text-gray-400 hover:text-[#FF6A00] transition-colors flex items-center">
                      <span className="mr-2 text-xs">›</span>Divorce Certificate
                    </Link>
                  </li>
                  <li>
                    <Link href="/documents/single-status-certificate-attestation" className="text-gray-400 hover:text-[#FF6A00] transition-colors flex items-center">
                      <span className="mr-2 text-xs">›</span>Single Status
                    </Link>
                  </li>
                  <li>
                    <Link href="/documents/pcc-apostille-attestation" className="text-gray-400 hover:text-[#FF6A00] transition-colors flex items-center">
                      <span className="mr-2 text-xs">›</span>Police Clearance
                    </Link>
                  </li>
                  <li>
                    <Link href="/documents/medical-certificate-apostille-attestation" className="text-gray-400 hover:text-[#FF6A00] transition-colors flex items-center">
                      <span className="mr-2 text-xs">›</span>Medical Certificates
                    </Link>
                  </li>
                  <li>
                    <Link href="/documents/driving-license-attestation-apostille" className="text-gray-400 hover:text-[#FF6A00] transition-colors flex items-center">
                      <span className="mr-2 text-xs">›</span>Driving License
                    </Link>
                  </li>
                  <li>
                    <Link href="/documents/affidavit-document-apostille-attestation" className="text-gray-400 hover:text-[#FF6A00] transition-colors flex items-center">
                      <span className="mr-2 text-xs">›</span>Affidavit
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Commercial & Educational Documents */}
              <div>
                <h3 className="text-lg font-semibold mb-5 inline-flex items-center">
                  <span className="border-b-2 border-[#FF6A00] pb-1">Commercial Documents</span>
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/documents/import-export-document-apostille" className="text-gray-400 hover:text-[#FF6A00] transition-colors flex items-center">
                      <span className="mr-2 text-xs">›</span>Import-Export
                    </Link>
                  </li>
                  <li>
                    <Link href="/documents/company-agreement-attestation-apostille" className="text-gray-400 hover:text-[#FF6A00] transition-colors flex items-center">
                      <span className="mr-2 text-xs">›</span>Company Agreements
                    </Link>
                  </li>
                  <li>
                    <Link href="/documents/incorporation-documents-apostille-attestation" className="text-gray-400 hover:text-[#FF6A00] transition-colors flex items-center">
                      <span className="mr-2 text-xs">›</span>Incorporation
                    </Link>
                  </li>
                  <li>
                    <Link href="/documents/power-of-attorney-apostille" className="text-gray-400 hover:text-[#FF6A00] transition-colors flex items-center">
                      <span className="mr-2 text-xs">›</span>Power of Attorney
                    </Link>
                  </li>
                </ul>

                <h3 className="text-lg font-semibold mt-8 mb-5 inline-flex items-center">
                  <span className="border-b-2 border-[#FF6A00] pb-1">Educational Documents</span>
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/documents/degree-certificate-attestation-apostille" className="text-gray-400 hover:text-[#FF6A00] transition-colors flex items-center">
                      <span className="mr-2 text-xs">›</span>Degree Certificates
                    </Link>
                  </li>
                  <li>
                    <Link href="/documents/transfer-certificate-apostille-attestation" className="text-gray-400 hover:text-[#FF6A00] transition-colors flex items-center">
                      <span className="mr-2 text-xs">›</span>Transfer/Leave
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Services and Quick Links */}
              <div>
                <h3 className="text-lg font-semibold mb-5 inline-flex items-center">
                  <span className="border-b-2 border-[#FF6A00] pb-1">Our Services</span>
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/services/mea-attestation" className="text-gray-400 hover:text-[#FF6A00] transition-colors flex items-center">
                      <span className="mr-2 text-xs">›</span>MEA Attestation
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/embassy-attestation" className="text-gray-400 hover:text-[#FF6A00] transition-colors flex items-center">
                      <span className="mr-2 text-xs">›</span>Embassy Attestation
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/apostille-attestation-delhi" className="text-gray-400 hover:text-[#FF6A00] transition-colors flex items-center">
                      <span className="mr-2 text-xs">›</span>Apostille Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/hrd-home-attestation" className="text-gray-400 hover:text-[#FF6A00] transition-colors flex items-center">
                      <span className="mr-2 text-xs">›</span>Home/HRD Department
                    </Link>
                  </li>
                </ul>
                
                {/* Quick Links */}
                <h3 className="text-lg font-semibold mt-8 mb-5 inline-flex items-center">
                  <span className="border-b-2 border-[#FF6A00] pb-1">Quick Links</span>
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="#aboutus" className="text-gray-400 hover:text-[#FF6A00] transition-colors flex items-center">
                      <span className="mr-2 text-xs">›</span>About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-gray-400 hover:text-[#FF6A00] transition-colors flex items-center">
                      <span className="mr-2 text-xs">›</span>Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mt-12 mb-8">
          <a href="https://www.facebook.com/urconsultant21" className="bg-gray-800 hover:bg-[#FF6A00] p-2 rounded-full transition-colors">
            <Facebook className="h-5 w-5" />
          </a>
          <a href="https://g.co/kgs/fjdZ6xH" className="bg-gray-800 hover:bg-[#FF6A00] p-2 rounded-full transition-colors">
           <img src="/G.svg" alt="" className="h-5 w-5 text-white" />
          </a>
          <a href="https://www.instagram.com/proattestationservices" className="bg-gray-800 hover:bg-[#FF6A00] p-2 rounded-full transition-colors">
            <Instagram className="h-5 w-5" />
          </a>
          <a href="https://www.youtube.com/@proattestationservices214" className="bg-gray-800 hover:bg-[#FF6A00] p-2 rounded-full transition-colors">
            <Youtube className="h-5 w-5" />
          </a>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-6 pt-6 text-center text-gray-400">
          <p>&copy; {currentYear} Pro Attestation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}