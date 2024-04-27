import React from 'react';
import { FaBars, FaBriefcase, FaStar, FaCog, FaSignOutAlt, FaChartBar, FaUsers, FaBox } from 'react-icons/fa';
import { AiOutlineThunderbolt } from 'react-icons/ai';

interface SidebarProps {
    toggleSidebar: () => void;
    collapsed: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ toggleSidebar, collapsed }) => {
    return (
        <div className={`bg-white-100 text-black flex flex-col h-screen ${collapsed ? 'w-13' : 'w-30'}`} style={{ overflowY: 'hidden', position: 'fixed', top: 0, left: 0 }}>
            <div className="sidebar-header flex items-center justify-between py-2 px-4">
                <div className="sidebar-toggle cursor-pointer" onClick={toggleSidebar}>
                    <FaBars />
                </div>
                {!collapsed && (
                    <div className="flex items-center">
                        <div style={{ backgroundColor: '#0000FF', borderRadius: '4px', padding: '4px', marginRight: '5px' }}>
                            <AiOutlineThunderbolt style={{ color: '#FFFFFF', width: '18px', height: '15px' }} />
                        </div>
                        <div>
                            <span style={{ fontWeight: 'bold', fontSize: '18px' }}>XYZ Shop</span>
                        </div>
                    </div>
                )}
                {collapsed && (
                    <div className="flex flex-col items-center">
                        <div style={{ backgroundColor: '#0000FF', borderRadius: '3px', padding: '4px', marginBottom: '5px' }}>
                            <AiOutlineThunderbolt style={{ color: '#FFFFFF', width: '15px', height: '13px' }} />
                        </div>
                        <span style={{ fontWeight: 'bold', fontSize: '12px' }}>XYZ Shop</span>
                    </div>
                )}
            </div>
            <div className="flex-1 flex flex-col justify-between mt-20">
                <div className="py-4">
                    <div className="overview-item flex items-center px-4 mb-6">
                        <FaChartBar className="mr-2" />
                        {!collapsed && <span>Overview</span>}
                    </div>
                    <div className="overview-item flex items-center px-4 mb-6">
                        <FaBriefcase className="mr-2" />
                        {!collapsed && <span>Sales</span>}
                    </div>
                    <div className="overview-item flex items-center px-4 mb-6">
                        <FaUsers className="mr-2" />
                        {!collapsed && <span>Customers</span>}
                    </div>
                    <div className="overview-item flex items-center px-4 mb-6">
                        <FaBox className="mr-2" />
                        {!collapsed && <span>Inventory</span>}
                    </div>
                    <div className="overview-item flex items-center px-4 mb-6">
                        <FaStar className="mr-2" />
                        {!collapsed && <span>Profit/Loss</span>}
                    </div>
                </div>
                <div className="py-4">
                    <div className="menu-item flex items-center px-4 mb-4">
                        <FaCog className="mr-2" />
                        {!collapsed && <span>Settings</span>}
                    </div>
                    <div className="menu-item flex items-center px-4 mb-4">
                        <FaSignOutAlt className="mr-2" />
                        {!collapsed && <span>Logout</span>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
