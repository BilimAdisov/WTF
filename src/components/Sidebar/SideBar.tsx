import React, { useState } from "react";
import { SDMoks } from "../../COMMON/moks/SideBArMoks";
import { CiMenuBurger } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

export const SideBarComponent = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const navigate = useNavigate();
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
              <li
                className="menu-item"
                onClick={() => navigate(`${elem.path}`)}
                key={elem.name}
              >
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
