import React, { useState } from "react";

import Sidebar from "./Sidebar";
import VideoCard from "./Child Components/VideoCard";

import "../Styles/VideoPage.css";

import videos from "../Helpers/videos";

function VideoPage() {
  return (
    <div className="videoPage">
      <Sidebar style={{ marginTop: "30px" }} className="videoPage__sidebar" />
      <div className="videoPage__videos">
        {/* profileName, timestamp, description, videoLink */}
        {videos.map((video, id) => (
          <VideoCard
            key={`video_${id}`}
            videoLink={video.videoLink}
            profileName={video.profileName}
            profileImage={video.profileImage}
            timestamp={video.timestamp}
            description={video.description}
          />
        ))}
      </div>
    </div>
  );
}

export default VideoPage;
