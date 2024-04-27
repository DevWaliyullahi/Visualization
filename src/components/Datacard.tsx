import React from "react";

interface DataCardProps {
  // Define props here if needed
}

const DataCard: React.FC<DataCardProps> = ({ /* Props here if needed */ }) => {
  return (
    <div className="bg-white border border-gray-300 rounded-md p-4 flex justify-between">
      <div className="w-1/3 text-center">
        <h2 className="text-lg font-semibold mb-2">Total Revenue</h2>
        <div className="flex items-center justify-center">
          <span className="text-xl font-bold text-black-500">$40,000</span>
          <span className="ml-1 text-green-500 flex items-center text-sm">
            <svg className="h-4 w-4 mr-1 bg-green-100 rounded-full p-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18"/>
              
            </svg>
            50%
          </span>
        </div>
      </div>
      
      <div className="w-1/3 border-l border-r border-gray-300 text-center">
        <h2 className="text-lg font-semibold mb-2">Orders</h2>
        <div className="flex items-center justify-center">
          <span className="text-xl font-bold text-black-500">40,000</span>
          <span className="ml-1 text-red-500 flex items-center text-sm">
            <svg className="h-4 w-4 mr-1 bg-red-100 rounded-full p-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
            9%
          </span>
        </div>
      </div>

      <div className="w-1/3 text-center">
        <h2 className="text-lg font-semibold mb-2">Customers</h2>
        <div className="flex items-center justify-center">
          <span className="text-xl font-bold text-black-500">40</span>
          <span className="ml-1 text-red-500 flex items-center text-sm">
            <svg className="h-4 w-4 mr-1 bg-red-100 rounded-full p-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
            59%
          </span>
        </div>
      </div>
    </div>
  );
};

export default DataCard;
