import React, { Component } from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import AdminStaffTable from '../../components/staff-form/AdminStaffTable'

import "../../assets/css/table.css";

export default class StaffPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            total: 0,
            results: [],
            currentPageNumber: 1,
            maxPageNumber: 1,
            currentStaff: ''
        }
        // this.getData(1);
    }

    // getData = async (pageNumber) => {
    //     try {
    //         // const data = await fetch(`https://guarded-inlet-73441.herokuapp.com/posts/get/posts?pageNumber=${pageNumber}&pageSize=${pageSize}`,
    //         //     {
    //         //         method: 'GET',
    //         //         headers: {
    //         //             'Content-Type': 'application/json'
    //         //         },
    //         //         credentials: 'include'
    //         //     }
    //         // ).then((res) => { return res.json(); });

    //         const data = await storeData;
    //         console.log(data);

    //         // this.setState({
    //         //     total: data.data.total,
    //         //     results: data.data.results,
    //         //     maxPageNumber: Math.ceil(data.data.total / pageSize)

    //         this.setState({
    //             total: data.length,
    //             results: data,
    //             maxPageNumber: Math.ceil(data.length / pageSize)
    //         });
    //         console.log(this.state);

    //     } catch (err) {
    //         alert(err.message);
    //     }
    // }

    render() {
        const paginations = [];
        for (let i = 1; i <= this.state.maxPageNumber; i++)
            paginations.push(i);
            
        return (
            <div>
                <Navbar role="admin" />
                <div className="container mt-3">
                    <AdminStaffTable />
                </div>
                <Footer />
            </div>
        )
    }
}
