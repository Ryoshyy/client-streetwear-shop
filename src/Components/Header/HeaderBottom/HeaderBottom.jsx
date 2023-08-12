import React from "react";
import hBStyles from "./HeaderBottom.module.scss";
import NikeLogo from "../../../Assets/Img/HeaderImg/NikeLogo.webp";
import HeaderBottomNav from "./HeaderBottomNav/HeaderBottomNav";
import HeaderBottomSearch from "./HeaderBottomSearch/HeaderBottomSearch";
import { Link } from "react-router-dom";

const HeaderBottom = (props) => {
  return (
    <div className={hBStyles.headerBottom}>
      <div className={hBStyles.container}>
        <div className={hBStyles.headerBottomMain}>
          <Link to="/home-page" className={hBStyles.headerBottomMain__logo}>
            <img alt="nike-logo" src={NikeLogo}></img>
          </Link>
          <div className={hBStyles.headerBottomMain__navigationCont}>
            <HeaderBottomNav />
            <HeaderBottomSearch />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderBottom;
