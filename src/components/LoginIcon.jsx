import React, { useContext } from 'react'
import { DataContext } from '../context/DataContext'
import '../styles/Icon.css';

export default function () {
  const {userName} = useContext(DataContext);


  return (
    <div>
      <i class="fa-solid fa-user"></i>
      <a>{userName}</a>
    </div>
  )
}
