import React from "react";
import './style.css';
import {AiOutlineSearch} from 'react-icons/ai'
const SearchBar = ({query,setQuery}) => {
  return (
    <div className="Search_Box" >
        <i className="search_icon"><AiOutlineSearch size={20}  style={{color : "#cca677"}} /></i>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        // onChange={(e) => setQuery(e.target.value)}
        className="search_input"
      />
    </div>
  );
};

export default SearchBar;
