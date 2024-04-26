import React, { useState } from "react";
import TopBar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Dashboard: React.FC = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar toggleSidebar={toggleSidebar} collapsed={sidebarCollapsed} />
      <div style={{ flexGrow: 1 }}>
        <TopBar />
        {/* Other dashboard content can go here */}
      </div>
    </div>
  );
};

export default Dashboard;
