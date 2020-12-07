import React, { Component } from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'

export default class ManagerDashboard extends Component {

    // componentWillMount() {
    //     this._checkManager();
    // }

    // // simple check admin
    // // TODO: check này có đơn giản quá hay không ??
    // _checkManager = function () {
    //     // console.log(window.localStorage.getItem('username'));
    //     if (window.localStorage.getItem('role') !== 'manager') {
    //         alert("You do not have permission to access");
    //         window.location.href = "/"
    //     }
    // };

    render() {
        return (
            <div>
                <Navbar role="manager" />
                <div className="container list-view">
                </div>
                <Footer />
            </div>

        )
    }
}
