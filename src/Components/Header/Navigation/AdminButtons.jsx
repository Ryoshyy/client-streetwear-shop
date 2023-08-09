import React from "react";
import { Link } from "react-router-dom";
import styles from "./AdminButtons.module.scss";
import AccountBoxSharpIcon from "@mui/icons-material/AccountBoxSharp";
import ExitToAppSharpIcon from "@mui/icons-material/ExitToAppSharp";

export default function Buttons({ isAuth, onClickLogout }) {
  const linkStyle = {
    textDecoration: "none",
    textTransform: "uppercase",
  };
  return (
    <>
      {isAuth ? (
        <>
          <div className={styles.NavAdminBtn}>
            <Link
              style={linkStyle}
              className={styles.AdminBtn}
              to="/admin-panel"
            >
              <span>Admin</span>
              <AccountBoxSharpIcon fontSize="small" />
            </Link>

            <Link
              style={linkStyle}
              className={styles.LogoutBtn}
              onClick={onClickLogout}
            >
              <span>Logout</span>
              <ExitToAppSharpIcon fontSize="small" />
            </Link>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
