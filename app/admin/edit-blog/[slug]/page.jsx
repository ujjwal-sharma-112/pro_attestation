"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import BlogEditor from '../../../components/blog/BlogEditor';

export default function EditBlogPage({ params }) {
  const { slug } = params;
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [authLoading, setAuthLoading] = useState(false);
  const [error, setError] = useState('');
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // Fetch blog data
  const fetchBlog = async () => {
    setLoading(true);
    
    try {
      const response = await fetch(`/api/blogs/${slug}`);
      
      if (!response.ok) {
        throw new Error('Blog not found');
      }
      
      const data = await response.json();
      setBlog(data);
    } catch (err) {
      setError(`Error fetching blog: ${err.message}`);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  
  // Handle authentication
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
        fetchBlog();
      } else {
        setError("Invalid password. Please try again.");
      }
    } catch (err) {
      setError(`Authentication error: ${err.message}`);
    } finally {
      setAuthLoading(false);
    }
  };
  
  // Check for existing auth on component mount
  useEffect(() => {
    const isAuth = localStorage.getItem("adminAuth") === "true";
    setIsAuthenticated(isAuth);
    
    if (isAuth) {
      fetchBlog();
    }
  }, [slug]);
  
  // If not authenticated, show login screen
  if (!isAuthenticated) {
    return (
      <div className="container mx-auto px-4 py-24 mt-10 flex justify-center">
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Admin Login</h1>
          
          {error && (
            <div className="p-4 mb-6 rounded-md bg-red-100 text-red-700">
              {error}
            </div>
          )}
          
          <form onSubmit={handleAuth}>
            <div className="mb-4">
              <label htmlFor="password" className="block mb-2 font-medium text-gray-800">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md text-gray-800"
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

  return (
    <div className="bg-gray-50 text-gray-600 pt-0 min-h-screen">
      <div className="p-4 bg-white shadow">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Edit Blog</h1>
          <div className="flex space-x-4">
            <Link
              href="/admin/blogs"
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors"
            >
              Back to Blogs
            </Link>
            <button
              onClick={() => {
                localStorage.removeItem("adminAuth");
                setIsAuthenticated(false);
              }}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
      
      {loading ? (
        <div className="container mx-auto px-4 py-12 text-center">
          <p className="text-gray-600">Loading blog...</p>
        </div>
      ) : error ? (
        <div className="container mx-auto px-4 py-12">
          <div className="p-4 rounded-md bg-red-100 text-red-700">
            {error}
          </div>
          <div className="mt-6 text-center">
            <Link
              href="/admin/blogs"
              className="px-4 py-2 bg-[#FF6A00] text-white rounded hover:bg-[#E63C00] transition-colors"
            >
              Back to Blog List
            </Link>
          </div>
        </div>
      ) : blog ? (
        <BlogEditor initialBlog={blog} />
      ) : (
        <div className="container mx-auto px-4 py-12 text-center">
          <p className="text-gray-600">Blog not found.</p>
          <div className="mt-6">
            <Link
              href="/admin/blogs"
              className="px-4 py-2 bg-[#FF6A00] text-white rounded hover:bg-[#E63C00] transition-colors"
            >
              Back to Blog List
            </Link>
          </div>
        </div>
      )}
    </div>
  );
} 