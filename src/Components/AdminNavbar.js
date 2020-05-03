import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from "react-router-dom";

import '../Resources/Styling/AdminNavbar.css';
import Logo from '../Resources/Images/Logo.png'

class AdminNavbar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <div className='d-flex flex-row align-items-center justify-content-between navBar'>
                    <div>
                        <img
                            src={Logo}
                            className='logo-img'/>
                    </div>
                    <div className='d-flex flex-row align-items-center justify-content-between navBar-right-section'>
                        <NavLink
                            to='/recentOrders'
                            activeClassName='navLink-active'
                            className='navLink-inactive'
                        >
                            Recent Orders
                        </NavLink>
                        <NavLink
                            to='/allOrders'
                            activeClassName='navLink-active'
                            className='navLink-inactive'
                        >
                            All Orders
                        </NavLink>
                        <NavLink
                            to='/manageProducts'
                            activeClassName='navLink-active'
                            className='navLink-inactive'
                        >
                            Manage Products
                        </NavLink>
                    </div>
                </div>
            </div>
        );
    }
}

export default AdminNavbar;
