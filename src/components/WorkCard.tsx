"use client";
import DefaultIcon from "@mui/icons-material/Person";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Skills from "./Skills";

interface skill {
  name?: string;
  icon: string;
}

interface WorkCardProps {
  title: string;
  description: string;
  img: string;
  srcUrl: string;
  demoUrl: string;
  skillsInfo: skill[];
  releaseDate: string;
  icon?: React.ReactNode;
}
const WorkCard = ({
  title,
  description,
  img,
  srcUrl,
  demoUrl,
  skillsInfo,
  releaseDate,
  icon,
}: WorkCardProps) => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%", // full height of its parent
      }}
    >
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: "#4FC3F7", color: "white" }}
            aria-label="recipe"
          >
            {icon || <DefaultIcon fontSize="small" />}
          </Avatar>
        }
        title={title}
        subheader={releaseDate}
      />
      <CardMedia
        component="img"
        height="194"
        image={img}
        alt="work sample"
        sx={{
          transition: "transform 0.5s ease",
          "&:hover": {
            transform: "scale(1.05)",
          },
        }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Skills skillsInfo={skillsInfo} iconSize={30} />
      </CardActions>

      <CardActions sx={{ justifyContent: "flex-end" }}>
        <Button
          size="small"
          component="a"
          href={srcUrl}
          target="_blank"
          style={{
            border: "1px solid",
            borderColor: "currentColor",
            color: "inherit",
            textTransform: "none",
          }}
        >
          Source
        </Button>
        <Button
          size="small"
          component="a"
          href={demoUrl}
          target="_blank"
          variant="contained"
          color="primary"
        >
          Demo
        </Button>
      </CardActions>
    </Card>
  );
};
export default WorkCard;
