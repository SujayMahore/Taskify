import React from 'react'
import SideBar from './SideBar'
import Board from './Board'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className='flex flex-row bg-eerieBlack h-screen w-screen overflow-hidden'>
        <SideBar></SideBar>
        <Board></Board>

    </div>
  )
}

export default Dashboard