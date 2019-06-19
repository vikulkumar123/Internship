import React from "react";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import { BrowserRouter, Route } from "react-router-dom";
import CreateDeveloper from "./components/CreateDevelpoer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/register" component={CreateDeveloper} />
      </div>
    </BrowserRouter>
  );
}

export default App;
