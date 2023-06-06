import "./SideBarMainMenu.css";

import { FaRegWindowClose } from "react-icons/fa";

import { useContext } from "react";
import { SideMenuToggleContext } from "../../Context/SideMenuToggleContext";
import SocialCluster from "./1_SocialCluster/SocialCluster";
import MenuItemsSideMenu from "./2_MenuItemsSideMenu/MenuItemsSideMenu";

export default function SideBarMainMenu() {
  const { isSideMenuOpen, setIsSideMenuOpen } = useContext(
    SideMenuToggleContext
  );
  return (
    <menu
      className={
        isSideMenuOpen ? "SideBarMainMenuOpen" : "SideBarMainMenuClosed"
      }
    >
      <div
        className="CloseButtonSideMenuMain"
        onClick={() => {
          setIsSideMenuOpen(!isSideMenuOpen);
        }}
      >
        <FaRegWindowClose />
      </div>
      <SocialCluster />
      <MenuItemsSideMenu />
    </menu>
  );
}
