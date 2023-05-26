import React, { useState } from "react";
import { AiOutlineLogout } from "react-icons/ai";
import { FiBell } from "react-icons/fi";
import "./style.css";

const Navbar = ({ navigate }) => {
  return (
    <nav className="navbar d-flex justify-content-between px-5 py-3">
      <div className="">Admin</div>
      <div>
        <FiBell size={28} color="#cca677" style={{ cursor: "pointer",marginRight : "20px" }} />
        <AiOutlineLogout
          onClick={() => navigate("/")}
          size={28}
          color="#cca677"
          style={{ cursor: "pointer" }}
        />
      </div>
    </nav> 
  );
};

export default Navbar;
