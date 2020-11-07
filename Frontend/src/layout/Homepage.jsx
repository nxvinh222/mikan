import React, { Component } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default class Homepage extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Footer/>
            </div>
        )
    }
}
