import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Homepage from './layout/Homepage';
import Navbar from './container/Navbar';
import Footer from './container/Footer';

function App() {
  return (
    <div>
      <Navbar/>
      <BrowserRouter>
          <React.Suspense>
            <Switch>
              <Route exact path="/" render={(props) => {
                return <Homepage/>
              }} />
            </Switch>
          </React.Suspense>
        </BrowserRouter>
        <Footer/>
    </div>
  );
}

export default App;
