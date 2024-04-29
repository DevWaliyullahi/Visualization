import React, { useState } from "react";
import { format } from "date-fns";

interface Order {
  customerName: string;
  productName: string;
  productCategory: string;
  price: number;
  orderDate: string;
  id: number;
}

const OrderTable: React.FC<{ orders: Order[] }> = ({ orders }) => {
  const rowsPerPage = 4; 
  const [currentPage, setCurrentPage] = useState(1);

  // Calculating the index of the first and last order to display on the current page
  const indexOfLastOrder = currentPage * rowsPerPage;
  const indexOfFirstOrder = indexOfLastOrder - rowsPerPage;
  const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);

  // Function to handle page change
  const onPageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="w-full overflow-auto">
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">Orders</h1>
      <table className="w-full text-sm">
        <thead>
          <tr>
            <th className="border px-4 py-2">S/N</th>
            <th className="border px-4 py-2">Customer Name</th>
            <th className="border px-4 py-2">Product Name</th>
            <th className="border px-4 py-2">Product Category</th>
            <th className="border px-4 py-2">Order Date</th>
            <th className="border px-4 py-2">Price</th>
          </tr>
        </thead>
        <tbody>
          {currentOrders.map((order, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{indexOfFirstOrder + index + 1}</td>
              <td className="border px-4 py-2">{order.customerName}</td>
              <td className="border px-4 py-2">{order.productName}</td>
              <td className="border px-4 py-2">{order.productCategory}</td>
              <td className="border px-4 py-2">{format(new Date(order.orderDate), "yyyy-MM-dd")}</td>
              <td className="border px-4 py-2">{order.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-200 text-gray-600 rounded mr-2"
        >
          Previous
        </button>
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={indexOfLastOrder >= orders.length}
          className="px-4 py-2 bg-gray-200 text-gray-600 rounded ml-10"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default OrderTable;



