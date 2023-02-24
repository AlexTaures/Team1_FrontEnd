/* eslint-disable import/no-anonymous-default-export */
import React, { useContext } from 'react'
import { DataContext } from '../context/Datacontext'
import '../styles/Icon.css';

export default function () {
  const {userName} = useContext(DataContext);


  return (
    <div className='login_icon'>
      <i className="fa-solid fa-user"></i>
      <span className='user_nav_text'>{userName}</span>
    </div> 
  )
}
