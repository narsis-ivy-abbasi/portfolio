"use client";

import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import DownloadIcon from "@mui/icons-material/Download";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import { AppBar, Box, IconButton, Toolbar, useTheme } from "@mui/material";
import { useColorMode } from "../app/context/ThemeContext";
import NavItems from "./NavItems";

const Header = () => {
  const theme = useTheme();
  const colorMode = useColorMode();

  return (
    <Box component="header" sx={{ py: 4 }}>
      <AppBar
        component="nav"
        sx={(theme) => ({
          backgroundColor:
            theme.palette.mode === "light"
              ? "rgba(255, 255, 255, 0.7)"
              : theme.palette.background.default,
          backdropFilter:
            theme.palette.mode === "light" ? "blur(10px)" : "none",
          boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
          color: "inherit",
        })}
      >
        <Toolbar>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: { xs: "start", md: "end" },
              flexGrow: 1,
              gap: 1,
              alignItems: "center",
            }}
          >
            <NavItems />
            {/* Download CV button */}
            <a
              href="/cv/NargesAbbasi.pdf"
              download
              style={{ textDecoration: "none" }}
              title="Download CV"
            >
              <IconButton
                sx={{
                  color: theme.palette.mode === "dark" ? "white" : "black",
                }}
              >
                <DownloadIcon />
              </IconButton>
            </a>

            <IconButton onClick={colorMode.toggleColorMode} color="inherit">
              {theme.palette.mode === "dark" ? (
                <WbSunnyOutlinedIcon />
              ) : (
                <DarkModeOutlinedIcon />
              )}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
