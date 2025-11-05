import Layout from "@/components/layout/layout";
import HeroSection from "@/components/home/HeroSection.tsx";
import AboutSection from "@/components/home/AboutSection.tsx";
import ServicesSection from "@/components/home/ServicesSection.tsx";
import AboutMe from "@/components/AboutMe.tsx";
import MyExperience from "@/components/MyExperience.tsx";
import MyStack from "@/components/MyStack.tsx";
import CTA from "@/components/CTA.tsx";
import ContactForm from "@/components/ContactForm.tsx";
import ClientTestimonials from "@/components/home/ClientTestimonials.tsx"; // Import the new component

const Home = () => {
    return (
        <Layout
            title="Wistant Kode - DevSecOps Practicer | Software Engineering Student"
            description="Wistant Kode's portfolio: a passionate Software Engineering Student and DevSecOps Practicer. Specializing in Java/Spring Boot, React/Next.js, Cloud, Automation, and Cybersecurity. Building innovative and scalable digital solutions."
            keywords="Wistant Kode, DevSecOps, Software Engineer, Java, Spring Boot, React, Next.js, Cloud, Automation, Cybersecurity, Portfolio, Web Development, Backend Development, Africa Tech"
            lang="en"
        >
            <HeroSection/>
            <AboutMe/>
            <ServicesSection/>
            <MyStack />
            <MyExperience/>
            <ClientTestimonials /> {/* Integrate the new component here */}
            <ContactForm/>
            {/*<CTA/>*/}
            {/*<div>*/}
            {/*    <CallToAction/>*/}
            {/*</div>*/}
        </Layout>

    );
};

export default Home;