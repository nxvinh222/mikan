import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import "./App.css";

import Login from './containers/Login'
import AdminDashboard from './containers/admin/AdminDashboard';
import ManagerDashboard from './containers/manager/ManagerDashboard';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import StoreInfo from './components/StoreInfo';
import ProductPage from './containers/manager/ProductPage';
import Toolbar from './components/Toolbar';
import StaffPage from './containers/admin/StaffPage';

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
            <Route exact path="/admin/staff" render={(props) => {
              return <StaffPage />
            }} />
            <Route path="/store/" render={(props) => {
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
                  <ProductPage />
                </div>
              )
            }} />
            <Route path="/shop/1" render={(props) => {
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