import React, { useContext, useRef, useState   } from 'react';
import axios from 'axios';
import routes from '../../connection/BackendRoutes.json';
import { DataContext } from '../../context/Datacontext';

export default function AddCategory() {
  const refCatName = useRef(null);
  const { dashCat } = useContext(DataContext);
  let [message, setMessage] = useState('');

  const CreateCategory = async () => {
    try {
      const i = dashCat.findIndex( (element) => element.category_name === refCatName.current.value);

      if(i !== -1){
        setMessage('The "category_name" entered already exists in the database.');
        return;
      }else{
      const url = routes['categories'];
      const body = {
        category_name: refCatName.current.value
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
    <div className='mainContainer d-flex'>
        <div className="subContainer text-start">
          <div className="line d-flex">
              <h5 className='line-name'>Category Name</h5>
              <input type="text" className='line-input' ref={refCatName}/>
          </div>
          <button onClick={CreateCategory}>Save</button>
          <p className='text-danger mt-3 ml-5'>{message}</p>
        </div>
    </div>
  )
}
