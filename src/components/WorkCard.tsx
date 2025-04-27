"use client";
import { useTheme } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
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
}
const WorkCard = ({
  title,
  description,
  img,
  srcUrl,
  demoUrl,
  skillsInfo,
}: WorkCardProps) => {
  const theme = useTheme();
  return (
    <Card
      sx={{
        maxWidth: 345,
        mb: 1,
        border: 1,
        borderColor: theme.palette.mode === "dark" ? "black" : "white",
        // backgroundColor: theme.palette.mode === "dark" ? "inherit" : "white",
      }}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            N
          </Avatar>
        }
        title={title}
        subheader="September 14, 2016"
      />
      <CardMedia component="img" height="194" image={img} alt="work sample" />
      <CardContent>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Skills skillsInfo={skillsInfo} iconSize={30} />
      </CardActions>

      <CardActions>
        <Button size="small" component="a" href={srcUrl} target="_blank">
          Source
        </Button>
        <Button size="small" component="a" href={demoUrl} target="_blank">
          Demo
        </Button>
      </CardActions>
    </Card>
  );
};
export default WorkCard;
