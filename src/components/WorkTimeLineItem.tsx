import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import { Typography } from "@mui/material";

interface WorkTimeLineItemProps {
  time: string;
  companyName: string;
  jobTitle?: string;
  details?: string[];
}
const WorkTimeLineItem = ({
  time,
  companyName,
  jobTitle,
  details,
}: WorkTimeLineItemProps) => {
  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Typography variant="h6" component="span">
          {time}
        </Typography>
        <Typography>{companyName}</Typography>
        <Typography variant="body2" color="text.secondary">
          {jobTitle}
        </Typography>
        {details && (
          <ul style={{ paddingLeft: 16, marginTop: 8 }}>
            {details.map((point, index) => (
              <li key={index}>
                <Typography variant="body2" color="text.secondary">{point}</Typography>
              </li>
            ))}
          </ul>
        )}
      </TimelineContent>
    </TimelineItem>
  );
};

export default WorkTimeLineItem;
