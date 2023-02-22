import React, { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import '../styles/Login.css';

export default function Login() {
  const { login, setLogin } = useContext(DataContext);

  const logMode = (event) => {
    event.preventDefault();
    if(login==0){
      setLogin(1);
    }else if(login == 1)  {
      setLogin(0);
    }
  }


  if(login == 1){
    return(
      <div className='log_container'>
        <div className="container">
        <div class="form" id="singup">
      <h2>Sing Up</h2>
        <div class="inputBox">
          <input type="text" required="required" defaultValue=''></input>
          <i class="fa-regular fa-user"></i>
          <span>username</span>
        </div>
        <div class="inputBox">
          <input type="text" required="required" defaultValue=''></input>
          <i class="fa-regular fa-envelope"></i>
          <span>email adress</span>
        </div>
        <div class="inputBox">
          <input type="password" required="required" defaultValue=''></input>
          <i class="fa-solid fa-lock"></i>
          <span>create password</span>
        </div>
  
        <div class="inputBox">
          <input type="password" required="required" defaultValue=''></input>
          <i class="fa-solid fa-lock"></i>
          <span>confirm password</span>
        </div>
        <div class="inputBox">
          <input type="submit" value="Create Account"></input>
          <p className='last_text'>Already a member ? <a onClick={logMode} class="login">Log in</a></p>
        </div>

        </div>
        </div>
      </div>
    )
  }else if(login == 0){
    return (
       <div className='log_container'>
        <div className="container">
          <div class="form" id="singin">
        <h2>Sing In</h2>
        <div class="inputBox">
          <input type="text" required="required"></input>
          <i class="fa-regular fa-user"></i>
          <span>username</span>
        </div>
        <div class="inputBox">
          <input type="password" required="required"></input>
          <i class="fa-solid fa-lock"></i>
          <span>password</span>
        </div>
        <div class="inputBox">
          <input type="submit" value="Login"></input>
          <p className='last_text'>Not Registered ? <a onClick={logMode} class="create">Create an account</a></p>
        </div>

          </div>
        </div>
      </div>
    )
  }else{
    return(
      <div>Log info</div>
    )
  }

  
}

