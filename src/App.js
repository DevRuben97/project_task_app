import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import AuthContainer from './views/auth/AuthContainer'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={AuthContainer}/>
      </Switch>
    </Router>
  );
}

export default App;
