import React, { useContext } from 'react';
import { DataContext } from '../../context/Datacontext';

export default function ViewPresentations() {
  const { dashPres, setCurrentId,setDashOption } = useContext(DataContext);

  const editPresentation = (event) => {
    event.preventDefault();
    let id = event.target.getAttribute('pres_id');
    setCurrentId(id);
    setDashOption(15);
  }
  return (
    <div className='mainContainer d-flex'>
      <div className="subContainer text-start">
          <table>
            <thead>
            <tr>
              <th><h5 className='line-name'>id</h5></th>
              <th><h5 className='line-name'>presentation_type</h5></th>
              <th><h5 className='line-name'>option</h5></th>
            </tr>
            </thead>
            <tbody>
              {
              dashPres.map((opt, index)=><tr key={index}>
                <td>{opt.id}</td>
                <td>{opt.presentation_type}</td>
                <td><button className='edit' onClick={editPresentation} pres_id={opt.id}>Edit</button></td>
                </tr>)
              }
            </tbody>
          </table>
      </div>
    </div>
  )
}
