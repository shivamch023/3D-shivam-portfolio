import {
    mobile,
    userInterface,
    backend,
    web,
    javascript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    meta,
    starbucks,
    tesla,
    shopify,
    study,
    resume,
    threejs,
    ecommerce,
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "MERN Stack Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
   {
    title:"UI/UX Designer",
    icon: userInterface,
   },
  ];
  
  const technologies = [
    {
      name: "HTML",
      icon: html,
    },
    {
      name: "CSS",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
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
        "I thought it was impossible to make a website as beautiful as our product, but Shivam proved me wrong.",
      name: "XXXX XXX",
      designation: "Web developer",
      company: "Wipro",
      image: "https://st5.depositphotos.com/3848923/63335/i/450/depositphotos_633358398-stock-illustration-cute-man-cartoon-white-background.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Shivam does.",
      name: "XXXXX XXXX",
      designation: "React Developer",
      company: "TCS",
      image: "https://img.freepik.com/free-vector/business-man-cartoon-character_1308-134360.jpg",
    },
    {
      testimonial:
        "After shivam optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "XXXXXX XXXXXX",
      designation: "Software engineer",
      company: "INfosis",
      image: "https://c8.alamy.com/zooms/9/9d75d3fcb40441a39876692eed1f0c21/tc2fpe.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Ship-Kart",
      description:
        "ShipKart, an e-commerce site, boasts a sleek interface powered by React.js, backed by Express.js, MongoDB, and Node.js for a seamless shopping experience.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "nodejs",
          color: "pink-text-gradient",
        },
        {
          name:"expressjs",
          color:"yellow-text-gradient"
        }
      ],
      image: ecommerce,
      source_code_link: "https://github.com/shivamch023/E-commerce",
    },
    {
      name: "Study Adda",
      description:
        "StudyAdd is an e-learning frontend website crafted using HTML, CSS, and JavaScript, providing a user-friendly interface for a dynamic educational experience.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: study,
      source_code_link: "#",
    },
    {
      name: "Resume Builder",
      description:
        "I've built a sleek and user-friendly resume builder app using React.js. It offers stylish templates for free, allowing users to create professional resumes effortlessly. Whether you're a recent graduate or a seasoned professional, this app streamlines the resume creation process, ensuring your skills and experiences shine through effectively.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: resume,
      source_code_link: "https://buildyourresumewithshivam.netlify.app/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };