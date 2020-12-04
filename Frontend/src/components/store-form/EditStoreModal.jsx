import React, { Component } from 'react'

import storeData from '../../data/storeList'

export default class EditStoreModal extends Component {
    constructor(props) {
        super(props)

        this.state = {
            storeID: this.props.storeID,
            store: {},
        }
        this.getData(this.state.storeID);
    }

    getData = async (id) => {
        try {
            const data = await storeData[parseInt(this.state.storeID) - 1];
            // console.log(data);

            this.setState({
                store: data
            });
            console.log(this.state.store);
        } catch (err) {
            alert(err.message);
        }
    }

    render() {
        return (
            <div>
                <div className="modal fade add-modal" id="editModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                    <div className="modal-dialog" role="document" style={{ maxWidth: "40vw" }}>
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLongTitle">
                                    <i className="fas fa-plus-circle"></i> Sửa thông tin cửa hàng</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form className="container">
                                    <div className="form-group row">
                                        <label htmlFor="store-name" className="col-sm-4 col-form-label">Tên cửa hàng</label>
                                        <div className="col-sm-8">
                                            <input className="form-control" id="store-name" value={this.state.store.name}/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="address" className="col-sm-4 col-form-label">Địa chỉ</label>
                                        <div className="col-sm-8">
                                            <input className="form-control" id="address" value={this.state.store.address}/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="hotline" className="col-sm-4 col-form-label">Hotline</label>
                                        <div className="col-sm-8">
                                            <input className="form-control" id="hotline" value={this.state.store.hotline}/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="hotline" className="col-sm-4 col-form-label">Ảnh</label>
                                        <div className="col-sm-8">
                                            <input type="file" id="storeImage" />
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="form-group row">
                                        <label htmlFor="manager" className="col-sm-4 col-form-label">Tên quản lý</label>
                                        <div className="col-sm-8">
                                            <input className="form-control" id="manager" value=""/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="manager-phone" className="col-sm-4 col-form-label">Số điện thoại</label>
                                        <div className="col-sm-8">
                                            <input className="form-control" id="manager-phone" value=""/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="account" className="col-sm-4 col-form-label">Tài khoản</label>
                                        <div className="col-sm-8">
                                            <input className="form-control" id="account" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="password" className="col-sm-4 col-form-label">Mật khẩu</label>
                                        <div className="col-sm-8">
                                            <input type="password" className="form-control" id="password" />
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
                            </div>
                            {/* <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-primary">Save changes</button>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
