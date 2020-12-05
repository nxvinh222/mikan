import React, { Component } from 'react'
import axios from '../../axios.js'

export default class DelStoreModal extends Component {
    
    handleDelete = () => {
        // console.log(this.props.storeID);
        axios
        .delete(`/v1/shops/${this.props.storeID}`)
        .then(data => {
            console.log(data.data);
            alert("Xóa cửa hàng thành công");  
            window.location.reload();
        })
        .catch(err => alert(err.message))
    }

    render() {
        return (
            <div>
                <div id={`delModal${this.props.storeID}`} className="modal fade">
                    <div className="modal-dialog modal-confirm">
                        <div className="modal-content">
                            <div className="modal-header flex-column">
                                <div className="icon-box">
                                    <i className="material-icons">&#xE5CD;</i>
                                </div>
                                <h4 className="modal-title w-100">Bạn có muốn xóa?</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div className="modal-body">
                                <p>Không thể hoàn tác hành động này.</p>
                            </div>
                            <div className="modal-footer justify-content-center">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Hủy</button>
                                <button type="submit" className="btn btn-danger" onClick={this.handleDelete} data-dismiss="modal">Xác nhận</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
