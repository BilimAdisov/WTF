import React from "react";
import { HeaderComponent } from "../components/Header/Header";
import { SideBarComponent } from "../components/Sidebar/SideBar";
import { SectionComponent } from "../components/Section/Section";

export const MainPage = () => {
  return (
    <div className="main">
      <SideBarComponent />
      <HeaderComponent />
      <SectionComponent />
    </div>
  );
};
