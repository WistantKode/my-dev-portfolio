import React from 'react';
import { motion } from "framer-motion";
import { AppearOnScroll } from "@/lib/ScrollEffect.tsx";

interface Testimonial {
  id: string;
  name: string;
  title: string;
  company: string;
  quote: string;
  avatar?: string; // Optional avatar image URL
}

const clientTestimonials: Testimonial[] = [
  {
    id: "1",
    name: "Dr. Evelyn Reed",
    title: "CTO",
    company: "Quantum Innovations",
    quote: "Wistant Kode consistently delivers robust and scalable solutions. Their deep understanding of backend architecture and DevSecOps principles significantly accelerated our project timelines. A true asset to any high-performance team.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    id: "2",
    name: "Mr. Alex Chen",
    title: "Lead Architect",
    company: "GlobalTech Solutions",
    quote: "The technical expertise and problem-solving capabilities demonstrated by Wistant Kode are exceptional. Their contributions to our microservices architecture were pivotal in achieving our performance and security benchmarks.",
    avatar: "https://randomuser.me/api/portraits/men/44.jpg",
  },
  {
    id: "3",
    name: "Ms. Sarah Miller",
    title: "Product Manager",
    company: "InnovateX Labs",
    quote: "Working with Wistant Kode was a seamless experience. Their ability to translate complex requirements into elegant, maintainable code is remarkable. The React frontend they delivered was not only intuitive but also highly optimized.",
    avatar: "https://randomuser.me/api/portraits/women/79.jpg",
  },
  {
    id: "4",
    name: "Eng. David Kim",
    title: "Senior DevOps Engineer",
    company: "CloudBridge Systems",
    quote: "Wistant Kode's proficiency in DevSecOps practices is outstanding. Their implementation of automated deployment pipelines and security protocols significantly enhanced our operational efficiency and system resilience.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
];

const ClientTestimonials = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <AppearOnScroll>
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-text-primary mb-4 title3"
            >
              Trusted by Industry Leaders
            </motion.h2>
          </AppearOnScroll>
          <AppearOnScroll>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-text-secondary text-lg title1 max-w-3xl mx-auto"
            >
              Hear what top professionals and organizations have to say about the impact of Wistant Kode's engineering expertise.
            </motion.p>
          </AppearOnScroll>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {clientTestimonials.map((testimonial) => (
            <AppearOnScroll key={testimonial.id}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                viewport={{ once: true, amount: 0.3 }}
                className="bg-gradient-card border border-border-light rounded-xl p-6 shadow-card hover:shadow-glow transition-all duration-300 flex flex-col justify-between h-full"
              >
                <p className="text-text-secondary text-base mb-6 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center mt-auto">
                  {testimonial.avatar && (
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4 border-2 border-primary"
                    />
                  )}
                  <div>
                    <p className="font-semibold text-text-primary">{testimonial.name}</p>
                    <p className="text-sm text-primary">{testimonial.title} at {testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            </AppearOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;
