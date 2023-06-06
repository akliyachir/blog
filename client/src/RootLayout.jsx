import HeaderMain from "./1_Navigation/1_HeaderMain/HeaderMain";
import SideBarMainMenu from "./1_Navigation/2_SideBarMainMenu/SideBarMainMenu";
import SideMenuToggleContextProvider from "./Context/SideMenuToggleContext";
import "./RootLayout.css";

export default function RootLayout() {
  return (
    <SideMenuToggleContextProvider>
      <div className="RootLayout">
        <HeaderMain />
        <SideBarMainMenu />
      </div>
    </SideMenuToggleContextProvider>
  );
}
