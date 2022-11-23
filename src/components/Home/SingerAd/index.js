import React from "react";

import classes from"./Home.module.scss";
import portrait from "../../../public/mono-png.png";
import Advertisement from "./Advertisement";

const SingerAd = () => {
  return (
    <>
      <div className={classes.container} id="home">
        <div className={classes.content}>
          <div className={classes.singer__portrait}>
            <img src={portrait} alt="portrait" />
          </div>
          <div className={classes.singer__advertisement}>
            <Advertisement />
          </div>
        </div>
      </div>
    </>
  );
};

export default SingerAd;
