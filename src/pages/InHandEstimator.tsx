import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Calculator } from 'lucide-react';

const InHandEstimator = () => {
  const [basicPay, setBasicPay] = useState(44900);
  const [daPercent, setDaPercent] = useState(50);
  const [hraType, setHraType] = useState('X'); // X=27%, Y=18%, Z=9%
  const [nursingAllowance, setNursingAllowance] = useState(7200);
  const [deductions, setDeductions] = useState(6000); // Rough NPS + Tax

  const getHraPercent = (type: string) => {
    switch(type) {
      case 'X': return 27;
      case 'Y': return 18;
      case 'Z': return 9;
      default: return 9;
    }
  };

  const daAmount = Math.round(basicPay * (daPercent / 100));
  const hraAmount = Math.round(basicPay * (getHraPercent(hraType) / 100));
  const grossSalary = basicPay + daAmount + hraAmount + Number(nursingAllowance);
  const inHandSalary = grossSalary - deductions;

  return (
    <>
      <Helmet>
        <title>Nursing Officer Salary Calculator - Estimate In-Hand Pay</title>
        <meta name="description" content="Calculate your in-hand salary as a Nursing Officer. Input Basic Pay, DA rate, and City Tier to get an accurate estimate of monthly earnings." />
      </Helmet>

      <div className="bg-gray-50 py-12">
        <div className="container-custom max-w-3xl">
          <div className="text-center mb-10">
            <h1 className="flex items-center justify-center gap-3 mb-2">
              <Calculator className="text-primary" size={32} />
              In-Hand Salary Estimator
            </h1>
            <p className="text-gray-600">Based on 7th CPC Structure (Central Govt)</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
            <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Inputs */}
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Basic Pay (₹)</label>
                  <input 
                    type="number" 
                    value={basicPay} 
                    onChange={(e) => setBasicPay(Number(e.target.value))}
                    className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                  <p className="text-xs text-gray-500 mt-1">Default: ₹44,900 (Level 7 Entry)</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">DA Percentage (%)</label>
                  <input 
                    type="number" 
                    value={daPercent} 
                    onChange={(e) => setDaPercent(Number(e.target.value))}
                    className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">City Tier (HRA)</label>
                  <select 
                    value={hraType} 
                    onChange={(e) => setHraType(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-primary"
                  >
                    <option value="X">X Class City (27% - Delhi, Mumbai etc)</option>
                    <option value="Y">Y Class City (18% - State Capitals etc)</option>
                    <option value="Z">Z Class City (9% - Others)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nursing Allowance (Fixed)</label>
                  <input 
                    type="number" 
                    value={nursingAllowance} 
                    onChange={(e) => setNursingAllowance(Number(e.target.value))}
                    className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Est. Deductions (NPS/Tax)</label>
                  <input 
                    type="number" 
                    value={deductions} 
                    onChange={(e) => setDeductions(Number(e.target.value))}
                    className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                </div>
              </div>

              {/* Results */}
              <div className="bg-gray-50 p-6 rounded-lg flex flex-col justify-center">
                <h3 className="text-lg font-semibold text-gray-800 border-b pb-2 mb-4">Estimated Breakdown</h3>
                
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Basic Pay</span>
                    <span className="font-medium">₹{basicPay.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">DA ({daPercent}%)</span>
                    <span className="font-medium">₹{daAmount.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">HRA ({getHraPercent(hraType)}%)</span>
                    <span className="font-medium">₹{hraAmount.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Nursing Allow.</span>
                    <span className="font-medium">₹{nursingAllowance.toLocaleString()}</span>
                  </div>
                  <div className="border-t border-gray-200 my-2 pt-2 flex justify-between font-bold text-gray-800">
                    <span>Gross Salary</span>
                    <span>₹{grossSalary.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-red-500">
                    <span>(-) Deductions</span>
                    <span>₹{deductions.toLocaleString()}</span>
                  </div>
                  <div className="bg-primary text-white p-4 rounded mt-4 text-center">
                    <span className="block text-sm opacity-90">Estimated In-Hand Salary</span>
                    <span className="block text-3xl font-bold mt-1">₹{inHandSalary.toLocaleString()}</span>
                  </div>
                </div>
                <p className="text-xs text-gray-400 mt-4 text-center">
                  * This is an estimate. Actual salary may vary due to TA, Dress Allowance, and exact tax calculations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InHandEstimator;
