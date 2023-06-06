import { useContext } from "react";
import "./VoileCloseSideMenu.css";
import { SideMenuToggleContext } from "../../Context/SideMenuToggleContext";

export default function VoileCloseSideMenu() {
  const { isSideMenuOpen, setIsSideMenuOpen } = useContext(
    SideMenuToggleContext
  );
  return (
    <div
      className={
        isSideMenuOpen ? "VoileCloseSideMenuOpen" : "VoileCloseSideMenuClosed"
      }
      onClick={() => {
        setIsSideMenuOpen(!isSideMenuOpen);
      }}
    ></div>
  );
}
