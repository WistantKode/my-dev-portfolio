import Layout from "@/components/layout/layout";
import HeroSection from "@/components/home/HeroSection.tsx";
import AboutSection from "@/components/home/AboutSection.tsx";
import ServicesSection from "@/components/home/ServicesSection.tsx";
import AboutMe from "@/components/AboutMe.tsx";
import MyExperience from "@/components/MyExperience.tsx";

const Home = () => {
    return (
        <Layout
            title="Modjo victor- Développeur Web Java React & IT student"
            description="Portfolio de Modjo victor, développeur web, mobile, desktop spécialisé dans la création de solutions digitales innovantes et performantes."
            keywords="développeur web, dévellopeur backend, Java, React, développement web, portfolio, Modjo Victor, solutions digitales">
            <HeroSection/>
            <AboutMe/>
            <ServicesSection/>
            <MyExperience/>
        </Layout>
    );
};

export default Home;