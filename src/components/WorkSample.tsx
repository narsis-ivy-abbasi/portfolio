import { Box, Typography } from "@mui/material";
import WorkCard from "./WorkCard";

const workInfo = [
  {
    title: "Trip",
    description: "This is a site related to trip",
    img: "/workSample/trip.png",
    url: "https://amazing-marzipan-4800f9.netlify.app/",
    skillsInfo: [
      { name: "", icon: "/icons/html5.svg" },
      { name: "", icon: "/icons/css3.svg" },
      { name: "", icon: "/icons/javascript.svg" },
    ],
  },
  {
    title: "Shopify",
    description: "This is a site related to Shopify",
    img: "/workSample/shopify.png",
    url: "https://ivyshopify.netlify.app/",
    skillsInfo: [
      { name: "", icon: "/icons/javascript.svg" },
      { name: "", icon: "/icons/bootstrap.svg" },
    ],
  },
  {
    title: "Advanture",
    description: "This is a site related to Bio",
    img: "/workSample/advanture.png",
    url: "https://amazing-marzipan-4800f9.netlify.app/",
    skillsInfo: [
      { name: "", icon: "/icons/css3.svg" },
      { name: "", icon: "/icons/javascript.svg" },
      { name: "", icon: "/icons/jquery.svg" },
    ],
  },
];

const WorkSample = () => {
  return (
    <Box
      id="samples"
      sx={{
        py: { xs: 10, md: 20 },
        // border: 1,
        // borderColor: "lightBlue",
        my: 5,
        borderRadius: 10,
      }}
    >
      <Typography variant="h3">WorkSample </Typography>
      <Typography variant="body1" sx={{ py: 4 }}>
        A selection of recent projects is displayed in the section below. Click
        on any card to explore the work and see it in action.
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: { xs: "center", lg: "space-between" },
          gap: 5,
          flexWrap: "wrap",
        }}
      >
        {workInfo.map((work, index) => (
          <WorkCard
            key={index}
            title={work.title}
            description={work.description}
            img={work.img}
            url={work.url}
            skillsInfo={work.skillsInfo}
          />
        ))}
      </Box>
    </Box>
  );
};

export default WorkSample;
