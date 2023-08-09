import React from "react";
import hBottomNStyles from "./HeaderBottomNav.module.scss";
import { Link } from "react-router-dom";

const HeaderBottomNav = (props) => {
  return (
    <div className={hBottomNStyles.navContainner}>
      <div>
        <Link to="/New&Featured" className={hBottomNStyles.navText}>New & Featured</Link>
      </div>
      <div>
        <Link to="/Men" className={hBottomNStyles.navText}>Men</Link>
      </div>
      <div>
        <Link to="/Women" className={hBottomNStyles.navText}>Women</Link>
      </div>
      <div>
        <Link to="/Kids" className={hBottomNStyles.navText}>Kids</Link>
      </div>
      <div>
        <Link to="/Sale" className={hBottomNStyles.navText}>Sale</Link>
      </div>
      <div>
        <Link to="/SNKRS" className={hBottomNStyles.navText}>SNKRS</Link>
      </div>
    </div>
  );
};

export default HeaderBottomNav;
