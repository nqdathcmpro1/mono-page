import React from "react";

import classes from "./About.module.scss";
import monoYoung from "../../../public/mono-young.png";
import Information from "./Information";

const Description = () => {
  return (
    <div id="aboutPage" className={classes.container}>
      <div className={classes.title}>About MONO</div>
      <div className={classes.content}>
        <div className={classes.description}>
          <Information />
        </div>
        <div className={classes.image}>
          <img src={monoYoung} alt="MONO" />
        </div>
      </div>
    </div>
  );
};

export default Description;
