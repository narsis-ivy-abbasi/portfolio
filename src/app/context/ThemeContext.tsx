"use client";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { createContext, useContext, useMemo, useState, ReactNode } from "react";

const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useColorMode = () => useContext(ColorModeContext);

export const ThemeRegistry = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<"light" | "dark">("dark");

  const toggleColorMode = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          background: {
            default: mode === "light" ? "#F7F8FA" : "black", 
          },
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={{ toggleColorMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};
