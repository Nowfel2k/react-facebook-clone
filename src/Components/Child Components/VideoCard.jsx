import React, { useEffect, useState } from "react";
import "../../Styles/VideoCard.css";
import { Avatar } from "@material-ui/core";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatBubbleOutlinedIcon from "@material-ui/icons/ChatBubbleOutlined";
import NearMeIcon from "@material-ui/icons/NearMe";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";

function VideoCard({
  profileName,
  profileImage,
  timestamp,
  description,
  videoLink,
}) {
  const [seed, setSeed] = useState("");
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  return (
    <div className={`video`}>
      <div className="video__top">
        <Avatar
          className="video__avatar"
          src={
            profileImage
              ? profileImage
              : `https://avatars.dicebear.com/api/initials/${seed}.svg`
          }
        />
        <div className="video__topInfo">
          <h3>{profileName}</h3>
          <p>{timestamp}</p>
        </div>
      </div>
      <div className="video__bottom">
        <p>{description}</p>
      </div>
      {videoLink && (
        <div className="video__image">
          <iframe
            width="734"
            height="411"
            src={videoLink}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}
      <div className="video__options">
        <div className="video__option">
          <ThumbUpIcon />
          <p>Like</p>
        </div>
        <div className="video__option">
          <ChatBubbleOutlinedIcon />
          <p>Comment</p>
        </div>
        <div className="video__option">
          <NearMeIcon />
          <p>Share</p>
        </div>
        <div className="video__option">
          <AccountCircleIcon />
          <ExpandMoreOutlinedIcon />
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
