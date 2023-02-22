import React, { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import '../styles/Login.css';

export default function Login() {
  const { login, setLogin } = useContext(DataContext);

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
          <input type="text" required="required" defaultValue=''></input>
          <i className="fa-regular fa-user"></i>
          <span>username</span>
        </div>
        <div className="inputBox">
          <input type="text" required="required" defaultValue=''></input>
          <i className="fa-regular fa-envelope"></i>
          <span>email adress</span>
        </div>
        <div className="inputBox">
          <input type="password" required="required" defaultValue=''></input>
          <i className="fa-solid fa-lock"></i>
          <span>create password</span>
        </div>
  
        <div className="inputBox">
          <input type="password" required="required" defaultValue=''></input>
          <i className="fa-solid fa-lock"></i>
          <span>confirm password</span>
        </div>
        <div className="inputBox">
          <input type="submit" value="Create Account"></input>
          <p className='last_text'>Already a member ? <button onClick={logMode} class="login">Log in</button></p>
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
          <input type="submit" value="Login"></input>
          <p className='last_text'>Not Registered ? <button onClick={logMode} class="create">Create an account</button></p>
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
        
        <div class="inputBox">
          <input type="submit" value="Save"></input>
          <p className='last_text'>Change password? <button onClick={logMode} class="create">Clik here</button></p>
        </div>

          </div>
        </div>
      </div>
    )
  }

  
}

