import React, { useContext } from 'react';
import "../styles/sb-admin-2.min.css";
import "../styles/dashboard.css";
import Sidebar from './dashboard-components/Sidebar';
import PrincipalContainer from './dashboard-components/PrincipalContainer';
import FetchData from './dashboard-components/FetchData';
import { DataContext } from '../context/Datacontext';
import { Navigate } from 'react-router-dom';


export default function DashboardAdmin() {
    const { login } = useContext(DataContext);

    
        return (
            login !== 3?
            <Navigate to="/account" replace={true}/>:
            <>
                <FetchData/>
                <Sidebar />
                <div className="dashboardContainer">
                    <PrincipalContainer/>
                </div>
            </>
        )
    
}

