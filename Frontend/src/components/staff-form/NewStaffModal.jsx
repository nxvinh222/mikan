import React, { Component } from 'react'

export default class NewStaffModal extends Component {
    state = {
        storeName: '',
        name: '',
        phone: '',
        cardID: '',
        role: ''
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
                                    <i class="fas fa-plus-circle"></i> Nhân viên mới</h5>
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
                                        <label htmlFor="name" class="col-sm-4 col-form-label">Tên nhân viên</label>
                                        <div class="col-sm-8">
                                            <input className="form-control" id="name" name="name"
                                            value={this.state.name} onChange={this.handleChange} />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="role" class="col-sm-4 col-form-label">Vị trí</label>
                                        <div class="col-sm-8">
                                            <input className="form-control" id="role" name="role"
                                            value={this.state.role} onChange={this.handleChange} />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="card" class="col-sm-4 col-form-label">Card ID</label>
                                        <div class="col-sm-8">
                                            <input className="form-control" id="card" name="cardID"
                                            value={this.state.cardID} onChange={this.handleChange} />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="phone" class="col-sm-4 col-form-label">Số điện thoại</label>
                                        <div class="col-sm-8">
                                            <input className="form-control" id="phone" name="phone"
                                            value={this.state.phone} onChange={this.handleChange} />
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
