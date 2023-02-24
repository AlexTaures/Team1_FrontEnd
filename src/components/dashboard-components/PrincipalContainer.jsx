import React, { useContext } from 'react';
import { DataContext } from '../../context/DataContext';
//DashboardComponents
import Dashboard from './Dashboard';
import AddProducts from './AddProducts';
import AddCategory from './AddCategory';
import AddPresentation from './AddPresentation';
import AddBrand from './AddBrand';
import AddAdmin from './AddAdmin';
import ViewAdmin from './ViewAdmin';
import ViewProducts from './ViewProducts';


export default function PrincipalContainer() {
  const { dashOption } = useContext(DataContext);

 if(dashOption === 1){
  return(
    <div className="dash-principal-container pt-4 ps-4">
      <h2>Dashboard</h2>
      <Dashboard />
    </div>
  )
 }else if(dashOption === 2){
  return(
    <div className="dash-principal-container pt-4 ps-4">
      <h2>Add User Admin</h2>
      <AddAdmin/>
    </div>
  ) 
}else if(dashOption === 3){
  return(
    <div className="dash-principal-container pt-4 ps-4">
      <h2>Add Products</h2>
      <AddProducts />
    </div>
  ) 
}else if(dashOption === 4){
  return(
    <div className="dash-principal-container pt-4 ps-4">
      <h2>Add Category</h2>
      <AddCategory />
    </div>
  ) 
}else if(dashOption === 5){
  return(
    <div className="dash-principal-container pt-4 ps-4">
      <h2>Add Presentation</h2>
      <AddPresentation />
    </div>
  ) 
}else if(dashOption === 6){
  return(
    <div className="dash-principal-container pt-4 ps-4">
      <h2>Add Brand</h2>
      <AddBrand />
    </div>
  ) 
}else if(dashOption === 7){
  return(
    <div className="dash-principal-container pt-4 ps-4">
      <h2>User Administrators</h2>
      <ViewAdmin />
    </div>
  ) 
}else if(dashOption === 8){
  return(
    <div className="dash-principal-container pt-4 ps-4">
      <h2>Products</h2>
      <ViewProducts/>
    </div>
  ) 
}else if(dashOption === 9){
  return(
    <div className="dash-principal-container pt-4 ps-4">
      <h2>Categories</h2>
    </div>
  ) 
}else if(dashOption === 10){
  return(
    <div className="dash-principal-container pt-4 ps-4">
      <h2>Presentations</h2>
    </div>
  ) 
}else if(dashOption === 11){
  return(
    <div className="dash-principal-container pt-4 ps-4">
      <h2>Brands</h2>
    </div>
  ) 
}else if(dashOption === 12){
  return(
    <div className="dash-principal-container pt-4 ps-4">
      <h2>Sales</h2>
    </div>
  ) 
}



}