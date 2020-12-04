import React, { Component } from 'react'
import AddProductModal from '../../components/AddProductModal'
import DelConfirmModal from '../../components/DelConfirmModal'
import EditProductModal from '../../components/EditProductModal'
import StaffInfo from '../../components/StaffInfo'
import Toolbar from '../../components/Toolbar'

export default class ManagerDashboard extends Component {
    render() {
        return (
            <div className="container list-view">
                <Toolbar />
                <StaffInfo/>
                {/*  Add Modal*/}
                <AddProductModal />
                {/* Edit Modal */}
                <EditProductModal />
                {/*  Delete Modal*/}
                <DelConfirmModal />
            </div>
        )
    }
}
