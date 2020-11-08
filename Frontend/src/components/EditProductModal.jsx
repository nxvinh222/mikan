import React, { Component } from 'react'
import AddProductForm from './AddProductForm'

export default class EditProductModal extends Component {
    render() {
        return (
            <div>
                {/* Modal */}
                <div className="modal fade add-modal" id="editModal" tabIndex={-1} role="dialog" aria-labelledby="editModalTitle" aria-hidden="true">
                    <div className="modal-dialog" role="document" style={{ maxWidth: "40vw" }}>
                        <div className="modal-content">
                            <div className="modal-header" style={{ backgroundColor: "#47c9a2", color: "white" }}>
                                <h5 className="modal-title" id="editModalTitle">
                                    <i class="fas fa-plus-circle"></i> Sửa thông tin sản phẩm</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <AddProductForm />
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
