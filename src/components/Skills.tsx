"use client";
import React from "react";
import { Box, Typography } from "@mui/material";

interface skill {
  name?: string;
  icon: string;
}

interface skillProps {
  skillsInfo: skill[];
  iconSize: number;
}

const Skills = ({ skillsInfo, iconSize }: skillProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 1,
        alignItems: "center",
      }}
    >
      {skillsInfo.map((skill, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            width: iconSize + 10,
            transition: "transform 0.3s ease",  
            "&:hover img": {
              transform: "translateY(-5px)",  
              filter: "brightness(1.5)",
            },
          }}
        >
          <Box
            component="img"
            src={skill.icon}
            alt={skill.name ?? "Skill Icon"}
            sx={{
              width: iconSize,
              height: iconSize,transition: "transform 0.3s ease",
            }}
          />
          {skill.name && (
            <Typography
              sx={{
                fontSize: {
                  xs: "0.75rem",
                  md: "1rem",
                },
                fontWeight: "500",
              }}
            >
              {skill.name}
            </Typography>
          )}
        </Box>
      ))}
    </Box>
  );
};

export default Skills;
