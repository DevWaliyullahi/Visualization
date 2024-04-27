// OrderTable.tsx
import React from "react";

interface Order {
  customerName: string;
  productName: string;
  productCategory: string;
  price: string;
  orderDate: string;
}

const OrderTable: React.FC<{ orders: Order[] }> = ({ orders }) => {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">Orders</h1>
      <table className="w-full">
        <thead>
          <tr>
            <th className="border px-4 py-2">Customer Name</th>
            <th className="border px-4 py-2">Product Name</th>
            <th className="border px-4 py-2">Product Category</th>
            <th className="border px-4 py-2">Price</th>
            <th className="border px-4 py-2">Order Date</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{order.customerName}</td>
              <td className="border px-4 py-2">{order.productName}</td>
              <td className="border px-4 py-2">{order.productCategory}</td>
              <td className="border px-4 py-2">{order.price}</td>
              <td className="border px-4 py-2">{order.orderDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
