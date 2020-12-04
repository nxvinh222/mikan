import React, { Component } from 'react';
import Navbar from './Navbar';

import storeData from '../data/storeList'
import '../assets/css/store-info.css'

class StoreInfo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            storeID: window.location.pathname.split('/').pop(),
            store: {},
        }
        this.getData(this.state.storeID);
    }

    getData = async (id) => {
        try {
            const data = await storeData[parseInt(this.state.storeID) - 1];
            // console.log(data);

            this.setState({
                store: data
            });
        } catch (err) {
            alert(err.message);
        }
    }

    render() {
        return (
            <div>
                <Navbar />
                <div className="container emp-profile">
                    <form>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="profile-img">
                                    <img src={this.state.store.imgUrl} alt="Store Image" />
                                    <div className="file btn btn-lg btn-primary">
                                        CHỈNH SỬA ẢNH
                                        <input type="file" name="file" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="row">
                                    <div class="col-xs-1-12">
                                        <div className="profile-head">
                                            <h5>{this.state.store.name}</h5>
                                            <h6></h6>
                                            <p className="proile-rating">Hoạt động từ ngày : <span>11/12</span></p>
                                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                                <li className="nav-item">
                                                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Thông tin</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Quản lý</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-xs-1-12">
                                        <div className="tab-content profile-tab" id="myTabContent">
                                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <label>User Id</label>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <p>Kshiti123</p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <label>Name</label>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <p>Kshiti Ghelani</p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <label>Email</label>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <p>kshitighelani@gmail.com</p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <label>Phone</label>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <p>123 456 7890</p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <label>Profession</label>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <p>Web Developer and Designer</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <label>Experience</label>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <p>Expert</p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <label>Hourly Rate</label>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <p>10$/hr</p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <label>Total Projects</label>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <p>230</p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <label>English Level</label>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <p>Expert</p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <label>Availability</label>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <p>6 months</p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <label>Your Bio</label><br />
                                                        <p>Your detail description</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="col-md-2">
                                    <input type="submit" className="profile-edit-btn" name="btnAddMore" defaultValue="Edit Profile" />
                                </div> */}
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        );
    }
}

export default StoreInfo;