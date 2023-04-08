import { Route, Routes } from "react-router-dom";
import { HomeSection } from "./sections/home";
import { FC } from "react";
import { UserSection } from "./sections/user";
import { MusicSection } from "./sections/music";
import { MessengerSection } from "./sections/messenger";
import { SettingSection } from "./sections/setting";
import { CreateImgSection } from "./sections/createImg";

export const SectionComponent: FC<any> = (): JSX.Element => {
  return (
    <>
      <div className="section">
        <div className="section-wrapper">
          <Routes>
            <Route path="/home" element={<HomeSection />} />
            <Route path="/user" element={<UserSection />} />
            <Route path="/music" element={<MusicSection />} />
            <Route path="/messenger" element={<MessengerSection />} />
            <Route path="/setting" element={<SettingSection />} />
            <Route path="/createImg" element={<CreateImgSection />} />
          </Routes>
        </div>
      </div>
    </>
  );
};
