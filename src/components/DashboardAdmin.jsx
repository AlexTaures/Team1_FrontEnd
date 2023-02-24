import React from 'react';
import "../styles/sb-admin-2.min.css";
import "../styles/dashboard.css";
import Sidebar from './dashboard-components/Sidebar';
import PrincipalContainer from './dashboard-components/PrincipalContainer';
import FetchData from './dashboard-components/FetchData';

export default function DashboardAdmin() {

    return (
        <>
            <FetchData/>
            <div id="wrapper">
                <Sidebar />
                <PrincipalContainer/>
            </div>

        </>
    )

}
