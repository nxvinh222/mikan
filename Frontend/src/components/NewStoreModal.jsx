import React, { Component } from 'react'

export default class NewStoreModal extends Component {
    render() {
        return (
            <div>
                <div className="modal fade add-modal" id="newModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                    <div className="modal-dialog" role="document" style={{ maxWidth: "40vw" }}>
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLongTitle">
                                    <i class="fas fa-plus-circle"></i> Tạo cửa hàng</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form className="container">
                                    <div className="form-group row">
                                        <label htmlFor="exampleInputEmail1" class="col-sm-4 col-form-label">Tên cửa hàng</label>
                                        <div class="col-sm-8">
                                            <input className="form-control" id="exampleInputEmail1" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="exampleInputPassword1" class="col-sm-4 col-form-label">Địa chỉ</label>
                                        <div class="col-sm-8">
                                            <input className="form-control" id="exampleInputPassword1" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="hotline" class="col-sm-4 col-form-label">Hotline</label>
                                        <div class="col-sm-8">
                                            <input className="form-control" id="hotline" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="hotline" class="col-sm-4 col-form-label">Ảnh</label>
                                        <div class="col-sm-8">
                                            <input type="file" id="storeImage" />
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="form-group row">
                                        <label htmlFor="manager" class="col-sm-4 col-form-label">Tên quản lý</label>
                                        <div class="col-sm-8">
                                            <input className="form-control" id="manager" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="manager-phone" class="col-sm-4 col-form-label">Số điện thoại</label>
                                        <div class="col-sm-8">
                                            <input className="form-control" id="manager-phone" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="account" class="col-sm-4 col-form-label">Tài khoản</label>
                                        <div class="col-sm-8">
                                            <input className="form-control" id="account" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="password" class="col-sm-4 col-form-label">Mật khẩu</label>
                                        <div class="col-sm-8">
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
