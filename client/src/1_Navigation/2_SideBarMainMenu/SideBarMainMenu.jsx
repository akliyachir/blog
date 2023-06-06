import "./SideBarMainMenu.css";

import { useContext } from "react";
import { SideMenuToggleContext } from "../../Context/SideMenuToggleContext";

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
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et sed unde
      beatae, vitae voluptate repellendus nulla cum dolorum, officia in hic
      quasi autem eum nisi reprehenderit eius provident vero nam? Lorem ipsum
      dolor sit amet, consectetur adipisicing elit. Rem
    </menu>
  );
}
