import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Swarup Sapkota",
  initials: "SS",
  url: "https://www.swarupsapkota.com.np/",
  location: "Lalitpur, Nepal",
  locationLink: "https://www.google.com/maps/place/kathmandu",
  description:
    "Computer Engineer with passion for design. Currently Frontend Developer at NAXA.",
  summary:
    "After completing high school, I chose to pursue a career in Computer Engineering. I earned a Bachelor’s degree in Computer Engineering from Nepal College of Information Technology and gained professional experience as a [Graphics Designer at Dealayo](https://dealayo.com/). I recently completed a 3-month internship as a [Frontend Developer at Tekgro Nepal](https://tekgronepal.com.np/) and have now joined [NAXA](https://naxa.com.np/) as a Frontend Developer Intern.",
  avatarUrl: "/me.jpg",
  skills: [
    "React",
    "Next.js",
    "Vite",
    "Javascript",
    "Typescript",
    "Node.js",
    "Python",
    "TailwindCSS",
    "SQL",
    "MongoDB",
    "Firebase",
    "Photoshop",
    "Figma",
    "Vercel",
    "Java",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },

  ],
  contact: {
    email: "swarupsapkota@gmail.com",
    tel: "+9779861280327",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/EmpSwarup",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/swarupsapkota/",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:swarupsapkota@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "NAXA",
      href: "https://naxa.com.np/",
      badges: [],
      location: "Kathmandu, Nepal",
      title: "Frontend Developer Intern",
      logoUrl: "/naxa-logo.png",
      start: "December 2024",
      end: "Present",
      description:
        "Collaborated with the team to design, develop, and maintain responsive web applications, creating user-friendly interfaces with HTML, CSS, and JavaScript, optimizing performance, ensuring cross-browser compatibility, and contributing to feature development, testing, debugging, and seamless integration with back-end systems.",
    },
    {
      company: "TekGro Nepal",
      href: "https://tekgronepal.com.np/",
      badges: [],
      location: "Kathmandu, Nepal",
      title: "Frontend Developer Intern",
      logoUrl: "/tekgro.jpeg",
      start: "September 2024",
      end: "December 2024",
      description:
        "Translated Figma UI/UX wireframes into responsive web applications using HTML, CSS, JavaScript, and React.js, developed clean, maintainable code, integrated front-end with back-end APIs.",
    },
    {
      company: "Dealayo",
      href: "https://dealayo.com/",
      badges: [],
      location: "Khumaltar, Lalitpur",
      title: "Graphics Designer",
      logoUrl: "/dealayo.jpg",
      start: "November 2022",
      end: "December 2022",
      description:
        "Designed high quality and engaging social media posts and banners for Ecommerce platform Dealayo using Adobe Photoshop and Illustrator.",
    },
  ],
  education: [
    {
      school: "Nepal College of Information Technology",
      href: "https://ncit.edu.np/",
      degree: "Bachelors in Computer Engineering",
      logoUrl: "/ncit.jpg",
      start: "2018",
      end: "2023",
    },
    {
      school: "Moonlight Secondary School",
      href: "https://molihss.edu.np/",
      degree: "Highschool Diploma",
      logoUrl: "/moliss.jpg",
      start: "2016",
      end: "2018",
    },
  ],
  projects: [
    {
      title: "RoomFinder 2.0",
      href: "https://github.com/nishantchy842/RoomFinder_2.0",
      dates: "May 2023 - July 2023",
      active: true,
      description:
        "Room Finder is a full stack MERN application that allows users to post and view room listings. Other features include payment system, recommendation system, mapping, etc. Collaborative project for final year of Computer Engineering.",
      technologies: [
        "Vite",
        "ReactJS",
        "MongoDB",
        "Material UI",
        "TailwindCSS",
        "Khalti Payment",
        "Redux",
        "Mapbox",
        "JWT",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/nishantchy842/RoomFinder_2.0",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/work1.jpg",
    },
    {
      title: "Article Summarizer",
      href: "https://sumz-article-summarizer-emp.vercel.app/",
      dates: "October 2023 - November 2023",
      active: true,
      description:
        "A React app that summarizes articles from the internet. Utilizes summarizer API for summarizing articles. Used Tailwind CSS for styling and Redux for state management",
      technologies: [
        "Vite",
        "ReactJS",
        "Javascript",
        "RapidAPI",
        "Redux",
        "Tailwind CSS",
        "Vercel",
      ],
      links: [
        {
          type: "Website",
          href: "https://sumz-article-summarizer-emp.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/EmpSwarup/article-summarizer",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/work2.jpg",
    },
    {
      title: "RoomFinder",
      href: "https://roomfinderapp.netlify.app/",
      dates: "October 2022 - November 2022",
      active: true,
      description:
        "Developed an Ecommerce style website for rooms, houses and apartments",
      technologies: [
        "React JS",
        "Javascript",
        "Firebase",
        "Bootstrap",
        "Google Maps",
        "Khalti Payment",
        "Netlify",
      ],
      links: [
        {
          type: "Website",
          href: "https://roomfinderapp.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/EmpSwarup/roomfinder",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/work3.jpg",
    },
    {
      title: "Designs for Dealyo",
      href: "https://www.behance.net/swarupsapkota",
      dates: "Nov 2022 - Dec 2022",
      active: true,
      description:
        "Worked as graphics designer for online shopping platform Dealayo. Designed banners for the site and social media posts",
      technologies: [
        "Adobe Photoshop",
        "Adobe Illustrator",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.behance.net/swarupsapkota",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/work4.jpg",
    },
  ],
} as const;
