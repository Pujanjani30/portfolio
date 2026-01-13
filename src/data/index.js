export const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export const socialLinks = {
  github: 'https://github.com/pujanjani30',
  linkedin: 'https://www.linkedin.com/in/pujanjani',

};

export const techSkills = [
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", featured: true },
      { name: "Python", featured: false },
      { name: "TypeScript", featured: false },
    ],
    // color: "from-blue-400 to-cyan-400",
    // bgColor: "bg-blue-500/10 border-blue-500/20"
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", featured: true },
      { name: "Express.js", featured: true },
      { name: "MongoDB", featured: true },
      { name: "REST APIs", featured: true },
      { name: "SQL", featured: false },
      { name: "FastAPI", featured: false },
    ],
    // color: "from-green-400 to-emerald-400",
    // bgColor: "bg-green-500/10 border-green-500/20"
  },
  {
    title: "Frontend",
    skills: [
      { name: "React.js", featured: true },
      { name: "HTML5", featured: true },
      { name: "CSS3", featured: true },
      { name: "Tailwind CSS", featured: false },
    ],
    // color: "from-blue-400 to-cyan-400",
    // bgColor: "bg-blue-500/10 border-blue-500/20"
  },
  {
    title: "Dev Tools",
    skills: [
      { name: "GitHub", featured: true },
      { name: "Postman", featured: true },
      { name: "VS Code", featured: true },
    ],
    // color: "from-purple-400 to-pink-400",
    // bgColor: "bg-purple-500/10 border-purple-500/20"
  }
];

export const softSkills = [
  { name: "Communication" },
  { name: "Teamwork" },
  { name: "Problem-solving" },
  { name: "Curiosity" },
  { name: "Adaptability" }
];

export const education = [
  {
    degree: "Bachelor of Technology in Computer Science & Engineering",
    institution: "Silver Oak University",
    year: "2022 - 2026",
    grade: "Current CGPA: 9.33",
    location: "Ahmedabad, India"
  },
  {
    degree: "Higher Secondary Certificate",
    institution: "S. S. Divine School",
    year: "2021 - 2022",
    grade: "66%",
    location: "Ahmedabad, India"
  },
  {
    degree: "Secondary School Certificate",
    institution: "Shree Saraswati Shishu Mandir",
    year: "2019 - 2020",
    grade: "81%",
    location: "Gondal, India"
  },
];

export const experience = [
  {
    title: "Software Engineer Intern",
    company: "Saeculum Solutions Pvt. Ltd.",
    location: "Ahmedabad, India",
    period: "Apr 2023 - Jan 2024",
    type: "Internship",
    description: [
      "Contributed to the development of a production-level project, focusing on backend architecture.",
      "Developed and maintained RESTful APIs using Node.js and Express.js, ensuring seamless integration with the frontend.",
      "Managed and optimized database operations with MongoDB, improving data retrieval efficiency.",
      "Implemented authentication and authorization mechanisms using JWT for secure user access.",
      "Collaborated with a cross-functional team to debug issues and enhance application performance."
    ],
    technologies: ["Node.js", "Express.js", "MongoDB"],
  },
];

export const projectCategories = [
  "All",
  // "MERN",
  // "Frontend",
  "Backend"
];

export const projects = [
  {
    title: "Orderify",
    description: "Developed the backend for Orderify, an internal lunch ordering system for employees. Enabled features such as menu browsing, cart management, and order placement for users, while providing admins with tools to manage products and track orders. Frontend built with React.js and Tailwind CSS by team members.",
    image: "🍽️",
    technologies: ["Node.js", "Express.js", "MongoDB", "JWT"],
    category: "Backend",
    github: "https://github.com/Pujanjani30/Orderify",
    demo: "https://orderify-lt47.onrender.com/api-docs"
  },
  {
    title: "ZetoSearch",
    description: "A lightweight Node.js full-text search library with support for multi-field indexing and TF-IDF ranking.",
    image: "🔍",
    technologies: ["Node.js", "TypeScript"],
    category: "Backend",
    github: "https://github.com/Pujanjani30/zeto-search",
    demo: null
  },
  // {
  //   title: "DoList",
  //   description: "DoList is my first React practice project — a full-stack to-do web app. It supports user authentication and full CRUD operations for to-dos.",
  //   image: "📝",
  //   technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
  //   category: "MERN",
  //   github: "https://github.com/Pujanjani30/DoList",
  //   demo: "https://dolistapp.vercel.app"
  // },
  // {
  //   title: "BlueSky",
  //   description: "A Modern Weather App that provides real-time weather updates and forecasts. Features include current weather conditions, 5-day forecasts, and location-based searches.",
  //   image: "🌤️",
  //   technologies: ["React.js", "Tailwind CSS", "OpenWeatherMap API"],
  //   category: "Frontend",
  //   github: "https://github.com/Pujanjani30/BlueSky",
  //   demo: "https://blueskyapp.vercel.app"
  // },
]

export const contactDetails = {
  email: "pujanjani30@gmail.com",
  location: "Ahmedabad, India"
}