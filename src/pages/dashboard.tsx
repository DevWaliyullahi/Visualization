import  { useState } from "react";
import TopBar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import DataCard from "../components/Datacard";
import LineChart from "../components/Linechart";
import PieChart from "../components/Piechart";
import { useLocation } from "react-router-dom";
import OrderTable from "../components/OrderTable";



interface Dashboard {
  customerName: string;
}
const Dashboard = () => {
  const location = useLocation();
  const { customerName } = location.state;
  
const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
const data = [30, 20, 15, 10, 25]; // Sample data for the pie chart


const toggleSidebar = () => {
setSidebarCollapsed(!sidebarCollapsed);
};

// Sample data for the table
  const orders = [
    {
      customerName: "John Doe",
      productName: "Product A",
      productCategory: "Horror",
      price: "$50",
      orderDate: "2024-04-27",
    },
    {
      customerName: "Jane Smith",
      productName: "Product B",
      productCategory: "Documentary",
      price: "$70",
      orderDate: "2024-04-28",
    },
    {
      customerName: "Alice Johnson",
      productName: "Product C",
      productCategory: "Sci-Fi",
      price: "$40",
      orderDate: "2024-04-29",
    },
    {
      customerName: "Bob Brown",
      productName: "Product D",
      productCategory: "Comedy",
      price: "$60",
      orderDate: "2024-04-30",
    },
    {
      customerName: "Charlie Davis",
      productName: "Product E",
      productCategory: "Drama",
      price: "$80",
      orderDate: "2024-05-01",
    },
  ];

return (
<div style={{ display: 'flex', height: '100vh', position: 'relative' }}>
<Sidebar toggleSidebar={toggleSidebar} collapsed={sidebarCollapsed} />
<div style={{ flexGrow: 1, marginLeft: sidebarCollapsed ? '6.45rem' : '10.1rem', overflow: 'auto', zIndex: 1000 }}>
<TopBar />
<div style={{ padding: '1rem', overflow: 'auto', position: 'relative' }}>
<div className="p-4 bg-gray-200">
<div className="flex justify-between items-center mb-4">
<div>
<h1 className="text-2xl font-semibold text-gray-800">
Welcome, {customerName}
</h1>
<p className="text-gray-600">
{new Date().toLocaleDateString("en-US", {
weekday: "long",
day: "numeric",
month: "long",
year: "numeric",
})}
</p>
</div>
<div>
<select className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none">
<option>This Month</option>
<option>Last Month</option>
<option>This Year</option>
<option>Last Year</option>
</select>
</div>
</div>
<div className="">
<DataCard />
</div>
<div style={{ display: "flex",  marginTop: "5%"}}>
<div style={{ background: "white", width: "662px", height: "364px", padding: "10px", marginRight: "4%", borderRadius: "9px" }}>
  <LineChart data={[
    { date: "Jan", value: 10 },
    { date: "Feb", value: 20 },
    { date: "Mar", value: 30 },
    { date: "Apr", value: 40 },
    { date: "May", value: 45 },
    { date: "Jun", value: 35 },
    { date: "Jul", value: 50 },
    { date: "Aug", value: 20 },
    { date: "Sep", value: 10 },
    { date: "Oct", value: 10 },
    { date: "Nov", value: 40 },
    { date: "Dec", value: 10 },
  ]} />
</div>
<div style={{ background: "white", height: "364px", width: "435px", padding: "10px", borderRadius: "9px" }}>
  <PieChart data={data} />
</div>
</div>
<div style={{ background: "white", width: "985px", height: "364px", padding: "10px", marginRight: "4%", marginTop: "6%", borderRadius: "9px", display: "flex" }}>
<OrderTable orders={orders} />
</div>
</div>
</div>
</div>
</div>
);
};

export default Dashboard;



