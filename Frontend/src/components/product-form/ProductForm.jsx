import React, { Component } from 'react'
import axios from '../../axios.js'
import '../../assets/css/addform.css'

export default class ProductFrom extends Component {

    state = {
        itemNameList: [],
        item_id: '',
        quantity: ''
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
        // console.log(this.props.items.map(function(e) { return e.id; }).includes(this.state.item_id))
        // console.log(this.state.item_id)
        // if(itemNameList.map(function(e) { return e.id; }).indexOf(item_id)){

        // }
        axios
            .post(`/v1/shops/items`, {
                item_id: this.state.item_id,
                quantity: this.state.quantity,
                shop_id: window.localStorage.getItem('username')
            })
            .then(() => {
                window.location.href = '/manager/items'
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
                                    <div className="form-group row">
                                        <label htmlFor="item-name" className="col-sm-4 col-form-label">Sản phẩm</label>
                                        <div className="col-sm-8">
                                            <select className="form-control" id="item-name" name="item_id" onChange={this.handleChange}>
                                                {this.state.itemNameList.map((item) => {
                                                    return (
                                                        <option value={item.id}>{item.name}</option>
                                                    )
                                                })}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label htmlFor="form_remain">Tồn kho<span className="required"> *</span></label>
                                        <input id="form_remain" name="quantity" type="text" className="form-control" required="required" onChange={this.handleChange} />
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
