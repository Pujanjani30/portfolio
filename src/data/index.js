export const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/pujanjani30'
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/pujanjani',
  }
];

export const techSkills = [
  {
    title: "Frontend",
    skills: [
      { name: "JavaScript", featured: true },
      { name: "React.js", featured: true },
      { name: "TypeScript", featured: false },
      { name: "HTML5", featured: true },
      { name: "CSS3", featured: true },
      { name: "Tailwind CSS", featured: false }
    ],
    color: "from-blue-400 to-cyan-400",
    bgColor: "bg-blue-500/10 border-blue-500/20"
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", featured: true },
      { name: "Express.js", featured: true },
      { name: "MongoDB", featured: true },
      { name: "PostgreSQL", featured: false },
      { name: "Prisma", featured: true },
      { name: "REST APIs", featured: false },
      { name: "JWT", featured: false },
      { name: "Cloudinary", featured: false },
      { name: "Swagger", featured: false }
    ],
    color: "from-green-400 to-emerald-400",
    bgColor: "bg-green-500/10 border-green-500/20"
  },
  {
    title: "Dev Tools",
    skills: [
      { name: "GitHub", featured: true },
      { name: "Docker", featured: false },
      { name: "Vercel", featured: true },
      { name: "Postman", featured: true },
      { name: "VS Code", featured: true },
      { name: "Figma", featured: false },
      { name: "Canva", featured: false }
    ],
    color: "from-purple-400 to-pink-400",
    bgColor: "bg-purple-500/10 border-purple-500/20"
  }
];

export const softSkills = [
  { name: "Communication" },
  { name: "Teamwork" },
  { name: "Problem-solving" },
  { name: "Adaptability" },
  { name: "Creativity" }
];

export const education = [
  {
    degree: "Bachelor of Technology in Computer Science & Engineering",
    institution: "Silver Oak University",
    year: "2022 - 2026",
    grade: "Current CGPA: 9.52",
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