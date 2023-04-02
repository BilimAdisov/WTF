import React from "react";
import { HeaderComponent } from "../components/Header/Header";
import { SideBarComponent } from "../components/Sidebar/SideBar";

export const MainPage = () => {
  return (
    <div className="main">
      <SideBarComponent />
      <HeaderComponent />
    </div>
  );
};
