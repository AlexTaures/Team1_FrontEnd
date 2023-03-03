import React, { useContext, useRef, useState } from 'react';
import { DataContext } from '../../context/Datacontext';
import '../../styles/Login.css';
import axios from 'axios';
import routes from '../../connection/BackendRoutes.json';

export default function SingUp() {
  const { login, setLogin } = useContext(DataContext);
  const refUserName = useRef(null);
  const refEmail = useRef(null);
  const refPass = useRef(null);
  const refConfPass = useRef(null);
  let [message, setMessage] = useState('');
  //let [userData, setUserData] = useState([]);

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
      //const response = 
      await axios.post(url, body);
      //console.log(response);
      alert('Account Created');
      setLogin(0);
    } catch (error) {
      console.log(error);
      setMessage("Something is wrong with the fields or database conection");
    }
  }

  const fetchCustomers = async() => {
    try {
      await axios.get(routes['customers'])
      .then(response => {
        //i is the index for array into the object fetched
        const i = response.data.findIndex( (element) => element.user_name === refUserName.current.value);
        
        if(i !== -1){
          setMessage("That username already exist in the database.");
        }else{
          CreateAccount();       

        }
      });

    } catch (error) {
      console.log(error);
      setMessage("Something is wrong with the fields or database conection");
    }
  }

  const SingUp = (event) => {
    event.preventDefault();
    ///fetching customers
    

    ///validating pass
    if(refConfPass.current.value !== refPass.current.value){
      setMessage("The confirmation password doesn't match");
      //console.log(message);
    }else{
      fetchCustomers();
    }   
  }

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



  return (
    <div className='log_container'>
        <div className="subLogContainer">
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
}
