import React, { useContext } from 'react';
import { DataContext } from '../../context/DataContext';

export default function ViewBrands() {
  const { dashBrands } = useContext(DataContext);

  return (
    <div className='mainContainer d-flex'>
      <div className="subContainer text-start">
          <table>
            <tr>
              <th><h5 className='line-name'>id</h5></th>
              <th><h5 className='line-name'>brand_name</h5></th>
            </tr>
            {
            dashBrands.map((opt, index)=><tr key={index}><td>{opt.id}</td><td>{opt.brand_name}</td></tr>)
          }
          </table>
      </div>
    </div>
  )
}
