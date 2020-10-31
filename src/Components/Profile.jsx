import React, { useContext } from "react";
import { useStateValue } from "../StateProvider";
import "../Styles/Profile.css";
import PostMaker from "./Child Components/PostMaker";
import Posts from "./Child Components/Posts";

function Profile() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="profile">
      <div className="profile__top">
        <img className="profile__coverImage" src="" alt="" />
        <img className="profile__coverImage" src={user.photoURL} alt="" />
        <h3>{user.displayName}</h3>
      </div>
      <div className="profile__menu">
        <div className="profile__menuLeft"></div>
        <div className="profile__menuRight"></div>
      </div>
      <div className="profile__left">
        <div className="profile__intro"></div>
        <div className="profile__photos"></div>
        <div className="profile__friends"></div>
      </div>
      <div className="profile__right">
        <PostMaker />
        <Posts />
      </div>
    </div>
  );
}

export default Profile;
