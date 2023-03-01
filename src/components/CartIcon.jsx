import React, { useContext } from 'react'
import { DataContext } from '../context/Datacontext';
import '../styles/Icon.css';

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  const { cart } = useContext(DataContext);
  return (
    <div className='cart_container'>
      <i className="fa-solid fa-cart-shopping"></i>
      <p className='cart_index'>{cart.items.length}</p>
    </div>
  )
}
