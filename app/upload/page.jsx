"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

// Country codes mapping
const countriesWithCodes = {
  "Afghanistan": "AF",
  "Albania": "AL",
  "Algeria": "DZ",
  "Andorra": "AD",
  "Angola": "AO",
  "Antigua and Barbuda": "AG",
  "Argentina": "AR",
  "Armenia": "AM",
  "Australia": "AU",
  "Austria": "AT",
  "Azerbaijan": "AZ",
  "Bahamas": "BS",
  "Bahrain": "BH",
  "Bangladesh": "BD",
  "Barbados": "BB",
  "Belarus": "BY",
  "Belgium": "BE",
  "Belize": "BZ",
  "Benin": "BJ",
  "Bolivia": "BO",
  "Bosnia and Herzegovina": "BA",
  "Botswana": "BW",
  "Brazil": "BR",
  "Brunei Darussalam": "BN",
  "Bulgaria": "BG",
  "Burkina Faso": "BF",
  "Burundi": "BI",
  "Cambodia": "KH",
  "Cameroon": "CM",
  "Canada": "CA",
  "Cape Verde": "CV",
  "Chile": "CL",
  "China": "CN",
  "Colombia": "CO",
  "Congo Democratic": "CD",
  "Congo Republic": "CG",
  "Cook Islands": "CK",
  "Costa Rica": "CR",
  "Croatia": "HR",
  "Cuba": "CU",
  "Cyprus": "CY",
  "Czech Republic": "CZ",
  "Denmark": "DK",
  "Dominica": "DM",
  "Dominican Republic": "DO",
  "Ecuador": "EC",
  "Egypt": "EG",
  "El Salvador": "SV",
  "Eritrea": "ER",
  "Estonia": "EE",
  "Ethiopia": "ET",
  "European Union": "EU",
  "Fiji": "FJ",
  "Finland": "FI",
  "France": "FR",
  "Georgia": "GE",
  "Germany": "DE",
  "Ghana": "GH",
  "Greece": "GR",
  "Grenada": "GD",
  "Guatemala": "GT",
  "Guinea": "GN",
  "Guyana": "GY",
  "Haiti": "HT",
  "Honduras": "HN",
  "Hong Kong": "HK",
  "Hungary": "HU",
  "Iceland": "IS",
  "India": "IN",
  "Indonesia": "ID",
  "Iran": "IR",
  "Iraq": "IQ",
  "Ireland": "IE",
  "Israel": "IL",
  "Italy": "IT",
  "Ivory Coast": "CI",
  "Jamaica": "JM",
  "Japan": "JP",
  "Jordan": "JO",
  "Kazakhstan": "KZ",
  "Kenya": "KE",
  "Kosovo": "XK",
  "Kuwait": "KW",
  "Kyrgyzstan": "KG",
  "Laos": "LA",
  "Latvia": "LV",
  "Lebanon": "LB",
  "Lesotho": "LS",
  "Liberia": "LR",
  "Libya": "LY",
  "Liechtenstein": "LI",
  "Lithuania": "LT",
  "Luxembourg": "LU",
  "Macau": "MO",
  "Madagascar": "MG",
  "Malawi": "MW",
  "Malaysia": "MY",
  "Mali": "ML",
  "Malta": "MT",
  "Marshall Islands": "MH",
  "Mauritania": "MR",
  "Mauritius": "MU",
  "Mexico": "MX",
  "Moldova, Republic of": "MD",
  "Monaco": "MC",
  "Mongolia": "MN",
  "Montenegro": "ME",
  "Morocco": "MA",
  "Myanmar": "MM",
  "Namibia": "NA",
  "Nepal": "NP",
  "Netherlands": "NL",
  "New Zealand": "NZ",
  "Nicaragua": "NI",
  "Niger": "NE",
  "Nigeria": "NG",
  "Niue": "NU",
  "North Macedonia, Republic of": "MK",
  "Norway": "NO",
  "Oman": "OM",
  "Pakistan": "PK",
  "Palau": "PW",
  "Palestine": "PS",
  "Panama": "PA",
  "Paraguay": "PY",
  "Peru": "PE",
  "Philippines": "PH",
  "Poland": "PL",
  "Portugal": "PT",
  "Qatar": "QA",
  "Republic of Korea": "KR",
  "Republic of Moldova": "MD",
  "Romania": "RO",
  "Russian": "RU",
  "Russian Federation": "RU",
  "Rwanda": "RW",
  "Saint Kitts and Nevis": "KN",
  "Saint Lucia": "LC",
  "Saint Vincent and the Grenadines": "VC",
  "Samoa": "WS",
  "San Marino": "SM",
  "Sao Tome and Principe": "ST",
  "Saudi Arabia": "SA",
  "Senegal": "SN",
  "Serbia": "RS",
  "Seychelles": "SC",
  "Sierra Leone": "SL",
  "Singapore": "SG",
  "Slovakia": "SK",
  "Slovenia": "SI",
  "South Africa": "ZA",
  "South Korea": "KR",
  "Spain": "ES",
  "Sri Lanka": "LK",
  "Sudan": "SD",
  "Suriname": "SR",
  "Sweden": "SE",
  "Switzerland": "CH",
  "Syria": "SY",
  "Taiwan": "TW",
  "Tajikistan": "TJ",
  "Tanzania": "TZ",
  "Thailand": "TH",
  "Togo": "TG",
  "Tonga": "TO",
  "Trinidad and Tobago": "TT",
  "Tunisia": "TN",
  "Turkey": "TR",
  "Türkiye": "TR",
  "Turkmenistan": "TM",
  "UAE": "AE",
  "Uganda": "UG",
  "Ukraine": "UA",
  "United Kingdom": "GB",
  "United States of America": "US",
  "Uruguay": "UY",
  "USA": "US",
  "Uzbekistan": "UZ",
  "Vanuatu": "VU",
  "Venezuela": "VE",
  "Vietnam": "VN",
  "Yemen": "YE",
  "Zambia": "ZM",
  "Zimbabwe": "ZW"
};

export default function UploadPage() {
  const router = useRouter();
  const [serviceType, setServiceType] = useState("attestation");
  const [formData, setFormData] = useState({
    flag: "",
    countryName: "",
    title: "",
    description: "",
    descriptionHeading: serviceType === "attestation" ? "About Attestation" : "About Apostille",
    requirements: "",
    requirementsHeading: serviceType === "attestation" ? "Why Choose Us" : "Why Choose Our Apostille Services",
    process: "",
    processHeading: serviceType === "attestation" ? "Attestation Process" : "Apostille Process",
    note: "", // Add this line
    documentsRequired: "",
    documentsRequiredHeading: "Documents Required",
    commonDocuments: "",
    commonDocumentsHeading: "Most Common Documents",
    processingTime: "",
    processingTimeHeading: "Processing Time",
    serviceType: "attestation",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [authLoading, setAuthLoading] = useState(false);

  const handleAuth = async (e) => {
    e.preventDefault();
    setAuthLoading(true);
    
    try {
      const response = await fetch("/api/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      });

      const data = await response.json();

      if (data.authenticated) {
        setIsAuthenticated(true);
        localStorage.setItem("adminAuth", "true");
      } else {
        setMessage("Invalid password. Please try again.");
      }
    } catch (error) {
      setMessage(`Authentication error: ${error.message}`);
    } finally {
      setAuthLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Update the form data
    setFormData((prev) => {
      const updatedData = { ...prev, [name]: value };
      
      // Auto-set the flag (country code) based on country name
      if (name === 'countryName' && countriesWithCodes[value]) {
        updatedData.flag = countriesWithCodes[value].toLowerCase();
      }
      
      return updatedData;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/upload-country", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Country data uploaded successfully!");
        // Clear form
        setFormData({
          flag: "",
          countryName: "",
          title: "",
          description: "",
          descriptionHeading: serviceType === "attestation" ? "About Attestation" : "About Apostille",
          requirements: "",
          requirementsHeading: serviceType === "attestation" ? "Why Choose Us" : "Why Choose Our Apostille Services",
          process: "",
          processHeading: serviceType === "attestation" ? "Attestation Process" : "Apostille Process",
          note: "", // Add this line
          documentsRequired: "",
          documentsRequiredHeading: "Documents Required",
          commonDocuments: "",
          commonDocumentsHeading: "Most Common Documents",
          processingTime: "",
          processingTimeHeading: "Processing Time",
          serviceType: serviceType,
        });
      } else {
        setMessage(`Error: ${data.message}`);
      }
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  // Check for existing auth on component mount
  useEffect(() => {
    const isAuth = localStorage.getItem("adminAuth") === "true";
    setIsAuthenticated(isAuth);
  }, []);

  // If not authenticated, show login screen
  if (!isAuthenticated) {
    return (
      <div className="container  mx-auto px-4 py-24 mt-10 flex justify-center">
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
          <h1 className="text-2xl text-gray-800 font-bold mb-6 text-center">Admin Login</h1>
          
          {message && (
            <div className="p-4 mb-6 rounded-md bg-red-100 text-red-700">
              {message}
            </div>
          )}
          
          <form onSubmit={handleAuth}>
            <div className="mb-4">
              <label htmlFor="password" className="block  mb-2 font-medium text-gray-800">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border text-gray-800 placeholder:text-gray-400 border-gray-300 rounded-md"
                placeholder="Enter admin password"
                required
              />
            </div>
            
            <button
              type="submit"
              disabled={authLoading}
              className="w-full bg-[#FF6A00] text-white py-3 px-6 rounded-md hover:bg-[#E63C00] transition-colors disabled:bg-gray-400"
            >
              {authLoading ? "Authenticating..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Show upload form if authenticated
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl text-gray-800 font-bold">
            Upload Country {serviceType === "attestation" ? "Attestation" : "Apostille"} Data
          </h1>
          <p className="text-gray-600 mt-1">Select service type and fill in the country details</p>
        </div>
        <button
          onClick={() => {
            localStorage.removeItem("adminAuth");
            setIsAuthenticated(false);
          }}
          className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors"
        >
          Logout
        </button>
      </div>

      {message && (
        <div className={`p-4 mb-6 rounded-md ${message.includes("Error") ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"}`}>
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl">
        <div className="mb-6">
          <label className="block mb-2 font-medium text-gray-800">Service Type</label>
          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => {
                setServiceType("attestation");
                setFormData(prev => ({
                  ...prev,
                  serviceType: "attestation",
                  descriptionHeading: "About Attestation",
                  requirementsHeading: "Why Choose Us",
                  processHeading: "Attestation Process"
                }));
              }}
              className={`px-4 py-2 rounded-md transition-colors ${
                serviceType === "attestation" ? "bg-[#FF6A00] text-white" : "bg-gray-200 text-gray-800"
              }`}
            >
              Attestation
            </button>
            <button
              type="button"
              onClick={() => {
                setServiceType("apostille");
                setFormData(prev => ({
                  ...prev,
                  serviceType: "apostille",
                  descriptionHeading: "About Apostille",
                  requirementsHeading: "Why Choose Our Apostille Services",
                  processHeading: "Apostille Process"
                }));
              }}
              className={`px-4 py-2 rounded-md transition-colors ${
                serviceType === "apostille" ? "bg-[#FF6A00] text-white" : "bg-gray-200 text-gray-800"
              }`}
            >
              Apostille
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="flag" className="block mb-2 font-medium text-gray-800">
              Country Code
            </label>
            <input
              type="text"
              id="flag"
              name="flag"
              value={formData.flag}
              onChange={handleChange}
              className="w-full p-3 border text-gray-800 placeholder:text-gray-400 border-gray-300 rounded-md"
              placeholder="ae"
              readOnly
            />
            <small className="text-gray-600">Auto-set based on Country Name - {formData.flag ? (
              <img 
                src={`https://flagcdn.com/${formData.flag}.svg`} 
                alt={formData.countryName} 
                className="inline-block w-6 h-4 ml-1" 
              />
            ) : null}</small>
          </div>
          <div>
            <label htmlFor="countryName" className="block mb-2 font-medium text-gray-800">
              Country Name
            </label>
            <div className="flex items-center">
              <input
                type="text"
                id="countryName"
                name="countryName"
                value={formData.countryName}
                onChange={handleChange}
                className="w-full p-3 border text-gray-800 placeholder:text-gray-400 border-gray-300 rounded-md"
                placeholder="UAE"
                list="country-suggestions"
                required
              />
              {formData.flag && (
                <div className="ml-3">
                  <img 
                    src={`https://flagcdn.com/${formData.flag}.svg`} 
                    alt={formData.countryName} 
                    className="w-10 h-7 border border-gray-200 shadow-sm" 
                  />
                </div>
              )}
            </div>
            <datalist id="country-suggestions">
              {Object.keys(countriesWithCodes).map((country) => (
                <option key={country} value={country} />
              ))}
            </datalist>
            <small className="text-gray-600">Start typing to see available countries</small>
          </div>
        </div>

        <div>
          <label htmlFor="title" className="block mb-2 font-medium text-gray-800">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-3 border text-gray-800 placeholder:text-gray-400 border-gray-300 rounded-md"
            placeholder={serviceType === "attestation" ? 
              "UAE Attestation Services in Delhi NCR" : 
              "Saudi Arabia Apostille Services in Delhi NCR"}
            required
          />
          <input
            type="hidden"
            id="serviceType"
            name="serviceType"
            value={serviceType}
          />
        </div>

        <div>
          <label htmlFor="description" className="block mb-2 font-medium text-gray-800">
            Description
          </label>
          <div className="mb-2">
            <label htmlFor="descriptionHeading" className="block mb-2 text-sm text-gray-600">
              Description Heading
            </label>
            <input
              type="text"
              id="descriptionHeading"
              name="descriptionHeading"
              value={formData.descriptionHeading}
              onChange={handleChange}
              className="w-full p-3 border text-gray-800 placeholder:text-gray-400 border-gray-300 rounded-md"
              placeholder="About Attestation"
            />
          </div>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="6"
            className="w-full p-3 border text-gray-800 placeholder:text-gray-400 border-gray-300 rounded-md"
            placeholder={serviceType === "attestation" ? 
              "What is UAE Attestation? UAE Attestation is a mandatory process..." : 
              "Need to legalize your documents for Saudi Arabia? If you're applying for a job, higher studies, family visa, or doing business in KSA, your Indian documents need an apostille from the Ministry of External Affairs (MEA), Government of India."}
          ></textarea>
        </div>

        <div>
          <label htmlFor="requirements" className="block mb-2 font-medium text-gray-800">
            Why Choose Us (One item per line)
          </label>
          <div className="mb-2">
            <label htmlFor="requirementsHeading" className="block mb-2 text-sm text-gray-600">
              Requirements Heading
            </label>
            <input
              type="text"
              id="requirementsHeading"
              name="requirementsHeading"
              value={formData.requirementsHeading}
              onChange={handleChange}
              className="w-full p-3 border text-gray-800 placeholder:text-gray-400 border-gray-300 rounded-md"
              placeholder="Why Choose Us"
            />
          </div>
          <textarea
            id="requirements"
            name="requirements"
            value={formData.requirements}
            onChange={handleChange}
            rows="6"
            className="w-full p-3 border text-gray-800 placeholder:text-gray-400 border-gray-300 rounded-md"
            placeholder={serviceType === "attestation" ? 
              `For employment visa in UAE
For higher education or student visa in UAE
To sponsor family or spouse
For business or company formation in UAE
For resident visa or PR` : 
              `Same-day pickup and delivery in Delhi NCR
Real-time updates and support
Transparent pricing, no hidden charges
100% MEA-authenticated apostille sticker`}
          ></textarea>
        </div>

        <div>
          <label htmlFor="process" className="block mb-2 font-medium text-gray-800">
            Attestation Process (One step per line)
          </label>
          <div className="mb-2">
            <label htmlFor="processHeading" className="block mb-2 text-sm text-gray-600">
              Process Heading
            </label>
            <input
              type="text"
              id="processHeading"
              name="processHeading"
              value={formData.processHeading}
              onChange={handleChange}
              className="w-full p-3 border text-gray-800 placeholder:text-gray-400 border-gray-300 rounded-md"
              placeholder="Attestation Process"
            />
          </div>
          <textarea
            id="process"
            name="process"
            value={formData.process}
            onChange={handleChange}
            rows="6"
            className="w-full p-3 border text-gray-800 placeholder:text-gray-400 border-gray-300 rounded-md"
            placeholder={serviceType === "attestation" ? 
              `Notary Attestation (Local notary verification)
HRD/Home Department or SDM Attestation
MEA Attestation
UAE Embassy Attestation (India)
MOFA Attestation (UAE – completed after document reaches UAE)` : 
              `Notary Attestation (if required)
State-level Attestation (HRD/Home/SDM based on document type)
MEA Apostille`}
          ></textarea>
        </div>

        <div>
          <label htmlFor="note" className="block mb-2 font-medium text-gray-800">
            Important Note
          </label>
          <textarea
            id="note"
            name="note"
            value={formData.note}
            onChange={handleChange}
            rows="3"
            className="w-full p-3 border text-gray-800 placeholder:text-gray-400 border-gray-300 rounded-md"
            placeholder="Add any important notes or additional information here..."
          ></textarea>
        </div>

        <div>
          <label htmlFor="documentsRequired" className="block mb-2 font-medium text-gray-800">
            Documents Required (One item per line)
          </label>
          <div className="mb-2">
            <label htmlFor="documentsRequiredHeading" className="block mb-2 text-sm text-gray-600">
              Documents Required Heading
            </label>
            <input
              type="text"
              id="documentsRequiredHeading"
              name="documentsRequiredHeading"
              value={formData.documentsRequiredHeading}
              onChange={handleChange}
              className="w-full p-3 border text-gray-800 placeholder:text-gray-400 border-gray-300 rounded-md"
              placeholder="Documents Required"
            />
          </div>
          <textarea
            id="documentsRequired"
            name="documentsRequired"
            value={formData.documentsRequired}
            onChange={handleChange}
            rows="4"
            className="w-full p-3 border text-gray-800 placeholder:text-gray-400 border-gray-300 rounded-md"
            placeholder={serviceType === "attestation" ? 
              `Original Document (Degree/Birth/Marriage/etc.)
Passport Copy (Front and Back)
Authorization Letter (if using an agent)` : 
              `Original Document (Birth/Marriage/Degree Certificate etc.)
Copy of Passport (First and Last Page)
Authorization Letter (if applying through an agent)`}
          ></textarea>
        </div>

        <div>
          <label htmlFor="commonDocuments" className="block mb-2 font-medium text-gray-800">
            Most Common Documents (One item per line)
          </label>
          <div className="mb-2">
            <label htmlFor="commonDocumentsHeading" className="block mb-2 text-sm text-gray-600">
              Common Documents Heading
            </label>
            <input
              type="text"
              id="commonDocumentsHeading"
              name="commonDocumentsHeading"
              value={formData.commonDocumentsHeading}
              onChange={handleChange}
              className="w-full p-3 border text-gray-800 placeholder:text-gray-400 border-gray-300 rounded-md"
              placeholder="Most Common Documents"
            />
          </div>
          <textarea
            id="commonDocuments"
            name="commonDocuments"
            value={formData.commonDocuments}
            onChange={handleChange}
            rows="6"
            className="w-full p-3 border text-gray-800 placeholder:text-gray-400 border-gray-300 rounded-md"
            placeholder={serviceType === "attestation" ? 
              `Degree Certificate
Birth Certificate
Marriage Certificate
Police Clearance Certificate (PCC)
Medical Certificate` : 
              `Birth & Marriage Certificates
Degree & Diploma Certificates
Police Clearance Certificate (PCC)
Affidavits, Medical, Divorce, and Death Certificates`}
          ></textarea>
        </div>

        <div>
          <label htmlFor="processingTime" className="block mb-2 font-medium text-gray-800">
            Processing Time
          </label>
          <div className="mb-2">
            <label htmlFor="processingTimeHeading" className="block mb-2 text-sm text-gray-600">
              Processing Time Heading
            </label>
            <input
              type="text"
              id="processingTimeHeading"
              name="processingTimeHeading"
              value={formData.processingTimeHeading}
              onChange={handleChange}
              className="w-full p-3 border text-gray-800 placeholder:text-gray-400 border-gray-300 rounded-md"
              placeholder="Processing Time"
            />
          </div>
          <textarea
            id="processingTime"
            name="processingTime"
            value={formData.processingTime}
            onChange={handleChange}
            rows="3"
            className="w-full p-3 border text-gray-800 placeholder:text-gray-400 border-gray-300 rounded-md"
            placeholder={serviceType === "attestation" ? 
              "7-10 working days (depends on document type and country)" : 
              "2-3 working days (may vary by state and document type)"}
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#FF6A00] text-white py-3 px-6 rounded-md hover:bg-[#E63C00] transition-colors disabled:bg-gray-400"
        >
          {loading ? "Uploading..." : "Upload Country Data"}
        </button>
      </form>
    </div>
  );
}