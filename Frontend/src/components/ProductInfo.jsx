import React, { Component } from 'react'
import '../assets/css/table.css'
import Toolbar from '../components/Toolbar'
import axios from '../axios.js'

class ProductInfo extends Component {

    state = {

    }

    componentDidMount() {
        axios
        .get(`/v1/shops/1`)
        .then( data => {
            console.log(data)
            // this.setState({
            //     items: data.data
            // })
            console.log(this.state)
        })
        .catch( err => console.log(err))
    }

    render() {
        return (
            <div className="container">
                <Toolbar />
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
                                                        <thead>
                                                            <tr>
                                                                <th scope="col">STT</th>
                                                                <th scope="col">Ảnh</th>
                                                                <th scope="col">Tên sản phẩm</th>
                                                                <th scope="col">Giá</th>
                                                                <th scope="col">Xuất xứ</th>
                                                                <th scope="col">Số lượng</th>
                                                                <th scope="col">Actions</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <th scope="row">1</th>
                                                                <td className="w-25">
                                                                    <img src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/sheep-3.jpg" className="img-fluid img-thumbnail" alt="Sheep" />
                                                                </td>
                                                                <td>Khô gà</td>
                                                                <td>20000đ</td>
                                                                <td>Việt Nam</td>
                                                                <td>23</td>
                                                                <td>
                                                                    <div className="widget-26-job-starred">
                                                                        <a href="#">
                                                                            <i className="fas fa-edit" />
                                                                        </a>
                                                                        <span> | </span>
                                                                        <a href="#myModal" className="trigger-btn" data-toggle="modal">
                                                                            <i className="fas fa-trash-alt" />
                                                                        </a>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">2</th>
                                                                <td className="w-25">
                                                                    <img src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/sheep-5.jpg" className="img-fluid img-thumbnail" alt="Sheep" />
                                                                </td>
                                                                <td>Khô gà</td>
                                                                <td>20000đ</td>
                                                                <td>Việt Nam</td>
                                                                <td>23</td>
                                                                <td>
                                                                    <div className="widget-26-job-starred">
                                                                        <a href="#">
                                                                            <i className="fas fa-edit" />
                                                                        </a>
                                                                        <span> | </span>
                                                                        <a href="#myModal" className="trigger-btn" data-toggle="modal">
                                                                            <i className="fas fa-trash-alt" />
                                                                        </a>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <nav className="d-flex justify-content-center">
                                    <ul className="pagination pagination-base pagination-boxed pagination-square mb-0">
                                        <li className="page-item">
                                            <a className="page-link no-border" href="#">
                                                <span aria-hidden="true">«</span>
                                                <span className="sr-only">Previous</span>
                                            </a>
                                        </li>
                                        <li className="page-item active"><a className="page-link no-border" href="#">1</a></li>
                                        <li className="page-item"><a className="page-link no-border" href="#">2</a></li>
                                        <li className="page-item"><a className="page-link no-border" href="#">3</a></li>
                                        <li className="page-item"><a className="page-link no-border" href="#">4</a></li>
                                        <li className="page-item">
                                            <a className="page-link no-border" href="#">
                                                <span aria-hidden="true">»</span>
                                                <span className="sr-only">Next</span>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductInfo;