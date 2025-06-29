
import { FaLinkedin, FaTwitter, FaFacebook, FaBehance, FaGlobe } from "react-icons/fa";
import avatar from '../assets/Avatar.png'
import avatar1 from '../assets/Avatar-1.png'
import avatar2 from '../assets/Avatar-2.png'
import avatar3 from '../assets/Avatar-3.png'
import avatar4 from '../assets/Avatar-4.png'
import avatar5 from '../assets/Avatar-5.png'
import avatar6 from '../assets/Avatar-6.png'
import { quizeImg, room, services1,services2,services3,services4,services5,services6,boll,square,conference,desktop,office } from "../assets/images";




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









