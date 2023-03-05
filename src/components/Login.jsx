
import React, { useContext } from 'react';
import { DataContext } from '../context/Datacontext';
import '../styles/Login.css';
import SingUp from './login-components/SingUp';
import SingIn from './login-components/SingIn';
import ActiveAccount from './login-components/ActiveAccount';
import axios from 'axios';
import routes from "../connection/BackendRoutes.json";
//////for testing
import admins from '../connection/testing/admins.json';
import customers from '../connection/testing/customers.json';

export default function Login() {
  //variables
  const { login, setLogin, setUserName, setUserInfo } = useContext(DataContext);

  /*const fetchCustomers = () => {
    try {
      axios.get(routes['customers'])
      .then(response => {
        //i is the index for array into the object fetched
        const i = response.data.findIndex( (element) => element.user_name === sessionStorage.getItem("user_name"));
        
        if(i===-1){
        }else if(response.data[i].password !== sessionStorage.getItem("pass")){
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
          setLogin(2);
          
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
        const i = response.data.findIndex( (element) => element.user_name === sessionStorage.getItem("user_name"));
        
        if(i===-1){
          //////////////////////
          fetchCustomers();
          ///////////////////////
        }else if(response.data[i].password !== sessionStorage.getItem("pass")){
          
        }else{
          setUserName(response.data[i].user_name);
          setLogin(3);
          
        }
      });
      

    } catch (error) {
      console.log(error);
    }
  }*/

  /////////for testing
  const fetchCustomers = () => {
    try {
        var response = new Array();
        response["data"] = customers;
        //i is the index for array into the object fetched
        const i = response.data.findIndex( (element) => element.user_name === sessionStorage.getItem("user_name"));
        
        if(i===-1){
        }else if(response.data[i].password !== sessionStorage.getItem("pass")){
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
          setLogin(2);
          
        }


    } catch (error) {
      console.log(error);
    }
  }

  const fetchUsers = async () => {
    try {
        var response = new Array();
        response["data"] = admins;
        //i is the index for array into the object fetched
        const i = response.data.findIndex( (element) => element.user_name === sessionStorage.getItem("user_name"));
        
        if(i===-1){
          //////////////////////
          fetchCustomers();
          ///////////////////////
        }else if(response.data[i].password !== sessionStorage.getItem("pass")){
          
        }else{
          setUserName(response.data[i].user_name);
          setLogin(3);
          
        }
      
      

    } catch (error) {
      console.log(error);
    }
  }

  ///////// end testing

  if(sessionStorage.length > 0 && login === 0){
    fetchUsers();
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

