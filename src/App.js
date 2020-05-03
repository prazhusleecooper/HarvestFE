import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import './App.css';
import AdminNavbar from "./Components/AdminNavbar";
import RecentOrders from "./Components/RecentOrders";
import AllOrders from "./Components/AllOrders";
import ManageProducts from "./Components/ManageProducts";

class App extends Component{
    render() {
        return (
            <Router>
                <AdminNavbar />
                <Switch>
                    <Route path='/recentOrders'>
                        <RecentOrders />
                    </Route>
                    <Route path='/allOrders'>
                        <AllOrders />
                    </Route>
                    <Route path='/manageProducts'>
                        <ManageProducts />
                    </Route>
                </Switch>
            </Router>
        );
    }
}

export default App;
