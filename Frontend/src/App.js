import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import "./App.css";

import Login from './containers/Login'
import AdminDashboard from './containers/AdminDashboard';
import ManagerDashboard from './containers/ManagerDashboard';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import StoreList from './containers/StoreList';

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
              return (
                <div>
                  <Navbar />
                  <AdminDashboard />
                  <Footer />
                </div>
              )
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
            <Route exact path="/admin/store" render={(props) => {
              return (
                <div>
                  <Navbar />
                  <StoreList />
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