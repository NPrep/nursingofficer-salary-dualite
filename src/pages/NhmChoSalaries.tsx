import React from 'react';
import { Helmet } from 'react-helmet-async';
import { nhmSalaries } from '../data/salaryData';
import SalaryTable from '../components/SalaryTable';

const NhmChoSalaries = () => {
  return (
    <>
      <Helmet>
        <title>NHM & CHO Salary Structure - Contractual Nursing Jobs</title>
        <meta name="description" content="Salary details for NHM Staff Nurses and Community Health Officers (CHO). Understand consolidated pay, performance incentives (PBI), and contractual terms." />
      </Helmet>

      <div className="bg-gray-50 py-12">
        <div className="container-custom">
          <h1 className="mb-6">NHM & CHO Salaries</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <p className="text-gray-700 mb-6">
                National Health Mission (NHM) and Community Health Officer (CHO) roles are pivotal for primary healthcare in India. Unlike regular permanent posts, these are often <strong>contractual</strong> with a <strong>consolidated salary structure</strong>.
              </p>

              {nhmSalaries.map((salary) => (
                <div key={salary.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="text-xl font-bold m-0">{salary.title}</h2>
                    <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded font-medium">Contractual</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">{salary.description}</p>
                  
                  <SalaryTable data={salary.breakdown} title="Salary Structure" />
                  
                  <div className="mt-4 p-4 bg-yellow-50 rounded border border-yellow-100 text-sm text-yellow-800">
                    <strong>Note:</strong> CHO salaries often include a Performance Based Incentive (PBI) which is variable. The fixed component is usually around ₹25,000, with up to ₹15,000 as PBI.
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 sticky top-24">
                <h3 className="mt-0 mb-4">Quick Facts: CHO/NHM</h3>
                <ul className="space-y-4 text-sm text-gray-700">
                  <li className="flex gap-3">
                    <span className="font-bold text-primary">01</span>
                    <span><strong>No DA/HRA:</strong> Usually, these components are not applicable. You get a lump sum.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-primary">02</span>
                    <span><strong>Incentives:</strong> CHOs earn extra based on OPD count, tele-consultations, and wellness activities.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-primary">03</span>
                    <span><strong>Regularization:</strong> Some states have policies to regularize NHM staff after certain years, but it varies.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NhmChoSalaries;
