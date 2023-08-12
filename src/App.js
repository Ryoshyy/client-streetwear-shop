import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Login } from "./Pages/Login/Login";
import { Register } from "./Pages/Register/Register";

import { HomePage } from "./Pages/HomePage/HomePage.jsx";
import { Header } from "./Components/Header/Header.jsx";
import { useSelector, useDispatch } from "react-redux";
import { fetchAuthMe, selectIsAuth } from "./redux/slices/auth.js";
import { Admin } from "./Pages/Admin/Admin.jsx";

function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  React.useEffect(() => {
    dispatch(fetchAuthMe());
  }, []);
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/admin-panel" element={<Admin />}></Route>
          <Route path="/home-page" element={<HomePage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
