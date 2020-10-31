import React from "react";
import Stories from "./Child Components/Stories";
import PostMaker from "./Child Components/PostMaker";
import "../Styles/Feed.css";
import Posts from "./Child Components/Posts";

function Feed() {
  return (
    <div className="feed">
      <Stories />
      <PostMaker />
      <Posts />
    </div>
  );
}

export default Feed;
