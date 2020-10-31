import React from "react";
import "./App.css";
import ChatBar from "./Components/ChatBar";
import Feed from "./Components/Feed";
import Header from "./Components/Header";
import Login from "./Components/Login";
import Sidebar from "./Components/Sidebar";
import { useStateValue } from "./StateProvider";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RequestPage from "./Components/RequestPage";
import Profile from "./Components/Profile";
import Gallery from "./Components/Gallery";

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
                <div className="app__body">
                  <Sidebar />
                  <Feed />
                  <ChatBar />
                </div>
              </Route>
            </Switch>
          </Router>
        </React.Fragment>
      )}
    </div>
  );
}

export default App;
