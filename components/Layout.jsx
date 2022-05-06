import React from 'react';
import Dashboard from './Sidebar/Dashboard';


export default function Layout({children}) {
    return(
        <>
        <div className='container-layout'>
        <div className='sidebar-layout'>
            <Dashboard/>
        </div>
        <div className='section'>
        {children}
        </div>
        </div>
        </>
    )
}