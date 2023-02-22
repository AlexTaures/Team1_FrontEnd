import React, { useContext } from 'react'
import { DataContext } from '../context/DataContext';
import '../styles/Icon.css';

export default function () {
  const {cart} = useContext(DataContext);
  return (
    <div className='cart_container'>
      <i class="fa-solid fa-cart-shopping"></i>
      <a className='cart_index'>{cart}</a>
    </div>
  )
}
