import React from "react";
import "../Styles/Home.css";
import ChatBar from "./ChatBar";
import Feed from "./Feed";
import Sidebar from "./Sidebar";

function Home() {
  return (
    <div className="home">
      <Sidebar />
      <Feed />
      <ChatBar />
    </div>
  );
}

export default Home;
