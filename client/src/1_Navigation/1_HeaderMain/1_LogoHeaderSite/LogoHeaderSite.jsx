import { useContext } from "react";
import { GiCaveman } from "react-icons/gi";
import "./LogoHeaderSite.css";

import { NavLink } from "react-router-dom";
import { PageWidthContext } from "../../../Context/PageWidthContext";

export default function LogoHeaderSite() {
  const { PageWidth } = useContext(PageWidthContext);
  return (
    <div
      className={
        PageWidth < 650 ? "LogoHeaderSiteSmall" : "LogoHeaderSiteMedium"
      }
    >
      <NavLink to={"/"}>
        <p>
          Todo Buenos Aires
          <GiCaveman />
        </p>
      </NavLink>
    </div>
  );
}
