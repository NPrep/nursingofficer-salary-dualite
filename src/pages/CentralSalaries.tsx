import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { centralSalaries } from '../data/salaryData';
import { ArrowRight } from 'lucide-react';

const CentralSalaries = () => {
  return (
    <>
      <Helmet>
        <title>Central Government Nursing Officer Salaries - AIIMS, RRB, ESIC</title>
        <meta name="description" content="Complete list of Central Government Nursing Officer salaries. Check pay scales for AIIMS NORCET, RRB, ESIC, DSSSB, and other central institutes." />
      </Helmet>

      <div className="bg-gray-50 py-12">
        <div className="container-custom">
          <h1 className="mb-2">Central Nursing Officer Salaries</h1>
          <p className="text-gray-600 max-w-3xl mb-8">
            Central government nursing roles offer the most lucrative pay packages in India, following the 7th CPC Pay Matrix Level 7. These positions come with job security, regular increments, and central allowances.
          </p>

          <div className="grid gap-6">
            {centralSalaries.map((salary) => (
              <div key={salary.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start md:items-center">
                <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 m-0 mt-0">{salary.title}</h2>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">Permanent</span>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm md:text-base">{salary.description}</p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div className="bg-gray-50 p-3 rounded">
                      <span className="block text-gray-500 text-xs uppercase">Pay Level</span>
                      <span className="font-semibold">{salary.payLevel}</span>
                    </div>
                    <div className="bg-gray-50 p-3 rounded">
                      <span className="block text-gray-500 text-xs uppercase">Basic Pay</span>
                      <span className="font-semibold">{salary.basicPay}</span>
                    </div>
                    <div className="bg-gray-50 p-3 rounded">
                      <span className="block text-gray-500 text-xs uppercase">Gross Est.</span>
                      <span className="font-semibold text-green-700">{salary.grossEstimate}</span>
                    </div>
                    <div className="bg-gray-50 p-3 rounded">
                      <span className="block text-gray-500 text-xs uppercase">In-Hand Est.</span>
                      <span className="font-semibold text-blue-700">{salary.inHandEstimate}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex-shrink-0 w-full md:w-auto">
                  <Link 
                    to={`/central-salaries/${salary.slug}`}
                    className="inline-flex items-center justify-center w-full md:w-auto px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-light transition-colors"
                  >
                    View Details <ArrowRight size={18} className="ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info Block */}
          <div className="mt-12 bg-white p-8 rounded-lg border border-gray-200">
            <h3 className="mt-0">Why Central Govt Nursing Jobs Pay More?</h3>
            <p>
              Central institutions like AIIMS, PGIMER, and JIPMER are autonomous bodies under the Ministry of Health & Family Welfare. They adhere strictly to the Central Pay Commission recommendations.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li><strong>Higher HRA:</strong> Central employees often get posted in Tier-1 cities with 27% HRA.</li>
              <li><strong>Better Promotions:</strong> Defined career progression schemes (MACP).</li>
              <li><strong>Allowances:</strong> Additional perks like Learning Resource Allowance or Academic Allowance in some institutes.</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default CentralSalaries;
