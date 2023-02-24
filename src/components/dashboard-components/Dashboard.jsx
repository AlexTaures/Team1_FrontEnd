import React, { useContext } from 'react';
import { DataContext } from '../../context/DataContext';
import '../../styles/dashboard.css';

export default function Dashboard() {

 const { userName } = useContext(DataContext);
 const { dashCustomers, dashSales, dashBrands, dashPres, dashProd, dashCat} = useContext(DataContext);

  return (
    <div className='mainContainer d-flex'>
      <div className="subContainer text-start">
            <div className="line d-flex">
              <h5 className='line-name'><i className="fa-solid fa-code"></i>  Current Administrator</h5>
              <h5 className='line-data'>{userName}</h5>
            </div>
            <div className="line d-flex ">
              <h5 className='line-name'><i className="fa-regular fa-user"></i>  Customers Entries</h5>
              <h5 className='line-data'>{dashCustomers.length}</h5>
            </div>
            <div className="line d-flex">
              <h5 className='line-name'><i className="fa-solid fa-bottle-water"></i>  Products Entries</h5>
              <h5 className='line-data'>{dashProd.length}</h5>
            </div>
            <div className="line d-flex">
              <h5 className='line-name'><i className="fas fa-fw fa-folder"></i> Sales Entries</h5>
              <h5 className='line-data'>{dashSales.length}</h5>
            </div>
      </div>

      <div className="subContainer">
            <div className="line d-flex">
              <h5 className='line-name'><i className="fa-solid fa-copyright"></i> Brands Entries</h5>
              <h5 className='line-data'>{dashBrands.length}</h5>
            </div>
            <div className="line d-flex">
              <h5 className='line-name'><i className="fa-solid fa-bottle-water"></i>  Presentations Entries</h5>
              <h5 className='line-data'>{dashPres.length}</h5>
            </div>
            <div className="line d-flex">
              <h5 className='line-name'><i className="fa-solid fa-bottle-water"></i>  Categories Entries</h5>
              <h5 className='line-data'>{dashCat.length}</h5>
            </div>
            
      </div>
      
      
      
    </div>
  )
}
