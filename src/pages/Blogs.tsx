import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { blogs } from '../data/blogData';
import { Clock, User, ArrowRight } from 'lucide-react';

const Blogs = () => {
  return (
    <>
      <Helmet>
        <title>Nursing Officer Salary Blogs & Career Guides</title>
        <meta name="description" content="In-depth articles on Nursing Officer salaries, job profiles, career progression, and exam preparation strategies for AIIMS, RRB, ESIC and more." />
      </Helmet>

      <div className="bg-gray-50 py-12">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="mb-4">Nursing Career & Salary Insights</h1>
            <p className="text-gray-600 text-lg">
              Detailed guides, salary breakdowns, and career advice for nursing professionals in India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <article key={blog.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col">
                {blog.imageUrl && (
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={blog.imageUrl} 
                      alt={blog.title} 
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                    <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded font-medium">{blog.category}</span>
                    <span className="flex items-center gap-1"><Clock size={14} /> {blog.readTime}</span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-gray-900 mb-3 mt-0 line-clamp-2 flex-grow">
                    <Link to={`/blogs/${blog.slug}`} className="hover:text-primary transition-colors">
                      {blog.title}
                    </Link>
                  </h2>
                  
                  {/* Excerpt removed as per request */}
                  
                  <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <User size={14} /> {blog.author}
                    </div>
                    <Link to={`/blogs/${blog.slug}`} className="text-primary font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                      Read More <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
