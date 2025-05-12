"use client";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Skills from "./Skills";

const skillsInfo = [
  { name: "HTML5", icon: "/icons/html5.svg" ,isShow:true},
  { name: "CSS3", icon: "/icons/css3.svg" ,isShow:true},
  { name: "JS", icon: "/icons/javascript.svg" ,isShow:true},
  { name: "TS", icon: "/icons/typescript.svg" ,isShow:true},
  { name: "React", icon: "/icons/react.svg" ,isShow:true},
  { name: "Next.js", icon: "/icons/nextJs.svg" ,isShow:true},
  { name: "Redux", icon: "/icons/redux.svg" ,isShow:true},
  { name: "MUI", icon: "/icons/materialUI.svg" ,isShow:true},
  { name: "Tailwind", icon: "/icons/tailwind.svg",isShow:true },
  { name: "PHP", icon: "/icons/php.svg" ,isShow:true},
  { name: "SQL", icon: "/icons/mySql.svg" ,isShow:true},
  { name: "jQuery", icon: "/icons/jquery.svg" ,isShow:true},
  { name: "Bootstrap", icon: "/icons/bootstrap.svg" ,isShow:true},
  { name: "Figma", icon: "/icons/figma.svg" ,isShow:true},
  { name: "SASS", icon: "/icons/sass.svg",isShow:true},
  { name: "UI/UX", icon: "/icons/ui.svg" ,isShow:true},
  { name: "Debugging", icon: "/icons/debugging.svg" ,isShow:true},
  { name: "Jira", icon: "/icons/jira.svg" ,isShow:true},
  { name: "Git", icon: "/icons/git.svg" ,isShow:true},
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
          <Typography
            variant="h4"
            color="textDisabled"
            gutterBottom
            style={{ display: "flex", alignItems: "baseline" }}
          >
            Narges Abbasi
            <Typography
              component="span"
              style={{ fontSize: "0.60em", marginLeft: "8px" }}
            >
              (Front-end Developer)
            </Typography>
          </Typography>

          <Typography
            variant="body1"
            sx={{ textAlign: "justify", paddingBottom: 5 }}
            gutterBottom
          >
            Front-End Developer with 9+ years of experience building
            high-performance, responsive, and user-centric web applications.
            Proficient in HTML, CSS, JavaScript, TypeScript, React, and Next.js,
            with hands-on expertise in UI/UX design, testing (TDD), and
            performance optimization. Proven track record of improving
            development efficiency by 20% and enhancing user engagement by 30%.
            Passionate about creating scalable digital experiences and
            collaborating in cross-functional teams to bring intuitive
            interfaces to life. Currently focused on delivering impactful
            front-end solutions in modern, fast-paced environments.
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
              left: { xs: "40%", md: "50%" }, // Center horizontally
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
