import React from "react";
import hBottomSStyles from"./HeaderBottomSearch.module.scss";
import { useState } from "react";


const HeaderBottomSearch = (props) => {
  return (
    <div className={hBottomSStyles.headerBottomSearch}>
      <input  placeholder="Search" className={hBottomSStyles.headerBottomSearch__searchInput}></input>
    </div>
  );
};

export default HeaderBottomSearch; 