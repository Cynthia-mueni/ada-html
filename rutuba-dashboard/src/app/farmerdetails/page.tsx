import React from 'react';
import { Search } from 'lucide-react';

const FarmersDetails = () => {
  const farmers = [
    { name: 'Davis Maina', phoneNumber: '+254 707416386', deviceId: '001', location: 'Gitaru', status: 'Active' },
    { name: 'Mary Karioko', phoneNumber: '+254 707416386', deviceId: '002', location: 'Gitaru', status: 'Active' },
    { name: 'David Mutua', phoneNumber: '+254 707416386', deviceId: '003', location: 'Gitaru', status: 'Active' },
    { name: "Ng'endo Kakulu", phoneNumber: '+254 707416386', deviceId: '004', location: 'Gitaru', status: 'Active' },
    { name: 'Ann karioki', phoneNumber: '+254 707416386', deviceId: '005', location: 'Gitaru', status: 'Active' },
    { name: "Ng'endo Kakulu", phoneNumber: '+254 707416386', deviceId: '006', location: 'Gitaru', status: 'Active' },
  ];

  return (
    <div className="p-8 bg-gray-100 font-sans">
      <h1 className="text-4xl font-bold text-center mb-6">Farmers Details</h1>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-4 border-b-2 border-gray-300">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 border-2 border-gray-300 rounded-lg"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </div>
        <table className="w-full">
          <thead className="bg-gray-50 border-b-2 border-gray-300">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Phone number</th>
              <th className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Device Id</th>
              <th className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Location</th>
              <th className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y-2 divide-gray-200">
            {farmers.map((farmer, index) => (
              <tr key={index} className="font-medium">
                <td className="px-6 py-4 whitespace-nowrap">{farmer.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{farmer.phoneNumber}</td>
                <td className="px-6 py-4 whitespace-nowrap">{farmer.deviceId}</td>
                <td className="px-6 py-4 whitespace-nowrap">{farmer.location}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-4 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 border border-green-400">
                    {farmer.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center items-center mt-6">
        <button className="mx-1 w-8 h-8 flex items-center justify-center rounded-full border border-gray-300">&lt;</button>
        <button className="mx-1 w-8 h-8 flex items-center justify-center rounded-full bg-blue-500 text-white">1</button>
        <button className="mx-1 w-8 h-8 flex items-center justify-center rounded-full border border-gray-300">2</button>
        <button className="mx-1 w-8 h-8 flex items-center justify-center rounded-full border border-gray-300">3</button>
        <button className="mx-1 w-8 h-8 flex items-center justify-center rounded-full border border-gray-300">&gt;</button>
      </div>
    </div>
  );
};

export default FarmersDetails;