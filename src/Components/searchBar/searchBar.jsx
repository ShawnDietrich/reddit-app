import React from "react";
import ReactDOM from 'react-dom';
import './searchBar.css'

const SearchBar = () => {
  let SearchValue = '';
  
  const handleChange = (event) => {
    event.preventDefault();
    SearchValue = event.target.value;
  }

  const handleSubmit = async () => {
    
  }

  
  return (
    <div>
      <input className="search" type='text' onChange={handleChange}></input>
      <input type="submit"  onClick={handleSubmit}/>
    </div>
    )
  
}


export default SearchBar