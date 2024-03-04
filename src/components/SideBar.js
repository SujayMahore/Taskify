import React, { useState } from "react";
import { BiTask } from "react-icons/bi";
import { RiAccountCircleFill } from "react-icons/ri";
import { FaTasks } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";
import { IoSettingsOutline } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import { GoHome } from "react-icons/go";
import { RxDoubleArrowLeft } from "react-icons/rx";


import logo from "../assets/logoipsum-247.svg"

const SideBar = () => {
  const [open , setOpen] = useState(true)
  const [activeIdx,setActiveIdx] = useState(false)
  
  const Items=[
    {title:"Home" , tag:<GoHome ></GoHome>},
    {title:"Account",tag:<RiAccountCircleFill ></RiAccountCircleFill>},
    {title:<Link to="/dashboard/tasks">Task</Link>,tag:<BiTask ></BiTask> },
    {title:"Settings", tag:<IoSettingsOutline ></IoSettingsOutline> , gap:true},
    {title:"Log Out",tag:<MdLogout></MdLogout>}
  ]
 
 
  return (
    <div  className={` font-barlow relative block max-sm:idden h-screen ${open ? " w-56" : " w-12"} bg-lightBlackOlive transition-all duration-300  `}>
      <div className={`absolute cursor-pointer -right-3 top-8 w-7 
             ${!open && "rotate-180 "}`}
          onClick={() => setOpen(!open)}>
        <RxDoubleArrowLeft color="gray" size={22}></RxDoubleArrowLeft>
      </div>
      {/* Menu Items  */}
      <div className="mt-7 ml-3  "  >
        {/* Item-1 Logo */}
        <div className="flex items-center  gap-x-4 text-white">
          <img src={logo} className=" w-6" ></img>
          <h1 className={`text-xl duration-200 ${!open && "scale-0"}`} >Taskify</h1>
        </div>
        <div className="border-b border-gray-600 mt-5 mr-2"></div>

        {/* Item - 2 */}
        <ul className="mt-10">
          {
            Items.map( (item , idx) =>(
              <li onClick={()=>setActiveIdx(idx)}  key={idx} className={`flex items-center  text-lg gap-2  pt-2 ${item.gap ? " mt-72" : "mt-2" }   ${activeIdx === idx  ? "text-white" : "text-gray-400"}  hover:text-fernGreen`}>
                <div>{item.tag}</div> 
                
                <h1 className={`${!open && "scale-0 "} text-nowrap text-base duration-300 `}>{item.title}</h1>
                
              </li>
            ))
          }
        </ul>

        

        
    

      </div>


    </div>
  )
}

export default SideBar

// function SideBar() {
//   const { pathname } = useLocation();
//   const sideClasses =
//     "flex items-center gap-3  w-32 mt-6  py-1 text-lg  hover:text-fernGreen transition duration-2  ";
//   return (
//     <div className="flex flex-col bg-lightBlackOlive w-28 md:w-64  transition-all duration-300 p-3 font-barlow   text-gray-400 relative items-center justify-between">
//       {/* Part 1 */}
//       <div className="flex flex-col space-y-8">
//         <div className="border-b-2 border-gray-600">
//           <div className="flex  gap-3  pt-2 items-center justify-center   ">
//             <div className="w-6">
//               <img src={logo}></img>
//             </div>
//             <span className="text-lg font-bold">Taskify</span>
//           </div>
//           <div className=" text-sm mb-2 mt-2 ">Manage. Save. Accomplish</div>
//         </div>
        
//         <div className="flex flex-col items-center  ">
//           <div className={classNames(sideClasses )}>
//             <div >
//               <GoHome></GoHome>
//             </div>
//             <span>Home</span>
//           </div>
//           <div className={classNames(sideClasses )}>
//             <div >
//               <RiAccountCircleFill></RiAccountCircleFill>
//             </div>
//             <span>Account</span>
//           </div>
//           <div
//             className={classNames(
//               pathname === "/dashboard/tasks" ? "text-white" : "",
//               sideClasses
//             )}
//           >
//             <div>
//               <FaTasks />
//             </div>
//             <span>
//               <Link to="/dashboard/tasks">Tasks</Link>
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* Part-3 */}
//       <div className="mb-4 flex flex-col items-center">
//         <div className={classNames(sideClasses)}>
//           <div >
//             <IoSettingsOutline></IoSettingsOutline>
//           </div>
//           <span >Settings</span>
//         </div>

//         <div>
//           <div className={classNames(sideClasses)}>
//             <div >
//               <MdLogout></MdLogout>
//             </div>
//             <span>Log Out</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SideBar;
