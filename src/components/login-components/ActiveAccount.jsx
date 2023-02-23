import React, { useContext, useRef, useState } from 'react';
import { DataContext } from '../../context/DataContext';
import '../../styles/Login.css';
import axios from 'axios';
import routes from '../../connection/BackendRoutes.json';

export default function ActiveAccount() {
  const {setLogin, userInfo, userName } = useContext(DataContext);
 
  
  
  

  return (
    <div className="generalContainer">
      <div className="subContainer">
      <div className="user_info_line">
          <p>Username</p>
          <p>{userName}</p>
      </div>
      <div className="user_info_line">
          <p>First Name</p>
          <p>{userInfo['first_name']}</p>
      </div>
      <div className="user_info_line">
          <p>Last Name</p>
          <p>{userInfo['last_name']}</p>
      </div> 
    </div>

    <div className="subContainer">
      <div className="user_info_line">
          <p>Adress</p>
          <p>{userInfo['address']}</p>
      </div>
      <div className="user_info_line">
          <p>Email</p>
          <p>{userInfo['email']}</p>
      </div>
      <div className="button_container">
        <button>Edit Info</button>
        <button>Change Password</button>
        <button>Log Out</button>
      </div>
    </div>
    </div>
  )
}
