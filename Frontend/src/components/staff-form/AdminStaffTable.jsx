import React, { Component } from 'react'

export default class AdminStaffTable extends Component {
    render() {
        return (
            <div>
                <button type="button" className="btn btn-dark mb-3" data-toggle="modal" data-target="#newModal">
                    <i className="fas fa-plus mr-2" />Thêm nhân viên
                </button>
                <div className="card card-employee card-margin">
                    <div className="card-body">
                        <div className="row search-body">
                            <div className="col-lg-12">
                                <div className="search-result">
                                    <div className="result-body">
                                        <div className="table-responsive">
                                            <table className="table table-striped">
                                                <thead className="table-dark">
                                                    <tr>
                                                        <th scope="col">Cửa hàng</th>
                                                        <th scope="col">Tên</th>
                                                        <th scope="col">Card ID</th>
                                                        <th scope="col">Vị trí</th>
                                                        <th scope="col">Số điện thoại</th>
                                                        <th scope="col"></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">Cửa hàng Cicle K Long Biên</th>
                                                        <td>Lương Sơn Bá</td>
                                                        <td>0981122233</td>
                                                        <td>Avenger</td>
                                                        <td>0918345112</td>
                                                        <td>
                                                            <div className="widget-26-job-starred">
                                                                <a href="#">
                                                                    <i className="fas fa-edit" />
                                                                </a>
                                                                <span> | </span>
                                                                <a href="#myModal" className="trigger-btn" data-toggle="modal">
                                                                    <i className="fas fa-trash-alt" />
                                                                </a>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
