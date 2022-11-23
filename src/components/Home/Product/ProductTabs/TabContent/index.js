import React from "react";
import Slider from "react-slick";

import classes from "./TabContent.module.scss";

const TabContent = ({ videos, albums }) => {
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
                <span className={classes.title}>{video.name}</span>
                <span className={classes.subtitle}>{video.singer}</span>
              </div>
            </div>
          );
        })}
      {albums?.length > 0 &&
        albums.map((album) => {
          return (
            <div className={classes.slider__item} key={album.id}>
              <div className={classes.album__img}>
                <img src={album.albumImg} alt={album.name} />
              </div>

              <div className={classes.detail}>
                <span className={classes.title}>{album.name}</span>
                <span className={classes.subtitle}>{album.songs}</span>
              </div>
            </div>
          );
        })}
    </Slider>
  );
};

export default TabContent;
