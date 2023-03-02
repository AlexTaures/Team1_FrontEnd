import React, { useContext } from 'react';
import { DataContext } from '../../context/Datacontext';
import '../../styles/dashboard.css';
//DashboardComponents
import Dashboard from './Dashboard';
import AddProducts from './AddProducts';
import AddCategory from './AddCategory';
import AddPresentation from './AddPresentation';
import AddBrand from './AddBrand';
import AddAdmin from './AddAdmin';
import ViewAdmin from './ViewAdmin';
import ViewProducts from './ViewProducts';
import ViewCategory from './ViewCategory';
import ViewPresentations from './ViewPresentations';
import ViewBrands from './ViewBrands';
import ViewSales from './ViewSales';
import EditProducts from './EditProducts';
import EditCategory from './EditCategory';
import EditPresentation from './EditPresentation';
import EditBrand from './EditBrand';


export default function PrincipalContainer() {
  const { dashOption, currentId, dashProd, dashBrands, dashPres, dashCat } = useContext(DataContext);

 if(dashOption === 0){
  return(
    <div className="dash-principal-container pt-4 ps-4">
      <h2>Searching data...</h2>
      <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  )
 }else if(dashOption === 1){
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
      <ViewCategory />
    </div>
  ) 
}else if(dashOption === 10){
  return(
    <div className="dash-principal-container pt-4 ps-4">
      <h2>Presentations</h2>
      <ViewPresentations/>
    </div>
  ) 
}else if(dashOption === 11){
  return(
    <div className="dash-principal-container pt-4 ps-4">
      <h2>Brands</h2>
      <ViewBrands/>
    </div>
  ) 
}else if(dashOption === 12){
  return(
    <div className="dash-principal-container pt-4 ps-4">
      <h2>Sales</h2>
      <ViewSales/>
    </div>
  ) 
}else if(dashOption === 13){
  return(
    <div className="dash-principal-container pt-4 ps-4">
      <h2>Edit Product id = {dashProd[dashProd.findIndex((element) => element.id == currentId)].id}</h2>
      <EditProducts 
          id = {currentId}
          name={dashProd[dashProd.findIndex((element) => element.id == currentId)].name}
          description={dashProd[dashProd.findIndex((element) => element.id == currentId)].description}
          amount={dashProd[dashProd.findIndex((element) => element.id == currentId)].amount}
          price={dashProd[dashProd.findIndex((element) => element.id == currentId)].price}
          admission_date={dashProd[dashProd.findIndex((element) => element.id == currentId)].admission_date}
          expiration_date={dashProd[dashProd.findIndex((element) => element.id == currentId)].expiration_date}
          img_url={dashProd[dashProd.findIndex((element) => element.id == currentId)].img_url}
          brand={dashBrands[
            dashBrands.findIndex((element)=>element.id == dashProd[dashProd.findIndex((element) => element.id == currentId)].brand_id)
          ].brand_name}
          category={dashCat[  
            dashCat.findIndex((element)=>element.id == dashProd[dashProd.findIndex((element) => element.id == currentId)].category_id)
          ].category_name}
          presentation={dashPres[
            dashPres.findIndex((element)=>element.id == dashProd[dashProd.findIndex((element) => element.id == currentId)].presentation_id)
          ].presentation_type}
          />
    </div>
  ) 
}else if(dashOption === 14){
  return(
    <div className="dash-principal-container pt-4 ps-4">
      <h2>Edit Category id = {currentId}</h2>
      <EditCategory 
        id = {currentId}
        category_name = {dashCat[dashCat.findIndex((element) => element.id == currentId)].category_name}
      />
    </div>
  ) 
}else if(dashOption === 15){
  return(
    <div className="dash-principal-container pt-4 ps-4">
      <h2>Edit Presentation id = {currentId}</h2>
      <EditPresentation 
        id = {currentId}
        presentation_type = {dashPres[dashPres.findIndex((element) => element.id == currentId)].presentation_type}
      />
    </div>
  ) 
}else if(dashOption === 16){
  return(
    <div className="dash-principal-container pt-4 ps-4">
      <h2>Edit Brand id = {currentId}</h2>
      <EditBrand
        id = {currentId}
        brand_name = {dashBrands[dashBrands.findIndex((element) => element.id == currentId)].brand_name}
      />
    </div>
  ) 
}



}