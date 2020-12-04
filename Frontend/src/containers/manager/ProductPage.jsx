import React, { Component } from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import ProductTable from '../../components/ProductTable';

class ProductPage extends Component {
    render() {
        return (
            <div>
                <Navbar role="manager" />
                <ProductTable />
                <Footer />
            </div>
        );
    }
}

export default ProductPage;