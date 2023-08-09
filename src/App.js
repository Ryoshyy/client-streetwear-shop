
import './App.scss';
import Header from './Components/Header/Header';
import React from "react";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import { Login } from "./Pages/Login/Login";
import { Register } from "./Pages/Register/Register";
import { HomePage } from "./Pages/HomePage/HomePage.jsx";
import { UpperHeader } from "./Components/Header/UpperHeader";
import { useSelector, useDispatch } from "react-redux";
import { fetchAuthMe, selectIsAuth } from "./redux/slices/auth.js";



function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  React.useEffect(() => {
    dispatch(fetchAuthMe());
  }, []);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
      <HomePage />
    </BrowserRouter>
  );
}

export default App;
