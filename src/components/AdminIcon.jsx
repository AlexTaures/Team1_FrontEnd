import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { DataContext } from '../context/Datacontext';
import '../styles/Icon.css';

export default function AdminIcon() {
  const { login } = useContext(DataContext);
  if(login == 3){
    return (
      <NavLink to="/admin" className="navlink" >
        <i className="fa-solid fa-laptop-code"></i><span> Admin</span>
      </NavLink>
    )
  }else{
    <></>
  }
}
