"use client";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Skills from "./Skills";

const skillsInfo = [
  { name: "HTML5", icon: "/icons/html5.svg" },
  { name: "CSS3", icon: "/icons/css3.svg" },
  { name: "JavaScript", icon: "/icons/javascript.svg" },
  { name: "TypeScript", icon: "/icons/typescript.svg" },
  { name: "React", icon: "/icons/react.svg" },
  { name: "Next.js", icon: "/icons/nextJs.svg" },
  { name: "Redux", icon: "/icons/redux.svg" },
  { name: "Tailwind", icon: "/icons/tailwind.svg" },
  { name: "PHP", icon: "/icons/php.svg" },
  { name: "SQL", icon: "/icons/mySql.svg" },
  { name: "jQuery", icon: "/icons/jquery.svg" },
  { name: "Bootstrap", icon: "/icons/bootstrap.svg" },
  { name: "Figma", icon: "/icons/figma.svg" },
  { name: "SASS", icon: "/icons/sass.svg" },
  { name: "UI/UX", icon: "/icons/ui.svg" },
  // { name: "Responsive", icon: "/icons/responsive.svg" },
  { name: "Debugging", icon: "/icons/debugging.svg" },
  { name: "Jira", icon: "/icons/jira.svg" },
  { name: "Git", icon: "/icons/git.svg" },
];

const AboutMe = () => {
  return (
    <Box
      id="about"
      sx={{
        py: { xs: 0, md: 10 },
        my: 5,
        borderRadius: 10,
        //  border: 1,
        // borderColor: "lightgreen",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: { xs: "column-reverse", md: "row" },
          justifyContent: "space-between",
          gap: 4,
        }}
      >
        {/* TEXT CONTENT */}
        <Box sx={{ flex: 1 / 2 }}>
          <Typography variant="h3" sx={{ pb: 10 }}>
            About Me
          </Typography>
          <Typography variant="h4" color="textDisabled" sx={{ pb: 1 / 2 }}>
            Narges Abbasi
          </Typography>
          <Typography variant="h6" color="textSecondary" sx={{ pb: 1 / 2 }}>
            Frontend Developer
          </Typography>
          <Typography sx={{ textAlign: "justify" }}>
            Dynamic Front-End Developer with over 9 years of experience in
            building responsive and user-friendly web applications. Proficient
            in HTML, CSS, JavaScript, and modern libraries like React, as well
            as frameworks like Node.js. Committed to delivering high-quality
            digital experiences that enhance user engagement.
          </Typography>
          <Skills skillsInfo={skillsInfo} iconSize={50} />
        </Box>

        {/* IMAGE + SVG BLOB + ROTATING CIRCLE */}
        <Box
          sx={{
            flex: 1,
            position: "relative",
            minHeight: { xs: 400, md: 500 },
            width: "100%",
            maxWidth: 400,
          }}
        >
          {/* SVG BACKGROUND */}
          <Box
            component="svg"
            viewBox="0 0 500 500"
            xmlns="http://www.w3.org/2000/svg"
            sx={{
              width: 400,
              height: 400,
              position: "absolute",
              right: { xs: 70, md: 10, lg: 70 },
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 1,
            }}
          >
            <path
              fill="#fdd835"
              d="M439,307Q381,364,307,422Q233,480,149,432Q65,384,88,292.5Q111,201,161.5,133.5Q212,66,289.5,92Q367,118,429.5,184Q492,250,439,307Z"
            />
          </Box>

          {/* ROTATING CIRCLE WITH REACT ICONS */}
          <Box
            sx={{
              position: "absolute",
              right: { xs: 60, md: 10, lg: 60 },
              top: "50%",
              transform: "translateY(-50%)",
              width: 250,
              height: 250,
              borderRadius: "50%",
              border: "2px dashed #61dafb",
              animation: "spin 100s linear infinite",
              zIndex: 2,
            }}
          >
            {/* React icons on the orbit */}
            {[
              { top: 0, left: "50%", transform: "translate(-50%, -50%)" },
              { top: "50%", left: 0, transform: "translate(-50%, -50%)" },
              { bottom: 0, left: "50%", transform: "translate(-50%, 50%)" },
            ].map((pos, index) => (
              <Box
                key={index}
                component="img"
                src="/icons/react_icon.svg"
                alt="React"
                sx={{
                  width: 30,
                  height: 30,
                  position: "absolute",
                  ...pos,
                }}
              />
            ))}
          </Box>

          {/* FIXED IMAGE (Not Rotating) */}
          <Box
            sx={{
              position: "absolute",
              right: { xs: 60, md: 10, lg: 60 },
              bottom: 0,
              height: 400,
              zIndex: 3,
            }}
          >
            <Image
              src="/aboutMe.png"
              alt="My picture"
              height={500}
              width={250}
              style={{ objectFit: "contain" }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutMe;
