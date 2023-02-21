import React, { useContext, useState } from 'react'
import { DataContext } from '../context/DataContext';
import "../styles/SearchBar.css";

export default function SearchBar() {
//setting variables from DataContext
const {categories, userAddress} = useContext(DataContext);
const searchText = useState("");

const search = (event) => {
    event.preventDefault();
    alert('The submit button is touched already')
    
}


  return (
    <form onSubmit={search} className='search_bar'>
        <div className='user_address'>
        <i class="fa-solid fa-location-dot"></i> {userAddress}</div>
        <div className="search_input">
          <select name='selectCategory'>
          {
            categories.map(opt=><option>{opt}</option>)
          }
          </select>
          <input type='text' placeholder='Tap something to search' />
          <button type='submit'><i class="fa-solid fa-magnifying-glass"></i></button>
        </div>
        
      </form>
  )
}
