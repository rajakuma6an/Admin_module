import React from 'react'
import { Outlet } from "react-router-dom";
import Navbar from '../Components/Navbar/Navbar'


const MainLayout = () => {
  return (
    <div>
    <div>
      <Navbar />
    </div>
    <Outlet />
  </div>
  )
}

export default MainLayout