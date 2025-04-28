"use client";

import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import DownloadIcon from "@mui/icons-material/Download";
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import Image from "next/image";
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
              display: { xs: "none", md: "flex" },
              flexDirection: "row",
              flexGrow: 1,
              gap: 1,
              alignItems: "center",
            }}
          >
            <Image
              src="/frontEnd.png"
              alt="portfolio icon"
              height={50}
              width={30}
              style={{ objectFit: "contain" }}
            />

            <Typography variant="h6" component="div">
              Portfolio
            </Typography>
          </Box>

          <NavItems />
          {/* Download CV button */}
          <a href="/cv/NargesAbbasi.pdf" download style={{ textDecoration: "none" }} title="Download C">
            <IconButton sx={{color: theme.palette.mode === "dark"? "white" :"black"}}>
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
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
