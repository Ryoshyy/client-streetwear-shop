import React from "react";
import hStyle from "./Header.module.scss";
import HeaderTop from "./HeaderTop/HeaderTop";
import HeaderBottom from "./HeaderBottom/HeaderBottom";
import { Outlet } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <header className={hStyle.headerMain}>
        <HeaderTop />
        <HeaderBottom />
      </header>
      <Outlet />
    </>
  )
}
