import "./HeaderMain.css";

import LogoHeaderSite from "./1_LogoHeaderSite/LogoHeaderSite";
import HamburgerToggle from "./2_HamburgerToggle/HamburgerToggle";

export default function HeaderMain() {
  return (
    <div className="HeaderMain">
      <LogoHeaderSite />
      <HamburgerToggle />
    </div>
  );
}
