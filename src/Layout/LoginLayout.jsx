import React from "react";
import { Outlet } from "react-router-dom";

const LoginLayout = () => {
  return (
    <div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default LoginLayout;
