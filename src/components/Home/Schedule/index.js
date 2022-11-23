import React from "react";

import classes from "./Schedule.module.scss";
import schedule from "../../../data/scheduleData";

const Booking = () => {
  return (
    <div id="bookingPage" className={classes.container}>
      <div className={classes.title}>Shows & Tours Schedule</div>
      <div className={classes.content}>
        {schedule?.length > 0 &&
          schedule.map((schel) => {
            return (
              <div className={classes.schedule__container} key={schel.id}>
                <span className={classes.schedule__name}>{schel.name}</span>
                <span className={classes.schedule__date}>{schel.date}</span>
                <span className={classes.schedule__ticket__number}>
                  Tickets: {schel.numberOFTickets}
                </span>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Booking;
