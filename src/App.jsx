import React from "react";
import "./Styles/App.css";

import Header from "./Components/Header";
import Login from "./Components/Login";
import RequestPage from "./Components/RequestPage";
import Profile from "./Components/Profile";
import Home from "./Components/Home";
import GalleryPage from "./Components/GalleryPage";

import { useStateValue } from "./StateProvider";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import VideoPage from "./Components/VideoPage";

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
                <GalleryPage />
              </Route>

              <Route path="/videos">
                <Header videos />
                <VideoPage />
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
