import React from 'react';
import AnalyticsCard from './AnalyticsCard';


const analyticsData = [
    { title: 'Uploaded', count: 10, status: "uploaded" },
    { title: 'Approved', count: 5, status: "approved" },
    { title: 'Pending', count: 3, status: "pending" },
    { title: 'Rejected', count: 2, status: "rejected" },
  ];

const AnalyticsContainer: React.FC = () => {
  return (
    <div className="flex flex-1 justify-center md:justify-around  space-x-4 my-5 ">
      {analyticsData.map((data, index) => (
        <AnalyticsCard key={index} title={data.title} count={data.count} status={data.status} />
      ))}
    </div>
  );
};

export default AnalyticsContainer;