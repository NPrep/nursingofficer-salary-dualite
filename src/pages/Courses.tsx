import React from 'react';
import { Helmet } from 'react-helmet-async';
import { courses } from '../data/salaryData';
import { BookOpen, CheckCircle, ExternalLink } from 'lucide-react';

const Courses = () => {
  return (
    <>
      <Helmet>
        <title>Nursing Officer Exam Preparation Courses - NORCET, RRB, State PSC</title>
        <meta name="description" content="Best courses for Nursing Officer exams. Prepare for AIIMS NORCET, RRB Staff Nurse, ESIC, and State PSC exams with structured study material." />
      </Helmet>

      <div className="bg-white py-12">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h1 className="mb-4">Exam Preparation Courses</h1>
            <p className="text-gray-600">
              Securing a high-paying government nursing job requires structured preparation. Explore courses tailored for central and state level exams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div key={course.id} className="border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col">
                <div className="bg-blue-50 p-6 border-b border-blue-100">
                  <span className="bg-white text-blue-800 text-xs font-bold px-2 py-1 rounded border border-blue-100 mb-3 inline-block">
                    {course.focus}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 m-0">{course.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">by {course.provider}</p>
                </div>
                
                <div className="p-6 flex-grow">
                  <p className="text-gray-700 mb-4 font-medium">{course.description}</p>
                  <ul className="space-y-2 mb-6">
                    {course.features?.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircle size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="p-6 pt-0 mt-auto">
                  <a 
                    href={course.link} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full text-center py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
                  >
                    View Course Details <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 bg-gray-50 rounded-xl p-8 text-center">
            <BookOpen className="mx-auto text-primary mb-4" size={48} />
            <h2 className="text-2xl font-bold mb-4 mt-0">Why Prepare Specifically?</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Exams like AIIMS NORCET have become highly competitive with negative marking and clinical scenario-based questions. A structured course helps you navigate the vast syllabus efficiently, directly impacting your chances of landing a Level-7 salary job.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses;
