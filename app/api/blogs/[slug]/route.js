import { readFile, unlink, writeFile } from 'fs/promises';
import { NextResponse } from 'next/server';
import path from 'path';

// Helper to get blog file path
const getBlogPath = (slug) => {
  return path.join(process.cwd(), 'public', 'blogs', `${slug}.json`);
};

// GET /api/blogs/[slug] - Get a specific blog
export async function GET(request, { params }) {
  try {
    const { slug } = params;
    const filePath = getBlogPath(slug);
    const content = await readFile(filePath, 'utf8');
    const blog = JSON.parse(content);

    return NextResponse.json(blog);
  } catch (error) {
    if (error.code === 'ENOENT') {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
    }
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// PUT /api/blogs/[slug] - Update a blog
export async function PUT(request, { params }) {
  try {
    const { slug } = params;
    const filePath = getBlogPath(slug);

    // Get existing blog to maintain creation date
    let existingBlog = {};
    try {
      const content = await readFile(filePath, 'utf8');
      existingBlog = JSON.parse(content);
    } catch (error) {
      // If blog doesn't exist, we'll create a new one
    }

    const blogData = await request.json();

    // Preserve created date if exists
    if (existingBlog.createdAt) {
      blogData.createdAt = existingBlog.createdAt;
    } else {
      blogData.createdAt = new Date().toISOString();
    }

    // Update the timestamp
    blogData.updatedAt = new Date().toISOString();

    // Ensure the slug in the URL is used
    blogData.slug = slug;

    await writeFile(filePath, JSON.stringify(blogData, null, 2), 'utf8');

    return NextResponse.json({ success: true, blog: blogData });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// DELETE /api/blogs/[slug] - Delete a blog
export async function DELETE(request, { params }) {
  try {
    const { slug } = params;
    const filePath = getBlogPath(slug);

    await unlink(filePath);

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error.code === 'ENOENT') {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
    }
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}