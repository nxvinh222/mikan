import React, { Component } from 'react'
import logo from '../assets/img/MIKAN-logo.png';

import '../assets/css/navbar.css'

export default class Navbar extends Component {
    signOut = () => {
        localStorage.removeItem("username");
        window.location.href = '/'
    }

    render() {
        return (
            <div>
                {/* Navigation */}
                <nav className="navbar navbar-expand-lg bg-orange navbar-dark" id="mainNav">
                    <div className="container navbar-container">
                        <a className="navbar-brand js-scroll-trigger" href="#page-top">
                            <img
                                src={logo}
                                height="60rem"
                                alt="Mikan Logo"
                            />
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon align-center" />
                        </button>
                        {/* Function List */}
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link js-scroll-trigger" href="/admin">
                                        <i className="fas fa-eye"></i> Tổng quan</a>
                                </li>
                                {this.props.role !== 'admin' ? (
                                    <li className="nav-item">
                                        <a className="nav-link js-scroll-trigger" href="#store">
                                            <i className="fas fa-store"></i> Cửa hàng</a>
                                    </li>
                                ) : null}
                                <li className="nav-item">
                                    <a className="nav-link js-scroll-trigger" href="#staff">
                                        <i className="fas fa-user-friends"></i> Nhân viên</a>
                                </li>
                                {this.props.role !== 'admin' ? (
                                    <li className="nav-item">
                                        <a className="nav-link js-scroll-trigger" href="#product">
                                            <i className="fas fa-cube"></i> Hàng hóa</a>
                                    </li>
                                ) : null}
                            </ul>
                            {/* Account Button */}
                            <div className="account dropdown ml-auto">
                                <button type="button" className="btn btn-danger" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i class="fas fa-user-lock"></i>
                                </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a class="dropdown-item"><b>{window.localStorage.getItem('username')}</b></a>
                                    <a class="dropdown-item" href=""><i className="fas fa-user"></i> Tài khoản</a>
                                    <a class="dropdown-item" href="/" onClick={this.signOut}><i class="fas fa-sign-out-alt"></i> Đăng xuất</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
