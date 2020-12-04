import { Avatar } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { actionTypes } from "../../reducer";
import { useStateValue } from "../../StateProvider";
import "../../Styles/Request.css";

function Request({ name, id }) {
  const [seed, setSeed] = useState("");
  const [randomDays, setRandomDays] = useState(0);
  const [{ requests }, dispatch] = useStateValue();

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
    setRandomDays(Math.floor(Math.random() * 30));
  }, [requests.length]);

  const removeRequest = (del_id) => {
    const new_requests = requests.filter((req, req_id) => {
      return req_id !== del_id;
    });

    dispatch({
      type: actionTypes.REMOVE_REQUEST,
      requests: new_requests,
    });
  };

  return (
    <div className="request">
      <Avatar
        className="request__avatar"
        src={`https://avatars.dicebear.com/api/initials/${seed}.svg?options[mouth][]=smile`}
      />
      <div className="request__info">
        <div className="request__name">
          <p>{name}</p>
          <p className="request__date">{randomDays} d</p>
        </div>
        <div className="request__buttons">
          <button onClick={() => removeRequest(id)} className="request__accept">
            Accept
          </button>

          <button onClick={() => removeRequest(id)} className="request__delete">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Request;
