import React, { useEffect } from "react";
import "../Styles/Home.css";
import ChatBar from "./ChatBar";
import Feed from "./Feed";
import Sidebar from "./Sidebar";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="home">
      <Sidebar />
      <Feed />
      <ChatBar />
    </div>
  );
}

export default Home;
