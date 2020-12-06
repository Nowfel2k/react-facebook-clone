import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import "../../Styles/Profile.css";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CreateIcon from "@material-ui/icons/Create";
import VisibilityIcon from "@material-ui/icons/Visibility";
import SearchIcon from "@material-ui/icons/Search";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

function ProfileTop() {
  const [{ user }] = useStateValue();

  return (
    <div>
      <div className="profile__top">
        <img
          className="profile__coverImage"
          src="https://miro.medium.com/max/3200/1*i8-u-V8LTTbQwTeUwLI_BQ.gif"
          alt=""
        />
        <img
          className="profile__profileImage"
          src={
            user.photoURL
              ? user.photoURL
              : "http://4.bp.blogspot.com/-zsbDeAUd8aY/US7F0ta5d9I/AAAAAAAAEKY/UL2AAhHj6J8/s1600/facebook-default-no-profile-pic.jpg"
          }
          alt=""
        />
        <h1>{user.displayName}</h1>
      </div>
      <div className="profile__menu">
        <div className="profile__menuLeft">
          <button className="profile__menuLeftButton menu_selected">
            Timeline
          </button>
          <button className="profile__menuLeftButton">About</button>
          <button className="profile__menuLeftButton">Friends</button>
          <Link to="/gallery">
            <button className="profile__menuLeftButton">Photos</button>
          </Link>
          <button
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
            className="profile__menuLeftButton"
          >
            More <ExpandMoreIcon fontSize="small" />
          </button>
        </div>
        <div className="profile__menuRight">
          <button
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
              width: "11vw",
            }}
          >
            <CreateIcon fontSize="small" />
            Edit Profile
          </button>
          <button>
            <VisibilityIcon fontSize="small" />
          </button>
          <button>
            <SearchIcon fontSize="small" />
          </button>
          <button>
            <MoreHorizIcon fontSize="small" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfileTop;
