import React from "react";
import { Link } from "react-scroll";
import { AiTwotoneHome, AiFillQuestionCircle, AiFillSchedule } from "react-icons/ai";
import { BsFillMusicPlayerFill } from "react-icons/bs";

import classes from "./NavBar.module.scss";
import MONOLogo from "../../public/MONO.png";

const NavBar = () => {
  return (
    <div className={classes.nav__container}>
      <div className={classes.nav__content}>
        <div className={classes.nav__logo}>
          <Link to="/">
            <img src={MONOLogo} alt="MONO" />
          </Link>
        </div>
        <div className={classes.nav__menubar}>
          <Link
            className={classes.nav__item}
            spy={true}
            smooth={true}
            duration={500}
            activeClass={classes.active}
            delay={100}
            to="home"
          >
            <div className={classes.icon}>
              <AiTwotoneHome />
            </div>
            <div className={classes.title}>
              <span>Home</span>
            </div>
          </Link>
          <Link
            className={classes.nav__item}
            spy={true}
            smooth={true}
            duration={500}
            activeClass={classes.active}
            delay={100}
            to="aboutPage"
          >
            <div className={classes.icon}>
              <AiFillQuestionCircle />
            </div>
            <div className={classes.title}>
              <span>About</span>
            </div>
          </Link>
          <Link
            className={classes.nav__item}
            spy={true}
            smooth={true}
            duration={500}
            activeClass={classes.active}
            delay={100}
            to="productPage"
          >
            <div className={classes.icon}>
              <BsFillMusicPlayerFill />
            </div>
            <div className={classes.title}>
              <span>Music Products</span>
            </div>
          </Link>
          <Link
            className={classes.nav__item}
            spy={true}
            smooth={true}
            duration={500}
            activeClass={classes.active}
            delay={100}
            to="bookingPage"
          >
            <div className={classes.icon}>
              <AiFillSchedule />
            </div>
            <div className={classes.title}>
              <span>Schedule</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
