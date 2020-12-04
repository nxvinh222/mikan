import React, { Component } from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import ProductInfo from '../../components/ProductInfo';

class ProductPage extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <ProductInfo/>
                <Footer/>
            </div>
        );
    }
}

export default ProductPage;