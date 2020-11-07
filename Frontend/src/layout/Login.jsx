import React, { Component } from 'react'

import '../assets/css/login.css'

export default class Login extends Component {
    render() {
        return (
            <div className="container">
                <div className="row ">
                    <div className="col-lg-10 col-xl-9 mx-auto">
                        <div className="card card-signin flex-row my-5">
                            <div className="card-img-left d-none d-md-flex">
                                {/* Background image for card set in CSS! */}
                            </div>
                            <div className="card-body">
                                <h5 className="card-title text-center">
                                    Đăng nhập hệ thống <b className="logo-text">MIKAN</b>
                                    {/* Chinh sua font-logo MIKAN */}
                                </h5>
                                <form className="form-signin">
                                    <div className="form-label-group">
                                        <input type="text" id="inputUserame" className="form-control" placeholder="Username" required autofocus />
                                        <label htmlFor="inputUserame">Tên đăng nhập</label>
                                    </div>
                                    <hr />
                                    <div className="form-label-group">
                                        <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                                        <label htmlFor="inputPassword">Mật khẩu</label>
                                    </div>
                                    {/* <a className="d-block text-center mt-2 small" href="#">Sign In</a> */}
                                    <hr className="my-4" />
                                    <button className="btn btn-lg btn-admin btn-block text-uppercase" type="submit"><i className="fas fa-chart-bar mr-2" />Là Quản trị viên</button>
                                    <button className="btn btn-lg btn-manager btn-block text-uppercase" type="submit"><i className="fas fa-store mr-2" />Là Quản lý cửa hàng</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
