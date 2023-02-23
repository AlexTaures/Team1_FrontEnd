import React from 'react';
import "../styles/sb-admin-2.min.css";
import "../styles/dashboard.css";
import Sidebar from './dashboard-components/Sidebar';
import PrincipalContainer from './dashboard-components/PrincipalContainer';

export default function DashboardAdmin() {

    return (
        <>
            <div id="wrapper">
                <Sidebar />
                <PrincipalContainer/>
            </div>

        </>
    )

}
