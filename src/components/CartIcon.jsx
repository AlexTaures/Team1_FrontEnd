import React, { useContext } from 'react'
import { DataContext } from '../context/DataContext';
import '../styles/Icon.css';

export default function () {
  const {cart} = useContext(DataContext);
  return (
    <div className='cart_container'>
      <i className="fa-solid fa-cart-shopping"></i>
      <p className='cart_index'>{cart}</p>
    </div>
  )
}
