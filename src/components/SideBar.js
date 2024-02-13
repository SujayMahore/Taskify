import React from "react";
import { BiTask } from "react-icons/bi";
import { RiAccountCircleFill } from "react-icons/ri";
import { FaTasks } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";
import { IoSettingsOutline } from "react-icons/io5";
import { MdLogout } from "react-icons/md";

function SideBar() {
  const { pathname } = useLocation();
  const sideClasses =
    "flex items-center gap-3 ml-6 mt-6  py-1 text-lg  hover:text-fernGreen transition duration-2";
  return (
    <div className="flex flex-col bg-lightBlackOlive w-72 transition-all duration-300 p-3 font-barlow   text-gray-400 relative items-center justify-between">
      {/* Part 1 */}
      <div className="flex flex-col space-y-8">
        <div className="border-b-2 border-gray-600">
          <div className="flex  gap-3  pt-2 items-center   ">
            <div >
              <BiTask fontSize={22} />
            </div>
            <span className="text-lg font-bold">Task Manager</span>
          </div>
          <div className=" text-sm mb-2 ">Manage. Save. Accomplish</div>
        </div>
        
        <div className="">
          <div className={classNames(sideClasses )}>
            <div >
              <RiAccountCircleFill></RiAccountCircleFill>
            </div>
            <span>Account</span>
          </div>
          <div
            className={classNames(
              pathname === "/dashboard/tasks" ? "text-white" : "",
              sideClasses
            )}
          >
            <div>
              <FaTasks />
            </div>
            <span>
              <Link to="/dashboard/tasks">Tasks</Link>
            </span>
          </div>
        </div>
      </div>

      {/* Part-3 */}
      <div className="mb-3 w-full p-3 ">
        <div className={classNames(sideClasses)}>
          <div>
            <IoSettingsOutline></IoSettingsOutline>
          </div>
          <span >Settings</span>
        </div>

        <div>
          <div className={classNames(sideClasses)}>
            <div >
              <MdLogout></MdLogout>
            </div>
            <span>Log Out</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
