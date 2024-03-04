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
import { FaTasks } from "react-icons/fa";

import Modal from './Modal'

const TaskMeter = ({completedTask,due,progressvar,total , updateData}) => {
    const currentDate = new Date().toLocaleDateString('en-US',{
        weekday:'long',
        year:'numeric',
        month:'long',
        day:'numeric'
      })

      
  return (
    <div className='  font-barlow relative flex flex-col h-96 md:h-[32vh] bg-lightBlackOlive m-8 rounded-2xl text-gray-300 '>
    {/* Item-1 */}
    <div className='flex flex-col md:flex-row md:justify-between items-center max-sm:mb-3 '>
      <p className='md:ml-6 mt-3  font-bold text-2xl '>Welcome Back, User!</p>
      {/* <div className=' mr-2 mt-4  text-sm flex flex-row'> <span > <CiCalendarDate fontSize={22}></CiCalendarDate> </span>  {currentDate}</div> */}
      <div className='  mt-4  text-sm flex flex-row mr-6'> <Modal updateData={updateData}></Modal></div>


    </div>
    {/* item-2 */}
    <div className='flex flex-col items-center space-y-4 md:space-y-0  md:flex-row md:mt-1 justify-between md:mx-6  '>
      {/* Card-1 */}
      <div className=' relative  flex flex-col border  border-gray-700 rounded-md w-60 h-12  md:w-60 md:h-28 shadow-xl  '>
        <div className='flex md:justify-between  m-2 font-bold'>In Progress <span className=' max-sm:px-1 '>  <TbProgressCheck size={22}></TbProgressCheck></span></div>
        <div className='max-sm:absolute top-0 right-0 text-4xl text-center max-sm:px-2 md:mt-2'> {progressvar} </div>
        </div>
      
      {/* card-2 */}
      <div className='relative flex flex-col border border-gray-700 rounded-md w-60 h-12 md:w-60 md:h-28  shadow-xl '>
        <div className='flex md:justify-between m-2 font-bold'>Completed <span className='max-sm:px-1'> <IoIosCheckmarkCircle size={22}></IoIosCheckmarkCircle></span></div>
        <div className='max-sm:absolute top-0 right-0 text-4xl text-center max-sm:px-2 md:mt-2'> {completedTask} </div>
        </div>
      {/* card-3 */}
      <div className='relative flex flex-col border border-gray-700 rounded-md w-60 h-12 md:w-60 md:h-28  shadow-xl '>
        <div className='flex md:justify-between m-2 font-bold'>Overdue <span className='max-sm:px-1'> <IoMdAlert size={22}></IoMdAlert></span></div>
        <div className='max-sm:absolute top-0 right-0 text-4xl text-center max-sm:px-2 md:mt-2'> {due}</div>
        </div>
        {/* card-4 */}
        <div className=' relative flex flex-col border  border-gray-700 rounded-md w-60 h-12  md:w-60 md:h-28 shadow-xl  '>
        <div className='flex md:justify-between m-2 font-bold'>Total Tasks <span className='max-sm:px-1'>  <FaTasks size={22}></FaTasks></span></div>
        <div className='max-sm:absolute top-0 right-0 text-4xl text-center max-sm:px-2 md:mt-2'> {total} </div>
        </div>

    </div>
      

    
  


  </div>
  )
}

export default TaskMeter