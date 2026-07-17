import luxuryImg from "../images/luxury_store.png";
import osethraImg from "../images/osethra_hospital.png";
import unishareImg from "../images/unishare_platform.png";
import traveleaseImg from "../images/travelease.jpg";

const projectsData = [
  {
    id: 1,
    type: "E-Commerce",
    title: "Luxury Fashion E-Commerce Platform",
    description: "LUXURY.LK is a premium e-commerce platform built with a modern dual-portal architecture. It separates a fast, conversion-focused storefront for customers from a robust administrative backend for business management.",
    techStack: [
      "Next.js 15",
      "React 19",
      "Vanilla CSS",
      "ASP.NET Core 9.0",
      "SQL Server",
      "Entity Framework Core",
      "JWT",
      "NextAuth.js"
    ],
    image: luxuryImg,
    github: "https://github.com/rasikaprabath12345/Luxury-Cloths-Project"
  },
  {
    id: 2,
    type: "Healthcare",
    title: "Osethra - Full-Stack Hospital Management System",
    description: "Developed 'Osethra,' a comprehensive Full-Stack Hospital Management System designed to streamline internal hospital operations and administrative workflows. Engineered using the MERN stack and Material UI, the system features a secure, role-based architecture specifically tailored for hospital staff.",
    techStack: [
      "MERN Stack",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Material-UI (MUI)",
      "RESTful APIs"
    ],
    image: osethraImg,
    github: "https://github.com/Nilan1979/Osethra"
  },
  {
    id: 3,
    type: "Education",
    title: "UniShare - Online Resource Sharing Platform",
    description: "A comprehensive MERN-stack web platform developed as a collaborative group project to empower university students with seamless resource sharing, interactive assessments, and virtual study sessions.",
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "REST APIs"
    ],
    image: unishareImg,
    github: "https://github.com/Nilan1979/Unishare-platform-ITPM-Project"
  },
  {
    id: 4,
    type: "Travel",
    title: "TravelEase - Tour Booking & Travel Management Platform",
    description: "A full-stack travel and tour booking platform designed to make exploring Sri Lanka easier and more enjoyable. Features destination discovery, online booking management, customer dashboard for reservations, and admin panel.",
    techStack: [
      "Next.js",
      "ASP.NET Core",
      "SQL Server",
      "C#",
      ".NET Core Clean Architecture"
    ],
    image: traveleaseImg,
    github: "https://github.com/rasikaprabath12345/TravelEaseLK"
  }
];

export default projectsData;
