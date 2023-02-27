import React, { useContext, useRef, useState } from 'react'
import { DataContext } from '../../context/Datacontext';
import routes from '../../connection/BackendRoutes.json';
import axios from 'axios';

export default function EditProducts(props) {
  const refName = useRef(null);
  const refDesc = useRef(null);
  const refAmount = useRef(null);
  const refPrice = useRef(null);
  const refAddDate = useRef(null);
  const refExpDate = useRef(null);
  const refBrandId = useRef(null);
  const refPresId = useRef(null);
  const refCatId = useRef(null);
  const { dashBrands, dashPres, dashCat, setDashOption } = useContext(DataContext);
  let [message, setMessage] = useState('');


  /****save changes************/
  const saveProd = async () => {
    try {
      //const i = dashProd.findIndex( (element) => element.name === refName.current.value);
      const brandId = dashBrands[
        dashBrands.findIndex((element) => element.brand_name === refBrandId.current.value)].id
      const presId = dashPres[
        dashPres.findIndex((element) => element.presentation_type === refPresId.current.value)].id
      const catId = dashCat[
        dashCat.findIndex((element) => element.category_name === refCatId.current.value)].id
           
      const url = routes['products']+`/${props.id}`;
      const body = {
        "name": refName.current.value,
        "description": refDesc.current.value,
        "amount": refAmount.current.value,
        "price": refPrice.current.value,
        "admission_date": refAddDate.current.value,
        "expiration_date": refExpDate.current.value,
        "brand_id": brandId,
        "presentation_id": presId,
        "category_id": catId
      }
      
      await axios.put(url, body);
      //alert('Admin Created');
      //setDashOption(1);
      window.location.reload(false);
      
      
    } catch (error) {
      console.log(error);
      setMessage('Something is wrong in the fields or database connection');
    }
  }

  const cancelEdit = (event) => {
    event.preventDefault();
    setDashOption(8);
  }

  return (
    <div className='mainContainer d-flex'>
        <div className="subContainer text-start">
          <div className="line d-flex">
              <h5 className='line-name'>Name</h5>
              <input type="text" className='line-input' ref={refName} defaultValue={props.name}/>
          </div>
          <div className="line d-flex">
              <h5 className='line-name'>Descripcion</h5>
              <input type="text" className='line-input' ref={refDesc} defaultValue={props.description}/>
          </div>
          <div className="line d-flex">
              <h5 className='line-name'>Price</h5>
              <input type="text" className='line-input' ref={refPrice} defaultValue={props.price}/>
          </div>
          <div className="line d-flex">
              <h5 className='line-name'>Amount</h5>
              <input type="text" className='line-input' ref={refAmount} defaultValue={props.amount}/>
          </div>
          <div className="line d-flex">
              <h5 className='line-name'>Admission Date</h5>
              <input type="date" className='line-input' ref={refAddDate} defaultValue={props.admission_date}/>
          </div>
          <div className="line d-flex">
              <h5 className='line-name'>Expiration Date</h5>
              <input type="date" className='line-input' ref={refExpDate} defaultValue={props.expiration_date}/>
          </div>
          <div className="line d-flex">
              <h5 className='line-name'>Brand</h5>
              <select className='line-input' ref={refBrandId} defaultValue={props.brand} required>
                <option value=""></option>
              {
                dashBrands.map((opt, index)=>
                
                <option key={index}>{opt.brand_name}</option>
                )
               }
              </select>
          </div>
          <div className="line d-flex">
              <h5 className='line-name'>Presentation</h5>
              <select className='line-input' ref={refPresId} defaultValue={props.presentation} required>
              <option value=""></option>
              {
                dashPres.map((opt, index)=><option key={index}>{opt.presentation_type}</option>)
               }
              </select>
          </div>
          <div className="line d-flex">
              <h5 className='line-name'>Category</h5>
              <option value=""></option>
              <select className='line-input' ref={refCatId} defaultValue={props.category} required>
                <option value=""></option>
              {
                dashCat.map((opt, index)=><option key={index}>{opt.category_name}</option>)
               }
              </select>
          </div>
          <div className='buttonContainer'>
            <button className='save' onClick={saveProd}>Save</button>
            <button className='cancel' onClick={cancelEdit}>Cancel</button>
          </div>
          <p className='text-danger mt-3 ml-5'>{message}</p>
        </div>
        
      </div>
  )
}
