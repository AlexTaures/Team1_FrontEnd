import React, { useContext, useRef, useState   } from 'react';
import axios from 'axios';
import routes from '../../connection/BackendRoutes.json';
import { DataContext } from '../../context/Datacontext';

export default function EditBrand(props) {
    const refBrandName = useRef(null);
    const { setDashOption } = useContext(DataContext);
    let [message, setMessage] = useState('');

    const saveBrand = async () => {
      try {
        
        const url = routes['brands']+`/${props.id}`;
        const body = {
          brand_name: refBrandName.current.value
        }
        
        await axios.put(url, body);
        //alert('Admin Created');
        //setDashOption(1);
        window.location.reload(false);
        
        
      } catch (error) {
        setMessage('Something is wrong in the fields or database connection');
      }
    }

    const cancelEdit = (event) => {
      event.preventDefault();
      setDashOption(11);
    }

  return (
    <div className='mainContainer d-flex'>
        <div className="subContainer text-start">
          <div className="line d-flex">
              <h5 className='line-name'>Brand Name</h5>
              <input type="text" className='line-input' ref={refBrandName} defaultValue={props.brand_name}/>
          </div>
          <div className='buttonContainer'>
            <button className='save' onClick={saveBrand}>Save</button>
            <button className='cancel' onClick={cancelEdit}>Cancel</button>
          </div>
          <p className='text-danger mt-3 ml-5'>{message}</p>
        </div>
    </div>
  )
}
