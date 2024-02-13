import React, { useState } from 'react'
import { Outlet ,useOutletContext} from 'react-router-dom'
import bgImage from "../assets/bg-picture.jpg"
import whiteBg from "../assets/white-painted-wall-texture-background.jpg"
import blackBg from "../assets/istockphoto-1455496532-1024x1024.jpg"
import { CiCalendarDate } from "react-icons/ci";
import Tasks from './Tasks'
import { TbProgressCheck } from "react-icons/tb";
import { IoMdAlert } from "react-icons/io";
import { IoIosCheckmarkCircle } from "react-icons/io";



const Board = () => {
  const currentDate = new Date().toLocaleDateString('en-US',{
    weekday:'long',
    year:'numeric',
    month:'long',
    day:'numeric'
  })
  


  return (
    // <div className='w-full h-full bg-white overflow-x-auto overflow-y-auto'>
    //   <div className='relative h-[30vh]'>
    //   <img className='absolute inset-0 object-cover w-full z-0 h-[30vh] ' src={whiteBg}></img>
    //   <div className='absolute bottom-0 mx-6 text-2xl font-bold'>Your Tasks</div>
    //   <div className='absolute bottom-0 right-0 text-sm flex flex-row'> <span > <CiCalendarDate fontSize={22}></CiCalendarDate> </span>  {currentDate}</div>


    //   </div>
    //     <Outlet></Outlet>
    // </div>
     <div className='w-full h-full  overflow-x-auto overflow-y-auto '>
     
        <Outlet ></Outlet>
    </div>
    
  )
}

export default Board