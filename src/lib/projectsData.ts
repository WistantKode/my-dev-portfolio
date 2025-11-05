import {Project} from "./projet";
import {FaReact} from "react-icons/fa";
import {SiCss3, SiFramework, SiHtml5, SiJavascript, SiTailwindcss, SiTypescript} from "react-icons/si";

// Define the base path for project images
const PROJECT_IMAGE_BASE_PATH = "/projects img/";

export const projectsData: Project[] = [
    {
        id: "1",
        title: "Chick Food - Modern Restaurant Frontend",
        description: "A responsive frontend project for a fictional fried chicken restaurant. Features engaging animations and a clean, modern design, showcasing strong skills in HTML, CSS, and JavaScript. Optimized for an excellent user experience.",
        category: "web",
        tech: [
            {name: "HTML", icon: SiHtml5},
            {name: "CSS3", icon: SiCss3},
            {name: "JavaScript", icon: SiJavascript},
            {name: "ScrollJS", icon: SiFramework},
        ],
        repoGit: "https://github.com/wistantkode/Chick-Food-Project",
        liveUrl: "https://chick-food-project.vercel.app/",
        imageUrl: `${PROJECT_IMAGE_BASE_PATH}projet1.png`,
    },
    {
        id: "2",
        title: "Elysian Drive - Electric Car Landing Page",
        description: "A captivating frontend landing page for an electric car brand, featuring futuristic design and immersive animations. Demonstrates advanced skills in HTML, CSS, and JavaScript, particularly with interactive libraries.",
        category: "web",
        tech: [
            {name: "HTML", icon: SiHtml5},
            {name: "CSS3", icon: SiCss3},
            {name: "JavaScript", icon: SiJavascript},
        ],
        repoGit: "https://github.com/wistantkode/Elysian-Drive-Project",
        liveUrl: "https://elysian-drive-project.vercel.app/",
        imageUrl: `${PROJECT_IMAGE_BASE_PATH}projet2.png`,
    },
    {
        id: "3",
        title: "Personal Portfolio - React & Tailwind CSS",
        description: "My personal portfolio, meticulously crafted with React and Tailwind CSS. Showcases my diverse projects, technical skills, and professional journey in a modern and responsive design.",
        category: "web",
        tech: [
            {name: "React", icon: FaReact},
            {name: "TypeScript", icon: SiTypescript},
            {name: "Tailwind CSS", icon: SiTailwindcss},
        ],
        repoGit: "https://github.com/wistantkode/my-dev-portfolio.git",
        liveUrl: "#",
        imageUrl: `${PROJECT_IMAGE_BASE_PATH}portfolio-img.png`,
    },
    {
        id: "4",
        title: "Plantex",
        description: "Plantex is a showcase website for plants, built to be fully \n" +
            "                            responsive and easy to customize. It includes sections for products,\n" +
            "                            FAQs, contact, and social links. The design is minimalist and uses\n" +
            "                            Google Fonts (Outfit) and Remix Icons..",
        category: "web",
        tech: [
            {name: "HTML5", icon: SiHtml5},
            {name: "JavaScript", icon: SiJavascript},
            {name: "Tailwind CSS", icon: SiTailwindcss},
            {name: "CSS3", icon: SiCss3},

        ],
        repoGit: "https://github.com/wistantkode/my-dev-portfolio.git",
        liveUrl: "#",
        imageUrl: `${PROJECT_IMAGE_BASE_PATH}plantex.png`,
    },
    {
        id: "5",
        title: "Plantex",
        description: "Chick Food is a front-end project for a fictional fried\n" +
            "                            chicken restaurant. This fully responsive website provides\n" +
            "                            an engaging user experience with smooth animations and a\n" +
            "                            clean, modern design. It serves as a great portfolio\n" +
            "                            piece to showcase skills in HTML, CSS, and JavaScript. ",
        category: "web",
        tech: [
            {name: "HTML5", icon: SiHtml5},
            {name: "JavaScript", icon: SiJavascript},
            {name: "Tailwind CSS", icon: SiTailwindcss},
            {name: "CSS3", icon: SiCss3},

        ],
        repoGit: "https://github.com/wistantkode/my-dev-portfolio",
        liveUrl: "#",
        imageUrl: `${PROJECT_IMAGE_BASE_PATH}chickfood.png`,
    },
];
