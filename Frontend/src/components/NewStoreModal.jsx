import React, { Component } from 'react'

export default class NewStoreModal extends Component {
    state = {
        storeName: '',
        address: '',
        hotline: '',
        imgURL: '',
        managerName: '',
        managerPhone: '',
        managerAccount: '',
        managerPass: ''
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
        console.log(this.state);
    }

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
                                        <label htmlFor="store-name" class="col-sm-4 col-form-label">Tên cửa hàng</label>
                                        <div class="col-sm-8">
                                            <input className="form-control" id="store-name" name="storeName"
                                            value={this.state.storeName} onChange={this.handleChange} />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="address" class="col-sm-4 col-form-label">Địa chỉ</label>
                                        <div class="col-sm-8">
                                            <input className="form-control" id="address" name="address"
                                            value={this.state.address} onChange={this.handleChange} />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="hotline" class="col-sm-4 col-form-label">Hotline</label>
                                        <div class="col-sm-8">
                                            <input className="form-control" id="hotline" name="hotline"
                                            value={this.state.hotline} onChange={this.handleChange} />
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
                                            <input className="form-control" id="manager" name="managerName"
                                            value={this.state.managerName} onChange={this.handleChange} />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="manager-phone" class="col-sm-4 col-form-label">Số điện thoại</label>
                                        <div class="col-sm-8">
                                            <input className="form-control" id="manager-phone" name="managerPhone"
                                            value={this.state.managerPhone} onChange={this.handleChange} />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="account" class="col-sm-4 col-form-label">Tài khoản</label>
                                        <div class="col-sm-8">
                                            <input className="form-control" id="account" name="managerAccount"
                                            value={this.state.managerAccount} onChange={this.handleChange} />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="password" class="col-sm-4 col-form-label">Mật khẩu</label>
                                        <div class="col-sm-8">
                                            <input type="password" className="form-control" id="password" name="managerPass"
                                            value={this.state.managerPass} onChange={this.handleChange} />
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary" onClick={this.handleSubmit} data-dismiss="modal">Submit</button>
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
