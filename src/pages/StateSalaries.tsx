import React from 'react';
import Head from 'next/head';
import { Link } from 'react-router-dom';
import { stateSalaries } from '../data/salaryData';
import { MapPin } from 'lucide-react';

const StateSalaries = () => {
  return (
    <>
      <Head>
        <title>State Nursing Officer Salaries - State-wise List</title>
        <meta name="description" content="Check Staff Nurse salaries for UP, Rajasthan, Kerala, MP, Bihar and other states. Compare state government nursing pay scales." />
      </Head>

      <div className="bg-white py-12">
        <div className="container-custom">
          <h1 className="mb-2">State Nursing Officer Salaries</h1>
          <p className="text-gray-600 max-w-3xl mb-8">
            State government nursing salaries vary by region. While some states have adopted the 7th CPC parity, others follow their own state pay commissions.
          </p>

          <div className="overflow-hidden border border-gray-200 rounded-lg shadow-sm">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">State / Role</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pay Scale</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">Gross Range</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {stateSalaries.map((salary) => (
                  <tr key={salary.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                          <MapPin size={20} />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{salary.title}</div>
                          <div className="text-sm text-gray-500">{salary.state}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{salary.payLevel}</div>
                      <div className="text-xs text-gray-500">Basic: {salary.basicPay}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap hidden md:table-cell">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {salary.grossEstimate}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <Link to={`/state-salaries/${salary.slug}`} className="text-primary hover:text-primary-dark font-bold">
                        View Details
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default StateSalaries;
