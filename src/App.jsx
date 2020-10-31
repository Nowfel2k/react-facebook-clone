import React from "react";
import "./App.css";

import Header from "./Components/Header";
import Login from "./Components/Login";
import RequestPage from "./Components/RequestPage";
import Profile from "./Components/Profile";
import Gallery from "./Components/Gallery";
import Home from "./Components/Home";

import { useStateValue } from "./StateProvider";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [{ user }] = useStateValue();

  return (
    <div className="app">
      {!user ? (
        <React.Fragment>
          <Login />
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Router>
            <Switch>
              <Route path="/requests">
                <RequestPage />
              </Route>

              <Route path="/profile">
                <Profile />
              </Route>

              <Route path="/gallery">
                <Gallery />
              </Route>

              <Route path="/">
                <Header home />
                <Home />
              </Route>
            </Switch>
          </Router>
        </React.Fragment>
      )}
    </div>
  );
}

export default App;
