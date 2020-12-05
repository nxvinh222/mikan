import React, { Component } from 'react'
import axios from '../../axios'

import DelConfirmModal from '../DelConfirmModal'
import EditStaffModal from './EditStaffModal'
import NewStaffModal from './NewStaffModal'

const pageSize = 3;

export default class AdminStaffTable extends Component {
    constructor(props) {
        super(props)

        this.state = {
            total: 0,
            staffList: [],
            results: [],
            currentPageNumber: 1,
            maxPageNumber: 1,
        }
        this.getData(1);
    }

    getData = (pageNumber) => {
        axios
            .get(`/v1/employees/`)
            .then(data => {
                // console.log(data.data);
                // const from = (this.state.currentPageNumber - 1) * pageSize + 1
                // const to = pageSize * this.state.currentPageNumber
                this.setState({
                    total: data.data.length,
                    storeList: data.data,
                    // results: from == to ? data.data : data.data.slice(from - 1, to),
                    results: data.data,
                    maxPageNumber: Math.ceil(data.data.length / pageSize)
                });
                // console.log(from + "    " + to);
                console.log(this.state.results);
            })
            .catch(err => alert(err.message))
    }

    handleDelete = (staffID) => {
        // console.log(this.props.storeID);
        axios
            .delete(`/v1/employees/${staffID}`)
            .then(data => {
                console.log(data.data);
                alert("Xóa nhân viên thành công");
                window.location.reload();
            })
            .catch(err => alert(err.message))
    }

    render() {
        return (
            <div>
                <button type="button" className="btn btn-dark mb-3" data-toggle="modal" data-target="#newModal">
                    <i className="fas fa-plus mr-2" />Thêm nhân viên
                </button>
                <div className="card card-employee card-margin">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="table-responsive">
                                    <table className="table table-striped mb-0">
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
                                            {/* Staff List */}
                                            {this.state.results.map((staff) => {
                                                return (
                                                    <tr>
                                                        <th scope="row">Cửa hàng {staff.shop_id}</th>
                                                        <td>{staff.name}</td>
                                                        <td>{staff.id_card}</td>
                                                        <td>{staff.role}</td>
                                                        <td>{staff.phone}</td>
                                                        <td>
                                                            <div className="widget-26-job-starred text-right">
                                                                <button type="button" className="btn btn-outline-danger btn-sm mr-2"
                                                                    data-toggle="modal" data-target={`#editModal${staff.id}`}>
                                                                    <i className="fas fa-edit"></i></button>
                                                                <button type="button" className="btn btn-outline-secondary btn-sm" data-toggle="modal" data-target={`#delModal${staff.id}`}>
                                                                    <i className="fas fa-trash-alt"></i>
                                                                </button>
                                                            </div>

                                                            <EditStaffModal staff={staff} />
                                                            <DelConfirmModal objectID={staff.id} deleteMethod={this.handleDelete} />
                                                        </td>
                                                    </tr>
                                                );
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Modal */}
                <NewStaffModal />
            </div>
        )
    }
}
