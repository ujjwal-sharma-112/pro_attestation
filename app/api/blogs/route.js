import { writeFile, readFile, readdir } from 'fs/promises';
import { NextResponse } from 'next/server';
import path from 'path';

// Helper to get blog directory path
const getBlogDir = () => {
  return path.join(process.cwd(), 'public', 'blogs');
};

// Generate slug from title
const generateSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/[^\w\s]/gi, '')
    .replace(/\s+/g, '-');
};

// GET /api/blogs - List all blogs
export async function GET() {
  try {
    const blogDir = getBlogDir();
    const files = await readdir(blogDir);
    const blogFiles = files.filter(file => file.endsWith('.json'));
    
    const blogs = await Promise.all(
      blogFiles.map(async (file) => {
        const content = await readFile(path.join(blogDir, file), 'utf8');
        return JSON.parse(content);
      })
    );
    
    return NextResponse.json(blogs);
  } catch (error) {
    // If directory doesn't exist yet or other error
    if (error.code === 'ENOENT') {
      return NextResponse.json([]);
    }
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// POST /api/blogs - Create a new blog
export async function POST(request) {
  try {
    const blogData = await request.json();
    
    // Generate slug if not provided
    if (!blogData.slug) {
      blogData.slug = generateSlug(blogData.title);
    }
    
    // Add timestamp
    blogData.createdAt = blogData.createdAt || new Date().toISOString();
    blogData.updatedAt = new Date().toISOString();
    
    const blogDir = getBlogDir();
    const filePath = path.join(blogDir, `${blogData.slug}.json`);
    
    await writeFile(filePath, JSON.stringify(blogData, null, 2), 'utf8');
    
    return NextResponse.json({ success: true, blog: blogData });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
} 