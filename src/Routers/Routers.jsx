import * as React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import LoginLayout from "../Layout/LoginLayout";
import Loader from "../Components/Loader/Loader";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "../Pages/Login";
import Home from "../Pages/Home";

function Routers() {
  return (
    <div className="">
       <React.Suspense fallback={<Loader />}>
        <Router>
          <Routes>
            <Route element={<LoginLayout />}>
              <Route path="/" element={<Login />} />
            </Route>
            <Route element={<MainLayout />}>
              <Route path="/home" element={<Home />} />
            </Route>
          </Routes>
        </Router>
      </React.Suspense>
    </div>
  );
}

export default Routers;