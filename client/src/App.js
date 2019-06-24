import React, { Component } from "react";
import Login from "./components/auth/Login";
import Dashboard from "./components/Dashboard";
import { BrowserRouter, Route } from "react-router-dom";
import CreateDeveloper from "./components/CreateDevelpoer";
import { Provider } from "react-redux";
import store from "./redux/store";
import EditDeveloper from "./components/EditDeveloper";
import { loadUser } from "./redux/actions/authAction";
import PrivateRoute from "./components/PrivateRoute";
import jwt_decode from "jwt-decode";
import { USER_LOADED } from "./redux/actions/actionTypes";

if (localStorage.token) {
  store.dispatch({
    type: USER_LOADED,
    payload: jwt_decode(localStorage.token)
  });
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <React.Fragment>
            <Route exact path="/" component={Login} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute exact path="/register" component={CreateDeveloper} />
            <PrivateRoute
              exact
              path="/edit/:developerId"
              component={EditDeveloper}
            />
          </React.Fragment>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
