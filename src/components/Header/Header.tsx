import React, { useState } from "react";
import { BsFillSunFill, BsMoonStarsFill, BsSearch } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { toggleByTheme } from "../../store/slice/themeSlice";

export const HeaderComponent = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.value);
  console.log(theme);
  return (
    <div className="header">
      <div className="header-wrapper">
        <div className="header-nav">
          <div className="logo">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/30/Redux_Logo.png"
              alt="logo"
            />
          </div>
          <div className="theme">
            <span
              className="itheme"
              onClick={() => dispatch(toggleByTheme("light"))}
            >
              <BsFillSunFill size={20} />
            </span>
            <span
              className={theme === "light" ? "active left" : "active right"}
            ></span>
            <span
              className="itheme"
              onClick={() => dispatch(toggleByTheme("dark"))}
            >
              <BsMoonStarsFill size={20} />
            </span>
          </div>
          <div className="search">
            <span className="inp-icon">
              <BsSearch size={18} />
            </span>
            <input type="search" placeholder="Search" className="inp-search" />
          </div>
        </div>
      </div>
    </div>
  );
};
