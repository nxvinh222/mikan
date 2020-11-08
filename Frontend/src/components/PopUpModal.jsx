import React, { Component } from 'react'
import AddProductFrom from './AddProductFrom'

export default class PopUpModal extends Component {
    render() {
        return (
            <div>
                {/* Button trigger modal */}
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">
                    Thêm sản phẩm
                </button>
                {/* Modal */}
                <div className="modal fade" id="exampleModalLong" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLongTitle">Thêm sản phẩm</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <AddProductFrom/>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
