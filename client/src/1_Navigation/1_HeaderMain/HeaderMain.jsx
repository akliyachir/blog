import "./HeaderMain.css";

import LogoHeaderSite from "./1_LogoHeaderSite/LogoHeaderSite";
import HamburgerToggle from "./2_HamburgerToggle/HamburgerToggle";
import { useContext } from "react";
import { PageWidthContext } from "../../Context/PageWidthContext";

export default function HeaderMain() {
  const { PageWidth } = useContext(PageWidthContext);
  return (
    <div className="HeaderMain">
      <LogoHeaderSite />
      <div>{PageWidth}</div>
      <HamburgerToggle />
    </div>
  );
}
