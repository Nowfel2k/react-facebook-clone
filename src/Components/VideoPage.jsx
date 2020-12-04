import React, { useState } from "react";

import Sidebar from "./Sidebar";
import VideoCard from "./Child Components/VideoCard";

import "../Styles/VideoPage.css";

function VideoPage() {
  const [videos, setVideos] = useState([]);

  return (
    <div className="videoPage">
      <Sidebar className="videoPage__sidebar" />
      <div className="videoPage__videos">
        {/* profileName, timestamp, description, videoLink */}
        <VideoCard
          profileName="Liven"
          videoLink=""
          description="Joe Biden Wins Election"
          timestamp={new Date().toUTCString}
        />
        {/* {videos.map((video, id) => (
          <VideoCard key={`video_${id}`} link={video} />
        ))} */}
      </div>
    </div>
  );
}

export default VideoPage;
