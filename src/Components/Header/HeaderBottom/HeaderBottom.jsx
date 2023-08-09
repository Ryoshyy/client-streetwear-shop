import React from "react";
import hBStyles from"./HeaderBottom.module.scss";
import NikeLogo from "../../../Assets/Img/HeaderImg/NikeLogo.webp";
import HeaderBottomNav from "./HeaderBottomNav/HeaderBottomNav";
import HeaderBottomSearch from "./HeaderBottomSearch/HeaderBottomSearch";

const HeaderBottom = (props) => {
  return (
    <div className={hBStyles.headerBottom}>
      <div className={hBStyles.container}>
        <div className={hBStyles.headerBottomMain}>
          <img className={hBStyles.headerBottomMain__logo} alt="nike-logo" src={NikeLogo}></img>
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
