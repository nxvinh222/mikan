import React, { Component } from 'react'

import '../assets/css/login.css'

export default class Login extends Component {
    state = {
        username: '',
        password: '',
        role: ''
    }

    // Khi bấm nút back thì phải đăng nhập lại
    componentDidMount() {
        if (window.localStorage.getItem('username')) {
            window.localStorage.removeItem("username");
        }
    }

    handleChange = (event) => {
        let target = event.target;
        let value = target.value;
        let name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('username', this.state.username);
        window.location.href = `/${this.state.role}`;
    }

    render() {
        return (
            <div className="container-signin">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 col-xl-9 mx-auto">
                            <div className="card card-signin flex-row my-5">
                                <div className="card-img-left d-none d-md-flex">
                                    {/* Background image for card set in CSS! */}
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title text-center">
                                        Đăng nhập hệ thống <b className="logo-text">MIKAN</b>
                                    </h5>
                                    <form className="form-signin" onSubmit={this.handleSubmit}>
                                        <div className="form-label-group">
                                            <input type="text" id="inputUserame" className="form-control" placeholder="Username" name="username" required autofocus
                                                value={this.state.username} onChange={this.handleChange} />
                                            <label htmlFor="inputUserame">Tên đăng nhập</label>
                                        </div>
                                        <div className="form-label-group">
                                            <input type="password" id="inputPassword" className="form-control" placeholder="Password" name="password" required
                                                value={this.state.password} onChange={this.handleChange} />
                                            <label htmlFor="inputPassword">Mật khẩu</label>
                                        </div>
                                        {/* <a className="d-block text-center mt-2 small" href="#">Sign In</a> */}
                                        <hr className="my-4" />
                                        <button className="btn btn-lg btn-admin btn-block text-uppercase" type="submit" name="role" value="admin"
                                            onClick={this.handleChange}><i className="fas fa-chart-bar mr-2" />Là Quản trị viên</button>
                                        <button className="btn btn-lg btn-manager btn-block text-uppercase" type="submit" name="role" value="manager"
                                            onClick={this.handleChange}><i className="fas fa-store mr-2" />Là Quản lý cửa hàng</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
