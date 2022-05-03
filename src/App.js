import React, {Fragment} from "react";
import reactDom from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import {Route, Switch, withRouter} from "react-router-dom";
import signUp from "./SignUp";
import forgotPassword from "./forgot-password";
const App = () => {
  return (
  
    <div>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={signUp} />
        <Route exact path="/forgotpassword" component={forgotPassword} />
        <Fragment>
          <Header/>
          <Route exact path="/" component={Home} />
        </Fragment>
      </Switch>
    </div>
  );
}

export default App;






