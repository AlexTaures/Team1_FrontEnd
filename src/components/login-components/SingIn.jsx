import React, { useContext, useRef, useState } from 'react';
import { DataContext } from '../../context/DataContext';
import '../../styles/Login.css';
import axios from 'axios';
import routes from '../../connection/BackendRoutes.json';

export default function SingIn() {
  const { login, setLogin, setUserName, setUserInfo } = useContext(DataContext);
  const refUserNameLog = useRef(null);
  const refPassLog = useRef(null);
  let [message, setMessage] = useState('');
  //let [userData, setUserData] = useState([]);

  const fetchCustomers = async () => {
    try {
      await axios.get(routes['customers'])
      .then(response => {
        //i is the index for array into the object fetched
        const i = response.data.findIndex( (element) => element.user_name === refUserNameLog.current.value);
        
        if(i===-1){
          setMessage("That username doesn't existe in the database");
        }else if(response.data[i].password !== refPassLog.current.value){
          setMessage("The password for this username is incorrect");
        }else{
          setUserName(response.data[i].user_name);
          setUserInfo({
            "first_name":response.data[i].first_name,
            "last_name":response.data[i].last_name,
            "address":response.data[i].address,
            "email": response.data[i].email
        });
          setMessage("");
          setLogin(2);
        }



      });

    } catch (error) {
      console.log(error);
    }
  }


  const SingIn = async (event) => {
    event.preventDefault();
    setMessage("");
    await fetchCustomers();
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
        <div className="container">
          <div className="form" id="singin">
        <h2>Sing In</h2>
        <div className="inputBox">
          <input type="text" required="required" ref={refUserNameLog}></input>
          <i className="fa-regular fa-user"></i>
          <span>username</span>
        </div>
        <div className="inputBox">
          <input type="password" required="required" ref={refPassLog}></input>
          <i className="fa-solid fa-lock"></i>
          <span>password</span>
        </div>
        <div className="inputBox">
          <input type="submit" value="Login" onClick={SingIn}></input>
          <p className='last_text'>Not Registered ? <button onClick={logMode} className="create">Create an account</button></p>
          <h5 className="error_text">{message}</h5>
        </div>

          </div>
        </div>
      </div>
  )
}
