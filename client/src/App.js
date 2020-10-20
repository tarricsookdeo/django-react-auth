import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Login from './views/Auth/Login';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/login' component={Login} exact />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
