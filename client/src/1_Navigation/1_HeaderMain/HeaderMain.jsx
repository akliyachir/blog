import "./HeaderMain.css";

import LogoHeaderSite from "./1_LogoHeaderSite/LogoHeaderSite";
import HamburgerToggle from "./2_HamburgerToggle/HamburgerToggle";
import { useContext } from "react";
import { PageWidthContext } from "../../Context/PageWidthContext";
import MenuHorizontalMain from "./3_MenuHorizontalMain/MenuHorizontalMain";

export default function HeaderMain() {
  const { PageWidth } = useContext(PageWidthContext);

  return (
    <div className="HeaderMain">
      <LogoHeaderSite />
      {PageWidth < 650 ? <HamburgerToggle /> : <MenuHorizontalMain />}
    </div>
  );
}
