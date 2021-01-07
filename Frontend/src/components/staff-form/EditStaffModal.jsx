import React, { Component } from 'react'
import axios from '../../axios'

export default class EditStaffModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            storeNameList: [],
            storeID: this.props.staff.shop_id,
            name: this.props.staff.name,
            phone: this.props.staff.phone,
            cardID: this.props.staff.id_card,
            role: this.props.staff.role
        }
        if (this.props.role === "admin")
            this.getData();
    }

    getData = () => {
        axios
            .get(`/v1/shops/`)
            .then(data => {
                var storeNameList = data.data.map((store) => {
                    return { id: store.id, name: store.shop_name }
                })
                // console.log(storeNameList);
                this.setState({
                    storeNameList: storeNameList,
                    storeID: storeNameList[0].id
                });
                // console.log(this.state);
            })
            .catch(err => alert(err.message))
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
        axios
            .put(`/v1/employees/${this.props.staff.id}`, {
                shop_id: this.state.storeID,
                name: this.state.name,
                id_card: this.state.cardID,
                phone: this.state.phone,
                role: this.state.role
            })
            .then(data => {
                console.log('The form was submitted with the following data:');
                console.log(data.data);
                alert("Sửa thông tin thành công");
                window.location.reload();
            })
            .catch(err => alert(err.message))
    }

    render() {
        return (
            <div>
                <div className="modal fade add-modal" id={`editModal${this.props.staff.id}`} tabIndex={-1} role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                    <div className="modal-dialog" role="document" style={{ maxWidth: "40vw" }}>
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLongTitle">
                                    <i class="fas fa-plus-circle"></i> Chỉnh sửa thông tin</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form className="container">
                                    {this.props.role === "admin" ? (
                                        <div className="form-group row">
                                            <label htmlFor="store-name" class="col-sm-4 col-form-label">Cửa hàng</label>
                                            <div class="col-sm-8">
                                                <select className="form-control" id="store-name" name="storeID" onChange={this.handleChange}>
                                                    {this.state.storeNameList.map((store) => {
                                                        return (
                                                            <option value={store.id}>{store.name}</option>
                                                        )
                                                    })}
                                                </select>
                                            </div>
                                        </div>
                                    ) : null}
                                    <div className="form-group row">
                                        <label htmlFor="name" class="col-sm-4 col-form-label">Tên nhân viên</label>
                                        <div class="col-sm-8">
                                            <input className="form-control" id="name" name="name" required
                                                value={this.state.name} onChange={this.handleChange} />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="role" class="col-sm-4 col-form-label">Vị trí</label>
                                        <div class="col-sm-8">
                                            <input className="form-control" id="role" name="role" required
                                                value={this.state.role} onChange={this.handleChange} />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="card" class="col-sm-4 col-form-label">Card ID</label>
                                        <div class="col-sm-8">
                                            <input className="form-control" id="card" name="cardID" required
                                                value={this.state.cardID} onChange={this.handleChange} />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="phone" class="col-sm-4 col-form-label">Số điện thoại</label>
                                        <div class="col-sm-8">
                                            <input className="form-control" id="phone" name="phone" required
                                                value={this.state.phone} onChange={this.handleChange} />
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
