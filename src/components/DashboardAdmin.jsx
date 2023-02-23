import React from 'react'
import "../styles/sb-admin-2.min.css"
import "../styles/dashboard.css"
export default function DashboardAdmin() {
    return (
        <>
            <div id="wrapper">

                <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">


                    <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                        <div className="sidebar-brand-icon rotate-n-15">
                            <i className="fas fa-laugh-wink"></i>
                        </div>
                        <div className="sidebar-brand-text mx-3">Admin View</div>
                    </a>


                    <hr className="sidebar-divider my-0" />


                    <li className="nav-item active">
                        <a className="nav-link" href="#">
                            <i class="fa-solid fa-house"></i>
                            <span>Dashboard</span></a>
                    </li>


                    <hr className="sidebar-divider" />


                    <div className="sidebar-heading">
                        Control
                    </div>


                    <li className="nav-item">
                        <a className="nav-link collapsed" href="#" data-target="#collapseTwo"
                            aria-expanded="true" aria-controls="collapseTwo">
                            <i class="fa-solid fa-user"></i>
                            <span>View users</span>
                        </a>
                    </li>


                    <li className="nav-item">
                        <a className="nav-link" href="#" data-target="#collapsetilities"
                            aria-expanded="true" aria-controls="collapseUtilities">
                            <i class="fa-sharp fa-solid fa-plus"></i>
                            <span>Add Products</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link collapsed" href="#" data-target="#collapseTwo"
                            aria-expanded="true" aria-controls="collapseTwo">
                            <i class="fa-solid fa-eye"></i>
                            <span>View Products</span>
                        </a>
                    </li>


                    <hr className="sidebar-divider" />


                    <div className="sidebar-heading">
                        Addons
                    </div>


                    <li className="nav-item">
                        <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
                            aria-expanded="true" aria-controls="collapsePages">
                            <i className="fas fa-fw fa-folder"></i>
                            <span>Pages</span>
                        </a>
                    </li>


                    <li className="nav-item">
                        <a className="nav-link" href="charts.html">
                            <i className="fas fa-fw fa-chart-area"></i>
                            <span>Charts</span></a>
                    </li>


                    <li className="nav-item">
                        <a className="nav-link" href="tables.html">
                            <i className="fas fa-fw fa-table"></i>
                            <span>Tables</span></a>
                    </li>


                    <hr className="sidebar-divider d-none d-md-block" />
                </ul>



                <div className="dash-principal-container pt-4 ps-4">
                    <div class="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 class="h3 mb-0 text-gray-800">Statistics</h1>
                    </div>
                    <div class="row statistics-container">

                        <div class="col-xl-4 col-md-6 mb-4">
                            <div class="card border-left-primary shadow h-100 py-2">
                                <div class="card-body">
                                    <div class="row no-gutters align-items-center">
                                        <div class="col mr-2">
                                            <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                Sold Products</div>
                                            <div class="h5 mb-0 font-weight-bold text-gray-800">$40,000</div>
                                        </div>
                                        <div class="col-auto">
                                            <i class="fas fa-calendar fa-2x text-gray-300"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="col-xl-4 col-md-6 mb-4 ">
                            <div class="card border-left-success shadow h-100 py-2">
                                <div class="card-body">
                                    <div class="row no-gutters align-items-center">
                                        <div class="col mr-2">
                                            <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                                                Earnings Generated</div>
                                            <div class="h5 mb-0 font-weight-bold text-gray-800">$215,000</div>
                                        </div>
                                        <div class="col-auto">
                                            <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        <div className="container-info-dash">
        <div class="col-lg-7 mb-4 ">


<div class="card shadow mb-4">
    <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary">What can you do?</h6>
    </div>
    <div class="card-body">
        <div class="text-center">
        </div>
        <p>Manage the different activities and functions of your business, update your product and inventory data, you can also control users and add your products easily and efficiently.</p>

        <p>
            LLeva control de tus finanzas y de productos vendidos para un mejor control en tu inventario a futuro.

        </p>
    </div>
</div>


<div class="card shadow mb-4">
    <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary">How to start?</h6>
    </div>
    <div class="card-body">
        <p>Start in the control section where you can see your products in an orderly manner, as well as create new inventory, update inventory or delete inventory, in the user section you can disable accounts that violate your policies</p>
    </div>
</div>

</div>
        </div>
                    
                </div>
            </div>

        </>
    )

}
