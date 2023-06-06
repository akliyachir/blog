import "./MenuHorizontalMain.css";
import { NavLink } from "react-router-dom";

import { MenuItemsMain } from "../../../3_ListsVariables/MenuItemsMain.jsx";

export default function MenuHorizontalMain() {
  return (
    <div className="MenuHorizontalMain">
      <nav className="MenuHorizontalMainItems">
        {MenuItemsMain.map((item) => {
          const {
            MenuItemsMain_id,
            MenuItemsMain_title,
            MenuItemsMain_logo,
            MenuItemsMain_link,
          } = item;

          return (
            <div
              key={MenuItemsMain_id}
              className=""
              onClick={() => {
                setIsSideMenuOpen(!isSideMenuOpen);
              }}
            >
              <NavLink
                to={MenuItemsMain_link}
                className="MenuItemsMain_link_hrz"
              >
                <div className="MenuItemsMain_logo_hrz">
                  {MenuItemsMain_logo}
                </div>
                <div className="MenuItemsMain_title_hrz">
                  {MenuItemsMain_title}
                </div>
              </NavLink>
            </div>
          );
        })}
      </nav>
    </div>
  );
}
