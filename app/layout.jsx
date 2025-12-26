import { Geist, Geist_Mono } from "next/font/google";
import Script from 'next/script';
import "./globals.css";
import WhatsAppButton from "./components/WhatsAppButton";
import CallButton from "./components/CallButton";
import GoogleAnalytics from "./components/GoogleAnalytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL('https://proattestation.com'),
  title: "Document Apostille & Attestation Services in India | Fast MEA & Embassy Legalization",
  description: "Get quick, reliable apostille and attestation services for birth, degree, marriage certificates & more. Doorstep pickup across India. MEA, Embassy & HRD verified.",
  robots: "index, follow",
  openGraph: {
    title: "Apostille & Attestation Services in India | Verified & Fast Processing",
    description: "We provide end-to-end document legalization for Apostille, MEA, Embassy, HRD, and Home Department attestation. Trusted by 50,000+ clients across India.",
    url: "https://proattestation.com/",
    type: "website",
  },
  alternates: {
    canonical: "https://proattestation.com/"
  }
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Pro Attestation",
  url: "https://proattestation.com",
  telephone: ["+91 8700770603", "+91 8595563930"],
  email: ["info@proattestation.com", "support@proattestation.com"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Office # S205, 2nd floor, Balaji Building, Corner Market",
    addressLocality: "Malviya Nagar",
    addressRegion: "New Delhi",
    postalCode: "110017",
    addressCountry: "IN"
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "19:00"
    }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* GTM Script */}
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-KFBR4HT');`}
        </Script>
        
        <GoogleAnalytics />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased pt-[72px]`}
      >
        {/* GTM noscript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KFBR4HT"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        
        {children}
        <WhatsAppButton />
        <CallButton />
      </body>
    </html>
  );
}
