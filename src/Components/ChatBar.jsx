import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import "../Styles/ChatBar.css";
import Friend from "./Child Components/Friend";
import Request from "./Child Components/Request";

function ChatBar() {
  const [{ requests }] = useStateValue();

  const friends_list = [
    "Bobby",
    "Faiz",
    "Fazil",
    "Arief",
    "Nabeel",
    "Abdullah",
    "Aadhil",
    "Farhan",
    "Kaja",
    "Mydeeen",
    "Salahudheen",
  ];

  return (
    <div className="chatbar">
      <div className="chatbar__requests">
        {requests.length > 0 && (
          <div className="chatbar__requests--info">
            <h4>
              Friend Requests <small>({requests.length})</small>{" "}
            </h4>
            <Link to="/requests">
              <p>See All</p>
            </Link>
          </div>
        )}
        {requests
          .filter((req, id) => {
            return id < 2;
          })
          .map((name, index) => (
            <>
              <Request key={index} name={name} id={index} />
            </>
          ))}
      </div>
      <div className="chatbar__contacts">
        <h4>Contacts</h4>
        <a
          className="chatbar__link"
          target="_blank"
          href="http://messenger-nowfel2k.web.app"
        >
          {friends_list.map((friend, id) => {
            return <Friend key={id + 50} name={friend} />;
          })}
        </a>
      </div>
    </div>
  );
}

export default ChatBar;
