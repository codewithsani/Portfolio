import { FaHome, FaUser, FaFolderOpen, FaEnvelopeOpen } from "react-icons/fa";
import { RiBriefcase4Fill, RiGraduationCapFill } from "react-icons/ri";
import skillsImg1 from "./assets/html-logo.svg";
import skillsImg2 from "./assets/css-logo.svg";
import skillsImg3 from "./assets/javascript-logo.svg";
import skillsImg4 from "./assets/react-logo.svg";
import skillsImg5 from "./assets/tailwind-css-logo.svg";

import skillsImg6 from "./assets/figma-logo.svg";
import skillsImg7 from "./assets/sketch-logo.svg";
import skillsImg8 from "./assets/adobe-xd-logo.svg";
import skillsImg9 from "./assets/adobe-photoshop-logo.svg";
import skillsImg10 from "./assets/invision-logo.svg";

import projectImg1 from "./assets/project-1.jpg";
import projectImg2 from "./assets/project-2.jpg";
import projectImg3 from "./assets/project-3.jpg";
import projectImg4 from "./assets/project-4.jpg";
import projectImg5 from "./assets/project-5.jpg";

import Theme1 from "./assets/red.png";
import Theme2 from "./assets/blueviolet.png";
import Theme3 from "./assets/blue.png";
import Theme4 from "./assets/magenta.png";
import Theme5 from "./assets/yellowgreen.png";
import Theme6 from "./assets/orange.png";
import Theme7 from "./assets/yellow.png";

export const links = [
  {
    name: "Home",
    icon: <FaHome className="nav-icon" />,
    path: "/",
  },

  {
    name: "About",
    icon: <FaUser className="nav-icon" />,
    path: "/about",
  },

  {
    name: "Portfolio",
    icon: <FaFolderOpen className="nav-icon" />,
    path: "/portfolio",
  },

  {
    name: "Contact",
    icon: <FaEnvelopeOpen className="nav-icon" />,
    path: "/contact",
  },
];

export const personalInfo = [
  {
    title: "First Name : ",
    description: "Saied",
  },

  {
    title: "Last Name : ",
    description: "Sani",
  },

  {
    title: "Age : ",
    description: "36",
  },

  {
    title: "Field of Study : ",
    description: "Electronic Engineering",
  },

  {
    title: "Freelance : ",
    description: "Available",
  },

  {
    title: "Address : ",
    description: "Germany",
  },

  {
    title: "Phone : ",
    description: "+4917668592131",
  },

  {
    title: "Email : ",
    description: "saied.sani.biderooni@gmail.com",
  },

  {
    title: "Linkedin : ",
    description: "https://www.linkedin.com/in/saied-sani-07666610b/",
  },

  {
    title: "Languages : ",
    description: "German, English,Persian",
  },
];

export const stats = [
  {
    no: "12+",
    title: "Years of <br /> Experience",
  },

  {
    no: "100+",
    title: "Completed <br /> Projects",
  },

  {
    no: "50+",
    title: "Happy <br /> Customers",
  },

  {
    no: "10",
    title: " Awards <br /> Won",
  },
];

export const skill = [
  {
    id: 1,
    img: skillsImg1,
    title: "HTML",
    level: "Intermediate",
    category: "developer",
  },

  {
    id: 2,
    img: skillsImg2,
    title: "CSS",
    level: "Advanced",
    category: "developer",
  },

  {
    id: 3,
    img: skillsImg3,
    title: "JavaScript",
    level: "Intermediate",
    category: "developer",
  },

  {
    id: 4,
    img: skillsImg4,
    title: "React",
    level: "Basic",
    category: "developer",
  },

  {
    id: 5,
    img: skillsImg5,
    title: "Tailwind",
    level: "Intermediate",
    category: "developer",
  },

  {
    id: 6,
    img: skillsImg6,
    title: "Figma",
    level: "Advanced",
    category: "designer",
  },

  {
    id: 7,
    img: skillsImg7,
    title: "Sketch",
    level: "Basic",
    category: "designer",
  },

  {
    id: 8,
    img: skillsImg8,
    title: "Adobe XD",
    level: "Intermediate",
    category: "designer",
  },

  {
    id: 9,
    img: skillsImg9,
    title: "Photoshop",
    level: "Intermediate",
    category: "designer",
  },

  {
    id: 10,
    img: skillsImg10,
    title: "InvisionApp",
    level: "Basic",
    category: "designer",
  },
];

export const resume = [
  {
    id: 1,
    category: "experience",
    icon: <RiBriefcase4Fill />,
    year: "2016 - Present",
    title: "Web Developer <span> Fullstack </span>",
    desc: "I have worked as a full-stack web developer, building and maintaining dynamic, user-centric websites and applications using a wide range of front-end and back-end technologies.",
  },

  {
    id: 2,
    category: "experience",
    icon: <RiBriefcase4Fill />,
    year: "2013 - 2016",
    title: "Hardware Designer <span> CMOS and Embedded System </span>",
    desc: "I worked as a hardware developer specializing in CMOS technology and embedded systems, designing and optimizing circuit boards and microcontroller-based solutions for various applications.",
  },

  {
    id: 3,
    category: "experience",
    icon: <RiBriefcase4Fill />,
    year: "2024 -2025",
    title: "IT Consultant <span> in Berlin </span>",
    desc: "I worked as an IT consultant, advising businesses on technology strategies, optimizing IT infrastructures, and implementing solutions to improve efficiency and drive innovation.",
  },

  {
    id: 4,
    category: "education",
    icon: <RiGraduationCapFill />,
    year: "2013",
    title:
      "Bachelor Degree Electronic Engineering  <span>  Isfahan University in Iran </span>",
    desc: "I earned my bachelor's degree in Electronic Engineering in 2013, gaining a strong foundation in electronics, circuit design, and system analysis.",
  },

  {
    id: 5,
    category: "education",
    icon: <RiGraduationCapFill />,
    year: "2015-2016",
    title:
      "Master Degree electrical engineering <span> Stuttgart University </span>",
    desc: "I pursued a Master of Science in Electrical Engineering at Stuttgart University from 2015 to 2016, deepening my expertise in advanced electrical systems and technologies.",
  },

  {
    id: 6,
    category: "education",
    icon: <RiGraduationCapFill />,
    year: "2025",
    title:
      "Master Degree in electronic Systems <span>  Technical university of Braunschweig</span>",
    desc: "I began pursuing a Master's degree in Electronic Systems at the Technical University of Braunschweig, focusing on advanced electronics and system design.",
  },
];

export const portfolio = [
  {
    id: 1,
    img: projectImg1,
    title: "Coffee Website",
    description:
      "Short description of the project that was carried out in this portfolio.",
    skills: [skillsImg4, skillsImg5],
    link: "https://portfolio-e24r.onrender.com",
  },

  {
    id: 2,
    img: projectImg2,
    title: "Food Product Design",
    description:
      "Short description of the project that was carried out in this portfolio.",
    skills: [skillsImg6, skillsImg7],
    link: "https://movie-hub-alpha.vercel.app/",
  },

  {
    id: 3,
    img: projectImg3,
    title: "Restaurant Landing Page",
    description:
      "Short description of the project that was carried out in this portfolio.",
    skills: [skillsImg1, skillsImg2, skillsImg3],
    link: "https://game-hub-nine-tau.vercel.app/",
  },

  {
    id: 4,
    img: projectImg4,
    title: "Barbershop Website",
    description:
      "Short description of the project that was carried out in this portfolio.",
    skills: [skillsImg4, skillsImg5],
    link: "https://amazona.onrender.com",
  },

  {
    id: 5,
    img: projectImg5,
    title: "Construction Landing Page",
    description:
      "Short description of the project that was carried out in this portfolio.",
    skills: [skillsImg1, skillsImg2, skillsImg3],
    link: "https://sanified.netlify.app/",
  },
];

export const themes = [
  {
    img: Theme1,
    hue: "4",
  },

  {
    img: Theme2,
    hue: "271",
  },

  {
    img: Theme3,
    hue: "225",
  },

  {
    img: Theme4,
    hue: "339",
  },

  {
    img: Theme5,
    hue: "80",
  },

  {
    img: Theme6,
    hue: "19",
  },

  {
    img: Theme7,
    hue: "42",
  },
];
