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
                                    <a className="nav-link js-scroll-trigger" href={`/${this.props.role}`}>
                                        <i className="fas fa-eye"></i> Tổng quan</a>
                                </li>
                                {this.props.role !== 'admin' ? (
                                    <li className="nav-item">
                                        <a className="nav-link js-scroll-trigger" href="/manager/shop">
                                            <i className="fas fa-store"></i> Cửa hàng</a>
                                    </li>
                                ) : null}
                                <li className="nav-item">
                                {this.props.role !== 'admin' ? (
                                    <a className="nav-link js-scroll-trigger" href="/manager/staff">
                                        <i className="fas fa-user-friends"></i> Nhân viên</a>
                                ) : (
                                    <a className="nav-link js-scroll-trigger" href="/admin/staff">
                                        <i className="fas fa-user-friends"></i> Nhân viên</a>
                                )}
                                </li>
                                {this.props.role !== 'admin' ? (
                                    <li className="nav-item">
                                        <a className="nav-link js-scroll-trigger" href="/manager/items">
                                            <i className="fas fa-cube"></i> Hàng hóa</a>
                                    </li>
                                ) : null}
                            </ul>
                            {/* Account Button */}
                            <div className="account ml-auto text-white">
                                <div>
                                    <b className="">{window.localStorage.getItem('username')}</b>
                                    <a href="/" onClick={this.signOut}><i className="fas fa-sign-out-alt textwhite"></i> Đăng xuất</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
