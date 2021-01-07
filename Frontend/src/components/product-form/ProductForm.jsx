import React, { Component } from 'react'
import axios from '../../axios.js'
import '../../assets/css/addform.css'

export default class ProductFrom extends Component {

    state = {
        itemNameList: [],
        item_id: '',
        quantity: 0,
        id: this.props.item.item_id,
        item_name: this.props.item.item_name,
        price: this.props.item.price,
        description: this.props.item.description,
        quantity: this.props.item.quantity
    };

    componentDidMount() {
        axios
            .get(`/v1/items`)
            .then(data => {
                console.log(data.data)
                var itemNameList = data.data.map((item) => {
                    return { id: item.id, name: item.item_name }
                })
                // console.log(storeNameList);
                this.setState({
                    itemNameList: itemNameList,
                    item_id: itemNameList[0].id
                });
            })
            .catch(err => console.log(err))
    }

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
        if (this.props.role == 'admin') {
            axios
                .post(`/v1/items`, {
                    item_name: this.state.item_name,
                    price: this.state.price,
                    description: this.state.description,
                    quantity: this.state.quantity
                })
                .then(() => {
                    window.location.reload();
                })
                .catch(err => console.log(err))
        } else {
            const result = this.props.items.find( ({ id }) => id == this.state.item_id );
            if(result !== undefined) {
                alert("Sản phẩm đã có sẵn trong cửa hàng.")
            } else {
                axios
                .post(`/v1/shops/items`, {
                    item_id: this.state.item_id,
                    quantity: this.state.quantity,
                    shop_id: window.localStorage.getItem('username')
                })
                .then(() => {
                    window.location.reload();
                })
                .catch(err => console.log(err))
            }   
        }
    }

    handleEditSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
        if (this.props.role == 'admin') {
            axios
                .put(`/v1/items/${this.props.item.id}`, {
                    item_name: this.state.item_name,
                    price: this.state.price,
                    description: this.state.description,
                    quantity: this.state.quantity
                })
                .then(() => {
                    window.location.reload();
                })
                .catch(err => console.log(err))
        } else {
            axios
                .put(`/v1/shops/${window.localStorage.getItem('username')}/items/${this.props.item.id}`, {
                    quantity: this.state.quantity
                })
                .then(() => {
                    window.location.reload();
                })
                .catch(err => console.log(err))
        }

    }

    render() {
        return (
            <div>
                <div className="container">
                    <form id="contact-form" role="form" onSubmit={this.props.action == "add" ? this.handleAddSubmit : this.handleEditSubmit}>
                        <div className="controls">
                            <div className="row">
                                {this.props.role == 'admin' ?
                                    <>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label htmlFor="form_name">Tên sản phẩm<span className="required"> *</span></label>
                                                <input id="form_name" name="item_name" value={this.state.item_name} type="text" required className="form-control" required="required" onChange={this.handleChange} />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label htmlFor="form_number">Giá bán (VND) <span className="required"> *</span></label>
                                                <input id="form_number" name="price" value={this.state.price} type="number" required className="form-control" required="required" onChange={this.handleChange} />
                                            </div>
                                        </div>
                                    </> :
                                    <div className="col-md-12">
                                        <div className="form-group row">
                                            <label htmlFor="item-name" className="col-sm-4 col-form-label">Sản phẩm</label>
                                            <div className="col-sm-8">
                                                {this.props.action == 'add' ? 
                                                <select className="form-control" id="item-name" name="item_id" onChange={this.handleChange}>
                                                    {this.state.itemNameList.map((item) => {
                                                        return (
                                                            <option value={item.id}>{item.name}</option>
                                                        )
                                                    })}
                                                </select> : this.state.item_name}
                                            </div>
                                        </div>
                                    </div>
                                }
                            </div>
                            {this.props.role == 'admin' ? '' :
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label htmlFor="form_remain">Tồn kho<span className="required"> *</span></label>
                                            <input id="form_remain" name="quantity" value={this.state.quantity} type="text" required className="form-control" required="required" onChange={this.handleChange} />
                                        </div>
                                    </div>
                                </div>}
                            {this.props.role == 'admin' ? 
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label htmlFor="form_message">Mô tả</label>
                                        <textarea id="form_message" name="description" value={this.state.description} required className="form-control" rows={3} onChange={this.handleChange} />
                                    </div>
                                </div>
                            </div> : ''}
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
