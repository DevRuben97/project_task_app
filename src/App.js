import React, { useState, Fragment, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { authenticateRoute } from "./Routes";
import Layout from './views/layout/Layout';

//Context:
import AuthContext from "./context/AuthContext";

function App() {
  const [logged, setLogged] = useState(false);

  useEffect(()=> {
    if (localStorage.getItem('logged')=== 'true'){
      setLogged(true);
    }
  },[])

  return (
    <AuthContext.Provider value={{ logged, setLogged }}>
      <Router>
        {logged ? (
          <Fragment>
            <Layout/>
          </Fragment>
        ) : (
          <Route
            exact={authenticateRoute.exact}
            path={authenticateRoute.path}
            component={authenticateRoute.index}
          />
        )}
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
