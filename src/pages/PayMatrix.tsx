import React from 'react';
import { Helmet } from 'react-helmet-async';

const PayMatrix = () => {
  return (
    <>
      <Helmet>
        <title>7th CPC Pay Matrix for Nurses - Level 7 Pay Scale</title>
        <meta name="description" content="Check the 7th CPC Pay Matrix Table for Nursing Officers. Understand Level 7 pay progression, annual increments, and promotion levels." />
      </Helmet>

      <div className="bg-white py-12">
        <div className="container-custom">
          <h1 className="mb-6">7th CPC Pay Matrix for Nurses</h1>
          <p className="text-gray-700 max-w-3xl mb-8">
            Most Central Government Nursing Officers (Staff Nurse Grade-II) start at <strong>Pay Level 7</strong> in the Pay Matrix. Senior positions like Nursing Superintendent move up to Level 8, 9, 10, and 11.
          </p>

          <div className="overflow-x-auto border border-gray-200 rounded-lg shadow-sm mb-10">
            <table className="min-w-full text-sm text-center">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-4 py-3 border-r border-blue-800">Year / Cell</th>
                  <th className="px-4 py-3 border-r border-blue-800">Level 7 <br/><span className="text-xs font-normal">(Nursing Officer)</span></th>
                  <th className="px-4 py-3 border-r border-blue-800">Level 8 <br/><span className="text-xs font-normal">(Sr. Nursing Officer)</span></th>
                  <th className="px-4 py-3 border-r border-blue-800">Level 9 <br/><span className="text-xs font-normal">(ANS)</span></th>
                  <th className="px-4 py-3">Level 10 <br/><span className="text-xs font-normal">(DNS)</span></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-blue-50 font-bold">
                  <td className="px-4 py-3 border-r">1 (Entry)</td>
                  <td className="px-4 py-3 border-r text-primary-dark">₹44,900</td>
                  <td className="px-4 py-3 border-r">₹47,600</td>
                  <td className="px-4 py-3 border-r">₹53,100</td>
                  <td className="px-4 py-3">₹56,100</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border-r">2</td>
                  <td className="px-4 py-3 border-r">₹46,200</td>
                  <td className="px-4 py-3 border-r">₹49,000</td>
                  <td className="px-4 py-3 border-r">₹54,700</td>
                  <td className="px-4 py-3">₹57,800</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border-r">3</td>
                  <td className="px-4 py-3 border-r">₹47,600</td>
                  <td className="px-4 py-3 border-r">₹50,500</td>
                  <td className="px-4 py-3 border-r">₹56,300</td>
                  <td className="px-4 py-3">₹59,500</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border-r">4</td>
                  <td className="px-4 py-3 border-r">₹49,000</td>
                  <td className="px-4 py-3 border-r">₹52,000</td>
                  <td className="px-4 py-3 border-r">₹58,000</td>
                  <td className="px-4 py-3">₹61,300</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border-r">5</td>
                  <td className="px-4 py-3 border-r">₹50,500</td>
                  <td className="px-4 py-3 border-r">₹53,600</td>
                  <td className="px-4 py-3 border-r">₹59,700</td>
                  <td className="px-4 py-3">₹63,100</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3>How Increments Work?</h3>
              <p className="text-sm text-gray-700">
                Central government employees receive an <strong>annual increment of 3%</strong> (approx) on the Basic Pay. This moves you vertically down the cells in the Pay Matrix table.
              </p>
            </div>
            <div>
              <h3>Promotion (MACP)</h3>
              <p className="text-sm text-gray-700">
                Under the Modified Assured Career Progression (MACP) scheme, if a Nursing Officer doesn't get a functional promotion, they are financially upgraded to the next Pay Level (e.g., Level 7 to 8) after 10, 20, and 30 years of service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PayMatrix;
