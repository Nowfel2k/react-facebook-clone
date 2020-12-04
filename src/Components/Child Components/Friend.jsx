import { Avatar } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import "../../Styles/Friend.css";

function Friend({ name }) {
  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  return (
    <div className="friend">
      <Avatar
        src={`https://avatars.dicebear.com/api/initials/${seed}.svg?options[mouth][]=smile`}
      />
      <p>{name}</p>
    </div>
  );
}

export default Friend;
