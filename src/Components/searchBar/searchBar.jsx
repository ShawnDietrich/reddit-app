import React from "react";
import ReactDOM from 'react-dom';
import { useDispatch } from "react-redux";
import { setSearchTerm } from "../../WebAPIs/redditSlice";
import './searchBar.css'

const SearchBar = () => {
  let searchValue = '';
  const dispatch = useDispatch();

  const handleChange = (event) => {
    event.preventDefault();
    searchValue = event.target.value;
  }

  const handleSubmit = async () => {
    dispatch(setSearchTerm(searchValue))
  }

  
  return (
    <div>
      <input className="search" type='text' onChange={handleChange}></input>
      <input type="submit"  onClick={handleSubmit}/>
    </div>
    )
  
}


export default SearchBar