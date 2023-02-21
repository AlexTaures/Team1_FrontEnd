import React, { useContext } from 'react'
import { DataContext } from '../context/DataContext'
import '../styles/Icon.css';

export default function () {
  const {login} = useContext(DataContext);

  return (
    <div>
      <i class="fa-solid fa-user"></i>
      <a>{login}</a>
    </div>
  )
}
