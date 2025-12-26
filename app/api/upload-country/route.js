import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(req) {
  try {
    // Parse the request body
    const body = await req.json();
    
    // Format the data
    const formattedData = {
      id: body.countryName.toLowerCase().replace(/\s+/g, '-'),
      flag: body.flag,
      countryName: body.countryName,
      title: body.title,
      serviceType: body.serviceType || "attestation", // Default to attestation if not provided
      updatedAt: new Date().toISOString()
    };
    
    // Only include fields that are not empty
    if (body.description && body.description.trim()) {
      formattedData.description = body.description;
      formattedData.descriptionHeading = body.descriptionHeading || "About Attestation";
    }
    
    if (body.requirements && body.requirements.trim()) {
      formattedData.requirements = body.requirements.split('\n').filter(Boolean).map(item => item.trim());
      formattedData.requirementsHeading = body.requirementsHeading || "Why Choose Us";
    }
    
    if (body.process && body.process.trim()) {
      formattedData.process = body.process.split('\n').filter(Boolean).map(item => item.trim());
      formattedData.processHeading = body.processHeading || "Attestation Process";
    }
    
    // Add note if provided
    if (body.note && body.note.trim()) {
      formattedData.note = body.note.trim();
    }
    
    if (body.documentsRequired && body.documentsRequired.trim()) {
      formattedData.documentsRequired = body.documentsRequired.split('\n').filter(Boolean).map(item => item.trim());
      formattedData.documentsRequiredHeading = body.documentsRequiredHeading || "Documents Required";
    }
    
    if (body.commonDocuments && body.commonDocuments.trim()) {
      formattedData.commonDocuments = body.commonDocuments.split('\n').filter(Boolean).map(item => item.trim());
      formattedData.commonDocumentsHeading = body.commonDocumentsHeading || "Most Common Documents";
    }
    
    if (body.processingTime && body.processingTime.trim()) {
      formattedData.processingTime = body.processingTime.split('\n').filter(Boolean).map(item => item.trim());
      formattedData.processingTimeHeading = body.processingTimeHeading || "Processing Time";
    }

    // Create the data directory if it doesn't exist
    const dataDir = path.join(process.cwd(), 'public', 'data');
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    // Create or update countries.json
    const countriesPath = path.join(dataDir, 'countries.json');
    let countries = [];
    
    if (fs.existsSync(countriesPath)) {
      try {
        const data = fs.readFileSync(countriesPath, 'utf8');
        if (data && data.trim()) {
          countries = JSON.parse(data);
          
          // Check if country already exists, update it
          const existingIndex = countries.findIndex(country => country.id === formattedData.id);
          if (existingIndex !== -1) {
            countries[existingIndex] = formattedData;
          } else {
            countries.push(formattedData);
          }
        } else {
          // File exists but is empty
          countries = [formattedData];
        }
      } catch (parseError) {
        console.error('Error parsing countries.json file:', parseError);
        // If there's an error parsing the file, start fresh
        countries = [formattedData];
      }
    } else {
      countries = [formattedData];
    }

    // Write updated countries data
    fs.writeFileSync(countriesPath, JSON.stringify(countries, null, 2));

    // Also save individual country file
    fs.writeFileSync(
      path.join(dataDir, `${formattedData.id}.json`),
      JSON.stringify(formattedData, null, 2)
    );

    return NextResponse.json({ 
      success: true, 
      message: `${body.countryName} data saved successfully` 
    });
  } catch (error) {
    console.error('Error saving country data:', error);
    return NextResponse.json(
      { success: false, message: error.message || 'Failed to save country data' },
      { status: 500 }
    );
  }
}