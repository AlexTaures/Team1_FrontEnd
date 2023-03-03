import React, { useContext } from 'react';
import { DataContext } from '../../context/Datacontext';

export default function ViewSales() {
  const { dashSales, setDetail, setCurrentId, setDashOption } = useContext(DataContext);

  const viewDetail = (event) => {
    event.preventDefault();
    let det = event.target.getAttribute('detail');
    let id = event.target.getAttribute('id');
    setDetail(det);
    setCurrentId(id);
    setDashOption(17);
  }

  return (
    <div className='mainContainer' id='productTable'>
      <div className="subContainer">
          <table className='weight_tab'>
            <tr>
              <th><h5 className='line-name'>id</h5></th>
              <th><h5 className='line-name'>sale_date</h5></th>
              <th><h5 className='line-name'>total_sale</h5></th>
              <th><h5 className='line-name'>customer_id</h5></th>
              <th><h5 className='line-name'>details</h5></th>
            </tr>
            {
            dashSales.map((opt, index)=><tr key={index}>
                <td>{opt.id}</td>
                <td>{opt.sale_date}</td>
                <td>{opt.total_sale}</td>
                <td>{opt.customer_id}</td>
                <td><button className='edit' detail={opt.products} id={opt.id} onClick={viewDetail}>Details</button></td>
                </tr>)
          }
          </table>
      </div>
    </div>
  )
}
