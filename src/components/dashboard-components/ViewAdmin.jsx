import React, { useContext } from 'react';
import { DataContext } from '../../context/DataContext';

export default function ViewAdmin() {
  const { dashAdmin } = useContext(DataContext);
  return (
    <div className='mainContainer d-flex'>
      <div className="subContainer text-start">
          <table>
            <tr>
              <th><h5 className='line-name'>id</h5></th>
              <th><h5 className='line-name'>user_name</h5></th>
              <th><h5 className='line-name'>password</h5></th>
            </tr>
            {
            dashAdmin.map((opt, index)=><tr key={index}><td>{opt.id}</td><td>{opt.user_name}</td><td>{"*".repeat(opt.password.length)}</td></tr>)
          }
          </table>
      </div>
    </div>
  )
}
