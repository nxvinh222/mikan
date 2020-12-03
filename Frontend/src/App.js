import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import "./App.css";

import Login from './containers/Login'
import AdminDashboard from './containers/AdminDashboard';
import ManagerDashboard from './containers/ManagerDashboard';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import StoreInfo from './components/StoreInfo';
import ProductInfo from './components/ProductInfo';
import Toolbar from './components/Toolbar';

function App() {
  return (
    <div>
      <BrowserRouter>
        <React.Suspense>
          <Switch>
            <Route exact path="/" render={(props) => {
              return <Login />
            }} />
            <Route exact path="/admin" render={(props) => {
              return <AdminDashboard />
            }} />
            <Route path="/admin/store/" render={(props) => {
              return <StoreInfo />
            }} />
            <Route exact path="/manager" render={(props) => {
              return (
                <div>
                  <Navbar />
                  <ManagerDashboard />
                  <Footer />
                </div>
              )
            }} />
            <Route path="/product/" render={(props) => {
              return (
                <div>
                  <Navbar />
                  <ProductInfo />
                  <Footer />
                </div>
              )
            }} />
            <Route path="/store/1" render={(props) => {
              return (
                <div>
                  <Navbar />
                  <StoreInfo/>
                  <Footer />
                </div>
              )
            }} />
          </Switch>
        </React.Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;