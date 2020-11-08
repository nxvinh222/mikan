import React, { Component } from 'react'

import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import PopUpModal from '../components/PopUpModal'

export default class AdminDashboard extends Component {
    render() {
        return (
            <div className="container">
                <PopUpModal/>
            </div>
        )
    }
}
