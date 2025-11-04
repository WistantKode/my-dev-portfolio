import Layout from "@/components/layout/layout";
import HeroSection from "@/components/home/hero-section";
import AboutSection from "@/components/home/about-section";
import ServicesSection from "@/components/home/services-section";

const Home = () => {
    return (
        <Layout
            title="Modjo victor- Développeur Web Java React & IT student"
            description="Portfolio de Modjo victor, développeur web, mobile, desktop spécialisé dans la création de solutions digitales innovantes et performantes."
            keywords="développeur web, dévellopeur backend, Java, React, développement web, portfolio, Modjo Victor, solutions digitales">
            <HeroSection/>

            <ServicesSection/>
        </Layout>
    );
};

export default Home;