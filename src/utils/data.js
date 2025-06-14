
import { FaLinkedin, FaTwitter, FaFacebook, FaBehance, FaGlobe } from "react-icons/fa";
import avatar from '../assets/Avatar.png'
import avatar1 from '../assets/Avatar-1.png'
import avatar2 from '../assets/Avatar-2.png'
import avatar3 from '../assets/Avatar-3.png'
import avatar4 from '../assets/Avatar-4.png'
import avatar5 from '../assets/Avatar-5.png'
import avatar6 from '../assets/Avatar-6.png'


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