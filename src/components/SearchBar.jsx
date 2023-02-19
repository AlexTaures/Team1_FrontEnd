import React, { useContext, useState } from 'react'
import { DataContext } from '../context/Datacontext';
import "../styles/SearchBar.css";

export default function SearchBar() {
//setting variables from DataContext
const {categories, userAddress} = useContext(DataContext);
const searchText = useState("");

const search = (event) => {
    event.preventDefault();
    
}


  return (
    <form onSubmit={search} className='search_bar'>
        <div className='user_address'>{userAddress}</div>
        <select name='selectCategory'>
         {
          categories.map(opt=><option>{opt}</option>)
         }
        </select>
        <input type='text' placeholder='Tap some product to search' />
      </form>
  )
}
