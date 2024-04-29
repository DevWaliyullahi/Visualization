import  { useState, useEffect } from "react";
import TopBar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import DataCard from "../components/Datacard";
import LineChart from "../components/Linechart";
import PieChart from "../components/Piechart";
import { useLocation } from "react-router-dom";
import OrderTable from "../components/OrderTable";
import axiosInstance from "../utils/axiosInstance";



interface Dashboard {
  customerName: string;
}

interface Category {
  name: string;
  count: number;
}
const Dashboard = () => {
  const location = useLocation();
  const { customerName } = location.state;
  
const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [orders, setOrders] = useState([]);
  // const [lineChartData, setLineChartData] = useState([]);
  const [categoryData, setCategoryData] = useState<Category[]>([]);


const toggleSidebar = () => {
setSidebarCollapsed(!sidebarCollapsed);
};

  useEffect(() => {
    const fetchData = async () => {
      try {
        // // Fetch data for LineChart
        // const lineChartResponse = await axiosInstance.get("/users/stats?timeperiod=${timePeriod}");
        // setLineChartData(lineChartResponse.data);

        // Fetch data for PieChart
        const categoryData = await axiosInstance.get("/users/category");
        const data = await categoryData.data;
        
        const categoryArray = Object.keys(data).map(key => ({
          name: key,
          count: data[key],
        }));
        setCategoryData(categoryArray);
        
        // Fetch data for OrderTable
        const ordersResponse = await axiosInstance.get("/users/orders");
        setOrders(ordersResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const categoryCounts = categoryData.map(category => category.count);

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
  <LineChart data={[]} />
</div>
<div style={{ background: "white", height: "364px", width: "435px", padding: "10px", borderRadius: "9px" }}>
  <PieChart data={categoryCounts} />
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

