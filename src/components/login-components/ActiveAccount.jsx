import React, { useContext } from 'react';
import { DataContext } from '../../context/Datacontext';
import '../../styles/Login.css';

export default function ActiveAccount() {
  const {setLogin, userInfo, userName, setUserName, setUserInfo, login } = useContext(DataContext);
 
  
  
  const logOut = (event) => {
    event.preventDefault();
    setLogin(0);
    setUserInfo({});
    setUserName('Log in');

  }

  if(login == 2){
    return (
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
          <button>Edit Info</button>
          <button>Change Password</button>
          <button onClick={logOut}>Log Out</button>
        </div>
      </div>
      </div>
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
