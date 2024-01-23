import React from 'react';
import { LandRecord } from './type';

interface LandRecordsProps {
  records: LandRecord[];
}

const getStatusStyles = (status: string) => {
    switch (status) {
      case 'Approved':
        return 'text-green-600 ';
      case 'Pending':
        return 'text-yellow-600';
      case 'Rejected':
        return 'text-red-600 ';
      default:
        return 'text-gray-600';
    }
  };

const LandRecords: React.FC<LandRecordsProps> = ({ records }) => {
  return (
    <div className="mt-8 text-sm">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg ">Recent Land Records</h2>
        <a href="#" className="text-blue-500">See More</a>
      </div>
      <div className="flex justify-between">
        <div className="w-full">
          <table className="min-w-full border bg-white">
            <thead>
              <tr>
                <th className="border p-2">ID</th>
                <th className="border p-2">Land Owner</th>
                <th className="border p-2">Land Location</th>
                <th className="border p-2">Date of Record</th>
                <th className="border p-2">Record Status</th>
              </tr>
            </thead>
            <tbody>
              {records.map(record => (
                <tr key={record.id}>
                  <td className="border p-2">{record.id}</td>
                  <td className="border p-2">{record.landOwner}</td>
                  <td className="border p-2">{record.landLocation}</td>
                  <td className="border p-2">{record.dateOfRecord}</td>
                  <td className={`border py-2 px-4 ${getStatusStyles(record.recordStatus)}`}>
                    {record.recordStatus}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LandRecords;
