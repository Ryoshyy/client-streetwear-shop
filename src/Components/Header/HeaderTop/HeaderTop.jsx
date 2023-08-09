import React from "react";
import hTopStyles from"./HeaderTop.module.scss";
import jordanLogo from "../../../Assets/Img/HeaderImg/JordanLogo.webp";
import { Link } from "react-router-dom";
import AdminButtons from "../Navigation/AdminButtons";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../redux/slices/auth";
import { selectIsAuth } from "../../../redux/slices/auth";


const HeaderTop = (props) => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  const onClickLogout = () => {
    if (window.confirm("Are you sure you want to?")) {
      dispatch(logout());
      window.localStorage.removeItem("token");
    }
  };
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
              <Link to="/findastore" className={hTopStyles.navTextD}>
                Find A Store
              </Link>
            </div>
            <div className={hTopStyles.navC}>
              <Link to="/Help" className={hTopStyles.navTextD}>
                Help
              </Link>
            </div>
            {isAuth ? (
              <>
                <div className={hTopStyles.navC}>
                  <AdminButtons isAuth={isAuth} onClickLogout={onClickLogout}/>
                </div>
              </>
            ) : (
              <>
                <div className={hTopStyles.navC}>
                  <Link to="/login" className={hTopStyles.navTextD}>
                    Log In
                  </Link>
                </div>
                <div className={hTopStyles.navC}>
                  <Link to="/register" className={hTopStyles.navTextD}>
                    Sign In
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
