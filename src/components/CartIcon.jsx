import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { DataContext } from '../context/Datacontext';
import '../styles/Icon.css';

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  const { cart, login } = useContext(DataContext);
  if(login == 2){
    return (
      <NavLink to="/shopping" className="navlink" id='cart_container'>
        <i className="fa-solid fa-cart-shopping"></i>
        <p className='cart_index'>{cart.items.length}</p>
      </NavLink>
    )
  }else{
    <></>
  }
}
