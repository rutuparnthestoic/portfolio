import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    jobit,
    tripguide,
    threejs,
    nextjs,
    conferenciao,
    github,
    linkedin,
    appointer,
    ceoDashboard,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Front-End Web Development",
      icon: web,
    },
    {
      title: "Back-End Web Development",
      icon: mobile,
    },
    {
      title: "Machine Learning",
      icon: backend,
    }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: linkedin,
      link : "https://www.linkedin.com/in/rutuparn-kakade-7b9a26231/"
    },
    {
      name: "GitHub",
      icon: github,
      link: "https://github.com/rutuparnthestoic/"
    }
  ]
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: 'Next JS',
      icon: nextjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Conferenciao",
      description:
        "A Full Stack, deployment-ready video conferencing web application that can handle upto 350M meets/video calls per day with countless amazing features.",
      tags: [
        {
          name: "NextJS14",
          color: "blue-text-gradient",
        },
        {
          name: "Stream",
          color: "green-text-gradient",
        },
        {
          name: "TailwindCSS",
          color: "pink-text-gradient",
        },
      ],
      image: conferenciao,
      source_code_link: "https://github.com/rutuparnthestoic/conferenciao",
      website_link: "https://conferenciao.vercel.app/"
    },
    {
      name: "Appointer",
      description:
        "Full stack, highly scalable Appointment management system, supporting both Client and Admin features. Request an appointment, that can be scheduled or cancelled by the Admin.",
      tags: [
        {
          name: "NextJS14",
          color: "blue-text-gradient",
        },
        {
          name: "Appwrite",
          color: "pink-text-gradient",
        },
        {
          name: "Twilio",
          color: "green-text-gradient",
        },
      ],
      image: appointer,
      source_code_link: "https://github.com/rutuparnthestoic/appointer",
      website_link: "https://appointer-beta.vercel.app/"
    },
    {
      name: "CEO Dashboard",
      description:
        "A MERN Stack Admin dashboard web application that visualizes and summarizes the company data including employee management, geographical data visualization and much more.",
      tags: [
        {
          name: "React JS",
          color: "blue-text-gradient",
        },
        {
          name: "ExpressJS",
          color: "pink-text-gradient",
        },
        {
          name: "MongoDB",
          color: "green-text-gradient",
        },
      ],
      image: ceoDashboard,
      source_code_link: "https://github.com/rutuparnthestoic/ceoDashboard",
      website_link: "https://ceodashboard.onrender.com/"
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects, socialLinks };