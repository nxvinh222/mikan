import React, { Component } from 'react'
import axios from '../../axios.js'
import '../../assets/css/addform.css'

export default class ProductFrom extends Component {

    state = {
        item_name: this.props.item.item_name,
        price: this.props.item.price,
        description: this.props.item.description,
        quantity: this.props.item.quantity
    };

    handleChange = (event) => {
        let target = event.target;
        let value = target.value;
        let name = target.name;

        this.setState({
            [name]: value
        })
    }

    handleAddSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
        axios
            .post(`/v1/shops/items`, {
                item_name: this.state.item_name,
                price: this.state.price,
                description: this.state.description,
                quantity: this.state.quantity,
                id: window.localStorage.getItem('username')
            })
            .then(() => {
                window.location.href = '/'
            })
            .catch(err => console.log(err))

    }

    handleEditSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
        axios
            .put(`/v1/shops/${window.localStorage.getItem('username')}/items/${this.props.item.id}`, {
                item_name: this.state.item_name,
                price: this.state.price,
                description: this.state.description,
                quantity: this.state.quantity
            })
            .then(() => {
                window.location.href = '/'
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <div className="container">
                    <form id="contact-form" role="form" onSubmit={this.props.action == "add" ? this.handleAddSubmit : this.handleEditSubmit}>
                        <div className="controls">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label htmlFor="form_name">Tên sản phẩm<span className="required"> *</span></label>
                                        <input id="form_name" name="item_name" value={this.state.item_name} type="text" className="form-control" required="required" onChange={this.handleChange} />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label htmlFor="form_number">Giá bán (VND) <span className="required"> *</span></label>
                                        <input id="form_number" name="price" value={this.state.price} type="text" className="form-control" required="required" onChange={this.handleChange} />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label htmlFor="form_remain">Tồn kho<span className="required"> *</span></label>
                                        <input id="form_remain" name="quantity" value={this.state.quantity} type="text" className="form-control" required="required" onChange={this.handleChange} />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label htmlFor="form_message">Mô tả</label>
                                        <textarea id="form_message" name="description" value={this.state.description} className="form-control" rows={3} onChange={this.handleChange} />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <button className="btn btn-success add-button">Lưu</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
