import React from "react";

import classes from "./Advertisement.module.scss";

const Advertisement = () => {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <span className={classes.title}>Introducing</span>
        <span className={classes.name}>MONO</span>
        <span className={classes.title}>NO.1 Rising V-Pop STAR of 2022</span>
        <iframe
          className={classes.video}
          src="https://www.youtube.com/embed/lBn4Vv0kH1o?autoplay=1&mute=1"
          title="Waiting for you - MONO"
        />
      </div>
    </div>
  );
};

export default Advertisement;
