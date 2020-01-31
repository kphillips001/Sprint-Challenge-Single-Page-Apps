import React, { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard";
import Axios from "axios";

export default function SearchForm(props) {

  
 
  const handleChange = e => {
    props.setSearchTerm(e.target.value);
  };

   

  return (
    <div className="App">
    {/* create a search bar (input field) */}
   
    <input
      name="search"
      placeholder="search by name"
      value={props.searchTerm}
      onChange={e => handleChange(e)}
    />
    {/* map through search results to dislay person
    that was searched for and display a list of them */}
    
  </div>
  );
}