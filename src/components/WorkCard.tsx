import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Skills from "./Skills";

interface skill {
  name?: string;
  icon: string;
}

interface WorkCardProps {
  title: string;
  description: string;
  img: string;
  url: string;
  skillsInfo: skill[];
}

const WorkCard = ({
  title,
  description,
  img,
  url,
  skillsInfo,
}: WorkCardProps) => {
  return (
    <Card
      component="a"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        width: 350,
        textDecoration: "none",
        color: "inherit",
        transition: "transform 0.2s ease-in-out",
        "&:hover": {
          transform: "scale(1.02)",
        },
      }}
    >
      <CardMedia component="img" alt="workSample" height="200" image={img} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {description}
        </Typography>
      </CardContent>
      <CardActions sx={{ px: 5, gap: 4 }}>
        <Skills skillsInfo={skillsInfo} iconSize={40} />
      </CardActions>
    </Card>
  );
};

export default WorkCard;
