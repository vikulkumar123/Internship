import React, { Component } from "react";
import Login from "./components/auth/Login";
import Dashboard from "./components/Dashboard";
import { BrowserRouter, Route } from "react-router-dom";
import CreateDeveloper from "./components/CreateDevelpoer";
import { Provider } from "react-redux";
import store from "./redux/store";
import EditDeveloper from "./components/EditDeveloper";
import { loadUser } from "./redux/actions/authAction";
class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <React.Fragment>
            <Route exact path="/" component={Login} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/register" component={CreateDeveloper} />
            <Route exact path="/edit/:developerId" component={EditDeveloper} />
          </React.Fragment>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
