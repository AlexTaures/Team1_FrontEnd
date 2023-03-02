import React, { useContext } from 'react';
import { DataContext } from '../../context/Datacontext';
import EditProducts from './EditProducts';


export default function ViewProducts() {
  const { dashProd, dashBrands, dashPres, dashCat, setDashOption, setCurrentId} = useContext(DataContext);  

  const editProduct = (event) => {
    event.preventDefault();
    let id = event.target.getAttribute('prod_id');
    setCurrentId(id);
    setDashOption(13);
  }

  return (
    <div className='mainContainer'>
      <div className="subContainer">
          <table>
            <thead>
              <tr>
              <th><h5 className='line-name'>id</h5></th>
              <th><h5 className='line-name'>name</h5></th>
              <th><h5 className='line-name'>description</h5></th>
              <th><h5 className='line-name'>price</h5></th>
              <th><h5 className='line-name'>admission_date</h5></th>
              <th><h5 className='line-name'>expiration_date</h5></th>
              <th><h5 className='line-name'>brand</h5></th>
              <th><h5 className='line-name'>presentation</h5></th>
              <th><h5 className='line-name'>category</h5></th>
              <th><h5 className='line-name'>option</h5></th>
              </tr>
            </thead>
            <tbody>
            {
            dashProd.map((opt, index)=><tr key={index}>
              <td>{opt.id}</td>
              <td>{opt.name}</td>
              <td>{opt.description}</td>
              <td>{opt.price}</td>
              <td>{opt.admission_date}</td>
              <td>{opt.expiration_date}</td>
              <td>{dashBrands[dashBrands.findIndex((element) => element.id === opt.brand_id)].brand_name}</td>
              <td>{dashPres[dashPres.findIndex((element) => element.id === opt.presentation_id)].presentation_type}</td>
              <td>{dashCat[dashCat.findIndex((element) => element.id === opt.category_id)].category_name}</td>
              <td><button className='edit' onClick={editProduct} prod_id={opt.id}>Edit</button></td>
              </tr>)
          }
            </tbody>
          </table>
      </div>
    </div>
  )
}
