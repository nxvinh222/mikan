import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './containers/Login'
import "./App.css";
import AdminDashboard from './containers/AdminDashboard';

function App() {
  return (
    <div>
      <BrowserRouter>
          <React.Suspense>
            <Switch>
              <Route exact path="/" render={(props) => {
                return <Login/>
              }} />
              <Route exact path="/das" render={(props) => {
                return <AdminDashboard/>
              }} />
            </Switch>
          </React.Suspense>
        </BrowserRouter>
    </div>
  );
}

export default App;
