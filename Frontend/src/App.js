import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './layout/Login'
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
          <React.Suspense>
            <Switch>
              <Route exact path="/" render={(props) => {
                return <Login/>
              }} />
            </Switch>
          </React.Suspense>
        </BrowserRouter>
    </div>
  );
}

export default App;
