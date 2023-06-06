import HeaderMain from "./1_Navigation/1_HeaderMain/HeaderMain";
import SideBarMainMenu from "./1_Navigation/2_SideBarMainMenu/SideBarMainMenu";
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
        </div>
      </SideMenuToggleContextProvider>
    </PageWidthContextProvider>
  );
}
