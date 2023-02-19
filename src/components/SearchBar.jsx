import React, { useContext } from 'react'
import { DataContext } from '../context/Datacontext';

export default function SearchBar() {
//setting variables from DataContext
const {categories} = useContext(DataContext);

const search = (event) => {
    event.preventDefault();
    
}


  return (
    <form onSubmit={search}>
        <select name='selectCategory'>
         {
          categories.map(opt=><option>{opt}</option>)
         }
        </select>
      </form>
  )
}
