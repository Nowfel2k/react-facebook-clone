import React from "react";
import "../Styles/RequestPage.css";
import Request from "./Child Components/Request";
import Header from "./Header";

let request_list = [
  "Ashwath",
  "Prashant",
  "Hussain",
  "Hasan",
  "Jameel",
  "Ankit",
  "Anirudh",
  "Dhanush",
  "Lokesh",
  "Hari",
  "Khaja",
  "Hu Yuang",
];

function RequestPage() {
  function deleteRequest(event, index) {
    event.preventDefault();
    console.log(`index removed [name: ${request_list[index]}] : ${index}`);
    request_list.splice(index, 1);
    console.log(request_list);
  }

  return (
    <div>
      <Header requests />

      <div className="requestPage">
        <div className="requestPage__sidebar">
          <div className="requestPage__info">
            <h2>Friends</h2>
            <h5>{request_list.length} friend requests</h5>
            <p>View sent requests</p>
          </div>
          <div className="requestPage__requests">
            {request_list.map((name, index) => (
              <Request
                key={index}
                name={name}
                id={index}
                action={deleteRequest}
              />
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
