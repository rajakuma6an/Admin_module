import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import SideBar from "../Components/SideBar/SideBar";
import { useNavigate } from "react-router-dom";
import './style.layout.css';

const MainLayout = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <Navbar navigate={navigate} />
      </div>
      <div className="d-flex">
        <div>
          <SideBar navigate={navigate} />
        </div>
        <div className="outlet">
          {" "}
          <Outlet navigate={navigate} />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
