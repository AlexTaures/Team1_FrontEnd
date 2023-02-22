import React, { useContext } from 'react'
import { DataContext } from '../context/DataContext'
import '../styles/Icon.css';

export default function () {
  const {userName} = useContext(DataContext);


  return (
    <div className='login_icon'>
      <i className="fa-solid fa-user"></i>
      <p className='user_nav_text'>{userName}</p>
    </div>
  )
}
