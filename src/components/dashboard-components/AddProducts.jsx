import React, { useContext, useRef, useState   } from 'react';
import axios from 'axios';
import routes from '../../connection/BackendRoutes.json';
import { DataContext } from '../../context/Datacontext';


export default function AddProducts() {
  const refName = useRef(null);
  const refDesc = useRef(null);
  const refAmount = useRef(null);
  const refPrice = useRef(null);
  const refAddDate = useRef(null);
  const refExpDate = useRef(null);
  const refImgURL = useRef(null);
  const refBrandId = useRef(null);
  const refPresId = useRef(null);
  const refCatId = useRef(null);
  const { dashProd, dashBrands, dashPres, dashCat, setUpdating, updating } = useContext(DataContext);
  let [message, setMessage] = useState('');
  ////////////setDate////////////
  const date = new Date();
    let day = date.getDate();
    if(day<10){day="0"+day}
    let month = date.getMonth() + 1;
    if(month<10){month = "0"+month}
    let year = date.getFullYear();
    let currentDate = `${year}-${month}-${day}`;
  
  

  ////////////BUTTON FUNCTIONS/////////// 
  const CreateProd = async () => {
    try {
      const i = dashProd.findIndex( (element) => element.name === refName.current.value);
      const brandId = dashBrands[
        dashBrands.findIndex((element) => element.brand_name === refBrandId.current.value)].id
      const presId = dashPres[
        dashPres.findIndex((element) => element.presentation_type === refPresId.current.value)].id
      const catId = dashCat[
        dashCat.findIndex((element) => element.category_name === refCatId.current.value)].id
           
      
      if(i !== -1){
        setMessage('The product "name" entered already exists in the database.');
        return;
      }else{
      const url = routes['products'];
      const body = {
        "name": refName.current.value,
        "description": refDesc.current.value,
        "amount": refAmount.current.value,
        "price": refPrice.current.value,
        "admission_date": refAddDate.current.value,
        "expiration_date": refExpDate.current.value,
        "img_url": refImgURL.current.value,
        "brand_id": brandId,
        "presentation_id": presId,
        "category_id": catId
      }
      
      await axios.post(url, body);
      //alert('Admin Created');
      //setDashOption(1);
      updating? setUpdating(false):setUpdating(true);
      }
      
    } catch (error) {
      console.log(error);
      setMessage('Something is wrong in the fields or database connection');
    }
  }

  return (
    <div className='mainContainer'>
        <div className="subContainer">
          <div className="line d-flex">
              <h5 className='line-name'>Name</h5>
              <input type="text" className='line-input' ref={refName}/>
          </div>
          <div className="line d-flex">
              <h5 className='line-name'>Descripcion</h5>
              <input type="text" className='line-input' ref={refDesc}/>
          </div>
          <div className="line d-flex">
              <h5 className='line-name'>Price $</h5>
              <input type="text" className='line-input' ref={refPrice}/>
          </div>
          <div className="line d-flex">
              <h5 className='line-name'>Stock</h5>
              <input type="number" min="1" className='line-input' ref={refAmount}/>
          </div>
          <div className="line d-flex">
              <h5 className='line-name'>Admission Date</h5>
              <input type="date" className='line-input' ref={refAddDate} defaultValue={currentDate} disabled/>
          </div>
          <div className="line d-flex">
              <h5 className='line-name'>Expiration Date</h5>
              <input type="date" className='line-input' min={currentDate} ref={refExpDate} defaultValue={currentDate}/>
          </div>
          <div className="line d-flex">
              <h5 className='line-name'>Image URL</h5>
              <input type="text" className='line-input' ref={refImgURL}/>
          </div>
          <div className="line d-flex">
              <h5 className='line-name'>Brand</h5>
              <select className='line-input' ref={refBrandId} required>
                <option value=""></option>
              {
                dashBrands.map((opt, index)=><option key={index}>{opt.brand_name}</option>)
               }
              </select>
          </div>
          <div className="line d-flex">
              <h5 className='line-name'>Presentation</h5>
              <select className='line-input' ref={refPresId}>
              <option value=""></option>
              {
                dashPres.map((opt, index)=><option key={index}>{opt.presentation_type}</option>)
               }
              </select>
          </div>
          <div className="line d-flex">
              <h5 className='line-name'>Category</h5>
              <option value=""></option>
              <select className='line-input' ref={refCatId}>
                <option value=""></option>
              {
                dashCat.map((opt, index)=><option key={index}>{opt.category_name}</option>)
               }
              </select>
          </div>
          <button onClick={CreateProd}>Save</button>
          <p className='text-danger mt-3 ml-5'>{message}</p>
        </div>
        
      </div>
  )
}
