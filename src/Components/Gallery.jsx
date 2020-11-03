import React, { useState } from "react";
import ProfileTop from "./Child Components/ProfileTop";
import { gallery } from "../Helpers/gallery";
import "../Styles/Gallery.css";
import Header from "./Header";

import Unsplash, { toJson } from "unsplash-js";

const unsplash = new Unsplash({
  accessKey: "EYFskHU0LeLs3OV5CBkdwtd582NeIbjJmF5IKgyUsbw",
});

// import { createClient } from "pexels";

// const client = createClient(
//   "563492ad6f9170000100000193b696659d4c4093a6100d11e95bad51"
// );

// client.photos.show({ id: 2014422 }).then(photo => {...});

function Gallery() {
  const [gallery, setGallery] = useState([]);

  const ROOT = `https://api.unsplash.com/`;
  const KEY = `?client_id=EYFskHU0LeLs3OV5CBkdwtd582NeIbjJmF5IKgyUsbw`;
  const PERPAGE = `&per_page=30`;

  const fetchInitialImages = () => {
    axios
      .get(`${ROOT}photos${KEY}${PERPAGE}&page=1`)
      .then((res) => {
        let results = res.data;
        setGallery(results);
        console.log(results);
      })
      .catch((error) => console.log(error));
  };

  const getRandomTen = () => {
    let num = Math.floor(Math.random() * 12);
    return num;
  };

  // eslint-disable-next-line
  const getRandomMil = () => {
    let num = Math.floor(Math.random() * 300000);
    return num;
  };

  // const api = "563492ad6f9170000100000193b696659d4c4093a6100d11e95bad51";
  // pexels

  // access = 'EYFskHU0LeLs3OV5CBkdwtd582NeIbjJmF5IKgyUsbw'
  // secretKey = '9q22awwkjvVUOoB18_jPgzVbQEWHQpHCCqUBF0yapmA'
  // unsplash - unlimited photo api

  return (
    <div>
      <Header />
      <ProfileTop />
      <div className="pre_gallery">
        <div className="gallery">
          <div className="gallery__top">
            <h2>Photos</h2>
            <button>Your Photos</button>
            <button>Albums</button>
          </div>
          <div className="gallery__container">
            {unsplash.photos
              .listPhotos(2, 15, "latest")
              .then(toJson)
              .then((json) => {
                // console.log(json);
                json.map((obj) => (
                  <img src={obj.urls.full[0]} alt="unsplash_image" />
                ));
              })}

            {/* {gallery.map((photo) => (
              <img
                className={`${getRandomTen() > 5 ? "horizontal" : "vertical"}`}
                src={photo}
                alt="gallery_image"
              />
            ))} */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;

/*

{
  "id": 2014422,
  "width": 3024,
  "height": 3024,
  "url": "https://www.pexels.com/photo/brown-rocks-during-golden-hour-2014422/",
  "photographer": "Joey Farina",
  "photographer_url": "https://www.pexels.com/@joey",
  "photographer_id": 680589,
  "src": {
    "original": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg",
    "large2x": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "large": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "medium": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=350",
    "small": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=130",
    "portrait": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    "landscape": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    "tiny": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
  },
  "liked": false
}

*/
