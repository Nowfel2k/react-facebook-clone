import React, { useEffect, useState } from "react";
import db from "../../firebase";
import Post from "./Post";
import "../../Styles/Posts.css";
import { CircularProgress } from "@material-ui/core";

function Posts({ home }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
        setLoading(false);
      });
  }, []);

  return (
    <div className="posts">
      {loading && <CircularProgress />}
      {posts?.map((post) => (
        <Post
          home={home}
          key={post.id}
          profilePic={post.data?.profilePic}
          profileName={post.data?.profileName}
          timestamp={post.data?.timestamp}
          postContent={post.data?.postContent}
          postImage={post.data?.postImage}
        />
      ))}
    </div>
  );
}

export default Posts;
