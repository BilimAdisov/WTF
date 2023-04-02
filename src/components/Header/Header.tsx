import React, { useState } from "react";
import { BsFillSunFill, BsMoonStarsFill, BsSearch } from "react-icons/bs";

export const HeaderComponent = () => {
  const [theme, setTheme] = useState("light");
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
            <span className="itheme" onClick={() => setTheme("light")}>
              <BsFillSunFill size={20} />
            </span>
            <span
              className={theme === "light" ? "active left" : "active right"}
            ></span>
            <span className="itheme" onClick={() => setTheme("dark")}>
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
