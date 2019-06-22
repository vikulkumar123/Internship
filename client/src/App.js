import React from "react";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import { BrowserRouter, Route } from "react-router-dom";
import CreateDeveloper from "./components/CreateDevelpoer";
import { Provider } from "react-redux";
import store from "./redux/store";
import EditDeveloper from "./components/EditDeveloper";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <React.Fragment>
          <Route exact path="/" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/register" component={CreateDeveloper} />
        </React.Fragment>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
