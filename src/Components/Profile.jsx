import React, { useContext } from "react";
import { useStateValue } from "../StateProvider";
import "../Styles/Profile.css";
import PostMaker from "./Child Components/PostMaker";
import Posts from "./Child Components/Posts";
import { photos } from "../Helpers/photos";
import { friends } from "../Helpers/friends";

function Profile() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="profile">
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
        <h3>{user.displayName}</h3>
      </div>
      <div className="profile__menu">
        <div className="profile__menuLeft">
          <button>Intro</button>
          <button>Photos</button>
          <button>Friends</button>
          <button>About</button>
        </div>
        <div className="profile__menuRight">
          <button>Edit Profile</button>
          <button>E</button>
          <button>S</button>
          <button>T</button>
        </div>
      </div>
      <div className="profile__body">
        <div className="profile__left">
          <div className="profile__intro">
            <h5>Intro</h5>
          </div>

          <div className="profile__photos">
            <h5>Photos</h5>
            <div className="profile__photosContainer">
              {photos.map((photo) => (
                <div className="profile__photo">
                  <img src={photo} alt="fbphotos" />
                </div>
              ))}
            </div>
          </div>

          <div className="profile__friends">
            <h5>Friends</h5>
            <div className="profile__friendsContainer">
              {friends.map((friend) => (
                <div className="profile__friend">
                  <img src={friend.src} alt="friendphotos" />
                  <p>{friend.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="profile__right">
          <PostMaker profile />
          <Posts profile />
        </div>
      </div>
    </div>
  );
}

export default Profile;
