import React, { useEffect, useState } from "react";
import db from "../../firebase";
import Post from "./Post";

function Posts() {
  const [posts, setPosts] = useState([]);

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
      });
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <Post
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
