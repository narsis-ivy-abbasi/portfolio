import AboutMe from "@/components/AboutMe";
import ContactMe from "@/components/ContactMe";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import WorkSample from "@/components/WorkSample";
import WorkTimeline from "@/components/WorkTimeline";
import { Box } from "@mui/material";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        px: { xs: 5, md: 10 },
      }}
    >
      <Header />
      <Box
        component="main"
        sx={{ flexGrow: 1, py: 4, width: "100%", margin: "auto",minWidth:"300px" }}
      >
        <AboutMe />
        <WorkSample />
        <WorkTimeline />
        <ContactMe />
        <ScrollToTop />
      </Box>
      <Footer />
      <ToastContainer position="top-right" autoClose={3000} />
    </Box>
  );
}
