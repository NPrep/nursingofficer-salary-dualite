import React from 'react';
import { SalaryComponent } from '../data/salaryData';

interface SalaryTableProps {
  data: SalaryComponent[];
  title?: string;
}

const SalaryTable: React.FC<SalaryTableProps> = ({ data, title = "Monthly Salary Breakdown" }) => {
  const total = data.reduce((acc, curr) => {
    // Simple parsing to sum up roughly for display if needed, 
    // but usually we just display the rows.
    return acc; 
  }, 0);

  return (
    <div className="my-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-3">{title}</h3>
      <div className="salary-table-container">
        <table className="salary-table">
          <thead>
            <tr>
              <th>Component</th>
              <th>Amount (Approx)</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td className="font-medium text-gray-900">{row.component}</td>
                <td className="font-mono text-primary-dark">{row.amount}</td>
                <td className="text-gray-500">{row.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SalaryTable;
