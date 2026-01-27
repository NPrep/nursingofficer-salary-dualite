import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { centralSalaries, stateSalaries, nhmSalaries } from '../data/salaryData';
import SalaryTable from '../components/SalaryTable';
import { Calculator, BookOpen } from 'lucide-react';

const SalaryDetail = () => {
  const { slug } = useParams();
  
  // Combine all data to find the matching slug
  const allSalaries = [...centralSalaries, ...stateSalaries, ...nhmSalaries];
  const salary = allSalaries.find(s => s.slug === slug);

  if (!salary) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <Helmet>
        <title>{`${salary.title} Salary Structure, In-Hand Pay & Allowances`}</title>
        <meta name="description" content={`Detailed salary breakdown for ${salary.title}. Check Basic Pay, Grade Pay, DA, HRA, and monthly in-hand salary estimates.`} />
      </Helmet>

      <div className="bg-white py-12">
        <div className="container-custom max-w-4xl">
          <div className="mb-6">
            <Link to={salary.type === 'Central' ? '/central-salaries' : salary.type === 'State' ? '/state-salaries' : '/nhm-cho-salaries'} className="text-sm text-gray-500 hover:text-primary mb-2 inline-block">
              &larr; Back to {salary.type} Salaries
            </Link>
            <h1 className="mb-4">{salary.title} Salary Structure</h1>
            <div className="flex flex-wrap gap-3 text-sm">
              <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full font-medium">{salary.payLevel}</span>
              <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full font-medium">{salary.roleType}</span>
              {salary.state && <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-medium">{salary.state}</span>}
            </div>
          </div>

          <div className="prose max-w-none text-gray-700 mb-8">
            <p className="text-lg leading-relaxed">{salary.description}</p>
          </div>

          {/* Key Figures Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 text-center">
              <span className="block text-sm text-blue-600 font-semibold uppercase tracking-wide">Basic Pay</span>
              <span className="block text-3xl font-bold text-blue-900 mt-2">{salary.basicPay}</span>
            </div>
            <div className="bg-green-50 p-6 rounded-xl border border-green-100 text-center">
              <span className="block text-sm text-green-600 font-semibold uppercase tracking-wide">Gross Salary (Approx)</span>
              <span className="block text-3xl font-bold text-green-900 mt-2">{salary.grossEstimate}</span>
            </div>
            <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100 text-center">
              <span className="block text-sm text-indigo-600 font-semibold uppercase tracking-wide">In-Hand (Approx)</span>
              <span className="block text-3xl font-bold text-indigo-900 mt-2">{salary.inHandEstimate}</span>
            </div>
          </div>

          {/* Detailed Table */}
          <SalaryTable data={salary.breakdown} title={`Monthly Salary Breakdown for ${salary.title}`} />

          {/* Allowances Section */}
          <div className="mt-10">
            <h2>Allowances & Perks</h2>
            <p>Apart from the basic pay, {salary.title} roles are entitled to the following allowances:</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              {salary.allowances.map((allowance, idx) => (
                <li key={idx} className="flex items-start gap-2 bg-gray-50 p-3 rounded border border-gray-100">
                  <span className="text-green-500 font-bold">✓</span>
                  <span>{allowance}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Blocks */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <Link to="/in-hand-estimator" className="group block bg-gray-900 text-white p-6 rounded-xl hover:bg-gray-800 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <Calculator className="text-blue-400" />
                <h3 className="text-white m-0 text-lg">Calculate Your Exact Salary</h3>
              </div>
              <p className="text-gray-400 text-sm m-0 group-hover:text-gray-300">
                Use our calculator to estimate in-hand salary based on your city and current DA rates.
              </p>
            </Link>
            
            <Link to="/courses" className="group block bg-primary text-white p-6 rounded-xl hover:bg-primary-light transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <BookOpen className="text-blue-200" />
                <h3 className="text-white m-0 text-lg">Prepare for this Role</h3>
              </div>
              <p className="text-blue-100 text-sm m-0 group-hover:text-white">
                Find structured courses and mock tests to crack the exam for {salary.title}.
              </p>
            </Link>
          </div>

        </div>
      </div>
    </>
  );
};

export default SalaryDetail;
