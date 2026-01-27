export interface SalaryComponent {
  component: string;
  amount: string;
  notes: string;
}

export interface SalaryProfile {
  id: string;
  title: string;
  type: 'Central' | 'State' | 'NHM' | 'CHO';
  state?: string;
  roleType: 'Permanent' | 'Contractual';
  payLevel: string;
  basicPay: string;
  grossEstimate: string;
  inHandEstimate: string;
  breakdown: SalaryComponent[];
  description: string;
  allowances: string[];
  slug: string;
}

export const centralSalaries: SalaryProfile[] = [
  {
    id: 'c1',
    title: 'AIIMS NORCET Nursing Officer',
    type: 'Central',
    roleType: 'Permanent',
    payLevel: 'Level 7 (7th CPC)',
    basicPay: '₹44,900',
    grossEstimate: '₹75,000 - ₹85,000',
    inHandEstimate: '₹68,000 - ₹78,000',
    slug: 'aiims-norcet-nursing-officer-salary',
    description: 'Nursing Officers at AIIMS are recruited via NORCET. They receive one of the highest pay packages in the Indian nursing sector with central government allowances.',
    allowances: [
      'Dearness Allowance (DA)',
      'House Rent Allowance (HRA) - X, Y, Z Class Cities',
      'Nursing Allowance',
      'Dress Allowance',
      'Transport Allowance (TA)'
    ],
    breakdown: [
      { component: 'Basic Pay', amount: '₹44,900', notes: 'Level 7, Cell 1' },
      { component: 'DA (50% est.)', amount: '₹22,450', notes: 'Varies with inflation' },
      { component: 'HRA (27% - X City)', amount: '₹12,123', notes: 'Max for Delhi/Metro' },
      { component: 'Nursing Allowance', amount: '₹7,200', notes: 'Fixed' },
      { component: 'Dress Allowance', amount: '₹1,800', notes: 'Paid monthly or annually' },
      { component: 'TA', amount: '₹4,000+', notes: 'Depends on city' },
    ]
  },
  {
    id: 'c2',
    title: 'RRB Nursing Superintendent',
    type: 'Central',
    roleType: 'Permanent',
    payLevel: 'Level 7 (7th CPC)',
    basicPay: '₹44,900',
    grossEstimate: '₹70,000 - ₹80,000',
    inHandEstimate: '₹62,000 - ₹72,000',
    slug: 'rrb-nursing-superintendent-salary',
    description: 'Railway Recruitment Board (RRB) recruits Nursing Superintendents for Indian Railways hospitals. Excellent perks including railway passes.',
    allowances: ['DA', 'HRA', 'Transport Allowance', 'Medical Benefits', 'Railway Pass'],
    breakdown: [
      { component: 'Basic Pay', amount: '₹44,900', notes: 'Level 7' },
      { component: 'DA', amount: '₹22,450', notes: 'Current Rate' },
      { component: 'HRA', amount: '₹8,000 - ₹12,000', notes: 'Based on posting' },
      { component: 'Other Allowances', amount: '₹5,000', notes: 'TA, etc.' },
    ]
  },
  {
    id: 'c3',
    title: 'ESIC Nursing Officer',
    type: 'Central',
    roleType: 'Permanent',
    payLevel: 'Level 7 (7th CPC)',
    basicPay: '₹44,900',
    grossEstimate: '₹72,000 - ₹82,000',
    inHandEstimate: '₹64,000 - ₹74,000',
    slug: 'esic-nursing-officer-salary',
    description: 'Employees State Insurance Corporation (ESIC) offers a central government pay scale with additional ESIC-specific benefits.',
    allowances: ['DA', 'HRA', 'Nursing Allowance', 'Wash Allowance', 'Transport Allowance'],
    breakdown: [
      { component: 'Basic Pay', amount: '₹44,900', notes: 'Level 7' },
      { component: 'DA', amount: '₹22,450', notes: 'Variable' },
      { component: 'Nursing Allowance', amount: '₹7,200', notes: 'Fixed' },
      { component: 'HRA', amount: '₹12,123', notes: 'Max Tier' },
    ]
  }
];

export const stateSalaries: SalaryProfile[] = [
  {
    id: 's1',
    title: 'UPPSC Staff Nurse',
    type: 'State',
    state: 'Uttar Pradesh',
    roleType: 'Permanent',
    payLevel: 'Level 7 (State Matrix)',
    basicPay: '₹44,900',
    grossEstimate: '₹65,000 - ₹75,000',
    inHandEstimate: '₹58,000 - ₹68,000',
    slug: 'up-staff-nurse-salary',
    description: 'Uttar Pradesh Public Service Commission (UPPSC) recruits staff nurses for state medical colleges and hospitals.',
    allowances: ['DA (State Govt rates)', 'HRA', 'Medical Allowance'],
    breakdown: [
      { component: 'Basic Pay', amount: '₹44,900', notes: 'Level 7' },
      { component: 'DA', amount: '₹20,000+', notes: 'State DA rate' },
      { component: 'HRA', amount: '₹5,000+', notes: 'City based' },
    ]
  },
  {
    id: 's2',
    title: 'Rajasthan Staff Nurse (Grade II)',
    type: 'State',
    state: 'Rajasthan',
    roleType: 'Permanent',
    payLevel: 'L-11 (State Matrix)',
    basicPay: '₹37,800',
    grossEstimate: '₹55,000 - ₹65,000',
    inHandEstimate: '₹48,000 - ₹58,000',
    slug: 'rajasthan-staff-nurse-salary',
    description: 'Recruited via RUHS or state commission. Note: Rajasthan often has a probation period with fixed pay before full scale applies.',
    allowances: ['DA', 'HRA', 'Mess Allowance'],
    breakdown: [
      { component: 'Basic Pay', amount: '₹37,800', notes: 'After Probation' },
      { component: 'DA', amount: '₹18,000+', notes: 'State Rate' },
      { component: 'HRA', amount: '₹3,000+', notes: 'Varies' },
    ]
  },
  {
    id: 's3',
    title: 'Kerala Staff Nurse',
    type: 'State',
    state: 'Kerala',
    roleType: 'Permanent',
    payLevel: 'Scale 39300-83000',
    basicPay: '₹39,300',
    grossEstimate: '₹58,000 - ₹68,000',
    inHandEstimate: '₹52,000 - ₹60,000',
    slug: 'kerala-staff-nurse-salary',
    description: 'Kerala PSC recruits staff nurses for DHS and DME. The pay scale is revised periodically by state pay commissions.',
    allowances: ['DA', 'HRA', 'Risk Allowance'],
    breakdown: [
      { component: 'Basic Pay', amount: '₹39,300', notes: 'Starting' },
      { component: 'DA', amount: '₹15,000+', notes: 'State Rate' },
      { component: 'HRA', amount: '₹2,500+', notes: 'Based on location' },
    ]
  }
];

export const nhmSalaries: SalaryProfile[] = [
  {
    id: 'n1',
    title: 'NHM CHO (Community Health Officer)',
    type: 'CHO',
    state: 'All India (Varies)',
    roleType: 'Contractual',
    payLevel: 'Consolidated + Incentive',
    basicPay: '₹25,000 (Fixed)',
    grossEstimate: '₹40,000 (Max)',
    inHandEstimate: '₹35,000 - ₹40,000',
    slug: 'nhm-cho-salary-overview',
    description: 'Community Health Officers (CHOs) under Ayushman Bharat usually get a fixed honorarium plus performance-based incentives (PBI).',
    allowances: ['Performance Based Incentive (PBI) up to ₹15,000'],
    breakdown: [
      { component: 'Fixed Honorarium', amount: '₹25,000', notes: 'Base Pay' },
      { component: 'Incentive (PBI)', amount: '₹15,000', notes: 'Max achievable' },
    ]
  },
  {
    id: 'n2',
    title: 'NHM Staff Nurse',
    type: 'NHM',
    state: 'Madhya Pradesh',
    roleType: 'Contractual',
    payLevel: 'Fixed Consolidated',
    basicPay: '₹20,000',
    grossEstimate: '₹20,000',
    inHandEstimate: '₹18,000 (approx)',
    slug: 'mp-nhm-staff-nurse',
    description: 'Contractual staff nurses under National Health Mission usually receive a fixed consolidated monthly salary without standard allowances like DA/HRA.',
    allowances: ['None usually'],
    breakdown: [
      { component: 'Consolidated Pay', amount: '₹20,000', notes: 'Fixed' },
    ]
  }
];

export const courses = [
  {
    id: 1,
    title: 'Test Series',
    provider: 'NPrep',
    description: 'Comprehensive question bank and test series for extensive practice.',
    focus: 'Practice & Mocks',
    link: 'https://qtestseries.nprep.in',
    features: [
      '30,000+ Questions - QBank (Topic Wise)',
      'Each Question with Explanation',
      'Subject Wise Tests',
      'Daily Test Series',
      'Previous Year Question Papers',
      'IBQs, Clinical Scenario Questions'
    ]
  },
  {
    id: 2,
    title: 'Rapid Revision 2.0',
    provider: 'NPrep',
    description: 'Fast-track your preparation with high-yield content and revision modules.',
    focus: 'Revision',
    link: 'https://rapid.nprep.in',
    features: [
      'NORCET/ CHO/ BTSC/ KGMU/ GMCH - All Covered',
      'Complete Nursing Syllabus in 100 Hours',
      'Previous Year Papers - with Explanations',
      'Daily Test Series',
      '30,000+ Questions - QBank (Topic Wise)',
      'Subject Wise Tests'
    ]
  },
  {
    id: 3,
    title: 'GOLD Batch',
    provider: 'NPrep',
    description: 'The ultimate foundation to advanced batch covering everything you need.',
    focus: 'Full Course',
    link: 'https://gold.nprep.in',
    features: [
      'NORCET 10 & 11/ CHO / BTSC/ KGMU/ GMCH - All Covered',
      '900 Hours - Basic to Advanced Theory (with Clinicals)',
      '100 Hrs - Rapid Revision 2.0 Included',
      '30,000 Questions - QBank (Topic Wise)',
      'Daily Test Series',
      'Previous Year Papers',
      'Subject Wise Papers'
    ]
  }
];
