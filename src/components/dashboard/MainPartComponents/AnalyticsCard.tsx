// src/components/AnalyticsCard.tsx

import React from 'react';

interface AnalyticsCardProps {
  title: string;
  count: number;
  status: String;
}

const AnalyticsCard: React.FC<AnalyticsCardProps> = ({ title, count, status }) => {
  const statusClasses = {
    uploaded: 'bg-blue-200 text-blue-800',
    approved: 'bg-green-200 text-green-800',
    pending: 'bg-yellow-200 text-yellow-800',
    rejected: 'bg-red-200 text-red-800',
  };

  return (
    // @ts-ignore
    <div className={`analytics-card p-2 rounded-lg shadow-md w-2/5 ${statusClasses[status]}`}>
      <p className="text-5xl font-bold">{count}</p>
      <h3 className="text-sm font-semibold">{title}</h3>
    </div>
  );
};

export default AnalyticsCard;
