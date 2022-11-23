import React, { useState } from "react";
import { Waypoint } from "react-waypoint";

import classes from "./Information.module.scss";

const Information = () => {
  const [startAnimation, setStartAnimation] = useState(false);

  const handleSetActive = () => setStartAnimation(true);
  const handleClearActive = () => setStartAnimation(false);

  return (
    <div>
      <ul className={`${classes.list} ${startAnimation && classes.active}`}>
        <li className={classes.item}>
          <span className={classes.label}>Full name: </span>Nguyen Viet Hoang{" "}
        </li>
        <li className={classes.item}>
          <span className={classes.label}>Date of birth: </span>January 20th, 2000
        </li>
        <li className={classes.item}>
          <span className={classes.label}>Height: </span>170cm (5.57ft)
        </li>
        <li className={classes.item}>
          <span className={classes.label}>Nationality: </span>Vietnamese
        </li>
        <li className={classes.item}>
          <span className={classes.label}>Education: </span> Graduated at HUTECH
          University (2022)
        </li>
        <li className={classes.item}>
          <span className={classes.label}>Debut date: </span>August 7th, 2022
        </li>
        <Waypoint onEnter={handleSetActive} onLeave={handleClearActive} />
      </ul>
    </div>
  );
};

export default Information;
