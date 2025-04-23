"use client";
import CloseIcon from "@mui/icons-material/Close";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import {
  Box,
  Button,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";

const NavItems = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "About", id: "about" },
    { label: "Samples", id: "samples" },
    { label: "History", id: "history" },
    { label: "Contact", id: "contact" },
  ];

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleCloseMenu = () => {
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleCloseMenu);

    return () => {
      window.removeEventListener("scroll", handleCloseMenu);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      {/* Desktop menu */}
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        {navItems.map((item) => (
          <Button
            key={item.label}
            onClick={() => handleScroll(item.id)}
            color="inherit"
          >
            <Typography variant="body2"> {item.label}</Typography>
          </Button>
        ))}
      </Box>

      {/* Mobile hamburger icon */}
      <Box sx={{ display: { xs: "flex", md: "none" }, position: "relative" }}>
        <IconButton onClick={toggleMenu} color="inherit">
          {isMenuOpen ? <CloseIcon /> : <MenuOutlinedIcon />}
        </IconButton>

        {/* Dropdown menu */}
        {isMenuOpen && (
          <Paper elevation={4}>
            <Box
              sx={{
                position: "absolute",
                top: "100%",
                left: 0,
                marginTop: 1,
                bgcolor: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.2)",
                boxShadow: 3,
                backdropFilter: "blur(10px)",
                borderRadius: 2,
                px: 1,
                py: 1,
                zIndex: 10,
              }}
            >
              <Stack spacing={1}>
                {navItems.map((item) => (
                  <Button
                    key={item.label}
                    onClick={() => handleScroll(item.id)}
                    color="inherit"
                    sx={{ justifyContent: "flex-start" }}
                  >
                    <Typography variant="body2"> {item.label}</Typography>
                  </Button>
                ))}
              </Stack>
            </Box>
          </Paper>
        )}
      </Box>
    </>
  );
};

export default NavItems;
