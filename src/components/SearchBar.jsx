import { axios } from 'axios';
import React, { useContext, useEffect, useRef, useState } from 'react'
import { DataContext } from '../context/Datacontext';
import "../styles/SearchBar.css";
import routes from "../connection/BackendRoutes.json";
import { Link } from 'react-router-dom';
/////import testing
import categories from '../connection/testing/categories.json';

export default function SearchBar() {
//setting variables from DataContext
const { userInfo, setSearchText, setSelCat, setSearching, searching, login } = useContext(DataContext);
const [cat, setCat] = useState([]);
const refCat = useRef(null);  //We gonna use id instead category_name
const refText = useRef(null);



/*const setCategories = async () =>{
  try {
    await axios.get(routes['categories'])
    .then(response => {
      setCat(response.data);
    });
  
  } catch (error) {
    console.log(error);
  }
}*/

/////for testing
const setCategories = async () =>{
  try {
      var response = new Array();
      response["data"] = categories;
      setCat(response.data);
    
  
  } catch (error) {
    console.log(error);
  }
}

/////end testing

useEffect(() => {
  async function setData(){
    await setCategories()
  }
  setData();
}
, [])

const categorySelection =(event) => {
  event.preventDefault();
  setSelCat(refCat.current.value);
}

const typeText =(event) => {
  event.preventDefault();
  setSearchText(refText.current.value);
}

const searchListener = (event) => {
  event.preventDefault();
  searching? setSearching(false):setSearching(true);
}

  return (
    <form className='search_bar'>
        {
          login == 2?
          <div className='user_address'>
          <i className="fa-solid fa-location-dot"></i> {userInfo["address"]}</div>
          :<></>
        }
        <div className="search_input">
          <select className='selectCategory' defaultValue="All" ref={refCat} onChange={categorySelection}>
            <option>All</option>
          {
            cat.map((opt, key) => <option key={key} value={opt.id}>{opt.category_name}</option>)
          }
          </select>
          <input type='text' placeholder='Tap something to search' ref={refText} onChange={typeText}/>
          <button type='submit' onClick={searchListener}><Link to="/shopping"><i className="fa-solid fa-magnifying-glass"></i></Link></button>
        </div>
        
      </form>
  )
}
