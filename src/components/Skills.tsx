"use client";
import React from "react";
import Grid from "@mui/material/Grid";
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
    <Box sx={{ flexGrow: 1, py: 4 }}>
      <Grid container spacing={{ xs: 2, md: 3, lg: 4 }}>
        {skillsInfo.map((skill, index) => (
          <Grid size={{ xs: 3, md: 4, lg: 2 }} key={index}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Box
                component="img"
                src={skill.icon}
                alt={skill.name ?? "Skill Icon"}
                sx={{
                  width: { xs: iconSize - 10, md: iconSize - 5, lg: iconSize },
                  height: iconSize,
                  marginBottom: 1,
                }}
              />
              <Typography
                sx={{
                  fontSize: {
                    xs: "0.75rem", // mobile
                    md: "1rem" 
                  },
                  fontWeight: "500", // optional: mimic subtitle1
                }}
              >
                {skill.name ?? ""}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Skills;
