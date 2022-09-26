import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from './Layout.module.css';
// import logo from '../../Assets/Images/logo.svg';

function Layout() {
    return (
        <div className={styles.layout}>
            <div className={styles.layout_content}>
                <div className={styles.layout_header}>
                    {/* <img alt='' src={logo} className={styles.logo} /> */}
                </div>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout;