import React, { useMemo, useState } from 'react';
import Head from 'next/head';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Building2, MapPin } from 'lucide-react';
import { centralSalaries, stateSalaries, nhmSalaries } from '../data/salaryData';

const Home = () => {
  const [filterType, setFilterType] = useState('All');

  const allSalaries = [...centralSalaries, ...stateSalaries, ...nhmSalaries];

  const filteredSalaries =
    filterType === 'All'
      ? allSalaries
      : allSalaries.filter((s) => s.type === filterType || (filterType === 'NHM' && s.type === 'CHO'));

  const tabCounts = {
    All: allSalaries.length,
    Central: centralSalaries.length,
    State: stateSalaries.length,
    NHM: 'coming soon',
  };

  const grossRangeBounds = useMemo(() => {
    const ranges = allSalaries.map((salary) => {
      const matches = salary.grossEstimate.match(/\d[\d,]*/g);
      const values = (matches || []).map((value) => Number(value.replace(/,/g, '')));
      if (values.length === 0) return { min: 0, max: 0 };
      if (values.length === 1) return { min: values[0], max: values[0] };
      return { min: Math.min(...values), max: Math.max(...values) };
    });

    return {
      min: Math.min(...ranges.map((r) => r.min)),
      max: Math.max(...ranges.map((r) => r.max)),
    };
  }, [allSalaries]);

  const getRangePercentages = (grossEstimate: string) => {
    const matches = grossEstimate.match(/\d[\d,]*/g);
    const values = (matches || []).map((value) => Number(value.replace(/,/g, '')));
    const minSalary = values.length === 0 ? 0 : Math.min(...values);
    const maxSalary = values.length === 0 ? 0 : Math.max(...values);
    const totalSpan = Math.max(grossRangeBounds.max - grossRangeBounds.min, 1);

    return {
      min: ((minSalary - grossRangeBounds.min) / totalSpan) * 100,
      max: ((maxSalary - grossRangeBounds.min) / totalSpan) * 100,
    };
  };

  const getSalaryTypeStyling = (type: string) => {
    if (type === 'Central') {
      return {
        badge: 'bg-blue-100 text-blue-800',
        bar: 'bg-blue-500',
      };
    }
    if (type === 'State') {
      return {
        badge: 'bg-green-100 text-green-800',
        bar: 'bg-emerald-500',
      };
    }
    return {
      badge: 'bg-amber-100 text-amber-800',
      bar: 'bg-amber-500',
    };
  };

  return (
    <>
      <Head>
        <title>Nursing Officer Salary in India – Central, State, NHM, CHO & In-Hand Estimates</title>
        <meta
          name="description"
          content="Detailed guide on Nursing Officer Salaries in India. Check AIIMS, RRB, ESIC, State Govt, and NHM/CHO pay scales, allowances, and in-hand salary estimates."
        />
      </Head>

      <section className="bg-primary-dark text-white py-16">
        <div className="container-custom">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Nursing Officer Salary in India <br />
                <span className="text-blue-300 text-2xl md:text-4xl">Central, State, NHM & CHO</span>
              </h1>
              <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                The definitive guide to nursing pay structures. Understand Basic Pay, Grade Pay, DA, HRA, and In-Hand
                salaries for permanent and contractual roles across India.
              </p>

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

            <div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm p-8 shadow-xl">
              <p className="text-blue-100 text-sm uppercase tracking-wide mb-3">Typical Salary Band</p>
              <p className="text-4xl md:text-5xl font-bold text-white mb-3">₹70,000 – ₹85,000/month</p>
              <p className="text-blue-100 mb-5">
                Typical gross salary for Central Govt Nursing Officers (Level 7, 7th CPC)
              </p>
              <Link
                to="/central-salaries"
                className="inline-flex items-center gap-2 font-semibold text-white hover:text-blue-200"
              >
                Explore exact breakdowns by institution <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mt-0 mb-2">Quick Salary Finder</h2>
              <p className="text-gray-600 mb-0">Browse salary structures by employer type</p>
            </div>

            <div className="flex flex-wrap bg-white p-1 rounded-lg border border-gray-200 shadow-sm gap-1">
              {['All', 'Central', 'State', 'NHM'].map((type) => (
                <button
                  key={type}
                  onClick={() => setFilterType(type)}
                  className={`px-4 py-2 rounded-md text-sm font-medium border transition-all duration-300 ${
                    filterType === type
                      ? 'bg-primary text-white border-primary shadow-sm'
                      : 'bg-white text-gray-600 border-gray-300 hover:border-primary hover:text-primary'
                  }`}
                >
                  {type} ({tabCounts[type as keyof typeof tabCounts]})
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSalaries.slice(0, 6).map((salary) => {
              const rangePercentage = getRangePercentages(salary.grossEstimate);
              const styling = getSalaryTypeStyling(salary.type);
              return (
                <div
                  key={salary.id}
                  className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-6"
                >
                  <div className="flex justify-between items-start mb-4 gap-3">
                    <span className={`px-2 py-1 text-xs font-semibold rounded ${styling.badge}`}>{salary.type}</span>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        salary.roleType === 'Permanent' ? 'bg-indigo-100 text-indigo-800' : 'bg-amber-100 text-amber-800'
                      }`}
                    >
                      {salary.roleType}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-2 mt-0 line-clamp-2">{salary.title}</h3>

                  <div className="mb-4">
                    <p className="text-xs text-gray-500 mb-1">Gross salary range visual</p>
                    <div className="relative h-2 rounded-full bg-gray-100 overflow-hidden">
                      <span
                        className={`absolute h-full rounded-full ${styling.bar}`}
                        style={{
                          left: `${rangePercentage.min}%`,
                          width: `${Math.max(rangePercentage.max - rangePercentage.min, 8)}%`,
                        }}
                      />
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Basic Pay</span>
                      <span className="font-mono font-medium">{salary.basicPay}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Gross Est.</span>
                      <span className="font-mono font-medium text-primary">{salary.grossEstimate}</span>
                    </div>
                    <div className="text-sm bg-gray-50 border border-gray-200 rounded p-2">
                      <span className="text-gray-600">In-hand estimate: </span>
                      <span className="font-mono font-semibold text-gray-900">{salary.inHandEstimate}</span>
                    </div>
                  </div>

                  <Link
                    to={
                      salary.type === 'Central'
                        ? `/central-salaries/${salary.slug}`
                        : salary.type === 'State'
                          ? `/state-salaries/${salary.slug}`
                          : `/nhm-cho-salaries`
                    }
                    className="block w-full text-center py-2 border border-primary text-primary rounded hover:bg-primary hover:text-white transition-colors text-sm font-medium"
                  >
                    View Breakdown
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container-custom max-w-4xl">
          <h2>Understanding Nursing Officer Salaries in India</h2>
          <p>
            The salary structure for Nursing Officers in India varies significantly based on the recruiting organization
            (Central vs. State), the nature of employment (Permanent vs. Contractual), and the posting location.
          </p>
          <p>
            <strong>Central Government roles</strong> (like AIIMS, RRB, ESIC) generally follow the{' '}
            <strong>7th Central Pay Commission (CPC)</strong> matrix, specifically <strong>Pay Level 7</strong>, which
            offers a high starting basic pay and substantial allowances.
          </p>
          <p>
            <strong>State Government roles</strong> follow their respective state pay commissions, which may differ in
            terms of Basic Pay and DA rates. <strong>NHM and CHO</strong> roles are typically contractual with
            consolidated pay or performance-based incentives.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="mt-0 text-lg">Gross vs. In-Hand Salary</h3>
              <p className="text-sm mb-4">
                Understand the flow from gross earnings to your final credited salary using this simple breakdown.
              </p>
              <div className="space-y-3 text-sm">
                <div className="rounded-md bg-blue-50 border border-blue-100 p-3 font-medium text-blue-900">
                  Gross Salary
                </div>
                <div className="text-center text-gray-400">↓</div>
                <div className="rounded-md bg-rose-50 border border-rose-100 p-3">
                  <p className="mb-1 font-medium text-rose-800">Deductions</p>
                  <p className="mb-0 text-rose-700">NPS contribution + Income Tax + other recoveries</p>
                </div>
                <div className="text-center text-gray-400">↓</div>
                <div className="rounded-md bg-emerald-50 border border-emerald-100 p-3 font-medium text-emerald-800">
                  In-Hand Salary
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="mt-0 text-lg">Salary Waterfall (Example)</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between rounded bg-white border border-gray-200 px-3 py-2">
                  <span>Basic Pay</span>
                  <strong>₹44,900</strong>
                </div>
                <div className="flex justify-between rounded bg-white border border-gray-200 px-3 py-2">
                  <span>+ DA</span>
                  <strong>₹22,450</strong>
                </div>
                <div className="flex justify-between rounded bg-white border border-gray-200 px-3 py-2">
                  <span>+ HRA</span>
                  <strong>₹12,123</strong>
                </div>
                <div className="flex justify-between rounded bg-white border border-gray-200 px-3 py-2">
                  <span>+ Nursing Allowance</span>
                  <strong>₹7,200</strong>
                </div>
                <div className="flex justify-between rounded bg-blue-50 border border-blue-200 px-3 py-2 font-semibold">
                  <span>= Gross</span>
                  <span>₹86,673</span>
                </div>
                <div className="flex justify-between rounded bg-rose-50 border border-rose-200 px-3 py-2">
                  <span>- NPS, IT</span>
                  <strong>₹12,000</strong>
                </div>
                <div className="flex justify-between rounded bg-emerald-50 border border-emerald-200 px-3 py-2 font-semibold">
                  <span>= In-Hand</span>
                  <span>₹74,673</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 rounded-lg border border-blue-100 bg-blue-50 px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="mb-0 text-sm text-blue-900 font-medium">Ready to earn this salary? Start your preparation.</p>
            <Link to="/courses" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
              Explore Preparation Options <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
