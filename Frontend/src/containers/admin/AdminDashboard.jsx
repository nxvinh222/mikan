import React, { Component } from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import StoreList from '../../components/StoreList'

export default class AdminDashboard extends Component {
    componentWillMount() {
        this.props.checkAdmin();
    }

    render() {
        return (
            <div>
                <Navbar role="admin" />
                <div className="container mt-3">
                    <StoreList />
                </div>
                <Footer />
            </div>
        )
    }
}
