import "./MenuItemsSideMenu.css";
import { NavLink } from "react-router-dom";
import { MenuItemsMain } from "../../../3_ListsVariables/MenuItemsMain";
import { useContext } from "react";
import { SideMenuToggleContext } from "../../../Context/SideMenuToggleContext";

export default function MenuItemsSideMenu() {
  const { isSideMenuOpen, setIsSideMenuOpen } = useContext(
    SideMenuToggleContext
  );

  return (
    <nav className="MenuItemsSideMenu">
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
            className="MenuItemsSideMenuITEM"
            onClick={() => {
              setIsSideMenuOpen(!isSideMenuOpen);
            }}
          >
            <NavLink to={MenuItemsMain_link} className="MenuItemsMain_link">
              <div>{MenuItemsMain_logo}</div>
              <div>{MenuItemsMain_title}</div>
            </NavLink>
          </div>
        );
      })}
    </nav>
  );
}

/* 
MenuItemsMain_id
MenuItemsMain_title
MenuItemsMain_logo
MenuItemsMain_link
*/
