import React from 'react';
import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import BlockRenderer from '../../components/blog/BlockRenderer';

// Generate static params for all blog posts
export async function generateStaticParams() {
  const blogDir = path.join(process.cwd(), 'public', 'blogs');
  
  try {
    if (fs.existsSync(blogDir)) {
      const files = fs.readdirSync(blogDir);
      const blogFiles = files.filter(file => file.endsWith('.json'));
      
      return blogFiles.map(file => ({
        slug: file.replace('.json', ''),
      }));
    }
  } catch (error) {
    console.error('Error generating static params for blogs:', error);
  }
  
  return [];
}

// Generate metadata for blog post
export async function generateMetadata({ params }) {
  const { slug } = params;
  const blogPath = path.join(process.cwd(), 'public', 'blogs', `${slug}.json`);
  
  try {
    if (fs.existsSync(blogPath)) {
      const content = fs.readFileSync(blogPath, 'utf8');
      const blog = JSON.parse(content);
      
      return {
        title: blog.metaTitle || blog.title,
        description: blog.metaDescription,
        keywords: blog.keywords,
        alternates: {
          canonical: `https://www.proattestation.com/blog/${slug}`,
        },
        openGraph: {
          title: blog.metaTitle || blog.title,
          description: blog.metaDescription,
          type: 'article',
          url: `https://www.proattestation.com/blog/${slug}`,
        },
      };
    }
  } catch (error) {
    console.error(`Error generating metadata for blog ${slug}:`, error);
  }
  
  return {
    title: 'Blog Post Not Found',
    description: 'The requested blog post could not be found.'
  };
}

export default function BlogPost({ params }) {
  const { slug } = params;
  
  let blog = null;
  const blogPath = path.join(process.cwd(), 'public', 'blogs', `${slug}.json`);
  
  try {
    if (fs.existsSync(blogPath)) {
      const content = fs.readFileSync(blogPath, 'utf8');
      blog = JSON.parse(content);
    }
  } catch (error) {
    console.error(`Error reading blog data for ${slug}:`, error);
  }
  
  if (!blog) {
    notFound();
  }
  
  // Format date if available
  const formatDate = (dateString) => {
    if (!dateString) return '';
    
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };
  
  return (
    <div className="bg-gray-50 text-gray-600 min-h-screen  pb-16">
      {/* Hero section */}
      <div className="bg-gradient-to-r from-[#FF6A00] to-[#FF6A00] text-white py-12 md:px-24">
        <div className="container mx-auto px-4">
          <Link href="/blog" className="text-white hover:text-orange-200 flex items-center mb-6 font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
          
          <h1 className="text-3xl md:text-4xl font-bold">{blog.title}</h1>
          
          {blog.createdAt && (
            <div className="mt-4 text-orange-100">
              Published on {formatDate(blog.createdAt)}
              {blog.updatedAt && blog.updatedAt !== blog.createdAt && (
                <span> • Updated on {formatDate(blog.updatedAt)}</span>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-12 -mt-8">
        {/* Main content */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="prose prose-lg max-w-none">
            <BlockRenderer blocks={blog.content} />
          </div>
          
          {/* Keywords */}
          {blog.keywords && blog.keywords.length > 0 && (
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="flex flex-wrap gap-2">
                {blog.keywords.map((keyword, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
        
        {/* Call to action */}
        <div className="bg-gradient-to-r from-orange-50 to-orange-50 rounded-lg border border-orange-100 p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-2 text-gray-800">Need Expert Attestation Services?</h3>
              <p className="text-gray-600 mb-6 md:mb-0">Our professionals will guide you through the entire attestation process</p>
            </div>
            <Link 
              href="/contact" 
              className="inline-block bg-[#FF6A00] text-white font-semibold px-6 py-3 rounded-md hover:bg-[#E63C00] transition-colors shadow-md"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 