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
      "ASP.NET Core 9.0",
      "SQL Server",
      "React 19",
      "Vanilla CSS",
      "Entity Framework Core",
      "JWT",
      "NextAuth.js"
    ],
    image: luxuryImg,
    github: "https://github.com/rasikaprabath12345/Luxury-Cloths-Project",
    client: "Personal Showcase",
    duration: "2 Months",
    teamSize: "Individual Project",
    year: "2025",
    role: "Full-Stack Developer",
    overview: "LUXURY.LK is a premium e-commerce platform built with a modern dual-portal architecture. It separates a fast, conversion-focused storefront for customers from a robust administrative backend for business management.",
    problem: "Standard e-commerce frameworks often experience slow response times when loading high-resolution imagery and complex admin panels within a single monolith.",
    solution: "Created a headless architecture with Next.js 15 for lightning-fast customer interface response times and ASP.NET Core on SQL Server to securely execute backend business logic."
  },
  {
    id: 2,
    type: "Healthcare",
    title: "Osethra - Full-Stack Hospital Management System",
    description: "Developed 'Osethra,' a comprehensive Full-Stack Hospital Management System designed to streamline internal hospital operations and administrative workflows. Engineered using the MERN stack and Material UI, the system features a secure, role-based architecture specifically tailored for hospital staff.",
    techStack: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Material-UI (MUI)",
      "MERN Stack",
      "RESTful APIs"
    ],
    image: osethraImg,
    github: "https://github.com/Nilan1979/Osethra",
    client: "SLIIT (Academic)",
    duration: "3 Months",
    teamSize: "Group Project (4 Members)",
    year: "2024",
    role: "Lead Developer (Appointment Management)",
    overview: "Osethra is a comprehensive Full-Stack Hospital Management System designed to streamline healthcare administration. It integrates different portals for doctors, patients, and administrators to facilitate smoother workflow scheduling and clinical updates.",
    problem: "Traditional hospital workflows rely on fragmented booking methods, causing long waiting queues, overlapping doctor schedules, and delayed communication.",
    solution: "Designed and implemented the core Appointment Management module. This system automates doctor slot scheduling, registers user bookings, tracks queue status, and provides an intuitive dashboard for hospital desk staff to verify appointments, resulting in a 40% reduction in patient waiting times."
  },
  {
    id: 3,
    type: "Education",
    title: "UniShare - Online Resource Sharing Platform",
    description: "A comprehensive MERN-stack web platform developed as a collaborative group project to empower university students with seamless resource sharing, interactive assessments, and virtual study sessions.",
    techStack: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Express.js",
      "JWT",
      "REST APIs"
    ],
    image: unishareImg,
    github: "https://github.com/Nilan1979/Unishare-platform-ITPM-Project",
    client: "SLIIT (Academic)",
    duration: "3 Months",
    teamSize: "Group Project (4 Members)",
    year: "2024",
    role: "Lead Developer (User Management)",
    overview: "UniShare is an online resource-sharing platform built to empower university students. It facilitates peer-to-peer file sharing, resource validation, interactive quizzes, and collaborative study forums.",
    problem: "Students frequently struggle with scattered resources, unreliable document hosting, and lack of secure role-based access for academic verification.",
    solution: "Developed the complete User Management system featuring secure JWT authentication, registration, password hashing, and dynamic role-based access controls. This ensures that administrators, lecturers, and students have secure and appropriate access levels, keeping intellectual and student data fully protected."
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
    github: "https://github.com/rasikaprabath12345/TravelEaseLK",
    client: "Personal Showcase",
    duration: "2 Months",
    teamSize: "Individual Project",
    year: "2025",
    role: "Full-Stack Developer",
    overview: "TravelEase is a full-stack tour booking and travel management platform designed to make exploring Sri Lanka easier and more enjoyable. It features destination discovery, online booking management, customer dashboards, and an admin panel.",
    problem: "Tour operators and travelers lack a unified system for live itinerary customization, tour booking, and direct coordinator communication.",
    solution: "Built a .NET Core clean architecture backend paired with a responsive Next.js frontend, providing seamless reservation tracking, live dashboards, and a robust admin panel."
  }
];

export default projectsData;
