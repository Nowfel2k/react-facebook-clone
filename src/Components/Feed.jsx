import React, { useEffect, useState } from 'react'
import Stories from './Child Components/Stories'
import PostMaker from './Child Components/PostMaker'
import '../Styles/Feed.css'
import Post from './Child Components/Post'
import db from '../firebase'

function Feed() {

    const [posts, setPosts] = useState([])

    useEffect(() => {

        db.collection('posts')
            .orderBy('timestamp', 'desc')
            .onSnapshot(snapshot => {
                setPosts(snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data()
                })))
            })

    }, [])

    return (
        <div className="feed">
            <Stories />
            <PostMaker />

            {
                posts.map(post => (
                    <Post
                        key={post.id}
                        profilePic={post.data?.profilePic}
                        profileName={post.data?.profileName}
                        timestamp={post.data?.timestamp}
                        postContent={post.data?.postContent}
                        postImage={post.data?.postImage}
                    />
                ))
            }

        </div>
    )
}

export default Feed
