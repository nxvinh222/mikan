import React, { Component } from 'react'
import '../assets/css/table.css'
import axios from '../axios.js'
import AddProductModal from './product-form/AddProductModal'
import DelConfirmModal from './DelConfirmModal'
import EditProductModal from './product-form/EditProductModal'

class ProductTable extends Component {

    state = {
        items: []
    }

    componentDidMount() {
        axios
            .get(`/v1/${window.localStorage.getItem('username') == 'admin' ? '' : `shops/${window.localStorage.getItem('username')}/`}items`)
            .then(data => {
                this.setState({
                    items: data.data
                })
                console.log(this.state)
            })
            .catch(err => console.log(err))
    }

    handleDelete = (itemID) => {
        axios
            .delete(`/v1/items/${itemID}`)
            .then(data => {
                console.log(data.data);
                alert("Xóa sản phẩm thành công");
                window.location.reload();
            })
            .catch(err => alert(err.message))
    }

    render() {
        const all_items = this.state.items.map(item =>
            <tr>
                <th scope="row">{item.id}</th>
                <td className="w-25">
                    <img src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/sheep-3.jpg" className="img-fluid img-thumbnail" alt="Sheep" />
                </td>
                <td>{item.item_name}</td>
                <td>{item.price}$</td>
                <td>{item.description}</td>
                {this.props.role == 'admin' ? '' : <td>{item.quantity}</td>}
                {this.props.role == 'admin' ?
                    <td>
                        <div className="widget-26-job-starred">
                            <button type="button" className="btn btn-outline-danger btn-sm mr-2"
                                data-toggle="modal" data-target={`#EditItemModal${item.id}`}>
                                <i className="fas fa-edit"></i></button>
                            <button type="button" className="btn btn-outline-secondary btn-sm" data-toggle="modal" data-target={`#delModal${item.id}`}>
                                <i className="fas fa-trash-alt"></i>
                            </button>
                        </div>
                    </td> : ''}
                {/* Edit Modal */}
                <EditProductModal item={item} role={this.props.role}/>
                {/*  Delete Modal*/}
                <DelConfirmModal item={item} deleteMethod={this.handleDelete} objectID={item.id} />
            </tr>)
        return (
            <div className="container" style={{ height: "100vh" }}>
                <button type="button" className="btn btn-dark mb-3" data-toggle="modal" data-target="#addModal"><i className="fas fa-plus mr-2" />Thêm sản phẩm</button>
                <div className="row">
                    <div className="col-12">
                        <div className="card card-employee card-margin">
                            <div className="card-body">
                                <div className="row search-body">
                                    <div className="col-lg-12">
                                        <div className="search-result">
                                            <div className="result-body">
                                                <div className="table-responsive">
                                                    <table className="table widget-26">
                                                        <thead className="thead-dark">
                                                            <tr>
                                                                <th scope="col">ID</th>
                                                                <th scope="col">Ảnh</th>
                                                                <th scope="col">Tên sản phẩm</th>
                                                                <th scope="col">Giá</th>
                                                                <th scope="col">Mô tả</th>
                                                                {this.props.role == 'admin' ? '' : <th scope="col">Số lượng</th>}
                                                                {this.props.role == 'admin' ? <th scope="col">Actions</th> : ''}
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {all_items}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*  Add Modal*/}
                <AddProductModal items={this.state.items} role={this.props.role}/>
            </div>
        );
    }
}

export default ProductTable;