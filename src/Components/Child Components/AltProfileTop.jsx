import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import "../../Styles/Profile.css";

function AltProfileTop() {
  const [{ user }] = useStateValue();

  return (
    <div>
      <div className="profile__top">
        <img
          className="profile__coverImage"
          src="http://thewowstyle.com/wp-content/uploads/2015/01/cover-facebook-1.jpg"
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
          <button className="profile__menuLeftButton">Intro</button>
          <Link to="/gallery">
            <button className="profile__menuLeftButton">Photos</button>
          </Link>
          <button className="profile__menuLeftButton">Friends</button>
          <button className="profile__menuLeftButton">About</button>
        </div>
        <div className="profile__menuRight">
          <button>Edit Profile</button>
          <button>E</button>
          <button>S</button>
          <button>T</button>
        </div>
      </div>
    </div>
  );
}

export default AltProfileTop;
