import React from "react";
import { Outlet } from "react-router-dom";
import "./style.layout.css";

const LoginLayout = () => {
  return (
    <div className="glassmorphism_background">
      <div className="content_container">
        <Outlet />
      </div>
    </div>
  );
};

export default LoginLayout;
