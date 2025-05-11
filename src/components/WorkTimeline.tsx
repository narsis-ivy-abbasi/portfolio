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
        "Designed and developed 5+ responsive, high-performance websites using React (with Hooks), Next.js (CSR/SSR), and TypeScript, reducing page load times by 30%",
        "Created and deployed 7+ sample projects on Netlify via GitHub to showcase front-end architecture, React proficiency, and code scalability",
        "Integrated PostgreSQL as the backend API using REST endpoints, enabling dynamic content updates and reducing API response latency by 25%",
        "Built dynamic, validated forms using Formik, React-Hook-Form, and styled with TailwindCSS & Styled-Component, improving form submission success rate by 15%",
        "Applied TDD using Jest to maintain 85% test coverage, increasing code reliability and catching bugs earlier in the dev cycle",
        "Used Figma for UI/UX design and prototyping, ensuring seamless developer-designer handoff and 100% consistency across components",
      ],
    },
    {
      time: "Aug 2018 - Jul 2024",
      companyName: "Soubar engineering Company",
      jobTitle: "Senior Front-end Developer",
      details: [
        "Played a key role in front-end development within a 5 member team, delivering a stable product over 5 years with a 95% quality rating",
        "Developed responsive, WCAG-compliant UIs for enterprise web apps using HTML5, CSS3, React, Bootstrap, and TypeScript, accelerating feature delivery by 20%",
        "Collaborated in cross-functional teams on UX/UI improvements and code reviews, boosting user satisfaction scores by 30% and enforcing code quality standards",
      ],
    },
    {
      time: "Jun 2017 – Feb 2018",
      companyName: "Dotin Core Banking Co",
      jobTitle: "Junior Front-end Developer",
      details: [
        "Assisted in developing a core banking platform using Spring and Hibernate, improving data processing efficiency by 25% through optimized backend queries",
        "Developed CRUD modules and automated bill registration features, reducing manual processing time by 40% and streamlining banking operations",
        "Worked within a 14-member Agile team using Jira, delivering biweekly sprints on time and improving cross-functional collaboration through regular stand-ups",
      ],
    },
    {
      time: "Apr 2014 – Jul 2016",
      companyName: "Middle East Bank",
      jobTitle: "Developer",
      details: [
        "Developed and maintained 350+ PL/SQL scripts to enhance banking workflows, reducing transaction processing time by 30% and ensuring data integrity",
        "Debugged Java-based backend services and implemented XML data interfaces, increasing integration stability and reducing API errors by 20%",
        "Performed full-cycle testing and front-end optimizations using Firebug and manual testing, reducing production bugs by 35% and increasing app stability",
      ],
    },
    {
      time: "Jan 2009 – Mar 2013",
      companyName: "Soubar engineering Company",
      jobTitle: "Developer",
      details: [
        "Designed and deployed 5+ desktop applications with JavaScript, applying UI/UX best practices to streamline workflows and boost user task efficiency by 25%",
        "Built a remote printer control application that reduced print request time by 40%, enhancing accessibility through user-friendly UI design",
        "Executed unit testing and authored detailed technical documentation, reducing post release bugs by 30% and shortening delivery timelines by 20%",
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
