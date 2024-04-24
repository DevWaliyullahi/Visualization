// import { FaUserCircle } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import { useState } from "react";

// export default function NavBar() {
//   const userData = useSelector((state: RootState) => state.user);
//   const [isRotate, setIsRotate] = useState(false);

//   const toggleProfileModal = () => {
//     setIsRotate(!isRotate);
//   };

//   return (
//     <>
//       <header className="flex justify-between items-center sticky top-0 bg-white z-50 w-full px-3 h-16 shadow">
//         <div className="flex items-center">
//           <div
//             className="flex items-center gap-2 text-black hover:text-orange transition-colors cursor-pointer"
//             onClick={toggleProfileModal}
//           >
//             {userData && userData?.profilePic?.trim() ? (
//               <div className="w-10 h-10 rounded-full overflow-hidden bg-red-500">
//                 <img
//                   src={userData?.profilePic}
//                   alt="User Profile"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             ) : (
//               <div className="w-10 h-10 flex items-center justify-center">
//                 <FaUserCircle className="text-gray-500 w-8 h-8" />
//               </div>
//             )}
//             <span className="text-sm">Hi, {userData?.name.split(" ")[0]}</span>
//           </div>
//         </div>
//       </header>
//     </>
//   );
// }
