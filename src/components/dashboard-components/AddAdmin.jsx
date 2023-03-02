import React, { useContext, useRef, useState   } from 'react';
import axios from 'axios';
import routes from '../../connection/BackendRoutes.json';
import { DataContext } from '../../context/Datacontext';

export default function AddAdmin() {
  const refAdminName = useRef(null);
  const refPassword = useRef(null);
  const { dashAdmin } = useContext(DataContext);
  let [message, setMessage] = useState('');


  const CreateAdmin = async () => {
    try {
      const i = dashAdmin.findIndex( (element) => element.user_name === refAdminName.current.value);
      console.log(i);

      if(i !== -1){
        setMessage('The "user_name" entered already exists in the database.');
        return;
      }else{
      const url = routes['admins'];
      const body = {
        user_name: refAdminName.current.value,
        password: refPassword.current.value
      }
      
      await axios.post(url, body);
      //alert('Admin Created');
      //setDashOption(1);
      window.location.reload(false);
      }
      
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='mainContainer'>
        <div className="subContainer">
          <div className="line d-flex">
              <h5 className='line-name'>Admin Username</h5>
              <input type="text" className='line-input' ref={refAdminName}/>
          </div>
          <div className="line d-flex">
              <h5 className='line-name'>Password</h5>
              <input type="password" className='line-input' ref={refPassword}/>
          </div>
          <button onClick={CreateAdmin}>Save</button>
          <p className='text-danger mt-3 ml-5'>{message}</p>
        </div>
    </div>
  )
}
