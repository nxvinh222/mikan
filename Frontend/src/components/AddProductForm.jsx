import React, { Component } from 'react'

import '../assets/css/addform.css'

export default class AddProductFrom extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <form id="contact-form" role="form">
                        <div className="controls">
                            <div className="row">
                                <div className="col-md-6 ">
                                    <div className="form-group">
                                        <label htmlFor="form_name">Tên sản phẩm<span className="required"> *</span></label>
                                        <input id="form_name" type="text" className="form-control" placeholder="" required="required" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="form_number">Gía bán (VND) <span className="required"> *</span></label>
                                        <input id="form_number" type="text" className="form-control" placeholder="0" required="required" defaultValue={0} />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 ">
                                    <div className="form-group">
                                        <label htmlFor="form_name">Xuất xứ<span className="required"> *</span></label>
                                        <input id="form_name" type="text" name="name" className="form-control" placeholder="" required="required" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="form_remain">Tồn kho<span className="required"> *</span></label>
                                        <input id="form_remain" type="text" className="form-control" placeholder="0" required="required" defaultValue={0} />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label htmlFor="form_message">Mô tả</label>
                                        <textarea id="form_message" name="message" className="form-control" placeholder="Mô tả thông tin sản phẩm" rows={3} defaultValue={""} />
                                    </div>
                                </div>
                            </div>
                            <div className="upload-area">
                                <i className="fas fa-cloud-upload-alt upload-icon"></i>
                                <input type="file" id="customFile" />
                                {/* <img src=""/> */}
                            </div>
                            <div className="alert alert-success" role="alert">
                                This is a success alert—check it out!
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    < button type="submit" className="btn btn-success add-button">Lưu</button>
                                </div>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
