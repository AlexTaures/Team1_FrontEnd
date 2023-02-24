import React, { useContext } from 'react';
import { DataContext } from '../../context/Datacontext';

export default function ViewProducts() {
  const { dashProd, dashBrands, dashPres } = useContext(DataContext);

  return (
    <div className='mainContainer d-flex' id='weightView'>
      <div className="subContainer text-start">
          <table className='weight_tab'>
            <tr>
              <th><h5 className='line-name'>id</h5></th>
              <th><h5 className='line-name'>name</h5></th>
              <th><h5 className='line-name'>description</h5></th>
              <th><h5 className='line-name'>price</h5></th>
              <th><h5 className='line-name'>admission_date</h5></th>
              <th><h5 className='line-name'>expiration_date</h5></th>
              <th><h5 className='line-name'>brand_id</h5></th>
              <th><h5 className='line-name'>presentation_id</h5></th>
              <th><h5 className='line-name'>category_id</h5></th>

            </tr>
            {
            dashProd.map((opt, index)=><tr key={index}>
              <td>{opt.id}</td>
              <td>{opt.name}</td>
              <td>{opt.description}</td>
              <td>{opt.price}</td>
              <td>{opt.admission_date}</td>
              <td>{opt.expiration_date}</td>
              <td>{opt.brand_id}</td>
              <td>{opt.presentation_id}</td>
              <td>{opt.category_id}</td>
              
              
              </tr>)
          }
          </table>
      </div>
    </div>
  )
}
