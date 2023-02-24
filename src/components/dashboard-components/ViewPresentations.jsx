import React, { useContext } from 'react';
import { DataContext } from '../../context/Datacontext';

export default function ViewPresentations() {
  const { dashPres } = useContext(DataContext);

  return (
    <div className='mainContainer d-flex'>
      <div className="subContainer text-start">
          <table>
            <tr>
              <th><h5 className='line-name'>id</h5></th>
              <th><h5 className='line-name'>presentation_type</h5></th>
            </tr>
            {
            dashPres.map((opt, index)=><tr key={index}><td>{opt.id}</td><td>{opt.presentation_type}</td></tr>)
          }
          </table>
      </div>
    </div>
  )
}
