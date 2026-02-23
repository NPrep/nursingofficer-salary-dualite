import React, { useMemo, useState } from 'react';
import Head from 'next/head';
import { Calculator } from 'lucide-react';

const statePayDefaults: Record<string, number> = {
  Central: 44900,
  Delhi: 47600,
  Maharashtra: 44900,
  UttarPradesh: 44900,
  TamilNadu: 36900,
};

const payLevelDefaults: Record<string, number> = {
  'Level 6': 35400,
  'Level 7': 44900,
  'Level 8': 47600,
};

const cityTierMap: Record<string, number> = {
  X: 27,
  Y: 18,
  Z: 9,
};

const InHandEstimator = () => {
  const [state, setState] = useState('Central');
  const [payLevel, setPayLevel] = useState('Level 7');
  const [cityTier, setCityTier] = useState('X');
  const [daPercent, setDaPercent] = useState(50);
  const [hasNps, setHasNps] = useState(true);
  const [nursingAllowance, setNursingAllowance] = useState(7200);
  const [incomeTax, setIncomeTax] = useState(3500);

  const basicPay = useMemo(() => {
    const levelBase = payLevelDefaults[payLevel];
    const stateBase = statePayDefaults[state];
    return Math.round((levelBase + stateBase) / 2);
  }, [payLevel, state]);

  const hraPercent = cityTierMap[cityTier] || 9;
  const daAmount = Math.round(basicPay * (daPercent / 100));
  const hraAmount = Math.round(basicPay * (hraPercent / 100));
  const grossSalary = basicPay + daAmount + hraAmount + nursingAllowance;
  const npsDeduction = hasNps ? Math.round((basicPay + daAmount) * 0.1) : 0;
  const totalDeductions = npsDeduction + incomeTax;
  const inHandSalary = grossSalary - totalDeductions;

  return (
    <>
      <Head>
        <title>Nursing Officer Salary Calculator - Estimate In-Hand Pay</title>
        <meta
          name="description"
          content="Calculate your in-hand salary as a Nursing Officer. Input Basic Pay, DA rate, and City Tier to get an accurate estimate of monthly earnings."
        />
      </Head>

      <div className="bg-gray-50 py-12">
        <div className="container-custom max-w-5xl">
          <div className="text-center mb-10">
            <h1 className="flex items-center justify-center gap-3 mb-2">
              <Calculator className="text-primary" size={32} />
              In-Hand Salary Estimator
            </h1>
            <p className="text-gray-600">Live calculator with state, city tier, pay level, DA and NPS impact</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
            <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">State / Employer</label>
                  <select
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-primary"
                  >
                    <option value="Central">Central Government</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="UttarPradesh">Uttar Pradesh</option>
                    <option value="TamilNadu">Tamil Nadu</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Pay Level</label>
                  <select
                    value={payLevel}
                    onChange={(e) => setPayLevel(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-primary"
                  >
                    {Object.keys(payLevelDefaults).map((level) => (
                      <option key={level} value={level}>
                        {level}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">City Tier (HRA)</label>
                  <select
                    value={cityTier}
                    onChange={(e) => setCityTier(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-primary"
                  >
                    <option value="X">X Tier (27%) - Metro cities</option>
                    <option value="Y">Y Tier (18%) - State capitals</option>
                    <option value="Z">Z Tier (9%) - Other locations</option>
                  </select>
                </div>

                <div>
                  <div className="flex justify-between text-sm font-medium text-gray-700 mb-2">
                    <label>DA Percentage</label>
                    <span>{daPercent}%</span>
                  </div>
                  <input
                    type="range"
                    min={30}
                    max={60}
                    value={daPercent}
                    onChange={(e) => setDaPercent(Number(e.target.value))}
                    className="w-full accent-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">NPS Contribution</label>
                  <div className="inline-flex rounded-md border border-gray-300 overflow-hidden">
                    <button
                      onClick={() => setHasNps(true)}
                      className={`px-4 py-2 text-sm font-medium transition-colors ${
                        hasNps ? 'bg-primary text-white' : 'bg-white text-gray-700'
                      }`}
                    >
                      NPS
                    </button>
                    <button
                      onClick={() => setHasNps(false)}
                      className={`px-4 py-2 text-sm font-medium transition-colors ${
                        !hasNps ? 'bg-primary text-white' : 'bg-white text-gray-700'
                      }`}
                    >
                      No NPS
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nursing Allowance (₹)</label>
                  <input
                    type="number"
                    value={nursingAllowance}
                    onChange={(e) => setNursingAllowance(Number(e.target.value))}
                    className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Income Tax Estimate (₹)</label>
                  <input
                    type="number"
                    value={incomeTax}
                    onChange={(e) => setIncomeTax(Number(e.target.value))}
                    className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg flex flex-col justify-center">
                <h3 className="text-lg font-semibold text-gray-800 border-b pb-2 mb-4">Real-time Salary Breakdown</h3>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Basic Pay ({payLevel})</span>
                    <span className="font-medium">₹{basicPay.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">DA ({daPercent}%)</span>
                    <span className="font-medium">₹{daAmount.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">HRA ({hraPercent}%)</span>
                    <span className="font-medium">₹{hraAmount.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Nursing Allowance</span>
                    <span className="font-medium">₹{nursingAllowance.toLocaleString()}</span>
                  </div>
                  <div className="border-t border-gray-200 my-2 pt-2 flex justify-between font-bold text-gray-800">
                    <span>Gross Salary</span>
                    <span>₹{grossSalary.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-red-500">
                    <span>(-) NPS</span>
                    <span>₹{npsDeduction.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-red-500">
                    <span>(-) Income Tax</span>
                    <span>₹{incomeTax.toLocaleString()}</span>
                  </div>
                  <div className="bg-primary text-white p-4 rounded mt-4 text-center">
                    <span className="block text-sm opacity-90">Estimated In-Hand Salary</span>
                    <span className="block text-3xl font-bold mt-1">₹{inHandSalary.toLocaleString()}</span>
                  </div>
                </div>
                <p className="text-xs text-gray-400 mt-4 text-center mb-0">
                  * Estimate for guidance. Actual payroll varies by TA, risk allowance, arrears, and tax regime.
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
