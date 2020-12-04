import React from "react";
import "../Styles/Header.css";

import AddIcon from "@material-ui/icons/Add";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import FlagIcon from "@material-ui/icons/Flag";
import ForumIcon from "@material-ui/icons/Forum";
import HomeIcon from "@material-ui/icons/Home";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import SearchIcon from "@material-ui/icons/Search";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";

import { Avatar, IconButton } from "@material-ui/core";
import { useStateValue } from "../StateProvider";
import { Link } from "react-router-dom";
import { actionTypes } from "../reducer";

function Header({ home, videos, requests }) {
  const [{ user }, dispatch] = useStateValue();

  const signOut = () => {
    dispatch({
      type: actionTypes.LOGOUT_USER,
    });
    return;
  };

  return (
    <div className="header">
      <div className="header__left">
        <Link to="/">
          <img
            className="header__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
            alt=""
          />
        </Link>

        <div className="header__input">
          <SearchIcon />
          <input placeholder="Search Facebook" type="text" />
        </div>
      </div>

      <div className="header__middle">
        <Link to="/">
          <div className={`header__option ${home && "selected"}`}>
            <HomeIcon fontSize="large" />
          </div>
        </Link>

        <div className="header__option">
          <FlagIcon fontSize="large" />
        </div>

        <div className={`header__option ${videos && "selected"}`}>
          <SubscriptionsOutlinedIcon fontSize="large" />
        </div>

        <div className="header__option">
          <StorefrontOutlinedIcon fontSize="large" />
        </div>

        <Link to="/requests">
          <div className={`header__option ${requests && "selected"}`}>
            <SupervisedUserCircleIcon fontSize="large" />
          </div>
        </Link>
      </div>

      <div className="header__right">
        <Link className="header__link" to="/profile">
          <div className="header__profile">
            <IconButton className="header__avatar">
              <Avatar src={user?.photoURL} />
            </IconButton>
            <h4 className="header__profileName">{user?.displayName}</h4>
          </div>
        </Link>

        <div className="header__rightIcons">
          <IconButton className="header_ricon">
            <AddIcon />
          </IconButton>

          <IconButton>
            <a
              className="header__href"
              target="_blank"
              href="http://messenger-nowfel2k.web.app"
            >
              <ForumIcon />
            </a>
          </IconButton>

          <IconButton>
            <NotificationsActiveIcon />
          </IconButton>

          <IconButton onClick={signOut}>
            <ExitToAppIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Header;
