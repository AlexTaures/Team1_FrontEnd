import React, { useContext } from 'react';
import { DataContext } from '../../context/Datacontext';

export default function ViewCategory() {
  const { dashCat, setCurrentId, setDashOption} = useContext(DataContext);

  const editCategory = (event) => {
    event.preventDefault();
    let id = event.target.getAttribute('cat_id');
    setCurrentId(id);
    setDashOption(14);
  }


  return (
    <div className='mainContainer'>
      <div className="subContainer">
          <table>
            <thead>
            <tr>
              <th><h5 className='line-name'>id</h5></th>
              <th><h5 className='line-name'>category_name</h5></th>
              <th><h5 className='line-name'>option</h5></th>
            </tr>
            </thead>
            <tbody>
              {
              dashCat.map((opt, index)=><tr key={index}>
                <td>{opt.id}</td>
                <td>{opt.category_name}</td>
                <td><button className='edit' onClick={editCategory} cat_id={opt.id}>Edit</button></td>
                </tr>)
              }
            </tbody>
          </table>
      </div>
    </div>
  )
}
