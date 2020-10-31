import React from "react";
import ProfileTop from "./Child Components/ProfileTop";
import { gallery } from "../Helpers/gallery";
import "../Styles/Gallery.css";
import Header from "./Header";

function Gallery() {
  const getRandom = () => {
    let num = Math.floor(Math.random() * 12);
    console.log(num);
    return num;
  };

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
            {gallery.map((photo) => (
              <img
                className={`${getRandom() > 5 ? "horizontal" : "vertical"}`}
                src={photo}
                alt="gallery_image"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
