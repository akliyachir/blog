import { useContext } from "react";
import "./HamburgerToggle.css";
import { SideMenuToggleContext } from "../../../Context/SideMenuToggleContext";
import { PageWidthContext } from "../../../Context/PageWidthContext";

export default function HamburgerToggle() {
  const { isSideMenuOpen, setIsSideMenuOpen } = useContext(
    SideMenuToggleContext
  );

  return (
    <div
      className={
        isSideMenuOpen ? "HamburgerToggleOpen" : "HamburgerToggleClosed"
      }
      onClick={() => {
        setIsSideMenuOpen(!isSideMenuOpen);
      }}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}
