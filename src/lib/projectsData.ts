import {Project} from "./projet";
import {FaReact} from "react-icons/fa";
import {SiCss3, SiFramework, SiHtml5, SiJavascript, SiNestjs, SiTailwindcss, SiTypescript} from "react-icons/si";
import {RiNextjsFill, RiRemixiconFill} from "react-icons/ri";

// Define the base path for project images
const PROJECT_IMAGE_BASE_PATH = "/projects img/";

export const projectsData: Project[] = [
    {
        id: "proj-shopdo",
        title: "ShopDO - E-commerce Platform Backend",
        description: "Developed a robust and scalable backend for an e-commerce platform, focusing on secure API design and efficient data management. Implemented core functionalities for product catalog, user authentication, and order processing.",
        category: "backend",
        tech: [
            {name: "React", icon: FaReact}, // Assuming React is used for frontend part of this project
            {name: "TypeScript", icon: SiTypescript},
            {name: "JavaScript", icon: SiJavascript},
            {name: "Next.js", icon: RiNextjsFill}, // Assuming Next.js is used for frontend part of this project
        ],
        repoGit: "https://github.com/WistantKode/nextjs-15-fullstack-e-commerce-web-app",
        liveUrl: "#", // Placeholder
        imageUrl: `${PROJECT_IMAGE_BASE_PATH}shopdo.png`,
    },
    {
        id: "proj-nestjs-auth",
        title: "NESTJS AUTH JWT - Secure Authentication Microservice",
        description: "Engineered a secure and efficient authentication microservice using NestJS, implementing JWT (JSON Web Tokens) for robust user authorization. Designed for seamless integration into larger application architectures.",
        category: "backend",
        tech: [
            {name: "NestJS", icon: SiNestjs},
            {name: "TypeScript", icon: SiTypescript},
            {name: "JavaScript", icon: SiJavascript},
        ],
        repoGit: "https://github.com/WistantKode/nestjs-nextjs-authentication-side",
        liveUrl: "#", // Placeholder
        imageUrl: `${PROJECT_IMAGE_BASE_PATH}nestjs-auth.png`,
    },
    {
        id: "proj-plantex",
        title: "Plantex - Modern Plant Showcase Website",
        description: "Developed a visually appealing showcase website for plants, designed to be fully responsive and easily customizable. Includes sections for products, FAQs, contact information, and social links, featuring a minimalist design with Google Fonts (Outfit) and Remix Icons.",
        category: "web",
        tech: [
            {name: "HTML5", icon: SiHtml5},
            {name: "JavaScript", icon: SiJavascript},
            {name: "Tailwind CSS", icon: SiTailwindcss},
            {name: "CSS3", icon: SiCss3},
        ],
        repoGit: "https://github.com/WistantKode/responsivewebsite-plantex",
        liveUrl: "https://plantex-wistant.vercel.app/",
        imageUrl: `${PROJECT_IMAGE_BASE_PATH}plantex.png`,
    },
    {
        id: "proj-car-rental",
        title: "Car Rental - Responsive Web Application",
        description: "Engineered a responsive car rental website using HTML, CSS, and JavaScript. The platform features a clean user interface, dynamic content rendering, and a seamless booking experience. Optimized for performance and cross-browser compatibility.",
        category: "web",
        tech: [
            {name: "HTML5", icon: SiHtml5},
            {name: "JavaScript", icon: SiJavascript},
            {name: "Tailwind CSS", icon: SiTailwindcss},
            {name: "CSS3", icon: SiCss3},
        ],
        repoGit: "https://github.com/WistantKode/javascript-html-css-car-rental-website",
        liveUrl: "https://javascript-html-css-car-rental-webs.vercel.app/",
        imageUrl: `${PROJECT_IMAGE_BASE_PATH}car-rental.png`,
    },
    {
        id: "proj-chickfood-v2",
        title: "Chick Food - Responsive Restaurant Frontend (V2)",
        description: "An enhanced responsive frontend for a fictional fried chicken restaurant, delivering an engaging user experience with smooth animations and a clean, modern design. A robust portfolio piece demonstrating advanced HTML, CSS, and JavaScript skills.",
        category: "web",
        tech: [
            {name: "HTML5", icon: SiHtml5},
            {name: "JavaScript", icon: SiJavascript},
            {name: "Tailwind CSS", icon: SiTailwindcss},
            {name: "CSS3", icon: SiCss3},
        ],
        repoGit: "https://github.com/WistantKode/Responsivewebsite-chickfood",
        liveUrl: "https://chickfood-wistant.netlify.app/",
        imageUrl: `${PROJECT_IMAGE_BASE_PATH}chickfood.png`,
    },
    {
        id: "proj-structo",
        title: "Structo - Modern Construction Landing Page",
        description: "Developed a fully responsive and easily customizable landing page for a construction company. Features sections for services, projects, testimonials, and contact information, utilizing modern design principles, Google Fonts (Outfit), and Remixicon for enhanced aesthetics.",
        category: "web",
        tech: [
            {name: "HTML", icon: SiHtml5},
            {name: "CSS3", icon: SiCss3},
            {name: "JavaScript", icon: SiJavascript},
            {name: "ScrollJS", icon: SiFramework}, // Assuming SiFramework is for ScrollJS
            {name: "RemixIcon", icon: RiRemixiconFill},
        ],
        repoGit: "https://github.com/WistantKode/responsive-construction-company-website",
        liveUrl: "https://construction-wistant.vercel.app/",
        imageUrl: `${PROJECT_IMAGE_BASE_PATH}structo.png`,
    },
    {
        id: "proj-elysian-drive",
        title: "Elysian Drive - Electric Car Brand Landing Page",
        description: "Crafted a captivating frontend landing page for an electric car brand, showcasing futuristic design and immersive animations. Demonstrates advanced skills in HTML, CSS, and JavaScript, with a focus on interactive and visually rich user experiences.",
        category: "web",
        tech: [
            {name: "HTML", icon: SiHtml5},
            {name: "CSS3", icon: SiCss3},
            {name: "JavaScript", icon: SiJavascript},
        ],
        repoGit: "https://github.com/WistantKode/responsive-car-website",
        liveUrl: "https://elsyandrive-wistant.netlify.app/",
        imageUrl: `${PROJECT_IMAGE_BASE_PATH}elysindrive.png`,
    },
    {
        id: "proj-boomsound",
        title: "Boomsound - Artist & DJ Showcase Website",
        description: "Designed and developed a dynamic showcase website for artists, DJs, and creatives, enabling them to establish a strong web presence. Built with HTML, CSS, and JavaScript for a vibrant and engaging user experience.",
        category: "web",
        tech: [
            {name: "HTML", icon: SiHtml5},
            {name: "CSS3", icon: SiCss3},
            {name: "JavaScript", icon: SiJavascript},
        ],
        repoGit: "https://github.com/WistantKode/Responsivewebsite-boomsound",
        liveUrl: "https://wistant-html-css-js-headphones-website.vercel.app/",
        imageUrl: `${PROJECT_IMAGE_BASE_PATH}boomsound.png`,
    },
    {
        id: "proj-portfolio",
        title: "Personal Portfolio - React & Tailwind CSS",
        description: "Meticulously crafted my personal portfolio using React and Tailwind CSS. This platform effectively showcases my diverse projects, technical skills, and professional journey through a modern, responsive, and highly optimized design.",
        category: "web",
        tech: [
            {name: "React", icon: FaReact},
            {name: "TypeScript", icon: SiTypescript},
            {name: "Tailwind CSS", icon: SiTailwindcss},
        ],
        repoGit: "https://github.com/wistantkode/my-dev-portfolio.git",
        liveUrl: "#", // Placeholder
        imageUrl: `${PROJECT_IMAGE_BASE_PATH}portfolio-img.png`,
    },
];
