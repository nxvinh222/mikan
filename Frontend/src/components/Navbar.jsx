import React, { Component } from 'react'

import '../assets/css/navbar.css'

export default class Navbar extends Component {
    render() {
        return (
            <div>
                {/* Navigation */}
                <nav className="navbar navbar-expand-lg bg-orange navbar-dark fixed-top" id="mainNav">
                    <div className="container navbar-container">
                        <a className="navbar-brand js-scroll-trigger" href="#page-top">
                            <img
                                src="img/MIKAN-logo.png"
                                height="60rem"
                                alt="Mikan Logo"
                            />
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        {/* Function List */}
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link js-scroll-trigger" href="#store">STORE</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link js-scroll-trigger" href="#staff">STAFF</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link js-scroll-trigger" href="#product">PRODUCT</a>
                                </li>
                            </ul>
                        </div>
                        {/* Login Button */}
                        <button type="button" className="btn btn-danger" data-toggle="modal" data-target="#exampleModalCenter">
                            SIGN IN <i className="fas fa-user" style={{ fontSize: '1rem', color: 'white' }} />
                        </button>
                        {/* Modal */}
                        <div className="modal fade" id="exampleModalCenter" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">×</span>
                                        </button>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-primary">Save changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
