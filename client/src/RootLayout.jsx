import { Outlet } from "react-router-dom";
import HeaderMain from "./1_Navigation/1_HeaderMain/HeaderMain";
import SideBarMainMenu from "./1_Navigation/2_SideBarMainMenu/SideBarMainMenu";
import VoileCloseSideMenu from "./1_Navigation/3_VoileCloseSideMenu/VoileCloseSideMenu";
import FooterMain from "./1_Navigation/4_FooterMain/FooterMain";
import PageWidthContextProvider from "./Context/PageWidthContext";
import SideMenuToggleContextProvider from "./Context/SideMenuToggleContext";
import "./RootLayout.css";

export default function RootLayout() {
  return (
    <PageWidthContextProvider>
      <SideMenuToggleContextProvider>
        <div className="RootLayout">
          <HeaderMain />
          <SideBarMainMenu />
          <VoileCloseSideMenu />
          <Outlet />
          <FooterMain />
        </div>
      </SideMenuToggleContextProvider>
    </PageWidthContextProvider>
  );
}
