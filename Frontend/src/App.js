import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import "./App.css";

import Login from './containers/Login'
import AdminDashboard from './containers/admin/AdminDashboard';
import ManagerDashboard from './containers/manager/ManagerDashboard';
import StoreInfo from './components/StoreInfo';
import ProductPage from './containers/manager/ProductPage';
import StaffPage from './containers/admin/StaffPage';
import StorePage from './containers/admin/StorePage';
import ManagerStaffPage from './containers/manager/ManagerStaffPage';

class App extends Component {
  _checkAdmin = function () {
    // console.log(window.localStorage.getItem('username'));
    if (window.localStorage.getItem('username') !== 'admin') {
      alert("You do not have permission to access");
      window.location.href = "/"
    }
  };

  render() {
    return (
      <div>
        <BrowserRouter>
          <React.Suspense>
            <Switch>
              <Route exact path="/" render={(props) => {
                return <Login />
              }} />
              <Route exact path="/admin" render={(props) => {
                return <AdminDashboard checkAdmin={this._checkAdmin}/>
              }} />
              <Route exact path="/admin/staff" render={(props) => {
                return <StaffPage checkAdmin={this._checkAdmin}/>
              }} />
              <Route exact path="/admin/store/:id" render={(props) => {
                return <StorePage checkAdmin={this._checkAdmin}/>
              }} />
              <Route exact path="/manager/shop" render={(props) => {
                return <StoreInfo />
              }} />
              <Route exact path="/manager" render={(props) => {
                return (
                  <div>
                    <ManagerDashboard />
                  </div>
                )
              }} />
              <Route exact path="/manager/staff" render={(props) => {
                return <ManagerStaffPage />
              }} />
              <Route exact path="/manager/items" render={(props) => {
                return (
                  <div>
                    <ProductPage />
                  </div>
                )
              }} />
            </Switch>
          </React.Suspense>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;