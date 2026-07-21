const contactData = {
  email: "rasikaprabath8694@gmail.com",
  phone: "+94 0703348191",
  location: "Malabe, Sri Lanka"
};

const educationData = [
  {
    id: 1,
    institution: "SLIIT (Sri Lanka Institute of Information Technology)",
    degree: "Bachelor of Information Technology",
    duration: "2023 - Present",
    description: "Pursuing a degree in Information Technology with a focus on software development, web technologies, and modern programming paradigms. Key academic achievements include designing and implementing the Appointment Management module for the Osethra Hospital Management System, and engineering the User Management and security architecture for the UniShare resource-sharing platform."
  },
  {
    id: 2,
    institution: "H/Walsmulla National School",
    degree: "Physical Science Stream",
    duration: "2011 - 2020",
    description: "Completed secondary education with specialization in Physical Sciences including Physics, Chemistry, and Combiend Mathematics."
  }
];

const experienceData = [
  {
    id: 1,
    company: "Simplify Art",
    position: "Graphic Designer",
    period: "Mar 2025 - Present",
    description: "Working as a Graphic Designer at Simplify Art since March 2025, creating visually appealing designs and enhancing user experiences through creative graphics and layouts.",
    url: "https://www.instagram.com/simplify.art.lk"
  },
  {
    id: 2,
    company: "CodeHavenAcademy · YouTube",
    position: "Content Creator",
    period: "May 2024 - Present",
    description: "Content Creator at CodeHavenAcademy on YouTube, producing educational tutorials and coding tips to help developers solve problems, learn effectively, and grow their programming skills.",
    url: "https://www.youtube.com/@CodeHavenAcademy"
  },
  {
    id: 3,
    company: "Fiverr",
    position: "Freelance Graphic Designer",
    period: "Jun 2022 - Sep 2023",
    description: "Freelance Graphic Designer on Fiverr, creating custom designs and visual content for clients worldwide.",
    url: "https://www.fiverr.com"
  }
];

const skillsData = {
  coding: [
    { name: "React", level: 95 },
    { name: "JavaScript/TypeScript", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "HTML/CSS", level: 95 },
    { name: "Tailwind CSS", level: 90 },
    { name: "GraphQL", level: 80 }
  ],
  professional: [
    { name: "UI/UX Design", level: 90 },
    { name: "Figma/Design Tools", level: 85 },
    { name: "Problem Solving", level: 95 },
    { name: "Communication", level: 88 },
    { name: "Project Management", level: 82 },
    { name: "Team Leadership", level: 85 }
  ]
};

const certificatesData = [
  {
    id: 1,
    title: "MongoDB Atlas Administrator Path",
    organization: "MongoDB",
    year: "2026",
    link: "https://learn.mongodb.com/c/MDBchg9ouyquk",
    pdf: process.env.PUBLIC_URL + "/certificates/mongodb_admin.pdf",
    image: require("../images/mongodb_admin.png")
  },
  {
    id: 2,
    title: "MongoDB Atlas Security",
    organization: "MongoDB",
    year: "2026",
    link: "https://learn.mongodb.com/c/MDByfujc6aq57",
    pdf: process.env.PUBLIC_URL + "/certificates/mongodb_security.pdf",
    image: require("../images/mongodb_security.png")
  },
  {
    id: 3,
    title: "MongoDB Database Metrics & Monitoring",
    organization: "MongoDB",
    year: "2026",
    link: "https://learn.mongodb.com/c/MDB9r7fff86rk",
    pdf: process.env.PUBLIC_URL + "/certificates/mongodb_metrics.pdf",
    image: require("../images/mongodb_metrics.png")
  },
  {
    id: 4,
    title: "Getting Started with MongoDB Atlas",
    organization: "MongoDB",
    year: "2026",
    link: "https://learn.mongodb.com/c/MDB14smylcgpx",
    pdf: process.env.PUBLIC_URL + "/certificates/mongodb_getting_started.pdf",
    image: require("../images/mongodb_getting_started.png")
  }
];


export { contactData, educationData, experienceData, skillsData, certificatesData };
