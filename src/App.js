import React, { Component } from "react";

import "./App.css";
import Dashboard from "./components/Dashboard";
import Header from "./components/Layout/Header";
import "..//node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddUser from "./components/User/AddUser";
import { Provider } from "react-redux";
import store from "./store";


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/addUser" component={AddUser} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
