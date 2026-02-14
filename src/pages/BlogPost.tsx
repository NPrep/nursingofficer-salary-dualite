import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import Head from 'next/head';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import { blogs } from '../data/blogData';
import { Calendar, Clock, User, ChevronRight, Tag } from 'lucide-react';

const BlogPost = () => {
  const { slug } = useParams();
  const blog = blogs.find(b => b.slug === slug);

  if (!blog) {
    return <Navigate to="/blogs" replace />;
  }

  // Find related blogs
  const relatedBlogs = blogs.filter(b => blog.relatedSlugs?.includes(b.slug));

  return (
    <>
      <Head>
        <title>{blog.title} - NursingOfficerSalary.com</title>
        <meta name="description" content={blog.excerpt} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": blog.title,
            "image": blog.imageUrl,
            "author": {
              "@type": "Person",
              "name": blog.author
            },
            "publisher": {
              "@type": "Organization",
              "name": "NursingOfficerSalary.com",
              "logo": {
                "@type": "ImageObject",
                "url": "https://nursingofficersalary.com/logo.png"
              }
            },
            "datePublished": blog.date,
            "description": blog.excerpt
          })}
        </script>
      </Head>

      <div className="bg-white py-12">
        <div className="container-custom">
          
          {/* Breadcrumb */}
          <nav className="flex items-center text-sm text-gray-500 mb-8">
            <Link to="/" className="hover:text-primary">Home</Link>
            <ChevronRight size={16} className="mx-2" />
            <Link to="/blogs" className="hover:text-primary">Blogs</Link>
            <ChevronRight size={16} className="mx-2" />
            <span className="text-gray-900 font-medium truncate max-w-xs">{blog.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Main Content */}
            <main className="lg:col-span-8">
              <header className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    {blog.category}
                  </span>
                </div>
                <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
                  {blog.title}
                </h1>
                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 border-b border-gray-100 pb-8">
                  <div className="flex items-center gap-2">
                    <User size={18} className="text-gray-400" />
                    <span>By <span className="font-medium text-gray-900">{blog.author}</span></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={18} className="text-gray-400" />
                    <span>{blog.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={18} className="text-gray-400" />
                    <span>{blog.readTime}</span>
                  </div>
                </div>
              </header>

              {/* Markdown Content */}
              <article className="prose prose-lg prose-blue max-w-none prose-headings:scroll-mt-20 prose-a:text-primary hover:prose-a:text-primary-dark prose-img:rounded-xl">
                <ReactMarkdown 
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeSlug]}
                  components={{
                    blockquote: ({node, ...props}) => (
                      <div className="bg-blue-50 border-l-4 border-primary p-4 my-6 rounded-r-lg not-italic">
                        <div className="font-bold text-primary mb-1 flex items-center gap-2">
                          <Tag size={16} /> Note
                        </div>
                        <div {...props} className="text-gray-800" />
                      </div>
                    ),
                    table: ({node, ...props}) => (
                      <div className="overflow-x-auto my-8 border border-gray-200 rounded-lg shadow-sm">
                        <table {...props} className="min-w-full divide-y divide-gray-200" />
                      </div>
                    )
                  }}
                >
                  {blog.content}
                </ReactMarkdown>
              </article>

              {/* Tags / Share (Optional) */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-bold mb-4">Share this guide</h3>
                <div className="flex gap-4">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm font-medium">Share on WhatsApp</button>
                  <button className="px-4 py-2 bg-sky-500 text-white rounded hover:bg-sky-600 text-sm font-medium">Share on Twitter</button>
                </div>
              </div>
            </main>

            {/* Sidebar */}
            <aside className="lg:col-span-4 space-y-8">
              {/* Table of Contents (Sticky) */}
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 sticky top-24">
                <h3 className="text-lg font-bold text-gray-900 mb-4 mt-0">Table of Contents</h3>
                <nav className="text-sm space-y-2 max-h-[70vh] overflow-y-auto pr-2 custom-scrollbar">
                  {/* 
                      Note: In a real production app, we would parse the markdown AST to generate this list dynamically.
                      For now, we rely on the user scrolling or we could add a simple JS parser if needed.
                      Since the content is static, we can also hardcode it or just let users scroll.
                      
                      However, to make it functional without complex AST parsing in runtime:
                  */}
                  <p className="text-gray-500 italic text-xs">Scroll to navigate sections.</p>
                  <ul className="space-y-2">
                    <li><a href="#quick-summary" className="block text-gray-600 hover:text-primary">Quick Summary</a></li>
                    <li><a href="#1-introduction-to-aiims-nursing-officer-salary" className="block text-gray-600 hover:text-primary">1. Introduction</a></li>
                    <li><a href="#3-detailed-monthly-salary-breakdown" className="block text-gray-600 hover:text-primary">3. Monthly Breakdown</a></li>
                    <li><a href="#4-in-hand-salary-estimation" className="block text-gray-600 hover:text-primary">4. In-Hand Estimate</a></li>
                    <li><a href="#6-annual-increment--career-progression" className="block text-gray-600 hover:text-primary">6. Annual Increment</a></li>
                    <li><a href="#13-eligibility-for-aiims-nursing-officer-norcet" className="block text-gray-600 hover:text-primary">13. Eligibility</a></li>
                    <li><a href="#18-frequently-asked-questions-faqs" className="block text-gray-600 hover:text-primary">18. FAQs</a></li>
                  </ul>
                </nav>
              </div>

              {/* Related Articles */}
              {relatedBlogs.length > 0 && (
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 mt-0">Related Articles</h3>
                  <div className="space-y-4">
                    {relatedBlogs.map(rb => (
                      <Link key={rb.id} to={`/blogs/${rb.slug}`} className="block group">
                        <h4 className="text-sm font-semibold text-gray-800 group-hover:text-primary transition-colors line-clamp-2 mb-1">
                          {rb.title}
                        </h4>
                        <span className="text-xs text-gray-500">{rb.readTime}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA */}
              <div className="bg-primary text-white rounded-xl p-6 text-center">
                <h3 className="text-white text-lg font-bold mb-2 mt-0">Crack NORCET 2025</h3>
                <p className="text-blue-100 text-sm mb-4">Get structured courses and mock tests for AIIMS Nursing Officer Exam.</p>
                <Link to="/courses" className="block w-full py-2 bg-white text-primary font-bold rounded hover:bg-blue-50 transition-colors">
                  Explore Courses
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPost;
