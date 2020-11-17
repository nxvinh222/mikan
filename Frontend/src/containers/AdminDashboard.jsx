import React, { Component } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import StoreList from '../components/StoreList'

export default class AdminDashboard extends Component {
    componentWillMount() {
        this._checkAdmin();
    }

    // simple check admin
    // TODO: check này có đơn giản quá hay không ??
    _checkAdmin = function () {
        console.log(window.localStorage.getItem('username'));
        if (window.localStorage.getItem('username') !== 'admin') {
            // alert("You do not have permission to access");
            window.location.href = "/"
        }
    };

    render() {
        return (
            <div>
                <Navbar role="admin"/>
                <StoreList />
                <Footer />
            </div>
        )
    }
}
