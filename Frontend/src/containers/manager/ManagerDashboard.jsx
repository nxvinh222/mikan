import React, { Component } from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import StaffInfo from '../../components/StaffInfo'
import Toolbar from '../../components/Toolbar'

export default class ManagerDashboard extends Component {
    render() {
        return (
            <div>
                <Navbar role="manager" />
                <div className="container list-view">
                    <Toolbar />
                    <StaffInfo />
                </div>
                <Footer />
            </div>

        )
    }
}
