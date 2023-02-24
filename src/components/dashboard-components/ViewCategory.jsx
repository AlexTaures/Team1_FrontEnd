import React, { useContext } from 'react';
import { DataContext } from '../../context/DataContext';

export default function ViewCategory() {
  const { dashCat } = useContext(DataContext);
  return (
    <div className='mainContainer d-flex'>
      <div className="subContainer text-start">
          <table>
            <tr>
              <th><h5 className='line-name'>id</h5></th>
              <th><h5 className='line-name'>category_name</h5></th>
            </tr>
            {
            dashCat.map((opt, index)=><tr key={index}><td>{opt.id}</td><td>{opt.category_name}</td></tr>)
          }
          </table>
      </div>
    </div>
  )
}
