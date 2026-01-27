import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Search, ArrowRight, TrendingUp, Building2, MapPin } from 'lucide-react';
import { centralSalaries, stateSalaries, nhmSalaries } from '../data/salaryData';

const Home = () => {
  const [filterType, setFilterType] = useState('All');
  
  const allSalaries = [...centralSalaries, ...stateSalaries, ...nhmSalaries];
  
  const filteredSalaries = filterType === 'All' 
    ? allSalaries 
    : allSalaries.filter(s => s.type === filterType || (filterType === 'NHM' && s.type === 'CHO'));

  return (
    <>
      <Helmet>
        <title>Nursing Officer Salary in India – Central, State, NHM, CHO & In-Hand Estimates</title>
        <meta name="description" content="Detailed guide on Nursing Officer Salaries in India. Check AIIMS, RRB, ESIC, State Govt, and NHM/CHO pay scales, allowances, and in-hand salary estimates." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-primary-dark text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Nursing Officer Salary in India <br/>
              <span className="text-blue-300 text-2xl md:text-4xl">Central, State, NHM & CHO</span>
            </h1>
            <p className="text-blue-100 text-lg mb-8 leading-relaxed">
              The definitive guide to nursing pay structures. Understand Basic Pay, Grade Pay, DA, HRA, and In-Hand salaries for permanent and contractual roles across India.
            </p>
            
            {/* Quick Stats / Badges */}
            <div className="flex flex-wrap gap-4 text-sm font-medium">
              <span className="bg-white/10 px-4 py-2 rounded-full flex items-center gap-2">
                <TrendingUp size={16} className="text-green-400" /> 7th CPC Updated
              </span>
              <span className="bg-white/10 px-4 py-2 rounded-full flex items-center gap-2">
                <Building2 size={16} className="text-yellow-400" /> Central & State
              </span>
              <span className="bg-white/10 px-4 py-2 rounded-full flex items-center gap-2">
                <MapPin size={16} className="text-red-400" /> All India Coverage
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Salary Finder */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mt-0 mb-2">Quick Salary Finder</h2>
              <p className="text-gray-600 mb-0">Browse salary structures by employer type</p>
            </div>
            
            <div className="flex bg-white p-1 rounded-lg border border-gray-200 shadow-sm">
              {['All', 'Central', 'State', 'NHM'].map((type) => (
                <button
                  key={type}
                  onClick={() => setFilterType(type)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                    filterType === type 
                      ? 'bg-primary text-white shadow-sm' 
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSalaries.slice(0, 6).map((salary) => (
              <div key={salary.id} className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-6">
                <div className="flex justify-between items-start mb-4">
                  <span className={`px-2 py-1 text-xs font-semibold rounded ${
                    salary.type === 'Central' ? 'bg-blue-100 text-blue-800' :
                    salary.type === 'State' ? 'bg-green-100 text-green-800' :
                    'bg-orange-100 text-orange-800'
                  }`}>
                    {salary.type}
                  </span>
                  <span className="text-xs text-gray-500">{salary.roleType}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 mt-0 line-clamp-2">{salary.title}</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Basic Pay</span>
                    <span className="font-mono font-medium">{salary.basicPay}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Gross Est.</span>
                    <span className="font-mono font-medium text-primary">{salary.grossEstimate}</span>
                  </div>
                </div>
                <Link 
                  to={salary.type === 'Central' ? `/central-salaries/${salary.slug}` : 
                      salary.type === 'State' ? `/state-salaries/${salary.slug}` : 
                      `/nhm-cho-salaries`}
                  className="block w-full text-center py-2 border border-primary text-primary rounded hover:bg-primary hover:text-white transition-colors text-sm font-medium"
                >
                  View Breakdown
                </Link>
              </div>
            ))}
          </div>
          
          <div className="mt-8 p-4 bg-blue-50 border border-blue-100 rounded-lg flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-bold text-primary-dark m-0">Preparing for Nursing Officer exams?</h4>
              <p className="text-sm text-blue-800 m-0">Check our curated list of structured preparation resources.</p>
            </div>
            <Link to="/courses" className="flex items-center gap-2 text-sm font-bold text-primary hover:underline">
              View Courses <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Intro Content */}
      <section className="py-12 bg-white">
        <div className="container-custom max-w-4xl">
          <h2>Understanding Nursing Officer Salaries in India</h2>
          <p>
            The salary structure for Nursing Officers in India varies significantly based on the recruiting organization (Central vs. State), the nature of employment (Permanent vs. Contractual), and the posting location.
          </p>
          <p>
            <strong>Central Government roles</strong> (like AIIMS, RRB, ESIC) generally follow the <strong>7th Central Pay Commission (CPC)</strong> matrix, specifically <strong>Pay Level 7</strong>, which offers a high starting basic pay and substantial allowances.
          </p>
          <p>
            <strong>State Government roles</strong> follow their respective state pay commissions, which may differ in terms of Basic Pay and DA rates. <strong>NHM and CHO</strong> roles are typically contractual with consolidated pay or performance-based incentives.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="mt-0 text-lg">Gross vs. In-Hand Salary</h3>
              <p className="text-sm mb-0">
                <strong>Gross Salary</strong> is the sum of Basic Pay + Allowances (DA, HRA, Nursing Allowance, etc.).
                <br/><br/>
                <strong>In-Hand Salary</strong> is what you receive in your bank account after deductions like NPS/EPF and Income Tax.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="mt-0 text-lg">Key Allowances</h3>
              <ul className="text-sm list-disc pl-5 space-y-1 text-gray-700">
                <li><strong>DA (Dearness Allowance):</strong> Linked to inflation, revised biannually.</li>
                <li><strong>HRA (House Rent Allowance):</strong> Depends on city tier (X, Y, Z).</li>
                <li><strong>Nursing Allowance:</strong> Specific to nursing staff duties.</li>
                <li><strong>Dress/Uniform Allowance:</strong> For maintenance of uniform.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
