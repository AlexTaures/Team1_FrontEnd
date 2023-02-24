import React, { useContext, useRef, useState   } from 'react';
import axios from 'axios';
import routes from '../../connection/BackendRoutes.json';
import { DataContext } from '../../context/DataContext';

export default function AddBrand() {
    const refBrandName = useRef(null);
    const { dashBrands } = useContext(DataContext);
    let [message, setMessage] = useState('');

    const CreateBrand = async () => {
      try {
        const i = dashBrands.findIndex( (element) => element.brand_name === refBrandName.current.value);
  
        if(i !== -1){
          setMessage('The "brand_name" entered already exists in the database.');
          return;
        }else{
        const url = routes['brands'];
        const body = {
          brand_name: refBrandName.current.value
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
              <h5 className='line-name'>Brand Name</h5>
              <input type="text" className='line-input' ref={refBrandName}/>
          </div>
          <button onClick={CreateBrand}>Save</button>
          <p className='text-danger mt-3 ml-5'>{message}</p>
        </div>
    </div>
  )
}
