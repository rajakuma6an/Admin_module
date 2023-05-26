import * as React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import LoginLayout from "../Layout/LoginLayout";
import Loader from "../Components/Loader/Loader";

import Login from "../Pages/Login";
import Home from "../Pages/Home";
import ForgetPassword from "../Pages/ForgetPassword";
import ResetPassword from "../Pages/ResetPassword";
import Data from "../Pages/Data";

function Routers() {
  return (
    <div className="">
      <React.Suspense fallback={<Loader />}>
        <Router>
          <Routes>
            <Route element={<LoginLayout />}>
              <Route path="/" element={<Login />} />
              <Route path="/forget-password" element={<ForgetPassword />} />
              <Route path="/reset-password" element={<ResetPassword />} />
            </Route>
            <Route element={<MainLayout />}>
              <Route path="/home" element={<Home />} />
              <Route path="/data-management" element={<Data />} />
            </Route>
          </Routes>
        </Router>
      </React.Suspense>
    </div>
  );
}

export default Routers;
