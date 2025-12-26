"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function AdminBlogsPage() {
  const router = useRouter();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [authLoading, setAuthLoading] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState(null);
  
  // Format date
  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };
  
  // Handle auth
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
        fetchBlogs();
      } else {
        setError("Invalid password. Please try again.");
      }
    } catch (err) {
      setError(`Authentication error: ${err.message}`);
    } finally {
      setAuthLoading(false);
    }
  };
  
  // Fetch all blogs
  const fetchBlogs = async () => {
    setLoading(true);
    setError('');
    
    try {
      const response = await fetch('/api/blogs');
      const data = await response.json();
      
      if (Array.isArray(data)) {
        // Sort by date
        data.sort((a, b) => {
          const dateA = new Date(a.createdAt || 0);
          const dateB = new Date(b.createdAt || 0);
          return dateB - dateA;
        });
        
        setBlogs(data);
      } else {
        setError('Failed to fetch blogs. Invalid response format.');
      }
    } catch (err) {
      setError(`Error fetching blogs: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };
  
  // Delete a blog
  const deleteBlog = async (slug) => {
    try {
      const response = await fetch(`/api/blogs/${slug}`, {
        method: 'DELETE'
      });
      
      if (response.ok) {
        // Remove from list
        setBlogs(blogs.filter(blog => blog.slug !== slug));
        setDeleteConfirm(null);
      } else {
        const data = await response.json();
        setError(`Failed to delete: ${data.error || 'Unknown error'}`);
      }
    } catch (err) {
      setError(`Error deleting blog: ${err.message}`);
    }
  };
  
  // Check for existing auth on component mount
  useEffect(() => {
    const isAuth = localStorage.getItem("adminAuth") === "true";
    setIsAuthenticated(isAuth);
    
    if (isAuth) {
      fetchBlogs();
    }
  }, []);
  
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
    <div className="container mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Blog Management</h1>
        <div className="flex space-x-4">
          <Link
            href="/admin/new-blog"
            className="px-4 py-2 bg-[#FF6A00] text-white rounded hover:bg-[#E63C00] transition-colors"
          >
            Create New Blog
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
      
      {error && (
        <div className="p-4 mb-6 rounded-md bg-red-100 text-red-700">
          {error}
        </div>
      )}
      
      {loading ? (
        <div className="text-center py-12">
          <p className="text-gray-600">Loading blogs...</p>
        </div>
      ) : blogs.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-lg shadow p-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">No Blogs Found</h2>
          <p className="text-gray-600 mb-6">Create your first blog post to get started.</p>
          <Link
            href="/admin/new-blog"
            className="px-6 py-3 bg-[#FF6A00] text-white rounded-md hover:bg-[#E63C00] transition-colors inline-block"
          >
            Create New Blog
          </Link>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Title
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Created At
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Updated
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {blogs.map((blog) => (
                <tr key={blog.slug} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900 line-clamp-1">
                      {blog.title}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{formatDate(blog.createdAt)}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{formatDate(blog.updatedAt)}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                    <Link
                      href={`/blog/${blog.slug}`}
                      className="text-indigo-600 hover:text-indigo-900"
                      target="_blank"
                    >
                      View
                    </Link>
                    <Link
                      href={`/admin/edit-blog/${blog.slug}`}
                      className="text-[#FF6A00] hover:text-[#E63C00]"
                    >
                      Edit
                    </Link>
                    {deleteConfirm === blog.slug ? (
                      <>
                        <button
                          onClick={() => deleteBlog(blog.slug)}
                          className="text-red-700 hover:text-red-900"
                        >
                          Confirm
                        </button>
                        <button
                          onClick={() => setDeleteConfirm(null)}
                          className="text-gray-600 hover:text-gray-900"
                        >
                          Cancel
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={() => setDeleteConfirm(blog.slug)}
                        className="text-red-600 hover:text-red-900"
                      >
                        Delete
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
} 