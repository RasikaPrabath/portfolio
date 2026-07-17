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
    description: "Pursuing degree in Information Technology with focus on software development, web technologies, and modern programming paradigms."
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
    company: "Your Current Company",
    position: "Software Developer",
    period: "2023 - Present",
    description: "Developing web applications using React, Node.js, and modern JavaScript. Working on full-stack projects and collaborating with cross-functional teams."
  },
  {
    id: 2,
    company: "Freelance Projects",
    position: "Full Stack Developer",
    period: "2022 - 2023",
    description: "Built custom websites and web applications for various clients. Specialized in React, Express.js, and database integration."
  },
  {
    id: 3,
    company: "Internship/Training",
    position: "Junior Developer",
    period: "2022 - 2022",
    description: "Gained hands-on experience in software development lifecycle, testing, and deployment processes."
  },
  {
    id: 4,
    company: "Design & Development Studio",
    position: "UI/UX Engineering",
    period: "2021 - 2022",
    description: "Designed and engineered user interfaces with a focus on user experience. Created wireframes, prototypes, and high-fidelity designs using Figma. Collaborated with developers to implement responsive, accessible, and visually appealing web interfaces."
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
