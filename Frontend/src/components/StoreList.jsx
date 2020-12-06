import React, { Component } from 'react'
import axios from '../axios.js'

import '../assets/css/store.css'
import storeImg from '../data/storeImg'
import Toolbar from './Toolbar';
import NewStoreModal from './store-form/NewStoreModal';
import EditStoreModal from './store-form/EditStoreModal';
import DelConfirmModel from './DelConfirmModal';

const pageSize = 3;

export default class StoreList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            total: 0,
            storeList: [],
            results: [],
            currentPageNumber: 1,
            maxPageNumber: 1,
        }
        this.getData(1);
    }

    getData = (pageNumber) => {
        axios
            .get(`/v1/shops/`)
            .then(data => {
                // console.log(data.data);
                const from = (this.state.currentPageNumber - 1) * pageSize + 1
                const to = pageSize * this.state.currentPageNumber
                this.setState({
                    total: data.data.length,
                    storeList: data.data,
                    results: from == to ? data.data : data.data.slice(from - 1, to),
                    maxPageNumber: Math.ceil(data.data.length / pageSize)
                });
                // console.log(from + "    " + to);
                console.log(this.state.results);
                // console.log(storeImg);
            })
            .catch(err => alert(err.message))
    }


    handleDelete = (storeID) => {
        // console.log(this.props.storeID);
        axios
            .delete(`/v1/shops/${storeID}`)
            .then(data => {
                console.log(data.data);
                alert("Xóa cửa hàng thành công");
                window.location.reload();
            })
            .catch(err => alert(err.message))
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
                <div className="main-containter">
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <div className="records">Hiển thị: <b>{(this.state.currentPageNumber - 1) * pageSize + 1} {this.state.total >= pageSize ? (`- ${pageSize * this.state.currentPageNumber}`) : ''}</b> trên <b>{this.state.total}</b> kết quả</div>
                        <button type="button" className="btn btn-dark" data-toggle="modal" data-target="#newModal">
                            <i className="fas fa-plus mr-2" />Thêm cửa hàng
                        </button>
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
                                                    <a href={`/admin/store/${store.id}`} target="_blank">
                                                        <img src={storeImg[store.id]} alt="Store Image" />
                                                    </a>
                                                </div>
                                                <div className="col-sm-7">
                                                    <div className="card-block">
                                                        <div className="row m-b-20">
                                                            <div className="col-8">
                                                                <h4 className="store-title">{store.shop_name}</h4>
                                                            </div>
                                                            <div className="col-4">
                                                                <div className="store-btn">
                                                                    <button type="button" className="btn btn-outline-danger btn-sm "
                                                                        data-toggle="modal" data-target={`#editModal${store.id}`}>
                                                                        <i className="fas fa-edit"></i></button>
                                                                    <button type="button" className="btn btn-outline-secondary btn-sm" data-toggle="modal" data-target={`#delModal${store.id}`}>
                                                                        <i className="fas fa-trash-alt"></i>
                                                                    </button>

                                                                    <EditStoreModal store={store} />
                                                                    <DelConfirmModel objectID={store.id} deleteMethod={this.handleDelete} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h6 className="m-b-20 m-t-30 p-b-5 b-b-default f-w-600">Thông tin cửa hàng</h6>
                                                        <div className="row">
                                                            <div className="col-sm-6">
                                                                <p className="m-b-10 f-w-600">Địa chỉ</p>
                                                                <h6 className="text-muted f-w-400">{store.shop_address}</h6>
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
                                                                <h6 className="text-muted f-w-400">{store.manager_name}</h6>
                                                            </div>
                                                            <div className="col-sm-6">
                                                                <p className="m-b-10 f-w-600">Số điện thoại</p>
                                                                <h6 className="text-muted f-w-400">{store.manager_phone}</h6>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Store Card */}
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
                <NewStoreModal />
            </div>
        )
    }
}
