import React, { useContext, useRef, useState } from 'react';
import { DataContext } from '../../context/Datacontext';
import '../../styles/Login.css';
import  axios  from 'axios';
import routes from '../../connection/BackendRoutes.json';
import customersTest from "../../connection/testing/customers.json";
import adminTest from "../../connection/testing/admins.json";
import { useNavigate } from 'react-router-dom';

export default function SingIn() {
  const { login, setLogin, session, setUserName, setUserInfo } = useContext(DataContext);
  const navigate = useNavigate();
  const refUserNameLog = useRef(null);
  const refPassLog = useRef(null);
  let [message, setMessage] = useState('');

  
  /*const fetchCustomers = () => {
    try {
      axios.get(routes['customers'])
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
            "id": response.data[i].id,
            "first_name":response.data[i].first_name,
            "last_name":response.data[i].last_name,
            "address":response.data[i].address,
            "email": response.data[i].email,
            "user_name": response.data[i].user_name,
            "password": response.data[i].password
        });
          setMessage("");
          setLogin(2);
          /// FOR SESSION STORAGE IN BROWSER
          sessionStorage.setItem("user_name", response.data[i].user_name);
          sessionStorage.setItem("pass", response.data[i].password);
          sessionStorage.setItem("login","2");
          return(navigate("/shopping"))
        }



      });

    } catch (error) {
      console.log(error);
    }
  }

  const fetchUsers = async () => {
    try {
      await axios.get(routes['admins'])
      .then(response => {
        //i is the index for array into the object fetched
        const i = response.data.findIndex( (element) => element.user_name === refUserNameLog.current.value);
        
        if(i===-1){
          //////////////////////
          fetchCustomers();
          ///////////////////////
        }else if(response.data[i].password !== refPassLog.current.value){
          setMessage("The password for this username is incorrect");
        }else{
          setUserName(response.data[i].user_name);
          setMessage("");
          setLogin(3);
          
          /// FOR SESSION STORAGE IN BROWSER
          sessionStorage.setItem("user_name", response.data[i].user_name);
          sessionStorage.setItem("pass", response.data[i].password);
          sessionStorage.setItem("login","3");
          response = true;
          return(navigate("/admin"));
        }
      });
      

    } catch (error) {
      console.log(error);
    }
  }*/

  //////ONLY FOR TESTING........./////////
  const fetchCustomers = () => {
    try {
      var response = new Array();
      response["data"] = customersTest;
      
        //i is the index for array into the object fetched
        const i = response.data.findIndex( (element) => element.user_name === refUserNameLog.current.value);
        
        if(i===-1){
          setMessage("That username doesn't existe in the database");
        }else if(response.data[i].password !== refPassLog.current.value){
          setMessage("The password for this username is incorrect");
        }else{
          setUserName(response.data[i].user_name);
          setUserInfo({
            "id": response.data[i].id,
            "first_name":response.data[i].first_name,
            "last_name":response.data[i].last_name,
            "address":response.data[i].address,
            "email": response.data[i].email,
            "user_name": response.data[i].user_name,
            "password": response.data[i].password
        });
          setMessage("");
          setLogin(2);
          /// FOR SESSION STORAGE IN BROWSER
          sessionStorage.setItem("user_name", response.data[i].user_name);
          sessionStorage.setItem("pass", response.data[i].password);
          sessionStorage.setItem("login","2");
          return(navigate("/shopping"))
        }

    } catch (error) {
      console.log(error);
    }
  }




  const fetchUsers = async () => {
    try {
      var response = new Array();
      response["data"] = adminTest
      
        //i is the index for array into the object fetched
        const i = response.data.findIndex( (element) => element.user_name === refUserNameLog.current.value);
        
        if(i===-1){
          //////////////////////
          fetchCustomers();
          ///////////////////////
        }else if(response.data[i].password !== refPassLog.current.value){
          setMessage("The password for this username is incorrect");
        }else{
          setUserName(response.data[i].user_name);
          setMessage("");
          setLogin(3);
          
          /// FOR SESSION STORAGE IN BROWSER
          sessionStorage.setItem("user_name", response.data[i].user_name);
          sessionStorage.setItem("pass", response.data[i].password);
          sessionStorage.setItem("login","3");
          response = true;
          return(navigate("/admin"));
        }
      
      

    } catch (error) {
      console.log(error);
    }
  }
  ///////////////////END TESTING SECTION//////////////////////


  const SingIn = async (event) => { //We can use async in every function to call another one
    event.preventDefault();
    setMessage("");
    await fetchUsers();
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
          <div className="form" id="singin">
        <h2>Sing In</h2>
        <div className="inputBox">
          {
            sessionStorage.length>0?
            <input type="text" required="required" ref={refUserNameLog} defaultValue={sessionStorage.getItem("user_name")}></input>
            :<input type="text" required="required" ref={refUserNameLog}></input>
          }
          <i className="fa-regular fa-user"></i>
          <span>username</span>
        </div>
        <div className="inputBox">
          {
            sessionStorage.length>0?
            <input type="password" required="required" ref={refPassLog} defaultValue={sessionStorage.getItem("pass")}></input>
            :<input type="password" required="required" ref={refPassLog}></input>
          }
          
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
