import { createContext, useState } from "react";

export const SideMenuToggleContext = createContext();

export default function SideMenuToggleContextProvider({ children }) {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  return (
    <SideMenuToggleContext.Provider
      value={{ isSideMenuOpen, setIsSideMenuOpen }}
    >
      {children}
    </SideMenuToggleContext.Provider>
  );
}
