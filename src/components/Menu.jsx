import '../styles/customization.css';
import logo from "../img/amazont.png"
import { useContext } from 'react';
import { DataContext } from '../context/Datacontext';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import routes from "../connection/BackendRoutes.json"

export default function Menu(){
  const { setLogin, setUserName, setUserInfo, login } = useContext(DataContext)
  
  const fetchCustomers = () => {
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
  }

  if(sessionStorage.length > 0 && login === 0){
    fetchUsers();
  }

    return( 
      <div className='homeContainer'><div>
          <img src={logo}></img>
        <div className='homeDescription'>
          <h2>Program based on what has been learned from React, Laravel, MySQL, Boostrap, CSS, HTML.</h2>
          <p>The Functionality is to Manage, Add, Delete and Edit databases about
          an inventory of product store.</p>
        </div>
      </div>
      <div>
          <div className='homeTittle'>
            <h2 className="Title">Available in     <i className="fa-brands fa-github"></i></h2>
            <a href="https://github.com/AlexTaures/Team1_FrontEnd" target={'_blank'} class="btn btn-primary mx-2">FrontEnd</a>
            <a href="https://github.com/AlexTaures/team1-finalProject" target={'_blank'} class="btn btn-primary mx-2">BackEnd</a>
          </div>
      <div className='integrants'>
            <h2 className="INT">Integrants</h2>
            <div className="int-line"><p>William Mendrano</p><a href="https://github.com/WamBear" target={'_blank'} class="btn btn-primary my-2">github</a></div>
            <div className="int-line "><p>Calvin Mena</p><a href="https://github.com/JonathanMena" target={'_blank'} class="btn btn-primary my-2">github</a></div>
            <div className="int-line"><p>Alexander Díaz</p><a href="https://github.com/AlexTaures" target={'_blank'} class="btn btn-primary my-2">github</a></div>
            <div className="int-line"><p>Brayan López</p><a href="https://github.com/Brayan01LR" target={'_blank'} class="btn btn-primary my-2">github</a></div>
          </div>
        </div>
      
      <footer><p>&copy; Kodigo Full Stack Jr. 16 - Team 1 {"(2023)"}. Only for academic porposes.</p></footer>
      </div>

    )
  }