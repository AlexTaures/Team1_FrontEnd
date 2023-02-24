import React, { useContext } from 'react';
import { DataContext } from '../../context/DataContext';

export default function ViewAdmin() {
  const { dashAdmin } = useContext(DataContext);
  return (
    <div className='mainContainer d-flex'>
      <div className="subContainer text-start">
          <table>
            <tr>
              <th>id</th>
              <th>user_name</th>
            </tr>
            {
            dashAdmin.map((opt, index)=><tr key={index}><th>{opt.id}</th><th>{opt.user_name}</th></tr>)
          }
          </table>
      </div>
    </div>
  )
}
