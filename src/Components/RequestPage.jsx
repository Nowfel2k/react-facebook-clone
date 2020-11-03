import React from "react";
import { useStateValue } from "../StateProvider";
import "../Styles/RequestPage.css";
import Request from "./Child Components/Request";
import Header from "./Header";

function RequestPage() {
  const [{ requests }] = useStateValue();

  return (
    <div>
      <Header requests />

      <div className="requestPage">
        <div className="requestPage__sidebar">
          <div className="requestPage__info">
            <h2>Friends</h2>
            <h5>{requests.length} friend requests</h5>
            <p>View sent requests</p>
          </div>
          <div className="requestPage__requests">
            {requests.map((name, index) => (
              <Request key={index} name={name} id={index} />
            ))}
          </div>
        </div>

        <div className="requestPage__right">
          <img
            alt="requestPage_logo"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.freepik.com%2Ffree-vector%2Fpeople-with-thumbs-up-symbol_53876-40291.jpg&f=1&nofb=1"
          />
          <h3>Select people's names to preview their profile</h3>
        </div>
      </div>
    </div>
  );
}

export default RequestPage;
