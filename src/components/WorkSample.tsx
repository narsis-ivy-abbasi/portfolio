import { Box, Typography } from "@mui/material";
import WorkCard from "./WorkCard";
import Carousel from "./Carousel";

const workInfo = [
  {
    title: "Trip",
    description:
      "This is a site related to tripThis is a tripThis is a site related to trip",
    img: "/workSample/mock-trip.png",
    srcUrl: "https://amazing-marzipan-4800f9.netlify.app/",
    demoUrl: "https://amazing-marzipan-4800f9.netlify.app/",
    skillsInfo: [
      { name: "", icon: "/icons/html5.svg" },
      { name: "", icon: "/icons/css3.svg" },
      { name: "", icon: "/icons/javascript.svg" },
    ],
  },
  {
    title: "Shopify",
    description:
      "This is a site related to ShopifyThis is a site related to Shopify",
    img: "/workSample/mock-shopify.png",
    srcUrl: "https://amazing-marzipan-4800f9.netlify.app/",
    demoUrl: "https://ivyshopify.netlify.app/",
    skillsInfo: [
      { name: "", icon: "/icons/javascript.svg" },
      { name: "", icon: "/icons/bootstrap.svg" },
    ],
  },
  {
    title: "Advanture",
    description:
      "This is a site related to Bio,This is a site related to is a site related",
    img: "/workSample/mock-advanture.png",
    srcUrl: "https://amazing-marzipan-4800f9.netlify.app/",
    demoUrl: "https://amazing-marzipan-4800f9.netlify.app/",
    skillsInfo: [
      { name: "", icon: "/icons/css3.svg" },
      { name: "", icon: "/icons/javascript.svg" },
      { name: "", icon: "/icons/jquery.svg" },
    ],
  },
  {
    title: "aaa",
    description:
      "This is a site related to Bio,This is a site related to is a site related",
    img: "/workSample/mock-advanture.png",
    srcUrl: "https://amazing-marzipan-4800f9.netlify.app/",
    demoUrl: "https://amazing-marzipan-4800f9.netlify.app/",
    skillsInfo: [{ name: "", icon: "/icons/css3.svg" }],
  },
  {
    title: "ccc",
    description:
      "This is a site related to Bio,This is a site related to is a site related",
    img: "/workSample/mock-advanture.png",
    srcUrl: "https://amazing-marzipan-4800f9.netlify.app/",
    demoUrl: "https://amazing-marzipan-4800f9.netlify.app/",
    skillsInfo: [
      { name: "", icon: "/icons/css3.svg" },
      { name: "", icon: "/icons/javascript.svg" },
      { name: "", icon: "/icons/jquery.svg" },
    ],
  },
];

const WorkSample = () => {
  return (
    <Box id="samples" sx={{ py: { xs: 10, md: 20 }, my: 5}}>
      <Typography variant="h3"  gutterBottom>WorkSample</Typography>
      <Typography variant="body1"  gutterBottom>
        A selection of recent projects is displayed in the section below. Click
        on any card to explore the work and see it in action.
      </Typography>
      <Carousel cardWidth={350} gap={20}>
        {workInfo.map((work, index) => (
          <WorkCard
            key={index}
            title={work.title}
            description={work.description}
            img={work.img}
            srcUrl={work.demoUrl}
            demoUrl={work.demoUrl}
            skillsInfo={work.skillsInfo}
          />
        ))}
      </Carousel>
    </Box>
  );
};

export default WorkSample;
