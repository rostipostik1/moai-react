
import { FaLinkedin, FaTwitter, FaFacebook, FaBehance, FaGlobe } from "react-icons/fa";

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
