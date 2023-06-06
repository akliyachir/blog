import "./LogoHeaderSite.css";

import { NavLink } from "react-router-dom";

export default function LogoHeaderSite() {
  return (
    <div className="LogoHeaderSite">
      <NavLink to={"/"}>
        <h3>Todo Buenos Aires</h3>
      </NavLink>
    </div>
  );
}
