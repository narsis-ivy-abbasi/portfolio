"use client";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Skills from "./Skills";

const skillsInfo = [
  { name: "HTML5", icon: "/icons/html5.svg" },
  { name: "CSS3", icon: "/icons/css3.svg" },
  { name: "JS", icon: "/icons/javascript.svg" },
  { name: "TS", icon: "/icons/typescript.svg" },
  { name: "React", icon: "/icons/react.svg" },
  { name: "Next.js", icon: "/icons/nextJs.svg" },
  { name: "Redux", icon: "/icons/redux.svg" },
  { name: "MUI", icon: "/icons/materialUI.svg" },
  { name: "Tailwind", icon: "/icons/tailwind.svg" },
  { name: "PHP", icon: "/icons/php.svg" },
  { name: "SQL", icon: "/icons/mySql.svg" },
  { name: "jQuery", icon: "/icons/jquery.svg" },
  { name: "Bootstrap", icon: "/icons/bootstrap.svg" },
  { name: "Figma", icon: "/icons/figma.svg" },
  { name: "SASS", icon: "/icons/sass.svg" },
  { name: "UI/UX", icon: "/icons/ui.svg" },
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
          <Typography variant="h3" gutterBottom>
            About Me
          </Typography>
          <Typography variant="h4" color="textDisabled" gutterBottom>
            Narges Abbasi
          </Typography>
          <Typography variant="h6" color="textSecondary" gutterBottom>
            Frontend Developer
          </Typography>
          <Typography
            variant="body1"
            sx={{ textAlign: "justify", paddingBottom: 5 }}
            gutterBottom
          >
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
            width: { xs: "100%", md: "fit-content" },
            maxWidth: 400,
            mx: "auto",
          }}
        >
          {/* <Box
            component="svg"
            viewBox="0 0 500 500"
            xmlns="http://www.w3.org/2000/svg"
            sx={{
              width: 430,
              height: 400,
              position: "absolute",
              left: "65%", // Center horizontally
              top: "55%", // Center vertically
              transform: "translate(-50%, -50%)", // Perfect centering
              zIndex: 0,
              opacity: 0.3,
            }}
          >
            <path
              fill="#6ec6ff"
              d="M150,200Q130,150,190,130Q220,70,290,100Q360,90,380,150Q440,170,430,230Q450,290,400,320Q370,380,300,360Q260,400,200,370Q150,350,130,300Q90,270,120,230Q150,200,150,200Z"
            />
          </Box> */}
          <Box
            component="svg"
            viewBox="0 0 500 500"
            xmlns="http://www.w3.org/2000/svg"
            sx={{
              width: 430,
              height: 400,
              position: "absolute",
              left:  { xs: "35%", md: "50%" }  , // Center horizontally
              top: "65%", // Center vertically
              transform: "translate(-50%, -50%)", // Perfect centering
              zIndex: 0,
              opacity: 0.3,
            }}
          >
            <path
              fill="#ffc0cb"
              d="M150,200Q130,150,190,130Q220,70,290,100Q360,90,380,150Q440,170,430,230Q450,290,400,320Q370,380,300,360Q260,400,200,370Q150,350,130,300Q90,270,120,230Q150,200,150,200Z"
            />
          </Box>

          {/* ROTATING CIRCLE WITH REACT ICONS */}
          <Box
            sx={{
              position: "absolute",
              right: { xs: 60, md: 50, lg: 60 },
              top: "25%",
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

          {/* FIXED IMAGE */}
          <Box
            sx={{
              position: "absolute",
              right: 60,
              bottom: { xs: "9%", md: "8%", lg: "16%" },
              height: 396,
              zIndex: 3,
              transition: "transform 0.4s ease",
              transformOrigin: "bottom center",
              borderBottom: "1px solid #ffc0cb",
              "&:hover": {
                transform: "scale(1.1)",
                filter: "brightness(1.1)",
              },
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
