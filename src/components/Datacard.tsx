import React, { useState, useEffect } from "react";
import axios from "../utils/axiosInstance";

interface DataCardProps {
  
}

const DataCard: React.FC<DataCardProps> = ({}) => {
  
  const [revenue, setRevenue] = useState<number>(0);
  const [orders, setOrders] = useState<number>(0);
  const [customers, setCustomers] = useState<number>(0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("/users/stats");
      console.log(response.data);
      
      const data = response.data;

      if (typeof data.totalRevenue === "number" && typeof data.orders === "number" && typeof data.customers === "number") {

        console.log("Data fetched successfully");
        
        setRevenue(data.totalRevenue);
        setOrders(data.orders);
        setCustomers(data.customers);
      } else {
        console.log("Invalid data received from the backend");
      }
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  const calculatePercentage = (value: number, total: number): number => {
    return (value / total) * 100;
  };

  const getColorAndArrow = (percentage: number): { color: string; arrow: string } => {
    if (percentage > 0) {
      return { color: "green", arrow: "up" };
    } else if (percentage < 0) {
      return { color: "red", arrow: "down" };
    } else {
      return { color: "", arrow: "" };
    }
  };

  return (
    <div className="bg-white border border-gray-300 rounded-md p-4 flex justify-between">
      <div className="w-1/3 text-center">
        <h2 className="text-lg font-semibold mb-2">Total Revenue</h2>
        <div className="flex items-center justify-center">
          <span className="text-xl font-bold text-black-500">${revenue.toLocaleString()}</span>
          <span className={`ml-1 text-${getColorAndArrow(calculatePercentage(revenue, revenue)).color}-500 flex items-center text-sm`}>
            <svg className={`h-4 w-4 mr-1 bg-${getColorAndArrow(calculatePercentage(revenue, revenue)).color}-100 rounded-full p-1`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={getColorAndArrow(calculatePercentage(revenue, revenue)).arrow === "up" ? "M5 10l7-7m0 0l7 7m-7-7v18" : "M19 14l-7 7m0 0l-7-7m7 7V3"} />
            </svg>
            {calculatePercentage(revenue, revenue).toFixed(2)}%
          </span>
        </div>
      </div>

      <div className="w-1/3 border-l border-r border-gray-300 text-center">
        <h2 className="text-lg font-semibold mb-2">Orders</h2>
        <div className="flex items-center justify-center">
          <span className="text-xl font-bold text-black-500">{orders}</span>
          <span className={`ml-1 text-${getColorAndArrow(calculatePercentage(orders, orders)).color}-500 flex items-center text-sm`}>
            <svg className={`h-4 w-4 mr-1 bg-${getColorAndArrow(calculatePercentage(orders, orders)).color}-100 rounded-full p-1`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={getColorAndArrow(calculatePercentage(orders, orders)).arrow === "up" ? "M5 10l7-7m0 0l7 7m-7-7v18" : "M19 14l-7 7m0 0l-7-7m7 7V3"} />
            </svg>
            {calculatePercentage(orders, orders).toFixed(2)}%
          </span>
        </div>
      </div>

      <div className="w-1/3 text-center">
        <h2 className="text-lg font-semibold mb-2">Customers</h2>
        <div className="flex items-center justify-center">
          <span className="text-xl font-bold text-black-500">{customers}</span>
          <span className={`ml-1 text-${getColorAndArrow(calculatePercentage(customers, customers)).color}-500 flex items-center text-sm`}>
            <svg className={`h-4 w-4 mr-1 bg-${getColorAndArrow(calculatePercentage(customers, customers)).color}-100 rounded-full p-1`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={getColorAndArrow(calculatePercentage(customers, customers)).arrow === "up" ? "M5 10l7-7m0 0l7 7m-7-7v18" : "M19 14l-7 7m0 0l-7-7m7 7V3"} />
            </svg>
            {calculatePercentage(customers, customers).toFixed(2)}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default DataCard;



