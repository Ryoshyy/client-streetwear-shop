
import React from "react";
import hStyle from "./Header.module.scss";
import HeaderTop from "./HeaderTop/HeaderTop";
import HeaderBottom from "./HeaderBottom/HeaderBottom";

const Header = (props) => {
  return <header className={hStyle.headerMain}>
    <HeaderTop />
    <HeaderBottom />
  </header>;
};

export default Header;

