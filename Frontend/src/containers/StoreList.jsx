import React, { Component } from 'react'

import '../assets/css/store.css'
import DelConfirmModal from '../components/DelConfirmModal'

export default class StoreList extends Component {
    render() {
        return (
            <div className="container">
                {/* Toolbar: Filter & Search*/}
                <div className="tool-bar">
                    <div className="filter">
                        <select class="custom-select">
                            <option selected>Khu vực</option>
                            <option value="1">Hà Nội</option>
                            <option value="2">Hải Phòng</option>
                            <option value="3">Hồ Chí Minh</option>
                        </select>
                    </div>
                    <div className="input-group search-input">
                        <input type="text" className="form-control" placeholder="Tìm kiếm..." aria-label="" aria-describedby="button-addon2" />
                        <div className="input-group-append">
                            <button className="btn btn-base" type="button" id="button-addon2">
                                <i class="fas fa-search"></i>
                            </button>
                        </div>
                    </div>
                    <button type="button" className="btn btn-dark" data-toggle="tooltip" data-placement="right" title="Tooltip on right">
                        <i className="fas fa-plus" />
                    </button>
                </div>
                {/* End Toolbar*/}

                <div className="row">
                    <div className="col-lg-12">
                        <div className="records">Showing: <b>1-20</b> of <b>200</b> result</div>
                    </div>
                </div>

                {/* Store List */}
                <div className="row d-flex justify-content-center store-list">
                    <div className="col-12">
                        {/* Store Card */}
                        <div className="card">
                            <div className="row">
                                <div className="col-5 store-img">
                                    <a href="">
                                        <img src="https://www.circlek.com.vn/wp-content/uploads/2020/02/a9322ffbf5bd0ee357ac-2.jpg" alt="Store Image" />
                                    </a>
                                </div>
                                <div className="col-sm-7">
                                    <div className="card-block">
                                        <div class="row m-b-20 m-t-30">
                                            <div className="col-8">
                                                <h4 className="store-title">Cửa hàng CIRCLE K Long Biên</h4>
                                            </div>
                                            <div className="col-4">
                                                <div className="store-btn">
                                                    <button type="button" className="btn btn-outline-success btn-sm"><i className="fas fa-eye"></i></button>
                                                    <button type="button" className="btn btn-outline-danger btn-sm "><i className="fas fa-edit"></i></button>
                                                    <button type="button" className="btn btn-outline-secondary btn-sm"  data-toggle="modal" data-target="#myModal">
                                                        <i className="fas fa-trash-alt"></i>
                                                        </button>
                                                </div>
                                            </div>
                                        </div>
                                        <h6 className="m-b-20 m-t-30 p-b-5 b-b-default f-w-600">Thông tin cửa hàng</h6>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <p className="m-b-10 f-w-600">Địa chỉ</p>
                                                <h6 className="text-muted f-w-400">152 - 154 Phó Đức Chính, Phường Trúc Bạch , Quận Ba Đình, Hà Nội</h6>
                                            </div>
                                            <div className="col-sm-6">
                                                <p className="m-b-10 f-w-600">Hotline</p>
                                                <h6 className="text-muted f-w-400">+84 24 3200 6087</h6>
                                            </div>
                                        </div>
                                        <h6 className="m-b-20 m-t-30 p-b-5 b-b-default f-w-600">Nhân viên quản lý</h6>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <p className="m-b-10 f-w-600">Tên</p>
                                                <h6 className="text-muted f-w-400">Trần Anh Tuấn</h6>
                                            </div>
                                            <div className="col-sm-6">
                                                <p className="m-b-10 f-w-600">Số điện thoại</p>
                                                <h6 className="text-muted f-w-400">98979989898</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Store Card */}
                        <hr />
                        {/* Store Card */}
                        <div className="card">
                            <div className="row">
                                <div className="col-5 store-img">
                                    <a href="">
                                        <img src="https://www.circlek.com.vn/wp-content/uploads/2020/02/viber_image_2020-02-28_10-25-52-2.jpg" alt="Store Image" />
                                    </a>
                                </div>
                                <div className="col-sm-7">
                                    <div className="card-block">
                                        <div class="row m-b-20 m-t-30">
                                            <div className="col-8">
                                                <h4 className="store-title">Cửa hàng CIRCLE K Long Biên</h4>
                                            </div>
                                            <div className="col-4">
                                                <div className="store-btn">
                                                    <button type="button" className="btn btn-outline-success btn-sm"><i className="fas fa-eye"></i></button>
                                                    <button type="button" className="btn btn-outline-danger btn-sm "><i className="fas fa-edit"></i></button>
                                                    <button type="button" className="btn btn-outline-secondary btn-sm"><i className="fas fa-trash-alt"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                        <h6 className="m-b-20 m-t-30 p-b-5 b-b-default f-w-600">Thông tin cửa hàng</h6>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <p className="m-b-10 f-w-600">Địa chỉ</p>
                                                <h6 className="text-muted f-w-400">152 - 154 Phó Đức Chính, Phường Trúc Bạch , Quận Ba Đình, Hà Nội</h6>
                                            </div>
                                            <div className="col-sm-6">
                                                <p className="m-b-10 f-w-600">Hotline</p>
                                                <h6 className="text-muted f-w-400">+84 24 3200 6087</h6>
                                            </div>
                                        </div>
                                        <h6 className="m-b-20 m-t-30 p-b-5 b-b-default f-w-600">Nhân viên quản lý</h6>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <p className="m-b-10 f-w-600">Tên</p>
                                                <h6 className="text-muted f-w-400">Trần Anh Tuấn</h6>
                                            </div>
                                            <div className="col-sm-6">
                                                <p className="m-b-10 f-w-600">Số điện thoại</p>
                                                <h6 className="text-muted f-w-400">98979989898</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Store Card */}
                        <hr />
                        {/* Store Card */}
                        <div className="card">
                            <div className="row">
                                <div className="col-5 store-img">
                                    <a href="">
                                        <img src="https://vinatechjsc.vn/wp-content/uploads/2019/10/chu%E1%BB%97i-c%E1%BB%ADa-h%C3%A0ng-Circle-K-1024x768.jpg" alt="Store Image" />
                                    </a>
                                </div>
                                <div className="col-sm-7">
                                    <div className="card-block">
                                        <div class="row m-b-20 m-t-30">
                                            <div className="col-8">
                                                <h4 className="store-title">Cửa hàng CIRCLE K Long Biên</h4>
                                            </div>
                                            <div className="col-4">
                                                <div className="store-btn">
                                                    <button type="button" className="btn btn-outline-success btn-sm"><i className="fas fa-eye"></i></button>
                                                    <button type="button" className="btn btn-outline-danger btn-sm "><i className="fas fa-edit"></i></button>
                                                    <button type="button" className="btn btn-outline-secondary btn-sm"><i className="fas fa-trash-alt"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                        <h6 className="m-b-20 m-t-30 p-b-5 b-b-default f-w-600">Thông tin cửa hàng</h6>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <p className="m-b-10 f-w-600">Địa chỉ</p>
                                                <h6 className="text-muted f-w-400">152 - 154 Phó Đức Chính, Phường Trúc Bạch , Quận Ba Đình, Hà Nội</h6>
                                            </div>
                                            <div className="col-sm-6">
                                                <p className="m-b-10 f-w-600">Hotline</p>
                                                <h6 className="text-muted f-w-400">+84 24 3200 6087</h6>
                                            </div>
                                        </div>
                                        <h6 className="m-b-20 m-t-30 p-b-5 b-b-default f-w-600">Nhân viên quản lý</h6>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <p className="m-b-10 f-w-600">Tên</p>
                                                <h6 className="text-muted f-w-400">Trần Anh Tuấn</h6>
                                            </div>
                                            <div className="col-sm-6">
                                                <p className="m-b-10 f-w-600">Số điện thoại</p>
                                                <h6 className="text-muted f-w-400">98979989898</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Store Card */}
                    </div>
                </div>
                {/* End Store List */}

                {/* Pagination */}
                <nav className="d-flex justify-content-center mb-4">
                    <ul className="pagination pagination-base pagination-boxed pagination-square mb-0">
                        <li className="page-item">
                            <a className="page-link no-border" href="#">
                                <span aria-hidden="true">«</span>
                                <span className="sr-only">Previous</span>
                            </a>
                        </li>
                        <li className="page-item active"><a className="page-link no-border" href="#">1</a></li>
                        <li className="page-item"><a className="page-link no-border" href="#">2</a></li>
                        <li className="page-item"><a className="page-link no-border" href="#">3</a></li>
                        <li className="page-item"><a className="page-link no-border" href="#">4</a></li>
                        <li className="page-item">
                            <a className="page-link no-border" href="#">
                                <span aria-hidden="true">»</span>
                                <span className="sr-only">Next</span>
                            </a>
                        </li>
                    </ul>
                </nav>

                {/* Modal */}
                <DelConfirmModal/>
            </div>
        )
    }
}
