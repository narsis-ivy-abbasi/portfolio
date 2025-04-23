"use client";

import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import { useColorMode } from "../app/context/ThemeContext";
import NavItems from "./NavItems";
import Image from "next/image";

const Header = () => {
  const theme = useTheme();
  const colorMode = useColorMode();

  return (
    <Box component="header" sx={{ py: 4 }}>
      <AppBar component="nav">
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
