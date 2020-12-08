import React, { Component } from 'react'
import axios from '../../axios'

export default class ChangePassModal extends Component {
    constructor(props) {
        super(props)

        this.state = {
            managerPass: ''
        }
        // this.getData();
    }

    handleChange = (event) => {
        let target = event.target;
        let value = target.value;
        let name = target.name;

        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        axios
            .put(`/v1/change_password`, {
                username: `shop-${this.props.storeID}`,
                password: this.state.managerPass,
                password_confirmation: this.state.managerPass
            })
            .then(data => {
                console.log('The form was submitted with the following data:');
                console.log(data.data);
                alert("Đổi mật khẩu thành công");
                window.location.reload();
            })
            .catch(err => alert(err.message))
    }

    render() {
        return (<div>
            <div className="modal fade add-modal" id={`changePassModal${this.props.storeID}`} tabIndex={-1} role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                <div className="modal-dialog" role="document" style={{ maxWidth: "40vw" }}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">
                                <i className="fas fa-plus-circle"></i> Đổi mật khẩu</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form className="container text-left">
                                <div className="form-group row">
                                    <label htmlFor="account" className="col-sm-4 col-form-label">Tài khoản</label>
                                    <div className="col-sm-8">
                                        <label className="col-sm-4 col-form-label">{`shop-${this.props.storeID}`}</label>
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
