"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  X,
  ArrowLeft,
  Search,
  Filter,
  Calendar,
  User,
  Clock,
  Tag,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

interface BlogPost {
  id: number;
  title: string;
  category: string;
  author: string;
  date: string;
  image: string;
  excerpt: string;
  content: string;
  tags: string[];
  readTime: string;
}

export default function BlogPage() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await fetch("/api/blog");
        const result = await response.json();
        if (result.success) {
          setBlogPosts(result.data);
        }
      } catch (error) {
        console.error("Failed to fetch blog posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  const categories = ["All", ...Array.from(new Set(blogPosts.map((p) => p.category)))];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  if (loading) {
    return (
      <div className="min-h-screen bg-[#f4f7f9] pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f4f7f9]">
      {/* Hero Section */}
      <div className="bg-[#111] text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors mb-6"
          >
            <ArrowLeft size={20} />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Construction Blog</h1>
          <div className="w-20 h-1 bg-primary mb-6"></div>
          <p className="text-gray-400 max-w-2xl text-lg">
            Insights, trends, and expert advice on construction, architecture, and 
            building projects in Bangladesh.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Search & Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <div className="relative flex-1">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-sm w-full focus:outline-none focus:border-primary text-lg"
            />
          </div>
          <div className="relative sm:w-56">
            <Filter
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="pl-12 pr-8 py-3 bg-white border border-gray-200 rounded-sm w-full focus:outline-none focus:border-primary appearance-none cursor-pointer text-lg"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Posts Count */}
        <p className="text-gray-500 mb-6 outfit">
          Showing {filteredPosts.length} of {blogPosts.length} articles
        </p>

        {/* Blog Grid */}
        {filteredPosts.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-sm">
            <p className="text-gray-500 text-lg">No articles found matching your criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="group bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col"
              >
                {/* Image */}
                <div className="relative h-[220px] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-secondary text-white px-3 py-1 text-xs font-bold uppercase">
                    {post.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 text-sm outfit mb-4 line-clamp-3 flex-1">
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} className="text-primary" />
                      <span className="outfit">{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} className="text-primary" />
                      <span className="outfit">{post.readTime}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedPost(post)}
                    className="w-full flex items-center justify-center gap-2 bg-primary text-white px-4 py-3 text-sm font-bold uppercase tracking-wider rounded-sm hover:bg-secondary transition-colors duration-300"
                  >
                    Read More
                    <ArrowRight size={16} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      {/* Blog Post Detail Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setSelectedPost(null)}
          />

          <div className="relative bg-white rounded-sm shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in duration-200">
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-4 right-4 z-10 bg-white/90 p-2 rounded-full hover:bg-primary hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            {/* Modal Image */}
            <div className="relative h-[350px]">
              <Image
                src={selectedPost.image}
                alt={selectedPost.title}
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="bg-secondary text-white px-3 py-1 text-xs font-bold uppercase">
                  {selectedPost.category}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-white mt-3">
                  {selectedPost.title}
                </h2>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-8">
              {/* Meta */}
              <div className="flex flex-wrap items-center gap-6 mb-6 pb-6 border-b border-gray-200">
                <div className="flex items-center gap-2">
                  <div className="bg-secondary/10 p-2 rounded-full">
                    <User size={18} className="text-secondary" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase">Author</p>
                    <p className="font-semibold text-gray-900 outfit">{selectedPost.author}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-secondary/10 p-2 rounded-full">
                    <Calendar size={18} className="text-secondary" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase">Published</p>
                    <p className="font-semibold text-gray-900 outfit">{selectedPost.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-secondary/10 p-2 rounded-full">
                    <Clock size={18} className="text-secondary" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase">Read Time</p>
                    <p className="font-semibold text-gray-900 outfit">{selectedPost.readTime}</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <p className="text-gray-700 leading-relaxed outfit text-lg mb-8">
                {selectedPost.content}
              </p>

              {/* Tags */}
              <div>
                <h4 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Tag size={16} className="text-primary" />
                  Tags
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedPost.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm outfit"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8 pt-6 border-t border-gray-200 flex gap-4">
                <Link
                  href="/contact-us"
                  className="flex-1 bg-primary text-white px-6 py-3 font-bold uppercase tracking-wider rounded-sm hover:bg-secondary transition-colors text-center"
                  onClick={() => setSelectedPost(null)}
                >
                  Discuss This Topic
                </Link>
                <button
                  onClick={() => setSelectedPost(null)}
                  className="px-6 py-3 border-2 border-gray-300 text-gray-700 font-bold uppercase tracking-wider rounded-sm hover:border-secondary hover:text-secondary transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
