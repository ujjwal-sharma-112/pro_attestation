import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import { Metadata } from 'next';

export const dynamic = 'force-dynamic';

// Generate static params for all countries
export async function generateStaticParams() {
  const dataPath = path.join(process.cwd(), 'public', 'data', 'countries.json');
  if (fs.existsSync(dataPath)) {
    try {
      const data = fs.readFileSync(dataPath, 'utf8');
      if (data && data.trim()) {
        const countries = JSON.parse(data);
        return countries.map(country => ({
          id: country.id,
        }));
      }
    } catch (parseError) {
      console.error('Error parsing countries.json file for static params:', parseError);
    }
  }
  return [];
}

// Generate dynamic metadata based on country
export async function generateMetadata({ params }) {
  const { id } = params;
  
  // Read the country data
  let country = null;
  const dataPath = path.join(process.cwd(), 'public', 'data', `${id}.json`);

  try {
    if (fs.existsSync(dataPath)) {
      const data = fs.readFileSync(dataPath, 'utf8');
      country = JSON.parse(data);
    }
  } catch (error) {
    console.error(`Error reading country data for ${id}:`, error);
    return {
      title: 'Country Not Found',
      description: 'The requested country information could not be found.'
    };
  }

  if (!country) {
    return {
      title: 'Country Not Found',
      description: 'The requested country information could not be found.'
    };
  }

  // Create dynamic metadata using country data
  const serviceType = country.serviceType || "attestation";
  const isApostille = serviceType === "apostille";
  const serviceTypeName = isApostille ? "Apostille" : "Attestation";
  
  return {
    title: `${country.countryName} ${serviceTypeName} in Delhi | ${country.title || `${country.countryName} ${isApostille ? 'Apostille' : 'MOFA Attestation'} Services`}`,
    description: isApostille 
      ? `Get fast and reliable ${country.countryName} apostille services in Delhi. We handle MEA apostille for all document types.`
      : `Get fast and reliable ${country.countryName} embassy attestation in Delhi. We handle MOFA attestation, HRD, MEA & ${country.countryName} embassy legalization for all document types.`,
    alternates: {
      canonical: `https://www.proattestation.com/${id}-${serviceType.toLowerCase()}`,
    },
    openGraph: {
      title: `${country.countryName} ${serviceTypeName} in Delhi | ${isApostille ? 'MEA Apostille' : 'MOFA Attestation'} Services`,
      description: isApostille
        ? `End-to-end support for ${country.countryName} apostille in Delhi. Services include MEA, HRD & State-level authentication.`
        : `End-to-end support for ${country.countryName} attestation in Delhi. Services include MOFA, MEA, HRD & Embassy legalization.`,
      type: 'website',
      url: `https://www.proattestation.com/${id}-${serviceType.toLowerCase()}`,
      images: [
        {
          url: `https://www.proattestation.com/images/${id}-${serviceType.toLowerCase()}-banner.jpg`,
          width: 1200,
          height: 630,
          alt: `${country.countryName} ${serviceTypeName} Services`
        }
      ],
    },
    other: {
      'script:ld+json': JSON.stringify({
        "@context": "https://schema.org/",
        "@type": "Service",
        "name": `${country.countryName} ${isApostille ? 'Apostille' : 'Embassy Attestation'} in Delhi`,
        "provider": {
          "@type": "Organization",
          "name": "Pro Attestation",
          "url": "https://www.proattestation.com"
        },
        "areaServed": {
          "@type": "Place",
          "name": "Delhi NCR, India"
        },
        "serviceType": isApostille
          ? `${country.countryName} MEA Apostille Services`
          : `${country.countryName} MOFA and Embassy Attestation Services`,
        "description": isApostille
          ? `Fast and reliable ${country.countryName} apostille services in Delhi NCR. Complete assistance for educational, personal, and commercial document apostille.`
          : `Fast and reliable ${country.countryName} embassy and MOFA attestation in Delhi NCR. Complete assistance for educational, personal, and commercial document attestation.`,
        "availableChannel": {
          "@type": "ServiceChannel",
          "serviceUrl": `https://www.proattestation.com/${id}-${serviceType.toLowerCase()}`
        }
      })
    }
  };
}

export default function CountryPage({ params }) {
  const { id } = params;

  // Read the country data
  let country = null;
  const dataPath = path.join(process.cwd(), 'public', 'data', `${id}.json`);

  try {
    if (fs.existsSync(dataPath)) {
      const data = fs.readFileSync(dataPath, 'utf8');
      country = JSON.parse(data);
    }
  } catch (error) {
    console.error(`Error reading country data for ${id}:`, error);
  }

  if (!country) {
    return (
      <div className="container mx-auto px-4 py-24 mt-10 text-center">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-4 text-gray-800">Country Not Found</h1>
          <p className="mb-8 text-gray-600">The requested country information could not be found.</p>
          <Link href="/countries" className="text-[#FF6A00] hover:text-[#FF6A00] font-medium flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Countries
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen  pb-16">
      {/* Hero section with country flag and name */}
      <div className="bg-gradient-to-r from-[#FF6A00] to-[#FF6A00] text-white   py-12 md:px-24 ">
        <div className="container mx-auto px-4">
          <Link href="/countries" className="text-white hover:text-orange-200 flex items-center mb-6 font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Countries
          </Link>

          <div className="flex items-center gap-6">
            <span className="text-6xl md:text-7xl">
              <img 
                src={`https://flagcdn.com/${country.flag}.svg`} 
                alt={`${country.countryName} flag`}
                className="w-24 md:w-32 h-full rounded shadow-sm"
              />
            </span>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">
                {country.countryName} 
              </h1>
              <h2 className="text-xl md:text-2xl font-medium mt-2 text-orange-100">{country.title}</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-24 -mt-8">
        {/* Introduction card */}
        {country.description && (
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-4">
              {country.descriptionHeading || "About Attestation"}
            </h2>
            <h3 className="text-xl font-base mb-4 text-gray-800">{country.description.split('\n')[0]}</h3>
            {country.description.split('\n').slice(1).map((paragraph, idx) => (
              <p key={idx} className="mb-4 text-gray-700 leading-relaxed">{paragraph}</p>
            ))}
          </div>
        )}

        {/* Main content area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left sidebar with requirements */}
          <div className="lg:col-span-1">
            {country.requirements && country.requirements.length > 0 && (
              <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                <h3 className="text-xl font-bold mb-6 text-gray-800 flex items-center">
                  <div className="bg-[#FF6A00] text-white p-2 rounded-full mr-3 inline-flex items-center justify-center h-10 w-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  {country.requirementsHeading || `Why is ${country.countryName} Attestation Required?`}
                </h3>
                <ul className="space-y-4">
                  {country.requirements.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#FF6A00] mr-3 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {country.documentsRequired && country.documentsRequired.length > 0 && (
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold mb-6 text-gray-800 flex items-center">
                  <div className="bg-[#FF6A00] text-white p-2 rounded-full mr-3 inline-flex items-center justify-center h-10 w-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  {country.documentsRequiredHeading || "Documents Required"}
                </h3>
                <ul className="space-y-4">
                  {country.documentsRequired.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#FF6A00] mr-3 mt-1 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Main content */}
          <div className="lg:col-span-2">
            {/* Process */}
            {country.process && country.process.length > 0 && (
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-4">
                  {country.processHeading || `${country.countryName} ${country.serviceType === 'apostille' ? 'Apostille' : 'Attestation'} Process`}
                </h3>
                <ol className="relative border-l border-gray-200 ml-4 mt-8 space-y-10">
                  {country.process.map((step, idx) => (
                    <li key={idx} className="mb-8 ml-6">
                      <div className="absolute flex items-center justify-center w-8 h-8 bg-[#FF6A00] rounded-full -left-4 ring-4 ring-white">
                        <span className="text-white font-bold">{idx + 1}</span>
                      </div>
                      <div className="ml-6">
                        <h4 className="text-lg font-semibold text-gray-800">{step}</h4>
                      </div>
                    </li>
                  ))}
                </ol>
                {country.note && (
                  <div className="mt-8 p-4 bg-orange-50 border border-orange-100 rounded-md">
                    <div className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#FF6A00] mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Important Note:</h4>
                        <p className="text-gray-700">{country.note}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Common documents */}
            {country.commonDocuments && country.commonDocuments.length > 0 && (
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-4">
                  {country.commonDocumentsHeading || "Most Common Documents for Attestation"}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  {country.commonDocuments.map((doc, idx) => (
                    <div key={idx} className="bg-gray-50 p-4 rounded-md border border-gray-200 flex items-start hover:bg-orange-50 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#FF6A00] mr-3 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{doc}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Processing Time */}
            {country.processingTime && country.processingTime.length > 0 && (
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-4">
                  {country.processingTimeHeading || "Processing Time"}
                </h3>
                <div className="mt-4 space-y-2">
                  {country.processingTime.map((time, idx) => (
                    <div key={idx} className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#FF6A00] mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-700">{time}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="bg-gradient-to-r from-orange-50 to-orange-50 rounded-lg border border-orange-100 p-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-800">
                    Need Help with {country.countryName} {country.serviceType === "apostille" ? "Apostille" : "Attestation"}?
                  </h3>
                  <p className="text-gray-600 mb-6 md:mb-0">
                    Our experts will guide you through the entire {country.serviceType === "apostille" ? "apostille" : "attestation"} process
                  </p>
                </div>
                <Link 
                  href="/contact" 
                  className="inline-block bg-[#FF6A00] text-white font-semibold px-6 py-3 rounded-md hover:bg-[#FF6A00] transition-colors shadow-md"
                >
                  Get Expert Assistance
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}