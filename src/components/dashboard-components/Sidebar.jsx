import React, { useContext } from 'react';
import '../../styles/dashboard.css';
import { DataContext } from '../../context/DataContext';

export default function Sidebar() {

  const { setDashOption } = useContext(DataContext);


  const setOne = (event) => {
    event.preventDefault();
    setDashOption(1);
  }
  const setTwo = (event) => {
    event.preventDefault();
    setDashOption(2);
  }
  const setThree = (event) => {
    event.preventDefault();
    setDashOption(3);
  }

  const setFour = (event) => {
    event.preventDefault();
    setDashOption(4);
  }

  const setFive = (event) => {
    event.preventDefault();
    setDashOption(5);
  }

  const setSix = (event) => {
    event.preventDefault();
    setDashOption(6);
  }

  const setSeven = (event) => {
    event.preventDefault();
    setDashOption(7);
  }

  const setEight = (event) => {
    event.preventDefault();
    setDashOption(8);
  }

  const setNine = (event) => {
    event.preventDefault();
    setDashOption(9);
  }

  const setTen = (event) => {
    event.preventDefault();
    setDashOption(10);
  }

  const setEleven = (event) => {
    event.preventDefault();
    setDashOption(11);
  }

  const setTwelve = (event) => {
    event.preventDefault();
    setDashOption(12);
  }

  return (
    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">


                    <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                        <div className="sidebar-brand-icon">
                        <i className="fa-solid fa-laptop-code"></i>
                        </div>
                        <div className="sidebar-brand-text mx-3">Admin View</div>
                    </a>


                    <hr className="sidebar-divider my-0" />


                    <li className="nav-item active" onClick={setOne}>
                        <a className="nav-link" >
                            <i className="fa-solid fa-house"></i>
                            <span> Dashboard</span></a>
                    </li>


                    <hr className="sidebar-divider" />


                    <div className="sidebar-heading">
                        Control
                    </div>


                    <li className="nav-item" onClick={setTwo}>
                        <a className="nav-link collapsed"  data-target="#collapseTwo"
                            aria-expanded="true" aria-controls="collapseTwo">
                            <i className="fa-sharp fa-solid fa-user-plus"></i>
                            <span> Add Users Admin</span>
                        </a>
                    </li>


                    <li className="nav-item" onClick={setThree}>
                        <a className="nav-link" data-target="#collapsetilities"
                            aria-expanded="true" aria-controls="collapseUtilities">
                            <i className="fa-sharp fa-solid fa-plus"></i>
                            <span> Add Products</span>
                        </a>
                    </li>
                    <li className="nav-item" onClick={setFour}>
                        <a className="nav-link" data-target="#collapsetilities"
                            aria-expanded="true" aria-controls="collapseUtilities">
                            <i className="fa-sharp fa-solid fa-plus"></i>
                            <span> Add Category</span>
                        </a>
                    </li>
                    <li className="nav-item" onClick={setFive}>
                        <a className="nav-link" data-target="#collapsetilities"
                            aria-expanded="true" aria-controls="collapseUtilities">
                            <i className="fa-sharp fa-solid fa-plus"></i>
                            <span> Add Presentation</span>
                        </a>
                    </li>
                    <li className="nav-item" onClick={setSix}>
                        <a className="nav-link"  data-target="#collapsetilities"
                            aria-expanded="true" aria-controls="collapseUtilities">
                            <i className="fa-sharp fa-solid fa-plus"></i>
                            <span> Add Brand</span>
                        </a>
                    </li>
                    


                    <hr className="sidebar-divider" />


                    <div className="sidebar-heading">
                        Views
                    </div>

                    <li className="nav-item" onClick={setSeven}>
                        <a className="nav-link">
                        <i className="fa-solid fa-user"></i>
                            <span> View Users Admin</span></a>
                    </li>

                    <li className="nav-item" onClick={setEight}>
                        <a className="nav-link collapsed" data-target="#collapseTwo"
                            aria-expanded="true" aria-controls="collapseTwo">
                            <i className="fa-solid fa-bottle-water"></i>
                            <span> View Products</span>
                        </a>
                    </li>

                    <li className="nav-item" onClick={setNine}>
                        <a className="nav-link collapsed" data-target="#collapseTwo"
                            aria-expanded="true" aria-controls="collapseTwo">
                            <i className="fa-solid fa-bottle-water"></i>
                            <span> View Categories</span>
                        </a>
                    </li>

                    <li className="nav-item" onClick={setTen}>
                        <a className="nav-link collapsed"  data-target="#collapseTwo"
                            aria-expanded="true" aria-controls="collapseTwo">
                            <i className="fa-solid fa-bottle-water"></i>
                            <span> View Presentations</span>
                        </a>
                    </li>
                    <li className="nav-item" onClick={setEleven}>
                        <a className="nav-link collapsed" data-target="#collapseTwo"
                            aria-expanded="true" aria-controls="collapseTwo">
                            <i className="fa-solid fa-copyright"></i>
                            <span> View Brands</span>
                        </a>
                    </li>

                    <li className="nav-item" onClick={setTwelve}>
                        <a className="nav-link collapsed" data-target="#collapsePages"
                            aria-expanded="true" aria-controls="collapsePages">
                            <i className="fas fa-fw fa-folder"></i>
                            <span> View Sales</span>
                        </a>
                    </li>


                    


                    <hr className="sidebar-divider d-none d-md-block" />
                </ul>
  )
}
