import React, { useEffect } from "react";
import { useAdmin } from "../context/AdminContext";

const ThemeProvider = ({ children }) => {
  const { state } = useAdmin();

  useEffect(() => {
    const root = document.documentElement;
    if (state.theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [state.theme]);

  return <>{children}</>;
};

export default ThemeProvider;
