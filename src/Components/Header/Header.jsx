import * as React from "react";
import { Outlet, Link } from "react-router-dom";



import { logout } from "../../redux/slices/auth.js";

import { Box } from "@mui/system";

import { selectIsAuth } from "../../redux/slices/auth.js";
import { useSelector, useDispatch } from "react-redux";

import styles from "./Header.module.scss";

const linkStyle = {
  textDecoration: "none",
  color: "white",
};

const navItems = [
  <Link to="/home" style={linkStyle}>
    Home
  </Link>,
  <Link to="/about" style={linkStyle}>
    About
  </Link>,
  <Link to="/contact" style={linkStyle}>
    Contact
  </Link>,
];

export const Header = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  const onClickLogout = () => {
    if (window.confirm("Are you sure you want to?")) {
      dispatch(logout());
      window.localStorage.removeItem("token");
    }
  };

  return (
    <>
      <div className={styles.root}>
        <div className={styles.upper_navbar}>
          <Box className={styles.HeaderLinks}>
            <div className={styles.NavLinks}>
              {navItems.map((itemMenu, id) => (
                <div className={styles.NavLinksItem} key={id}>
                  {itemMenu}
                </div>
              ))}
            </div>
          </Box>
        </div>
      </div>
      <Outlet />
    </>
  );
};
