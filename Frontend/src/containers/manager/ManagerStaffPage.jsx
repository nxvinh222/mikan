import React, { Component } from 'react'
import axios from '../../axios'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import StaffTable from '../../components/StaffTable'

export default class ManagerStaffPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            storeID: window.localStorage.getItem("storeID"),
            total: 0,
            staffList: [],
            results: [],
            currentPageNumber: 1,
            maxPageNumber: 1,
        }
        this.getData(1);
    }

    getData = (pageNumber) => {
        axios
            .get(`/v1/shops/${this.state.storeID}/employees`)
            .then(data => {
                // console.log(data.data);
                // const from = (this.state.currentPageNumber - 1) * pageSize + 1
                // const to = pageSize * this.state.currentPageNumber
                this.setState({
                    total: data.data.length,
                    // staffList: data.data,
                    // results: from == to ? data.data : data.data.slice(from - 1, to),
                    results: data.data,
                    // maxPageNumber: Math.ceil(data.data.length / pageSize)
                });
                // console.log(from + "    " + to);
                console.log(this.state.results);
            })
            .catch(err => alert(err.message))
    }
    
    render() {
        return (
            <div>
                <Navbar role="manager" />
                <div className="container mt-3" style={{ height: "82vh" }}>
                    <StaffTable staffList={this.state.results} role="manager" defaultStoreID={this.state.storeID}/>
                </div>
                {/* TODO: Co the phat trien them */}
                <Footer />
            </div>
        )
    }
}
