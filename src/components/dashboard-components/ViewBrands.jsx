import React, { useContext } from 'react';
import { DataContext } from '../../context/Datacontext';

export default function ViewBrands() {
  const { dashBrands, setCurrentId, setDashOption } = useContext(DataContext);

  const editBrand = (event) => {
    event.preventDefault();
    let id = event.target.getAttribute('brand_id');
    setCurrentId(id);
    setDashOption(16);
  }

  return (
    <div className='mainContainer'>
      <div className="subContainer">
          <table>
            <thead>
              <tr>
                <th><h5 className='line-name'>id</h5></th>
                <th><h5 className='line-name'>brand_name</h5></th>
                <th><h5 className='line-name'>option</h5></th>
              </tr>
            </thead>
            <tbody>
              {
              dashBrands.map((opt, index)=><tr key={index}>
                <td>{opt.id}</td>
                <td>{opt.brand_name}</td>
                <td><button className='edit' onClick={editBrand} brand_id={opt.id}>Edit</button></td>
                </tr>)
              }
            </tbody>
          </table>
      </div>
    </div>
  )
}
