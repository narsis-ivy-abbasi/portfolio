"use client";
import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import { Box, Paper, Typography, useTheme } from "@mui/material";

interface WorkTimeLineItemProps {
  time: string;
  companyName: string;
  jobTitle?: string;
  details?: string[];
  index?: number;
}
const WorkTimeLineItem = ({
  time,
  companyName,
  jobTitle,
  details,
  index = 0,
}: WorkTimeLineItemProps) => {
  const isLeft = index % 2 !== 0;
  const theme = useTheme();
  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent
        sx={{
          // px: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: isLeft ? "flex-end" : "flex-start",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            width: "90%",
            mb: 2,
          }}
        >
          <Typography variant="h6" component="span">
            {time}
          </Typography>
          <Typography>{companyName}</Typography>
          <Typography variant="body2" color="text.secondary">
            {jobTitle}
          </Typography>
        </Box>

        {details && (
          <Paper
            elevation={3}
            sx={{
              p: 2,
              borderRadius: 2,
              // backgroundColor:
              //   theme.palette.mode === "dark" ? "inherit" : "#f5f5f5",
              maxWidth: "90%",
              textAlign: "left",
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "translateY(-5px)",
              },
            }}
          >
            <Box component="ul" sx={{ pl: 2, m: 0 }}>
              {details.map((point, index) => (
                <li key={index}>
                  <Typography variant="body2" color="text.secondary">
                    {point}
                  </Typography>
                </li>
              ))}
            </Box>
          </Paper>
        )}
      </TimelineContent>
    </TimelineItem>
  );
};

export default WorkTimeLineItem;
