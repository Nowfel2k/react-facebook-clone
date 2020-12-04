import React, { useState, useEffect } from "react";
import "../../Styles/Gallery.css";
import Unsplash, { toJson } from "unsplash-js";
import { CircularProgress } from "@material-ui/core";

import fetch from "node-fetch";
global.fetch = fetch;

function Gallery() {
  const [gallery, setGallery] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsplash = new Unsplash({
      accessKey: "EYFskHU0LeLs3OV5CBkdwtd582NeIbjJmF5IKgyUsbw",
    });

    unsplash.photos
      .listPhotos(77, 15, "latest")
      .then(toJson)
      .then(async (json) => {
        setGallery(json);
        // console.log(json);
        setTimeout(() => {
          setLoading(false);
        }, 3000);
      });
  }, []);

  return (
    <div className="gallery__container">
      <div className="gallery">
        <div className="gallery__top">
          <h2>Photos</h2>
          <button className="button_selected">Your Photos</button>
          <button>Albums</button>
        </div>

        {loading && <CircularProgress />}
        <ul className="gallery__ul">
          {!loading &&
            gallery.map((photo) => (
              <div className="gallery__li">
                <img
                  key={photo.id}
                  className="gallery__image"
                  src={photo.urls.full}
                  alt="gallery_image"
                />
              </div>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default Gallery;
