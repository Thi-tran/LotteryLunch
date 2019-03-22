import React, { Component } from 'react';
import Admin from './pages/Admin';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={HomePage} exact={true} />
            <Route path="/admin" component={Admin} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
    </BrowserRouter>
  
    );
  }
}

export default App;