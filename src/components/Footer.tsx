import { Box, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box component="footer" sx={{ py: 4, textAlign: "center",borderTop:1}}>
      <Typography>© Copyright {new Date().getFullYear()}</Typography>
    </Box>
  );
};

export default Footer;
