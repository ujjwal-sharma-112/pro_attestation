import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const dataPath = path.join(process.cwd(), 'public', 'data', 'countries.json');
    let countries = [];
    
    if (fs.existsSync(dataPath)) {
      try {
        const data = fs.readFileSync(dataPath, 'utf8');
        if (data && data.trim()) {
          countries = JSON.parse(data);
        } else {
          // File exists but is empty
          countries = [];
        }
      } catch (parseError) {
        console.error('Error parsing countries.json file:', parseError);
        // If there's an error parsing the file, return empty array
        countries = [];
      }
    }
    
    return NextResponse.json({ 
      success: true, 
      countries: countries
    });
  } catch (error) {
    console.error('Error fetching countries:', error);
    return NextResponse.json(
      { success: false, message: error.message || 'Failed to fetch countries', countries: [] },
      { status: 500 }
    );
  }
} 