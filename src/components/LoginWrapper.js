import React, { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import { MdOutlineSettingsBackupRestore } from "react-icons/md";

const LoginWrapper = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <div className="flex w-full bg-slate-300  h-full items-center justify-center font-barlow">
       
     
      <div className="p-10 w-[600px] md:flex md:flex-row  bg-gray-200 rounded-md shadow-lg backdrop-blur  ">
        <div className="w-1/2 hidden md:block  " >
        {/* bg-gradient-to-r from-green-200 via-blue-200 to-red-300 blur-sm */}
           
            <h1 className="font-bold text-4xl ">Welcome To Taskify</h1>
            <div className=" w-32 h-2 bg-green-300 blur  rounded-full light" >
            
            

            </div>
            <p className="text-xl transition-all duration-300 ">{`Sign ${toggle ? "In":"Up"} To Manage your tasks`}</p>
            
      
           
        </div>
       <div className="login-wrapper flex flex-col md:w-1/2">
       <div className=" h-full flex flex-row items-center justify-center  bg-gray-100 rounded-md shadow-lg p-1  mb-3">
          <div className="w-1/2 text-center">
            <button  onClick={() => setToggle(true)} className={` rounded-md w-full ${toggle && "bg-gray-400 border-2 "} `} >Login</button>
          </div>
          <div className="w-1/2 text-center">
            <button onClick={() => setToggle(false)} className={` rounded-md w-full ${!toggle && "bg-gray-400 border-2  "}  `}>Register</button>
          </div>
        </div>
        {toggle ? <Login></Login> : <SignUp></SignUp>}

       </div>

       
      </div>
      
    </div>
  );
};

export default LoginWrapper;
