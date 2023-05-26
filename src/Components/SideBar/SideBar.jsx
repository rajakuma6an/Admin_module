import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./style.css";

const SideBar = ({ navigate }) => {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState("");

  useEffect(() => {
    const currentPath = location.pathname;

    if (currentPath === "/home") {
      setActiveItem("Dashboard");
    } else if (currentPath === "/data-management") {
      setActiveItem("DataManagement");
    }
  }, [location.pathname]);

  const handleItemClick = (itemName, path) => {
    setActiveItem(itemName);
    navigate(path);
  };

  return (
    <div className="sidebar px-0">
      <ul>
        <li
          className={activeItem === "Dashboard" ? "active" : ""}
          onClick={() => handleItemClick("Dashboard", "/home")}
        >
          Dashboard
        </li>
        <li
          className={activeItem === "DataManagement" ? "active" : ""}
          onClick={() => handleItemClick("DataManagement", "/data-management")}
        >
          Data Management
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
