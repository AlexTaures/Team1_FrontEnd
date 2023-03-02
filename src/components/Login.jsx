
import React, { useContext, useEffect, useRef, useState } from 'react';
import { DataContext } from '../context/Datacontext';

import '../styles/Login.css';
import axios from 'axios';
import routes from '../connection/BackendRoutes.json';

import SingUp from './login-components/SingUp';
import SingIn from './login-components/SingIn';
import ActiveAccount from './login-components/ActiveAccount';

export default function Login() {
  //variables
  const { login } = useContext(DataContext);
  

  if(login === 1){
    return(
      <SingUp/>
    )
  }else if(login === 0){
    return (
       <SingIn/>
    )

  }else{
    return(
      <ActiveAccount/>
    )
  }

  
}

