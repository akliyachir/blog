import "./RootLayout.css";
import { Outlet } from "react-router-dom";
import HeaderMain from "./1_Navigation/1_HeaderMain/HeaderMain";
import SideBarMainMenu from "./1_Navigation/2_SideBarMainMenu/SideBarMainMenu";
import VoileCloseSideMenu from "./1_Navigation/3_VoileCloseSideMenu/VoileCloseSideMenu";
import FooterMain from "./1_Navigation/4_FooterMain/FooterMain";
import PageWidthContextProvider from "./Context/PageWidthContext";
import SideMenuToggleContextProvider from "./Context/SideMenuToggleContext";
import HauteurAjustementSousHeader from "./4_Components/02_HauteurAjustementSousHeader/HauteurAjustementSousHeader";

export default function RootLayout() {
  return (
    <PageWidthContextProvider>
      <SideMenuToggleContextProvider>
        <div className="RootLayout">
          <HeaderMain />
          <SideBarMainMenu />
          <VoileCloseSideMenu />
          <main className="MainContentContainerRootLayout">
            <HauteurAjustementSousHeader />
            <Outlet />
          </main>
          <FooterMain />
        </div>
      </SideMenuToggleContextProvider>
    </PageWidthContextProvider>
  );
}
