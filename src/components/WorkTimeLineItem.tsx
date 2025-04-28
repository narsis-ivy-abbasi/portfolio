"use client";
import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import { Box, Paper, Typography } from "@mui/material";

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
  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent
        sx={{
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
          <Typography
            variant="h6"
            component="span"
            sx={{
              fontSize: { xs: "1rem", md: "1.5rem" }, // smaller on mobile
              fontWeight: "bold",
            }}
          >
            {time}
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "0.9rem", md: "1.2rem" },
              fontWeight: "medium",
            }}
          >
            {companyName}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              fontSize: { xs: "0.8rem", md: "1rem" },
            }}
          >
            {jobTitle}
          </Typography>
        </Box>

        {details && (
          <Paper
            elevation={3}
            sx={{
              p: 2,
              borderRadius: 2,
              maxWidth: "90%",
              textAlign: "left",
              transition: "transform 0.3s ease",
              display: { xs: "none", md: "block" },
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
