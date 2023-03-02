import React, { useContext, useRef, useState   } from 'react';
import axios from 'axios';
import routes from '../../connection/BackendRoutes.json';
import { DataContext } from '../../context/Datacontext';

export default function EditCategory(props) {
  const refCatName = useRef(null);
  const { setDashOption,setUpdating, updating } = useContext(DataContext);
  let [message, setMessage] = useState('');

  const saveCategory = async () => {
    try {
      
      const url = routes['categories']+`/${props.id}`;
      const body = {
        category_name: refCatName.current.value
      }
      
      await axios.put(url, body);
      //alert('Admin Created');
      //setDashOption(1);
      updating? setUpdating(false):setUpdating(true);
      
    } catch (error) {
      setMessage('Something is wrong in the fields or database connection');
    }
  }

  const cancelEdit = (event) => {
    event.preventDefault();
    setDashOption(9);
  }

  return (
    <div className='mainContainer'>
        <div className="subContainer">
          <div className="line d-flex">
              <h5 className='line-name'>Category Name</h5>
              <input type="text" className='line-input' ref={refCatName} defaultValue={props.category_name} required/>
          </div>
          <div className='buttonContainer'>
            <button className='save' onClick={saveCategory}>Save</button>
            <button className='cancel' onClick={cancelEdit}>Cancel</button>
          </div>
          <p className='text-danger mt-3 ml-5'>{message}</p>
        </div>
    </div>
  )
}
