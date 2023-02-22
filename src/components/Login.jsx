import React, { useContext, useEffect, useRef, useState } from 'react';
import { DataContext } from '../context/DataContext';
import '../styles/Login.css';
import axios from 'axios';

import routes from '../connection/BackendRoutes.json';

export default function Login() {
  const { login, setLogin } = useContext(DataContext);
  const refUserName = useRef(null);
  const refEmail = useRef(null);
  const refPass = useRef(null);
  const refConfPass = useRef(null);
  let [message, setMessage] = useState('');


  //for singup
  const CreateAccount = async () => {
    try {
      const url = routes['customers'];
      const body = {
        first_name: "-",
        last_name: "-",
        email: refEmail.current.value,
        address: "-",
        user_name: refUserName.current.value,
        password: refPass.current.value
      }
      const response = await axios.post(url, body);
      console.log(response);
      alert('Account Created');
      setLogin(0);
    } catch (error) {
      console.log(error);
    }
  }

  const SingIn = (event) => {
    event.preventDefault();
    alert('funcionando');
    console.log(routes['customers']);
  }

 

  const SingUp = (event) => {
    event.preventDefault();
    if(refConfPass.current.value != refPass.current.value){
      setMessage("The confirmation password doesn't match");
      console.log(message);
    }else{
      CreateAccount();
    }   
  }

  const logMode = (event) => {
    event.preventDefault();
    if(login===0){
      setLogin(1);
    }else if(login === 1)  {
      setLogin(0);
    }
  }


  if(login === 1){
    return(
      <div className='log_container'>
        <div className="container">
            <div className="form" id="singup">
                    <h2>Sing Up</h2>
                    <div className="inputBox">
                      <input type="text" required="required" defaultValue='' ref={refUserName}></input>
                      <i className="fa-regular fa-user"></i>
                      <span>username</span>
                    </div>
                    <div className="inputBox">
                      <input type="text" required="required" defaultValue='' ref={refEmail}></input>
                      <i className="fa-regular fa-envelope"></i>
                      <span>email adress</span>
                    </div>
                    <div className="inputBox">
                      <input type="password" required="required" defaultValue='' ref={refPass}></input>
                      <i className="fa-solid fa-lock"></i>
                      <span>create password</span>
                    </div>
              
                    <div className="inputBox">
                      <input type="password" required="required" defaultValue='' ref={refConfPass}></input>
                      <i className="fa-solid fa-lock"></i>
                      <span>confirm password</span>
                    </div>
                    <div className="inputBox">
                      <input type="submit" value="Create Account" onClick={SingUp}></input>
                      <p className='last_text'>Already a member ? <button onClick={logMode} className="login">Log in</button></p>
                      <h5 className="error_text">{message}</h5>
                    </div>
            </div>
        </div>
      </div>
    )
  }else if(login === 0){
    return (
       <div className='log_container'>
        <div className="container">
          <div className="form" id="singin">
        <h2>Sing In</h2>
        <div className="inputBox">
          <input type="text" required="required"></input>
          <i className="fa-regular fa-user"></i>
          <span>username</span>
        </div>
        <div className="inputBox">
          <input type="password" required="required"></input>
          <i className="fa-solid fa-lock"></i>
          <span>password</span>
        </div>
        <div className="inputBox">
          <input type="submit" value="Login" onClick={SingIn}></input>
          <p className='last_text'>Not Registered ? <button onClick={logMode} className="create">Create an account</button></p>
        </div>

          </div>
        </div>
      </div>
    )
  }else{
    return(
      <div className='log_container'>
        <div className="container">
          <div className="form" id="userInfo">
        <h2>User Information</h2>
              <div className="inputBox">
                <input type="text" required="required"></input>
                <i className="fa-solid fa-user"></i>
                <span>First Name</span>
              </div>
              <div className="inputBox">
                <input type="text" required="required"></input>
                <i className="fa-solid fa-user"></i>
                <span>Last Name</span>
              </div>
              <div className="inputBox">
                <input type="text" required="required"></input>
                <i className="fa-solid fa-location-dot"></i>
                <span>Address</span>
              </div>
        
        <div className="inputBox">
          <input type="submit" value="Save"></input>
          <p className='last_text'>Change password? <button onClick={logMode} className="create">Clik here</button></p>
        </div>

          </div>
        </div>
      </div>
    )
  }

  
}

