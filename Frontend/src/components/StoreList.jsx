import React, { Component } from 'react'

import '../assets/css/store.css'
import DelConfirmModal from './DelConfirmModal'
import storeData from '../data/storeList'

const pageSize = 2;

export default class StoreList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            total: 0,
            results: [],
            currentPageNumber: 1,
            maxPageNumber: 1
        }
        this.getData(1);
    }

    getData = async (pageNumber) => {
        try {
            // const data = await fetch(`https://guarded-inlet-73441.herokuapp.com/posts/get/posts?pageNumber=${pageNumber}&pageSize=${pageSize}`,
            //     {
            //         method: 'GET',
            //         headers: {
            //             'Content-Type': 'application/json'
            //         },
            //         credentials: 'include'
            //     }
            // ).then((res) => { return res.json(); });

            // TODO: day la lay du lieu gia (pseudo data)
            const data = await storeData;
            console.log(data);

            // this.setState({
            //     total: data.data.total,
            //     results: data.data.results,
            //     maxPageNumber: Math.ceil(data.data.total / pageSize)

            this.setState({
                total: data.length,
                results: data,
                maxPageNumber: Math.ceil(data.length / pageSize)
            });
            console.log(this.state);

        } catch (err) {
            alert(err.message);
        }
    }

    handlePageChange = (pageNumber) => {
        this.getData(pageNumber);
        this.setState({
            currentPageNumber: pageNumber
        });
    }

    handlePrevClick = () => {
        if (this.state.currentPageNumber > 1) {
            this.getData(this.state.currentPageNumber - 1);
            this.setState({
                currentPageNumber: (this.state.currentPageNumber - 1)
            });
        }
    }

    handleNextClick = () => {
        if (this.state.currentPageNumber < this.state.maxPageNumber) {
            this.getData(this.state.currentPageNumber + 1);
            this.setState({
                currentPageNumber: (this.state.currentPageNumber + 1)
            });
        }
    }

    render() {
        const paginations = [];
        for (let i = 1; i <= this.state.maxPageNumber; i++)
            paginations.push(i);

        return (
            <div className="container">
                {/* Toolbar: Filter & Search*/}
                <div class="main-containter">
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
                </div>
                {/* End Toolbar*/}

                <div class="main-containter">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="records">Hiển thị: <b>{(this.state.currentPageNumber - 1) * pageSize + 1}-{pageSize * this.state.currentPageNumber}</b> of <b>{this.state.total}</b> kết quả</div>
                        </div>
                    </div>

                    {/* Store List */}
                    <div className="row d-flex justify-content-center store-list">
                        <div className="col-12">
                            {/* Store Card */}
                            {this.state.results.map((store) => {
                                return (
                                    <div>
                                        <div className="card store-card">
                                            <div className="row">
                                                <div className="col-5 store-img">
                                                    <a href="">
                                                        <img src={store.imgUrl} alt="Store Image" />
                                                    </a>
                                                </div>
                                                <div className="col-sm-7">
                                                    <div className="card-block">
                                                        <div class="row m-b-20">
                                                            <div className="col-8">
                                                                <h4 className="store-title">{store.name}</h4>
                                                            </div>
                                                            <div className="col-4">
                                                                <div className="store-btn">
                                                                    <a href={`/store/${store.id}`}>
                                                                        <button type="button" className="btn btn-outline-success btn-sm"><i className="fas fa-eye"></i></button>
                                                                    </a>
                                                                    <button type="button" className="btn btn-outline-danger btn-sm "><i className="fas fa-edit"></i></button>
                                                                    <button type="button" className="btn btn-outline-secondary btn-sm" data-toggle="modal" data-target="#myModal">
                                                                        <i className="fas fa-trash-alt"></i>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h6 className="m-b-20 m-t-30 p-b-5 b-b-default f-w-600">Thông tin cửa hàng</h6>
                                                        <div className="row">
                                                            <div className="col-sm-6">
                                                                <p className="m-b-10 f-w-600">Địa chỉ</p>
                                                                <h6 className="text-muted f-w-400">{store.address}</h6>
                                                            </div>
                                                            <div className="col-sm-6">
                                                                <p className="m-b-10 f-w-600">Hotline</p>
                                                                <h6 className="text-muted f-w-400">{store.hotline}</h6>
                                                            </div>
                                                        </div>
                                                        <h6 className="m-b-20 m-t-30 p-b-5 b-b-default f-w-600">Nhân viên quản lý</h6>
                                                        <div className="row">
                                                            <div className="col-sm-6">
                                                                <p className="m-b-10 f-w-600">Tên</p>
                                                                <h6 className="text-muted f-w-400">{store.manager.name}</h6>
                                                            </div>
                                                            <div className="col-sm-6">
                                                                <p className="m-b-10 f-w-600">Số điện thoại</p>
                                                                <h6 className="text-muted f-w-400">{store.manager.phone}</h6>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Store Card */}
                                        {}
                                        <hr />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    {/* End Store List */}
                </div>

                {/* Pagination */}
                <nav className="d-flex justify-content-center mb-4">
                    <ul className="pagination pagination-base pagination-boxed pagination-square mb-0">
                        <li className={`page-item ${this.state.currentPageNumber === 1 ? 'disabled' : ''}`}
                            onClick={this.handlePrevClick}>
                            <a className="page-link no-border" href="#">
                                <span aria-hidden="true">«</span>
                                <span className="sr-only">Previous</span>
                            </a>
                        </li>
                        {paginations.map((item) => {
                            return (
                                <li className={`page-item ${item === this.state.currentPageNumber ? 'active' : ''}`}
                                    key={item}
                                    onClick={() => { this.handlePageChange(item) }}
                                >
                                    <a className="page-link" href="#">{item}</a>
                                </li>
                            );
                        })}
                        <li className={`page-item ${this.state.currentPageNumber === this.state.maxPageNumber ? 'disabled' : ''}`}
                            onClick={this.handleNextClick}>
                            <a className="page-link no-border" href="#">
                                <span aria-hidden="true">»</span>
                                <span className="sr-only">Next</span>
                            </a>
                        </li>
                    </ul>
                </nav>
                {/* End Pagination */}

                {/* Modal */}
                <DelConfirmModal />
            </div>
        )
    }
}
