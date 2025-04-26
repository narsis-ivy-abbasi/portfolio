"use client";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Fab, useTheme, Zoom } from "@mui/material";
import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const theme = useTheme();

  return (
    <Zoom in={visible}>
      <Fab 
        onClick={handleClick}
        size="small"
        sx={{
          position: "fixed",
          bottom: 40,
          right: 40,
          zIndex: 1000,
          backgroundColor:
            theme.palette.mode === "light"
              ? "rgba(0, 0, 0, 0.6)"
              : "rgba(255, 255, 255, 0.7)",
          color: theme.palette.mode === "light" ? "#fff" : "#000",
          "&:hover": {
            backgroundColor:
              theme.palette.mode === "light"
                ? "rgba(0, 0, 0, 0.8)"
                : "rgba(255, 255, 255, 0.9)",
          },
        }}
        aria-label="Scroll back to top"
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </Zoom>
  );
};

export default ScrollToTop;
