import React from "react";
import Slider from "react-slick";

import classes from "./TabContent.module.scss";

const TabContent = ({ videos, album }) => {
  const settings = {
    className: classes.container,
    dots: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    rows: 1,
    infinite: true,
    slidesToShow: 1,
  };

  return (
    <Slider {...settings}>
      {videos?.length > 0 &&
        videos.map((video) => {
          return (
            <div className={classes.slider__item} key={video.id}>
              <div className={classes.video}>
                <iframe src={video.url} title={video.name} />
              </div>

              <div className={classes.detail}>
                <span className={classes.name}>{video.name}</span>
                <span className={classes.singer}>{video.singer}</span>
              </div>
            </div>
          );
        })}
      {album && (
        <div className={classes.slider__item} key={album.id}>
          <div className={classes.album__img}>
            <img src={album.albumImg} alt={album.name} />
          </div>

          <div className={classes.detail}>
            <span className={classes.name}>{album.name}</span>
            <span className={classes.name}>{album.songs}</span>
          </div>
        </div>
      )}
    </Slider>
  );
};

export default TabContent;
