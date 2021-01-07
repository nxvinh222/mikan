import React, { Component } from 'react';
import '../assets/css/storedetail.css';
import Footer from './Footer';
import Navbar from './Navbar';
import axios from '../axios';

class StoreInfo extends Component {

    state = {
        shop: {}
    }

    componentDidMount() {
        axios
            .get(`/v1/shops/${window.localStorage.getItem('username')}`)
            .then(data => {
                this.setState({
                    shop: data.data
                })
                console.log(this.state.shop)
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <Navbar role="manager" />
                <div className="col-sm-12 col-md-12 col-lg-12" style={{ height: "100vh" }}>
                    <h1 style={{ textAlign: "center" }}>Thông tin cửa hàng</h1>
                    {/* product */}
                    <div className="product-content product-wrap clearfix product-detail">
                        <div className="row">
                            <div className="col-md-5 col-sm-12 col-xs-12">
                                <div className="product-image">
                                    <div id="myCarousel-2" className="carousel slide" data-ride="carousel">
                                        <ol className="carousel-indicators">
                                            <li data-target="#myCarousel-2" data-slide-to={0} className />
                                            <li data-target="#myCarousel-2" data-slide-to={1} className="active" />
                                            <li data-target="#myCarousel-2" data-slide-to={2} className />
                                        </ol>
                                        <div className="carousel-inner">
                                            {/* Slide 1 */}
                                            <div className="carousel-item active">
                                                <img src="https://upload.wikimedia.org/wikipedia/commons/f/f0/Circle_K%2C_1255_Academy_Park_Lp%2C_Colorado_Springs%2C_CO.jpg" className="img-responsive" alt="" />
                                            </div>
                                            {/* Slide 2 */}
                                            <div className="carousel-item">
                                                <img src="https://cdn-www.vinid.net/2020/08/b92ce929-c%E1%BB%ADa-h%C3%A0ng-ti%E1%BB%87n-l%E1%BB%A3i-circle-k.jpg" className="img-responsive" alt="" />
                                            </div>
                                            {/* Slide 3 */}
                                            <div className="carousel-item">
                                                <img src="https://www.circlek.com.vn/wp-content/uploads/2020/02/a9322ffbf5bd0ee357ac-2.jpg" className="img-responsive" alt="" />
                                            </div>
                                        </div>
                                        <a className="carousel-control-prev" href="#myCarousel-2" role="button" data-slide="prev">
                                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                                            <span className="sr-only">Previous</span>
                                        </a>
                                        <a className="carousel-control-next" href="#myCarousel-2" role="button" data-slide="next">
                                            <span className="carousel-control-next-icon" aria-hidden="true" />
                                            <span className="sr-only">Next</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-md-offset-1 col-sm-12 col-xs-12">
                                <h2 className="name">
                                    {this.state.shop.shop_name}
                                    <small>{this.state.shop.shop_address}</small>
                                    <i className="fa fa-star fa-2x text-primary" />
                                    <i className="fa fa-star fa-2x text-primary" />
                                    <i className="fa fa-star fa-2x text-primary" />
                                    <i className="fa fa-star fa-2x text-primary" />
                                    <i className="fa fa-star fa-2x text-muted" />
                                    <span className="fa fa-2x"><h5>(109) Votes</h5></span>
                                    <a href="javascript:void(0);">109 customer reviews</a>
                                </h2>
                                <hr />
                                <a href='https://www.facebook.com/blacklotus22'><button type="button" className="btn btn-dark"><span><i className="fas fa-phone-alt" /></span>Liên hệ<span className="text-bold font18 pl-2">0981524316</span></button></a>
                                <div><span><i className="far fa-clock" /></span>Người quản lý : {this.state.shop.manager_name}</div>
                                <div><span><i className="fas fa-phone-alt" /></span>Số điện thoại quản lý: {this.state.shop.manager_phone}</div>
                                <hr />
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default StoreInfo;