import React from 'react';
import './App.css';
import ChatBar from './Components/ChatBar';
import Feed from './Components/Feed';
import Header from './Components/Header'
import Login from './Components/Login';
import Sidebar from './Components/Sidebar';
import { useStateValue } from './StateProvider';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import RequestPage from './Components/RequestPage';

function App() {

  const [{ user }, dispatch] = useStateValue()

  return (
    <div className="app">
      {!user ? (
        <React.Fragment>
          <Login />
        </React.Fragment>
      ) : (
          <React.Fragment>

            <Header />

            <Router>
              <Switch>
                <Route path="/requests">
                  <RequestPage />
                </Route>

                <Route path="/profile" >
                  
                </Route>


                <Route path="/">
                  <div className="app__body">
                    <Sidebar />
                    <Feed />
                    <ChatBar />
                  </div>
                </Route>

              </Switch>
            </ Router>

          </React.Fragment>
        )}
    </div>
  );
}

export default App;
