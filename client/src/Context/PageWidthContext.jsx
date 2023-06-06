import { createContext, useEffect, useState } from "react";

export const PageWidthContext = createContext();

export default function PageWidthContextProvider({ children }) {
  const [PageWidth, setPageWidth] = useState();

  useEffect(() => {
    setPageWidth(globalThis.innerWidth);
  }, []);

  useEffect(() => {
    globalThis.addEventListener("resize", () => {
      setPageWidth(globalThis.innerWidth);
    });

    return globalThis.removeEventListener("resize", () => {
      setPageWidth(globalThis.innerWidth);
    });
  });

  return (
    <PageWidthContext.Provider value={{ PageWidth }}>
      {children}
    </PageWidthContext.Provider>
  );
}
