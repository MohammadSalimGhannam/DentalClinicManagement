import React, { createContext, useState, useEffect } from "react";

export const WindowSizeContext = createContext();

export const WindowSizeProvider = ({ children }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <WindowSizeContext.Provider value={windowWidth}>
      {children}
    </WindowSizeContext.Provider>
  );
};