import { Avatar } from '@material-ui/core'
import React from 'react'
import '../../Styles/Post.css'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import ChatBubbleOutlinedIcon from '@material-ui/icons/ChatBubbleOutlined'
import NearMeIcon from '@material-ui/icons/NearMe'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined'

function Post({ profilePic, postImage, profileName, timestamp, postContent }) {
    return (
        <div className="post">
            <div className="post__top">
                <Avatar className="post__avatar" src={profilePic} />
                <div className="post__topInfo">
                    <h3>{profileName}</h3>
                    <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
                </div>
            </div>
            <div className="post__bottom">
                <p>{postContent}</p>
            </div>
            {postImage && (
                <div className="post__image">
                    <img src={postImage} alt="" />
                </div>
            )}
            <div className="post__options">
                <div className="post__option">
                    <ThumbUpIcon />
                    <p>Like</p>
                </div>
                <div className="post__option">
                    <ChatBubbleOutlinedIcon />
                    <p>Comment</p>
                </div>
                <div className="post__option">
                    <NearMeIcon />
                    <p>Share</p>
                </div>
                <div className="post__option">
                    <AccountCircleIcon />
                    <ExpandMoreOutlinedIcon />
                </div>
            </div>

        </div>
    )
}

export default Post
