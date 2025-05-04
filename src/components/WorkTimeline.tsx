import Timeline from "@mui/lab/Timeline";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import WorkTimeLineItem from "./WorkTimeLineItem";

const WorkTimeline = () => {
  const historyWork = [
    {
      time: "May 2024 - Current",
      companyName: "Self-employed",
      jobTitle: "Front-end | React Developer",
      details: [
        "Independently designed and developed responsive websites using HTML, CSS, JavaScript, and React with TypeScript, incorporating Redux for state management",
        "Built user-friendly interfaces focused on performance, accessibility, and clean UI/UX",
        "Gained hands-on experience managing the full development cycle from planning to deployment",
      ],
    },
    {
      time: "Aug 2018 - Jul 2024",
      companyName: "Soubar engineering Company",
      jobTitle: "Senior Front-end Developer",
      details: [
        "Played a key role in front-end development within a 5-member team, delivering a stable product over 5 years with a 95% quality rating.",
        "Built responsive, accessible UIs using HTML5, CSS3, Bootstrap, React, and TypeScript, improving development efficiency by 20%.",
        "Collaborated on UX/UI design and code reviews, enhancing user experience by 30% and ensuring best practice adherence.",
      ],
    },
    {
      time: "Jun 2017 – Feb 2018",
      companyName: "Dotin Core Banking Co",
      jobTitle: "Junior Front-end Developer",
      details: [
        "Contributed to the development of a core banking application using Spring Framework and Hibernate, improving performance and streamlining data management.",
        "Designed and implemented key features such as CRUD operations and bill registration tasks, enhancing operational workflows.",
        "Collaborated in a 14-member Agile team using Jira, ensuring efficient project delivery through strong cross-functional coordination.",
      ],
    },
    {
      time: "Apr 2014 – Jul 2016",
      companyName: "Middle East Bank",
      jobTitle: "Developer",
      details: [
        "Developed and maintained over 350 PL/SQL code blocks, procedures, and triggers to enhance banking systems and ensure efficient data processing.",
        "Improved application reliability and integration by debugging Java programs and implementing XML-based data communication interfaces.",
        "Conducted end-to-end testing, UI enhancements, and bug resolution using tools like Firebug, delivering high-quality, stable banking applications.",
      ],
    },
    {
      time: "Jan 2009 – Mar 2013",
      companyName: "Soubar engineering Company",
      jobTitle: "Developer",
      details: [
        "Developed and deployed desktop applications with a focus on operational efficiency and enhanced user experience using JavaScript and UI/UX best practices.",
        "Designed and implemented a remote printer control app, improving accessibility and functionality through intuitive interfaces and clean UI design.",
        "Applied software testing principles and technical writing to reduce bugs by 30% and improve delivery timelines, contributing to overall project success.",
      ],
    },
  ];
  return (
    <Box
      id="history"
      sx={{
        py: { xs: 10, md: 20 },
        my: 5,
      }}
    >
      <Typography variant="h3" gutterBottom>
        WorkTimeline
      </Typography>
      <Typography variant="body1" gutterBottom>
        Here’s a brief timeline of my professional journey, highlighting the
        companies I’ve worked with and the roles I’ve taken on throughout the
        years.
      </Typography>
      <Timeline position="alternate">
        {historyWork.map((histWork, index) => (
          <WorkTimeLineItem
            time={histWork.time}
            companyName={histWork.companyName}
            jobTitle={histWork.jobTitle}
            details={histWork.details}
            key={index}
            index={index}
          />
        ))}
      </Timeline>
    </Box>
  );
};

export default WorkTimeline;
