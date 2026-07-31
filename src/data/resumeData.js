const contactData = {
  email: "rasikaprabath8694@gmail.com",
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
    id: 10,
    title: "Python Programming E-Certificate",
    organization: "University of Moratuwa (Code: tZsYlSObC6)",
    year: "2026",
    link: "https://open.uom.lk/verify",
    pdf: process.env.PUBLIC_URL + "/certificates/Python_Programming_E-Certificate.pdf",
    image: require("../images/python_cert_new.png")
  },
  {
    id: 8,
    title: "Software Engineer",
    organization: "HackerRank (ID: CE20FFECEE6A)",
    year: "2026",
    link: "https://www.hackerrank.com/certificates/ce20ffecee6a",
    pdf: process.env.PUBLIC_URL + "/certificates/software_engineer certificate.pdf",
    image: require("../images/se_cert.png")
  },
  {
    id: 7,
    title: "Frontend Developer (React)",
    organization: "HackerRank (ID: 6BE09CB97A40)",
    year: "2026",
    link: "https://www.hackerrank.com/certificates/6be09cb97a40",
    pdf: process.env.PUBLIC_URL + "/certificates/frontend_developer_react certificate.pdf",
    image: require("../images/frontend_react_cert.png")
  },
  {
    id: 5,
    title: "AI/ML Engineer - Stage 1",
    organization: "SLIIT (Centre for Open and Distance Education)",
    year: "2026",
    link: "https://code.sliit.org/certificates/elolaoxbj0",
    pdf: process.env.PUBLIC_URL + "/certificates/sliit_aiml_stage1.pdf",
    image: require("../images/sliit_aiml_stage1.png")
  },
  {
    id: 4,
    title: "AI/ML Engineer - Stage 2",
    organization: "SLIIT (Centre for Open and Distance Education)",
    year: "2026",
    link: "https://code.sliit.org/certificates/mdk9vmzrk0",
    pdf: process.env.PUBLIC_URL + "/certificates/sliit_aiml_stage2.pdf",
    image: require("../images/sliit_aiml_stage2.png")
  },
  {
    id: 9,
    title: "C# (Basic)",
    organization: "HackerRank (ID: 90F3DC85F14E)",
    year: "2026",
    link: "https://www.hackerrank.com/certificates/90f3dc85f14e",
    pdf: process.env.PUBLIC_URL + "/certificates/c_sharp_basic certificate.pdf",
    image: require("../images/csharp_cert.png")
  },
  {
    id: 1,
    title: "Software Engineer Intern",
    organization: "HackerRank (ID: 240DE6B47793)",
    year: "2026",
    link: "https://www.hackerrank.com/certificates/240de6b47793",
    pdf: process.env.PUBLIC_URL + "/certificates/hackerrank_software_engineer_intern.pdf",
    image: require("../images/hackerrank_software_engineer_intern.png")
  },
  {
    id: 2,
    title: "Rest API (Intermediate)",
    organization: "HackerRank (ID: 065D3204E3B2)",
    year: "2026",
    link: "https://www.hackerrank.com/certificates/065d3204e3b2",
    pdf: process.env.PUBLIC_URL + "/certificates/hackerrank_rest_api.pdf",
    image: require("../images/hackerrank_rest_api.png")
  },
  {
    id: 3,
    title: "Python for Beginners",
    organization: "University of Moratuwa (Code: kI0d7OfRGV)",
    year: "2026",
    link: "https://open.uom.lk/verify",
    pdf: process.env.PUBLIC_URL + "/certificates/uom_python.pdf",
    image: require("../images/uom_python.png")
  },
  {
    id: 6,
    title: "MongoDB Atlas Administrator Path",
    organization: "MongoDB",
    year: "2026",
    link: "https://learn.mongodb.com/c/MDBchg9ouyquk",
    pdf: process.env.PUBLIC_URL + "/certificates/mongodb_admin.pdf",
    image: require("../images/mongodb_admin.png")
  }
];


export { contactData, educationData, experienceData, skillsData, certificatesData };
