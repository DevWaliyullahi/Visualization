// import {
//     AdminPageContainer,
//     AdminPageTitle,
//     AdminPageMain,
//     AdminDashboardPageStyle,
//   } from "../../AdminPagesComponents/MainAdminStyles/MainAdminStyles.Styled";
//   import { UserGreeting, AllDataCards } from "./AdminDashboardPage.Styled";
  
//   //COMPONENT IMPORTS - includes charts
//   import AdminHeader from "../../AdminPagesComponents/AdminHeader/AdminHeader";
//   import DataCard from "./AdminDashboardComponents/DataCard/DataCard";
//   //import MonthlyTrendLineChart from "../MonthlyTrend/LineChart";
//   import AdminSideBar from "../../../../components/adminSideBar/AdminSideBar";
//   import ProductSalesBarChart from "./AdminDashboardComponents/ProductSalesBarChart/ProductSalesBarChart";
//   import TenantSalesPieChart from "./AdminDashboardComponents/TenantSalesPieChart/TenantSalesPieChart";
//   //PACKAGE IMPORTS
//   import { useEffect, useState } from "react";
//   import { fetchAdminDataSummary } from "../../../../api/admin";
//   import { useSelector } from "react-redux";
//   import { RootState } from "../../../../app/store";
//   //INTERFACE DECLARATIONS
//   interface AdminDataSummary {
//     totalOrders: number;
//     totalTenants: number;
//     totalRevenue: number;
//     totalProductSold: number
//   }
  
//   const AdminDashboardPage = () => {
//     const [adminDataSummary, setAdminDataSummary] = useState<AdminDataSummary>({
//       totalOrders: 0,
//       totalTenants: 0,
//       totalRevenue: 0,
//       totalProductSold:0
//     });
  
//     useEffect(() => {
//       fetchAdminDataSummary().then((res) => {
//         if (res) {
//           setAdminDataSummary(res);
//         }
//       });
//     }, []);
  
//     const userData = useSelector((state: RootState) => state.user);
//     return (
//       <AdminPageContainer>
//         <AdminHeader />
//         <AdminSideBar />
//         <AdminPageMain>
//           <AdminDashboardPageStyle>
//             <AdminPageTitle>Dashboard</AdminPageTitle>
//             <UserGreeting>Welcome {userData.name}</UserGreeting>
  
//             <AllDataCards>
//               <DataCard
//                 cardTitle={"Total Products Sold"}
//                 displayedValue={adminDataSummary.totalProductSold.toString()}
//                 reportLink={"/admin/dashboard"}
//               />
  
//               <DataCard
//                 cardTitle={"Total Tenants"}
//                 displayedValue={adminDataSummary.totalTenants.toString()}
//                 reportLink={"/admin/dashboard/tenants-database"}
//               />
  
//               <DataCard
//                 cardTitle={"Total Revenue"}
//                 displayedValue={`₦${adminDataSummary.totalRevenue.toLocaleString()}`}
//                 reportLink={"/admin/dashboard/"}
//               />
//             </AllDataCards>
//             {/* <MonthlyTrendLineChart /> */}
//             <ProductSalesBarChart/>
//             <TenantSalesPieChart/>
//           </AdminDashboardPageStyle>
//         </AdminPageMain>
//       </AdminPageContainer>
//     );
//   };
  
//   export default AdminDashboardPage;