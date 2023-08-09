import React from "react";
import AdminButtons from "./Navigation/AdminButtons.jsx";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/slices/auth.js";
import { selectIsAuth } from "../../redux/slices/auth.js";
import { Link } from "react-router-dom";

export const UpperHeader = () => {
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
      {isAuth ? (
        <>
          <AdminButtons isAuth={isAuth} onClickLogout={onClickLogout} />
        </>
      ) : (
        <>
          <Link to="/login">log in</Link>
          <Link to="/register">register</Link>
        </>
      )}
    </>
  );
};
