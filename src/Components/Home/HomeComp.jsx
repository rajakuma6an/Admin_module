import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";
import "../style.css";
import SearchBar from "../SearchBar/SearchBar";
import DropDown from "../DropDown/DropDown";
const HomeComp = () => {

  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);

  // useEffect(() => {
  //   dispatch(getCountries());
  // }, [dispatch]);

 

  return (
    <div>
      home page

     </div>
  );
};

export default HomeComp;
