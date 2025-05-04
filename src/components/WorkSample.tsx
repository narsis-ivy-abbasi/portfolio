import ExploreIcon from "@mui/icons-material/Explore";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import TerrainIcon from "@mui/icons-material/Terrain";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import CalculateIcon from "@mui/icons-material/Calculate";
import YouTubeIcon from "@mui/icons-material/YouTube";
import MovieIcon from "@mui/icons-material/Movie";
import { Box, Typography } from "@mui/material";
import Carousel from "./Carousel";
import WorkCard from "./WorkCard";

const workInfo = [
  {
    title: "Trip Reservation",
    description: "A website for booking hotels and exploring vacation tours.",
    img: "/workSample/mock-trip.png",
    srcUrl: "https://github.com/narsis-ivy-abbasi/trip-reservation",
    demoUrl: "https://amazing-marzipan-4800f9.netlify.app/",
    skillsInfo: [
      { name: "", icon: "/icons/typescript.svg" },
      { name: "", icon: "/icons/react.svg" },
      { name: "", icon: "/icons/nextJs.svg" },
      { name: "", icon: "/icons/materialUI.svg" },
    ],
    releaseDate: "February, 2025",
    icon: <FlightTakeoffIcon fontSize="small" />,
  },
  {
    title: "Shopify",
    description: "A website for online shopping and purchasing products.",
    img: "/workSample/mock-shopify.png",
    srcUrl: "https://github.com/narsis-ivy-abbasi/shopify",
    demoUrl: "https://ivyshopify.netlify.app/",
    skillsInfo: [
      { name: "", icon: "/icons/typescript.svg" },
      { name: "", icon: "/icons/react.svg" },
      { name: "", icon: "/icons/redux.svg" },
      { name: "", icon: "/icons/tailwind.svg" },
    ],
    releaseDate: "March, 2025",
    icon: <ShoppingBagIcon fontSize="small" />,
  },
  {
    title: "Habit Tracker",
    description:
      "A dashboard for tracking habits and following personal plans to build better routines.",
    img: "/workSample/mock-habit-tracker.png",
    srcUrl: "https://github.com/narsis-ivy-abbasi/dashboard",
    demoUrl: "https://habit-tracker-dashboard.netlify.app/",
    skillsInfo: [
      { name: "", icon: "/icons/react.svg" },
      { name: "", icon: "/icons/redux.svg" },
      { name: "", icon: "/icons/nextJs.svg" },
      { name: "", icon: "/icons/materialUI.svg" },
    ],
    releaseDate: "March, 2025",
    icon: <TrackChangesIcon fontSize="small" />,
  },
  {
    title: "Social Traveler",
    description:
      "A website for connecting travelers and sharing travel experiences.",
    img: "/workSample/mock-SocialTraveler.png",
    srcUrl: "https://github.com/narsis-ivy-abbasi/BootEx01",
    demoUrl: "https://gorgeous-monstera-860f43.netlify.app/",
    skillsInfo: [
      { name: "", icon: "/icons/html5.svg" },
      { name: "", icon: "/icons/css3.svg" },
      { name: "", icon: "/icons/javascript.svg" },
      { name: "", icon: "/icons/bootstrap.svg" },
    ],
    releaseDate: "November, 2024",
    icon: <ExploreIcon fontSize="small" />,
  },
  {
    title: "Weather App",
    description: "Live weather updates and forecasts from real-time API data.",
    img: "/workSample/mock-weather.png",
    srcUrl: "https://github.com/narsis-ivy-abbasi/weatherApp",
    demoUrl: "https://aesthetic-brigadeiros-16057f.netlify.app/",
    skillsInfo: [
      { name: "", icon: "/icons/react.svg" },
      { name: "", icon: "/icons/tailwind.svg" },
    ],
    releaseDate: "October, 2024",
    icon: <ThunderstormIcon fontSize="small" />,
  },
  {
    title: "Advanture",
    description: "A site to plan and organize adventure trips and activities",
    img: "/workSample/mock-advanture.png",
    srcUrl: "https://github.com/narsis-ivy-abbasi/tailwindPractice",
    demoUrl: "https://amazing-marzipan-4800f9.netlify.app/",
    skillsInfo: [
      { name: "", icon: "/icons/html5.svg" },
      { name: "", icon: "/icons/tailwind.svg" },
    ],
    releaseDate: "December, 2024",
    icon: <TerrainIcon fontSize="small" />,
  },
  {
    title: "Youtube Clone",
    description:
      "A YouTube clone built with API integration for video browsing and playback.",
    img: "/workSample/mock-youtube.png",
    srcUrl: "https://github.com/narsis-ivy-abbasi/youtube-clone",
    demoUrl: "https://wonderful-truffle-1ebb19.netlify.app/",
    skillsInfo: [
      { name: "", icon: "/icons/react.svg" },
      { name: "", icon: "/icons/javascript.svg" },
    ],
    releaseDate: "December, 2024",
    icon: <YouTubeIcon fontSize="small" />,
  },
  {
    title: "Netflix Clone",
    description:
      "A Netflix clone for browsing and streaming movies using real-time API data.",
    img: "/workSample/mock-netflix.png",
    srcUrl: "https://github.com/narsis-ivy-abbasi/netflix",
    demoUrl: "https://netfliix-cloneivy.netlify.app/",
    skillsInfo: [
      { name: "", icon: "/icons/react.svg" },
      { name: "", icon: "/icons/javascript.svg" },
    ],
    releaseDate: "November, 2024",
    icon: <MovieIcon fontSize="small" />,
  },
  {
    title: "Math",
    description:
      "A bilingual website with dark and light modes, connecting students to a private math teacher.",
    img: "/workSample/mock-math.png",
    srcUrl: "https://github.com/narsis-ivy-abbasi/math",
    demoUrl: "https://math-zi-website.netlify.app/",
    skillsInfo: [
      { name: "", icon: "/icons/react.svg" },
      { name: "", icon: "/icons/redux.svg" },
      { name: "", icon: "/icons/nextJs.svg" },
      { name: "", icon: "/icons/materialUI.svg" },
    ],
    releaseDate: "December, 2024",
    icon: <CalculateIcon fontSize="small" />,
  },
];

const WorkSample = () => {
  return (
    <Box id="samples" sx={{ py: { xs: 10, md: 20 }, my: 5 }}>
      <Typography variant="h3" gutterBottom>
        WorkSample
      </Typography>
      <Typography variant="body1" gutterBottom sx={{ mb: 2 }}>
        A selection of recent projects is shown below. Use the Demo button to
        view the live site and the Source button to explore the code on GitHub.
      </Typography>
      <Carousel cardWidth={350} gap={20}>
        {workInfo.map((work, index) => (
          <WorkCard
            key={index}
            title={work.title}
            description={work.description}
            img={work.img}
            srcUrl={work.srcUrl}
            demoUrl={work.demoUrl}
            skillsInfo={work.skillsInfo}
            releaseDate={work.releaseDate}
            icon={work.icon}
          />
        ))}
      </Carousel>
    </Box>
  );
};

export default WorkSample;
