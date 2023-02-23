import React, { useContext, useRef, useState } from 'react';
import { DataContext } from '../context/DataContext';
import '../styles/Login.css';
import axios from 'axios';
import routes from '../connection/BackendRoutes.json';

import SingUp from './login-components/SingUp';
import SingIn from './login-components/SingIn';
import ActiveAccount from './login-components/ActiveAccount';

export default function Login() {
  //variables
  const { login, setLogin, setUserName } = useContext(DataContext);
  const refUserName = useRef(null);
  const refEmail = useRef(null);
  const refPass = useRef(null);
  const refConfPass = useRef(null);
  const refUserNameLog = useRef(null);
  const refPassLog = useRef(null);
  let [message, setMessage] = useState('');
  let [userData, setUserData] = useState([]);


  //for singup-----------------------------------------------------
  

  //for singin-------------------------------------------------------
  /////////////////////////////////////////////////////////////////////
  

  //Account parameters
 

  
  //logMode switch 
  const logMode = (event) => {
    event.preventDefault();
    if(login===0){
      setLogin(1);
      setMessage("");
    }else if(login === 1)  {
      setLogin(0);
      setMessage("");
    }
  }


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

