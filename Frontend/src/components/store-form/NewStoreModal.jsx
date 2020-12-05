import React, { Component } from 'react'
import axios from '../../axios'

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
        axios
            .post('/v1/shops', {
                shop_name: this.state.storeName,
                shop_address: this.state.address,
                manager_name: this.state.managerName,
                manager_phone: this.state.managerPhone,
                hotline: this.state.hotline
            })
            .then(data => {
                // console.log('The form was submitted with the following data:');
                // console.log(data.data);
                alert("Tạo cửa hàng thành công");
                window.location.reload();        
            })
            .catch(err => alert(err.message))
    }

    render() {
        return (
            <div>
                <div className="modal fade add-modal" id="newModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                    <div className="modal-dialog" role="document" style={{ maxWidth: "40vw" }}>
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLongTitle">
                                    <i className="fas fa-plus-circle"></i> Tạo cửa hàng</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form className="container">
                                    <div className="form-group row">
                                        <label htmlFor="store-name" className="col-sm-4 col-form-label">Tên cửa hàng</label>
                                        <div className="col-sm-8">
                                            <input className="form-control" id="store-name" name="storeName"
                                                value={this.state.storeName} onChange={this.handleChange} />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="address" className="col-sm-4 col-form-label">Địa chỉ</label>
                                        <div className="col-sm-8">
                                            <input className="form-control" id="address" name="address"
                                                value={this.state.address} onChange={this.handleChange} />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="hotline" className="col-sm-4 col-form-label">Hotline</label>
                                        <div className="col-sm-8">
                                            <input className="form-control" id="hotline" name="hotline"
                                                value={this.state.hotline} onChange={this.handleChange} />
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
                                            <input className="form-control" id="manager" name="managerName"
                                                value={this.state.managerName} onChange={this.handleChange} />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="manager-phone" className="col-sm-4 col-form-label">Số điện thoại</label>
                                        <div className="col-sm-8">
                                            <input className="form-control" id="manager-phone" name="managerPhone"
                                                value={this.state.managerPhone} onChange={this.handleChange} />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="account" className="col-sm-4 col-form-label">Tài khoản</label>
                                        <div className="col-sm-8">
                                            <input className="form-control" id="account" name="managerAccount"
                                                value={this.state.managerAccount} onChange={this.handleChange} />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="password" className="col-sm-4 col-form-label">Mật khẩu</label>
                                        <div className="col-sm-8">
                                            <input type="password" className="form-control" id="password" name="managerPass"
                                                value={this.state.managerPass} onChange={this.handleChange} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <button type="submit" className="btn btn-success add-button" onClick={this.handleSubmit} data-dismiss="modal">Lưu</button>
                                        </div>
                                    </div>
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
