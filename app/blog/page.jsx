import Link from 'next/link';
import React from 'react';

// Generate metadata for the blog listing page
export const metadata = {
  title: 'Blog | Pro Attestation Services',
  description: 'Read our latest articles about attestation services and processes around the world.',
  keywords: ['attestation blog', 'document attestation', 'apostille services', 'Pro Attestation'],
  alternates: {
    canonical: 'https://www.proattestation.com/blog',
  },
};

async function getBlogs() {
  try {

    const response = await fetch(`https://proattestation.com/api/blogs`, {
      next: { revalidate: 60 }
    });

    if (!response.ok) {
      throw new Error('Failed to fetch blogs');
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return [];
  }
}

export default async function BlogListingPage() {
  // Read all blog files from the blogs directory
  // const blogDir = path.join(process.cwd(), 'public', 'blogs');
  // let blogs = [];

  // try {
  //   if (fs.existsSync(blogDir)) {
  //     const files = fs.readdirSync(blogDir);
  //     const blogFiles = files.filter(file => file.endsWith('.json'));

  //     // Read and parse each blog file
  //     blogs = await Promise.all(
  //       blogFiles.map(async (file) => {
  //         const content = await fs.promises.readFile(path.join(blogDir, file), 'utf8');
  //         return JSON.parse(content);
  //       })
  //     );

  //     // Sort blogs by creation date, newest first
  //     blogs.sort((a, b) => {
  //       const dateA = new Date(a.createdAt || 0);
  //       const dateB = new Date(b.createdAt || 0);
  //       return dateB - dateA;
  //     });
  //   }
  // } catch (error) {
  //   console.error('Error reading blogs:', error);
  // }

  const blogs = await getBlogs();

  // Format date
  const formatDate = (dateString) => {
    if (!dateString) return '';

    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Generate excerpt from first paragraph
  const getExcerpt = (content, wordCount = 30) => {
    if (!content || !Array.isArray(content) || content.length === 0) {
      return 'Read this article to learn more about attestation services.';
    }

    // Find the first paragraph block
    const paragraphBlock = content.find(block => block.type === 'paragraph');

    if (!paragraphBlock) {
      return 'Read this article to learn more about attestation services.';
    }

    const words = paragraphBlock.text.split(' ');
    if (words.length <= wordCount) {
      return paragraphBlock.text;
    }

    return words.slice(0, wordCount).join(' ') + '...';
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-16 ">
      {/* Hero section */}
      <div className="bg-gradient-to-r from-[#FF6A00] to-[#FF6A00] md:px-12 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold">Our Blog</h1>
          <p className="mt-4 text-xl text-orange-100">
            Latest articles about attestation services and processes
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:px-12">
        {blogs.length === 0 ? (
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold text-gray-800">No blog posts found</h2>
            <p className="mt-4 text-gray-600">Check back soon for new articles!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <div key={blog.slug} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col hover:shadow-lg transition-shadow">
                <div className="p-6 flex-grow">
                  <Link href={`/blog/${blog.slug}`}>
                    <h2 className="text-xl font-bold text-gray-800 mb-3 hover:text-[#FF6A00]">
                      {blog.title}
                    </h2>
                  </Link>

                  {blog.createdAt && (
                    <p className="text-sm text-gray-500 mb-4">
                      {formatDate(blog.createdAt)}
                    </p>
                  )}

                  <p className="text-gray-600 mb-4">
                    {getExcerpt(blog.content)}
                  </p>
                </div>

                <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                  <Link
                    href={`/blog/${blog.slug}`}
                    className="text-[#FF6A00] hover:text-[#E63C00] font-medium flex items-center text-sm"
                  >
                    Read Article
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-2 h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}