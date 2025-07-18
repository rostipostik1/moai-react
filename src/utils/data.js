
import { FaLinkedin, FaTwitter, FaFacebook, FaBehance, FaGlobe } from "react-icons/fa";
import avatar from '../assets/Avatar.png'
import avatar1 from '../assets/Avatar-1.png'
import avatar2 from '../assets/Avatar-2.png'
import avatar3 from '../assets/Avatar-3.png'
import avatar4 from '../assets/Avatar-4.png'
import avatar5 from '../assets/Avatar-5.png'
import avatar6 from '../assets/Avatar-6.png'
import { quizeImg, room, services1, services2, services3, services4, services5, services6, boll, square, conference, desktop, office, game, ifone, locked, project, robot, site, ball, window, paperBoat, boat, poster, dummy, team1, team2, team3 } from "../assets/images";




export const footerData = [
  {
    title: "Company",
    links: [
      { name: "About", url: "#" },
      { name: "Careers", url: "#" },
      { name: "Contact", url: "#" }
    ]
  },
  {
    title: "Services",
    links: [
      { name: "Mobile Apps Development", url: "#" },
      { name: "Web Development", url: "#" },
      { name: "UX/UI Design", url: "#" },
      { name: "AI Application Design", url: "#" },
      { name: "Security Services", url: "#" },
      { name: "IoT & Embedded", url: "#" }
    ]
  },
  {
    title: "Follow us",
    social: [
      { icon: FaLinkedin, name: "LinkedIn", url: "#" },
      { icon: FaTwitter, name: "Twitter", url: "#" },
      { icon: FaFacebook, name: "Facebook", url: "#" },
      { icon: FaBehance, name: "Behance", url: "#" },
      { icon: FaGlobe, name: "Website", url: "#" }
    ]
  }
];


export const testimonialTexts = [
  'Highly recommended! The content suggestions provided are spot-on and improved our social media engagement.',
  'Exceptional support! Our productivity improved significantly with their automation tools.',
  'Working with them has been a game-changer for our branding and outreach.',
  'They truly understand modern marketing. Great experience from start to finish!',
  'The ideas they bring to the table are innovative and effective.',
  'One of the best decisions we’ve made this year. Our audience loves the new content!'
];

export const testimonialAvatars = [
  {
    img: avatar,
    name: 'Sarah Johnson',
    job: 'Marketing Manager, Zoho',
  },
  {
    img: avatar1,
    name: 'Daniel Lee',
    job: 'Product Lead, Asana',
  },
  {
    img: avatar2,
    name: 'Emily Smith',
    job: 'CMO, Shopify',
  },
  {
    img: avatar3,
    name: 'Michael Brown',
    job: 'CEO, Trello',
  },
  {
    img: avatar4,
    name: 'Jessica Davis',
    job: 'Brand Manager, HubSpot',
  },
  {
    img: avatar5,
    name: 'James Wilson',
    job: 'Growth Hacker, Airtable',
  },
  {
    img: avatar6,
    name: 'Natalie Martinez',
    job: 'UX Strategist, Notion',
  }
];

export const quiseItems = [
  { id: 1, label: "Strategize" },
  { id: 2, label: "Design" },
  { id: 3, label: "Build" },
  { id: 4, label: "SECURE" },
  { id: 5, label: "Support" },
];

export const stepContent = {
  1: {
    title: "Strategize",
    subtitle: "Plan and position a successful product in the market",
    items: [
      "Target Market and Customer Segmentation",
      "Competitive Analysis",
      "Product Roadmap and Development",
      "Go-to-Market Strategy",
    ],
    image: quizeImg,
  },
  2: {
    title: "Design",
    subtitle: "Craft beautiful and intuitive interfaces",
    items: [
      "Wireframing & Prototyping",
      "UI Design Systems",
      "User Testing",
    ],
    image: quizeImg,
  },
  3: {
    title: "Build",
    subtitle: "Turn designs into working products",
    items: [
      "Frontend & Backend Development",
      "Database Integration",
      "Testing & QA",
    ],
    image: quizeImg,
  },
  4: {
    title: "Secure",
    subtitle: "Ensure your product is protected",
    items: [
      "Authentication",
      "Data Encryption",
      "Security Audits",
    ],
    image: quizeImg,
  },
  5: {
    title: "Support",
    subtitle: "Keep your product running smoothly",
    items: [
      "Monitoring & Analytics",
      "Bug Fixes",
      "Customer Support",
    ],
    image: quizeImg,
  },
};


export const servicesData = [
  {
    id: 1,
    title: "Mobile Apps Development",
    desc: "We don't just code, we create experiences you can bet on.",
    image: services1,
  },
  {
    id: 2,
    title: "Web Development",
    desc: "With Moai, you can bring ideas to life in the digital world.",
    image: services2,
  },
  {
    id: 3,
    title: "UX/UI Design",
    desc: "We at Moai, Elevate user experience through simplicity, empathy, and purposeful design",
    image: services3,
  },
  {
    id: 4,
    title: "Security Services",
    desc: "Safety first, always: Explore our tech security solutions",
    image: services4,
  },
  {
    id: 5,
    title: "IoT & Embedded",
    desc: "IoT excellence, embedded in every solution",
    image: services5,
  },
  {
    id: 6,
    title: "AI Application",
    desc: "Innovate, Create, Iterate: Explore AI development possibilities",
    image: services6,
  },
];


export const experienceData = [
  {
    id: 1,
    title: "We Breathe Tech Day & Night",
    text: "MOAI strives to be your partner in delivering solutions. With our quick turnaround and round the clock support, we would always be your trusted product partner.",
    image: boll,
    alt: "boll",
  },
  {
    id: 2,
    title: "Customized Solutions",
    text: "We deliver customized solutions that align with your goals, add tangible value, and give you a competitive edge.",
    image: square,
    alt: "square",
  },
  {
    id: 3,
    title: "Peace of mind",
    text: "No more wondering what we’re doing or when your app will be done. With us, you can expect frequent check-ins, progress updates, and plenty of hand-holding.",
    image: room,
    alt: "room",
  },
];


export const productIdeasData = [
  {
    id: 1,
    title: "Product Strategy & Development",
    text: "At Moai, we combine our deep product management and technological expertise to build cost effective, robust and secure products.",
    extraClass: "product",
  },
  {
    id: 2,
    title: "Founder Advisement Program",
    text: "Led by experienced mentors and industry veterans, equips you with the knowledge and resources needed to make informed decisions and achieve your entrepreneurial goals.",
    extraClass: "faunder",
  },
  {
    id: 3,
    title: "Build to Scale",
    text: "Ensures that your systems are agile, adaptable, and future-proof, allowing you to respond swiftly to market changes and seize new opportunities.",
    extraClass: "scale",
  },
];


export const deliveredData = [
  {
    id: 1,
    image: office,
    alt: "office",
    title: "UX review presentations",
    text: "How do you create compelling presentations that wow your colleagues and impress your managers?",
    tags: ["ux", "Product Design", "fintech"],
  },
  {
    id: 2,
    image: conference,
    alt: "conference",
    title: "Migrating to Linear 101",
    text: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.",
    tags: ["ux", "Next JS", "Testing", "SAAS"],
  },
  {
    id: 3,
    image: desktop,
    alt: "desktop",
    title: "Building your API Stack",
    text: "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
    tags: ["React", "Automotive"],
  },
];


export const navMenu = [
  { id: 1, label: "Home", to: "/" },
  { id: 2, label: "Services", to: "/services" },
  { id: 3, label: "About", to: "/about" },
  { id: 4, label: "Career", to: "/career" },
  { id: 5, label: "Contact Us", to: "/contact" },
];

// src/data/servicesData.js

export const serviceList = [
  {
    id: 1,
    title: "Mobile Apps Development",
    description: "We don`t just code, we create experiences you can bet on",
    image: ifone,
    imageAlt: "iPhone",
    features: [
      "Application strategy and planning",
      "UI-UX Design",
      "Native App Development",
      "Cross-Platform App Development",
      "Maintenance & Support",
      "Security & Compliance"
    ]
  },
  {
    id: 2,
    title: "Web App Development",
    description: "With Moai, you can bring ideas to life in the digital world",
    image: site,
    imageAlt: "Website",
    features: [
      "Front-End Development",
      "Back-End Development",
      "Full-Stack Development",
      "UI-UX Design",
      "Custom Web Application Development",
      "E-Commerce Development",
      "CMS Development",
      "Enterprise Application Development"
    ]
  },
  {
    id: 3,
    title: "UX/UI Design",
    description: "With Moai, design experiences that inspire trust.",
    image: game,
    imageAlt: "Game Design",
    features: [
      "User Research",
      "User Personals",
      "Information Architecture",
      "Wireframing",
      "Prototyping",
      "Visual Design",
      "Usability testing",
      "Responsive Design",
      "Accessibility Design",
      "Interaction Design",
      "Collaboration and development",
      "Post launch Analysis"
    ]
  },
  {
    id: 4,
    title: "Security Services",
    description: "Safety first, always: Explore our tech security solutions.",
    image: locked,
    imageAlt: "Lock and Security",
    features: [
      "DevSecOps Implementation",
      "Dynamic Vulnerability Assessments",
      "Security Code review",
      "Threat Modelling",
      "Software Composition Analysis",
      "Security Operations Center",
      "Red team activity",
      "Cloud Security",
      "Configuration Audits",
      "Penetrations Testing"
    ]
  },
  {
    id: 5,
    title: "IoT & Embedded",
    description: "IoT excellence, embedded in every solution",
    image: project,
    imageAlt: "Embedded Project",
    features: [
      "Embedded systems Development",
      "IoT device development & integration",
      "Hardware & software prototyping",
      "Real-time application development",
      "Connectivity and Communication solutions",
      "Remote monitoring and control",
      "Security and Data privacy",
      "Cloud-Based Data management"
    ]
  },
  {
    id: 6,
    title: "AI Application",
    description: "Innovate, Create, Iterate: Explore AI development possibilities",
    image: robot,
    imageAlt: "Robot AI",
    features: [
      "AI chatbot development",
      "Recommendation systems",
      "AI-Powered Business Automations",
      "AI Integration & Consulting",
      "Data Analytics & Insights",
      "Virtual Assistants",
      "Computer Vision",
      "Natural Language Processing (NLP)",
      "Machine Learning solutions"
    ]
  }
];



export const experienceValues = [
  { id: "ex", label: "Excellence" },
  { id: "col", label: "Collaboration" },
  { id: "inov", label: "Innovation" },
  { id: "gl", label: "Global" },
  { id: "gr", label: "Growth" },
  { id: "cast", label: "Customer-centric" },
  { id: "lead", label: "Leadership" },
  { id: "glb", label: "Global" },         
  { id: "qa", label: "Quality" }
];

// src/data/offerCards.js

export const offerCards = [
  {
    id: 1,
    title: "Innovation",
    text: "We are dedicated to fostering a culture of innovation to continually improve our deliverables.",
    image: ball,
    imageAlt: "ball"
  },
  {
    id: 2,
    title: "Integrity",
    text: "Moai’s reputation is built on a foundation of integrity, and we protect it with utmost care.",
    image: window,
    imageAlt: "window"
  },
  {
    id: 3,
    title: "Ownership",
    text: "Our dedication to ownership means we go the extra mile to deliver exceptional results.",
    image: paperBoat,
    imageAlt: "paper"
  },
  {
    id: 4,
    title: "Teamwork",
    text: "With teamwork at the core of our values, we’re here to support you and deliver success together.",
    image: boat,
    imageAlt: "boat"
  },
  {
    id: 5,
    title: "Customer Empathy",
    text: "We strive to connect on a human level, making your jouney with us one filled with understanding and care.",
    image: poster,
    imageAlt: "poster"
  },
  {
    id: 6,
    title: "Transparency",
    text: "Transparency is the foundation of Moai’s relationships, ensuring a clear view of our actions and intentions.",
    image: dummy,
    imageAlt: "dummy"
  }
];

// src/data/teamMembers.js

export const teamMembers = [
  {
    id: 1,
    image: team1,
    name: "Khalil Kothia",
    position: "COO"
  },
  {
    id: 2,
    image: team2,
    name: "Kushang Moorthy",
    position: "Founder & CEO"
  },
  {
    id: 3,
    image: team3,
    name: "Khalil Kothia",
    position: "HEAD OF DESIGN"
  }
];

















