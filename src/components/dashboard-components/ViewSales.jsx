import React, { useContext } from 'react';
import { DataContext } from '../../context/Datacontext';

export default function ViewSales() {
  const { dashSales } = useContext(DataContext);

  return (
    <div className='mainContainer d-flex' id='weightView'>
      <div className="subContainer text-start">
          <table className='weight_tab'>
            <tr>
              <th><h5 className='line-name'>id</h5></th>
              <th><h5 className='line-name'>products</h5></th>
              <th><h5 className='line-name'>sale_date</h5></th>
              <th><h5 className='line-name'>total_sale</h5></th>
              <th><h5 className='line-name'>customer_id</h5></th>
            </tr>
            {
            dashSales.map((opt, index)=><tr key={index}>
                <td>{opt.id}</td>
                <td>{opt.products}</td>
                <td>{opt.sale_date}</td>
                <td>{opt.total_sale}</td>
                <td>{opt.customer_id}</td>
                </tr>)
          }
          </table>
      </div>
    </div>
  )
}
