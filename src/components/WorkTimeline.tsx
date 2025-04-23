import Timeline from "@mui/lab/Timeline";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import WorkTimeLineItem from "./WorkTimeLineItem";

const WorkTimeline = () => {
  const historyWork = [
    {
      time: "05/2024-Current",
      companyName: "Remote",
      jobTitle: "Front-end Developer",
      details: [
        "Independently designed and developed responsive websites using HTML, CSS, JavaScript, and React",
        "Built user-friendly interfaces focused on performance, accessibility, and clean UI/UX",
        "Gained hands-on experience managing the full development cycle from planning to deployment",
      ],
    },
    {
      time: "08/2018-07/2024",
      companyName: "Soubar engineering Company",
      jobTitle: "Front-end Developer",
      details: [
        "Led the front-end development alongside one other front-end developer within a 5-member software team, successfully deploying a stable product over 5 years and achieving a final quality rating of 95%",
        "Created a user-friendly front-end interface utilizing HTML5,CSS3, and enhanced UI/UX design principle",
        "Collaborated with UX/UI designers to create interactive prototypes, improving user experience by 30",
        "Implemented responsive designs using Bootstrap and CSS Flex-box, ensuring compatibility across mobile and desktop device",
        "Developed reusable components with React,resulting in a 20% increase-in development efficiency",
        "Conducted code reviews and maintained documentation to ensure adherence to best practices",
      ],
    },
    {
      time: "06/2017-02/2018",
      companyName: "Middle East Bank",
      jobTitle: "Junior Front-end Developer",
      details: [
        "Collaborated within a cross-functional team of 14 members, including developers, analysts, a tech lead,and a project manager, to deliver high- quality software solution",
        " Developed a core banking application, enhancing financial transaction processing and improving overall system performance",
        "Utilized Hibernate for seamless database connectivity, optimizing data management and retrieval processes",
      ],
    },
    {
      time: "04/2014-07/2016",
      companyName: "Dotin",
      jobTitle: "Developer",
      details: [
        "Developed over 350 PL/SQLcode blocks to create and enhance banking applications, improving system functionality and performance",
        "Initiated and implemented more than 150 complex procedures and functions, contributing to streamlined operations and efficient data processing",
      ],
    },
    {
      time: "01/2009-03/2013",
      companyName: "Soubar engineering Company",
      jobTitle: "Developer",
      details: [
        "Gained comprehensive knowledge in software development, testing concepts, and technical writing, contributing to overall project success and resulting in a 20% decrease in software bugs and a 15% improvement in project delivery timeline",
        "Developed and deployed multiple desktop applications, improving operational efficiency and user experience",
      ],
    },
  ];
  return (
    <Box
      id="history"
      sx={{
        py: { xs: 10, md: 20 },
        // border: 1,
        // borderColor: "red",
        my: 5,
        borderRadius: 10,
      }}
    >
      <Typography variant="h3">WorkTimeline </Typography>
      Here’s a brief timeline of my professional journey, highlighting the
      companies I’ve worked with and the roles I’ve taken on throughout the
      years.
      <Timeline position="alternate">
        {historyWork.map((histWork, index) => (
          <WorkTimeLineItem
            time={histWork.time}
            companyName={histWork.companyName}
            jobTitle={histWork.jobTitle}
            details={histWork.details}
            key={index}
          />
        ))}
      </Timeline>
    </Box>
  );
};

export default WorkTimeline;
