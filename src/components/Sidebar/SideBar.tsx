import React, { useState } from "react";
import { SDMoks } from "../../app/COMMON/moks/SideBArMoks";
import { CiMenuBurger } from "react-icons/ci";

export const SideBarComponent = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="side-bar">
      <div className="menu">
        <div className="menu-wrapper">
          <span
            className="open-side-bar"
            onClick={() => setOpenMenu(!openMenu)}
          >
            <CiMenuBurger size={30} />
          </span>
          <ul className="menu-list">
            {SDMoks.map((elem) => (
              <li className="menu-item">
                <span className="menu-icon">{elem.icon}</span>
                <h2
                  className={
                    openMenu === true ? "menu-text active" : "menu-text"
                  }
                >
                  {elem.name}
                </h2>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
