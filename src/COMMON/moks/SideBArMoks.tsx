import {
  CiGrid41,
  CiImageOn,
  CiMail,
  CiMusicNote1,
  CiSettings,
  CiUser,
} from "react-icons/ci";

export const SDMoks = [
  {
    name: "home",
    icon: <CiGrid41 size={30} />,
    path: "/home",
  },
  {
    name: "user",
    icon: <CiUser size={30} />,
    path: "/user",
  },
  {
    name: "music",
    icon: <CiMusicNote1 size={30} />,
    path: "/music",
  },
  {
    name: "messenger",
    icon: <CiMail size={30} />,
    path: "/messenger",
  },
  {
    name: "setting",
    icon: <CiSettings size={30} />,
    path: "/setting",
  },
  {
    name: "creat image",
    icon: <CiImageOn size={30} />,
    path: "/createImg",
  },
];
