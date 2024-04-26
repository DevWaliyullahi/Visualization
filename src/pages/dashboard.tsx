// import React, { useState } from "react";
// import TopBar from "../components/Navbar";
// import Sidebar from "../components/Sidebar";

// const Dashboard: React.FC = () => {
//   const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

//   const toggleSidebar = () => {
//     setSidebarCollapsed(!sidebarCollapsed);
//   };

//   return (
//     <div style={{ display: 'flex' }}>
//       <Sidebar toggleSidebar={toggleSidebar} collapsed={sidebarCollapsed} />
//       <div style={{ flexGrow: 1, marginLeft: sidebarCollapsed ? '6.45rem' : '10.1rem' }}>
//         <TopBar />
//         <div >
//           <div className="p-4">
//             <div className="flex justify-between items-center mb-4">
//               <div>
//                 <h1 className="text-2xl font-semibold text-gray-800">
//                   Welcome, Mathew
//                 </h1>
//                 <p className="text-gray-600">
//                   {new Date().toLocaleDateString("en-US", {
//                     weekday: "long",
//                     day: "numeric",
//                     month: "long",
//                     year: "numeric",
//                   })}
//                 </p>
//               </div>
//               <div>
//                 <select className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none">
//                   <option>This Month</option>
//                   <option>Last Month</option>
//                   <option>This Year</option>
//                   <option>Last Year</option>
//                 </select>
//               </div>
//             </div>
//             {/* Other dashboard content can go here */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import  { useState } from "react";
import TopBar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useLocation } from "react-router-dom";


  // Your Dashboard component code here



interface Dashboard {
  customerName: string;
}
const Dashboard = () => {
  const location = useLocation();
  const { customerName } = location.state;
  
const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

const toggleSidebar = () => {
setSidebarCollapsed(!sidebarCollapsed);
};

return (
<div style={{ display: 'flex' }}>
<Sidebar toggleSidebar={toggleSidebar} collapsed={sidebarCollapsed} />
<div style={{ flexGrow: 1, marginLeft: sidebarCollapsed ? '6.45rem' : '10.1rem' }}>
<TopBar />
<div >
<div className="p-4">
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
{/* Other dashboard content can go here */}
</div>
</div>
</div>
</div>
);
};

export default Dashboard;