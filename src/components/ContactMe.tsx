"use client";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";

import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import CircularProgress from "@mui/material/CircularProgress";
import emailjs from "emailjs-com";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;
const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;

emailjs.init(publicKey);
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}
const ContactMe = () => {
  const { register, handleSubmit, reset } = useForm<FormData>();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = async (data: any) => {
    setIsSending(true);
    try {
      await emailjs.send(serviceId, templateId, data);
      console.log("SUCCESS!");
      toast.success("Email sent successfully!");
      reset();
    } catch (err) {
      console.log("FAILED...", err);
      toast.error("Failed to send email. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <Box
      id="contact"
      sx={{
        py: { xs: 10, md: 20 },
        my: 5,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 3,
        }}
      >
        {/* 1-Inside Box right */}
        <Box sx={{ flex: 1 }}>
          <Typography variant="h3" gutterBottom>
            Contact Me
          </Typography>
          <Typography variant="body1" sx={{ textAlign: "justify", mb: 2 }}>
            Interested in working together or have a project in mind? Send me a
            message through the form below,I’ll be in touch shortly.
          </Typography>
          <Box sx={{ mb: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <LocalPhoneOutlinedIcon
                sx={{
                  mr: 1,
                  transition: "transform 0.3s ease, filter 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.2)",
                    filter: "brightness(1.4)",
                  },
                }}
              />
              <Typography variant="body1">+98 (912) 433-2264</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <PlaceOutlinedIcon
                sx={{
                  mr: 1,
                  transition: "transform 0.3s ease, filter 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.2)",
                    filter: "brightness(1.4)",
                  },
                }}
              />
              <Typography variant="body1">Iran, Tehran</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <EmailOutlinedIcon
                sx={{
                  mr: 1,
                  transition: "transform 0.3s ease, filter 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.2)",
                    filter: "brightness(1.4)",
                  },
                }}
              />
              <Typography variant="body1">
                narsis.ivy.abbasi@gmail.com
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{ display: "flex", gap: 2, mt: 2, justifyContent: "flex-end" }}
          >
            <Box
              component="a"
              href="www.linkedin.com/in/narsis-abbasi"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: "#4FC3F7",
                transition: "transform 0.3s ease, filter 0.3s ease",
                "&:hover": {
                  transform: "scale(1.2)",
                  filter: "brightness(1.4)",
                },
              }}
            >
              <LinkedInIcon fontSize="large" />
            </Box>
            <Box
              component="a"
              href="https://github.com/narsis-ivy-abbasi"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: "#4FC3F7",
                transition: "transform 0.3s ease, filter 0.3s ease",
                "&:hover": {
                  transform: "scale(1.2)",
                  filter: "brightness(1.4)",
                },
              }}
            >
              <GitHubIcon fontSize="large" />
            </Box>
            <Box
              component="a"
              href="https://dribbble.com/narsis_ivy_abbasi"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: "#4FC3F7",
                transition: "transform 0.3s ease, filter 0.3s ease",
                "&:hover": {
                  transform: "scale(1.2)",
                  filter: "brightness(1.4)",
                },
              }}
            >
              <SportsBasketballIcon fontSize="large" />
            </Box>
          </Box>
        </Box>

        {/* 2-Inside Box left */}
        <Box
          component="form"
          onSubmit={handleSubmit(sendEmail)}
          sx={{ display: "flex", flexDirection: "column", gap: 2, flex: 1 }}
        >
          <Grid container spacing={2}>
            <Grid size={{ xs: 6 }}>
              <TextField
                fullWidth
                label="First Name"
                {...register("firstName")}
              />
            </Grid>
            <Grid size={{ xs: 6 }}>
              <TextField
                fullWidth
                label="Last Name"
                {...register("lastName")}
              />
            </Grid>
          </Grid>

          <Grid size={{ xs: 6, md: 4, lg: 2 }}>
            <TextField
              fullWidth
              label="Email"
              type="email"
              {...register("email")}
            />
          </Grid>
          <Grid size={{ xs: 6, md: 4, lg: 2 }}>
            <TextField
              fullWidth
              multiline
              rows={4}
              label="Message"
              {...register("message")}
            />
          </Grid>
          <Button
            variant="contained"
            type="submit"
            disabled={isSending}
            sx={{
              backgroundColor: isSending ? "gray" : "#4FC3F7",
              "&:hover": { backgroundColor: isSending ? "gray" : "#29B6F6" },
              color: "white",
              px: 4,
              py: 1,
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {isSending ? (
              <CircularProgress size={20} sx={{ color: "white", mr: 1 }} />
            ) : (
              "Send Message"
            )}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactMe;
