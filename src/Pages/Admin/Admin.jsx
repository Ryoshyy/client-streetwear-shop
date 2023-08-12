import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsAuth } from "../../redux/slices/auth";

export const Admin = () => {
  const isAuth = useSelector(selectIsAuth);
  if (!window.localStorage.getItem("token") && !isAuth) {
    return <Navigate to="/" />;
  }
  return <div>Admin</div>;
};
