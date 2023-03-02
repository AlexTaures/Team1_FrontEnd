import axios from 'axios';
import React, { useContext, useRef, useState } from 'react';
import { DataContext } from '../../context/Datacontext';
import '../../styles/Login.css';
import routes from "../../connection/BackendRoutes.json";

export default function ActiveAccount() {
  const {setLogin, userInfo, userName, setUserName, setUserInfo, login } = useContext(DataContext);
  const [changeType, setChangeType] = useState(0);
  const [message, setMessage] = useState("");
  const refFName = useRef(null);
  const refLName = useRef(null);
  const refAddress = useRef(null);
  const refEmail = useRef(null);
  const refCurrPass = useRef(null);
  const refNewPass = useRef(null);
  const refConfPass = useRef(null);
  let id = null;
  let user = null;
  let pass = null;
  
  //*******save functions *********/
  const saveInfo = async () => {
    setMessage("");
    id = userInfo["id"];
    user = userInfo['user_name'];
    pass = userInfo['password'];
    try {
      
      const url = routes['customers']+`/${id}`;
      const body = {
        "first_name": refFName.current.value,
        "last_name": refLName.current.value,
        "email": refEmail.current.value,
        "address": refAddress.current.value,
        "user_name": user,
        "password": pass
      }
      
      await axios.put(url, body);
      setUserInfo({
        "id": id,
        "user_name": user,
        "password": pass,
        "first_name": refFName.current.value,
        "last_name": refLName.current.value,
        "email": refEmail.current.value,
        "address": refAddress.current.value
      })
      setChangeType(0);
      
    } catch (error) {
      setMessage('Something is wrong in the fields or database connection');
      console.log(error);
    }
  }
  
  const savePass = async () => {
    setMessage("");
    id = userInfo["id"];

    if(userInfo["password"] !== refCurrPass.current.value){
      setMessage("Current password is incorrect");
    }else if(refNewPass.current.value !== refConfPass.current.value){
      setMessage("The password doesn't match")
    }else{

          try {
          
            const url = routes['customers']+`/${id}`;
            const body = {
              "first_name": userInfo['first_name'],
              "last_name": userInfo['last_name'],
              "email": userInfo['email'],
              "address": userInfo['address'],
              "user_name": userInfo['user_name'],
              "password": refNewPass.current.value
            }
            
            await axios.put(url, body);
            setUserInfo({})
            setChangeType(0);
            setLogin(0);
            
          } catch (error) {
            setMessage('Something is wrong in the fields or database connection');
            console.log(error);
          }

    }
    
    
  }

  //*****Buttons*******
  const logOut = (event) => {
    event.preventDefault();
    setLogin(0);
    setUserInfo({});
    setUserName('Log in');
  }

  const editInfo = (event) => {
    event.preventDefault();
    setChangeType(1);
  }

  const changePassword = (event) => {
    event.preventDefault();
    setChangeType(2);
  }

  const cancelOption = (event) => {
    event.preventDefault();
    setChangeType(0);
  }

  if(login == 2){
    return (
      changeType == 0?
            <div className="generalContainer">
              <div className="subContainer">
              <div className="user_info_line">
                  <p className='tag'>Username</p>
                  <p className='info'>{userName}</p>
              </div>
              <div className="user_info_line">
                  <p className='tag'>First Name</p>
                  <p className='info'>{userInfo['first_name']}</p>
              </div>
              <div className="user_info_line">
                  <p className='tag'>Last Name</p>
                  <p className='info'>{userInfo['last_name']}</p>
              </div> 
            </div>
        
            <div className="subContainer">
              <div className="user_info_line">
                  <p className='tag'>Adress</p>
                  <p className='info'>{userInfo['address']}</p>
              </div>
              <div className="user_info_line">
                  <p className='tag'>Email</p>
                  <p className='info'>{userInfo['email']}</p>
              </div>
              <div className="button_container">
                <button onClick={editInfo}>Edit Info</button>
                <button onClick={changePassword}>Change Password</button>
                <button onClick={logOut}>Log Out</button>
              </div>
            </div>
            </div>

      :changeType == 1?
            <div className="generalContainer">
                <div className="subContainer">
                  <div className="user_info_line">
                    <p className="tag">First Name</p>
                    <input type='text' className="info" defaultValue={userInfo['first_name']} ref={refFName}></input>
                  </div>
                  <div className="user_info_line">
                    <p className="tag">Last Name</p>
                    <input type='text' className="info" defaultValue={userInfo['last_name']} ref={refLName}></input>
                  </div>
                  <div className="user_info_line">
                    <p className="tag">Address</p>
                    <input type='text' className="info" defaultValue={userInfo['address']} ref={refAddress}></input>
                  </div>
                  <div className="user_info_line">
                    <p className="tag">Email</p>
                    <input type='text' className="info" defaultValue={userInfo['email']} ref={refEmail}></input>
                  </div>
                  <div className="button_container">
                    <button onClick={saveInfo}>Save</button>
                    <button className='cancelButton' onClick={cancelOption}>Cancel</button>
                  </div>
                  <p className='message'>{message}</p>
                </div>
            </div>
      :changeType == 2?
            <div className="generalContainer">
              <div className="subContainer">
                <div className="user_info_line">
                  <p className="tag">Current Password</p>
                  <input type="text" className="info" ref={refCurrPass}/>
                </div>
                <div className="user_info_line">
                  <p className="tag">New Password</p>
                  <input type="text" className="info" ref={refNewPass}/>
                </div>
                <div className="user_info_line">
                  <p className="tag">Confirm New Password</p>
                  <input type="text" className="info" ref={refConfPass}/>
                </div>
                <div className="button_container">
                    <button onClick={savePass}>Save</button>
                    <button className='cancelButton' onClick={cancelOption}>Cancel</button>
                  </div>
                  <p className='message'>{message}</p>
              </div>
            </div>
      
      :<></>
    )
  }else if(login == 3){
    return(
      <div className="generalContainer">
        <div className="subContainer">
        <div className="user_info_line">
          You are in Admin Account
        </div>
        <div className="button_container">
          <button onClick={logOut}>Log Out</button>
        </div>
      </div>
      </div>
    )
  }else{
    <></>
  }
}
