import React from "react";
import hTopStyles from"./HeaderTop.module.scss";
import jordanLogo from "../../../Assets/Img/HeaderImg/JordanLogo.webp";
import { Link } from "react-router-dom";


const HeaderTop = (props) => {
  return (
    <div className={hTopStyles.headerTop}>
      <div className={hTopStyles.container}>
        <div className={hTopStyles.headerTopMain}>
          <img
            className={hTopStyles.headerTopMain__jordanImg}
            alt="jordan-logo"
            src={jordanLogo}
          ></img>
          <div className={hTopStyles.headerTopMain__navContainer}>
            <div className={hTopStyles.navC}> 
              <Link to="/findastore" className={hTopStyles.navTextD}>Find A Store</Link>
            </div>
            <div className={hTopStyles.navC}>
              <Link to="/Help" className={hTopStyles.navTextD}>Help</Link>
            </div>
            <div className={hTopStyles.navC}>
              <Link to="/JoinUs" className={hTopStyles.navTextD}>Join Us</Link>
            </div>
            <div className={hTopStyles.navC}>
              <Link to="/SignIn" className={hTopStyles.navTextD}>Sign In</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
