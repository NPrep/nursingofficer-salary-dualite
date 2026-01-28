import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 pt-12 pb-8 mt-auto border-t border-gray-200">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4 text-primary mt-0">NursingOfficerSalary.com</h3>
            <p className="text-gray-600 text-sm max-w-md">
              The ultimate reference for Nursing Officer salaries in India. We provide accurate, up-to-date information on Central, State, and NHM nursing pay structures, allowances, and career progression.
            </p>
            <div className="mt-4 text-sm">
              <p className="font-semibold text-gray-700">Contact Us:</p>
              <p className="text-primary font-bold mt-1">Phone: +91 6377 6391 69</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-900">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link to="/central-salaries" className="hover:text-primary transition-colors">Central Govt Salaries</Link></li>
              <li><Link to="/state-salaries" className="hover:text-primary transition-colors">State Govt Salaries</Link></li>
              <li><Link to="/nhm-cho-salaries" className="hover:text-primary transition-colors">NHM / CHO</Link></li>
              <li><Link to="/blogs" className="hover:text-primary transition-colors">Blogs & Guides</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-gray-900">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link to="/in-hand-estimator" className="hover:text-primary transition-colors">Salary Estimator</Link></li>
              <li><Link to="/courses" className="hover:text-primary transition-colors">Preparation Courses</Link></li>
              <li><Link to="/" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-300 pt-8 text-center text-sm text-gray-500">
          <div className="mb-4 flex items-center justify-center gap-2">
             <span className="text-gray-600">In association with</span>
             <a href="https://nprep.in" target="_blank" rel="noopener noreferrer" className="font-bold text-primary hover:text-primary-dark transition-colors">
               NPrep
             </a>
          </div>
          <p>&copy; {new Date().getFullYear()} NursingOfficerSalary.com. All rights reserved.</p>
          <p className="mt-2 text-xs max-w-3xl mx-auto">
            Disclaimer: This is not an official government portal. It is a help portal regarding nursing exams and salary information. Salaries mentioned are estimates based on official pay scales and may vary based on posting location and latest government orders.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
