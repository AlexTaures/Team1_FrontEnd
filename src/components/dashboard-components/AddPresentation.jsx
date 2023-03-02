import React, { useContext, useRef, useState   } from 'react';
import axios from 'axios';
import routes from '../../connection/BackendRoutes.json';
import { DataContext } from '../../context/Datacontext';

export default function AddPresentation() {
  const refPresentation = useRef(null);
  const { dashPres } = useContext(DataContext);
  let [message, setMessage] = useState('');

  const CreatePresentation = async () => {
    try {
      const i = dashPres.findIndex( (element) => element.presentation_type === refPresentation.current.value);

      if(i !== -1){
        setMessage('The "presentation_type" entered already exists in the database.');
        return;
      }else{
      const url = routes['presentations'];
      const body = {
        presentation_type: refPresentation.current.value
      }
      
      await axios.post(url, body);
      //alert('Admin Created');
      //setDashOption(1);
      window.location.reload(false);
      }
      
    } catch (error) {
      setMessage('Something is wrong in the fields or database connection');
    }
  }
  
  return (
    <div className='mainContainer'>
        <div className="subContainer">
          <div className="line d-flex">
              <h5 className='line-name'>Presentation Name</h5>
              <input type="text" className='line-input' ref={refPresentation}/>
          </div>
          <button onClick={CreatePresentation}>Save</button>
          <p className='text-danger mt-3 ml-5'>{message}</p>
        </div>
    </div>
  )
}
