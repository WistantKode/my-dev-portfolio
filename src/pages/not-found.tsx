import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/layout/layout";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.warn(
      "404 Warning: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout
      title="404 - Page Not Found | Wistant Kode"
      description="The requested page could not be found. Please check the URL or return to the homepage."
      keywords="404, page not found, error, Wistant Kode, portfolio, software engineer, DevSecOps"
      lang="en"
    >
      <section className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 blur-3xl rounded-full animate-pulse-glow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary-glow/5 blur-3xl rounded-full animate-float delay-1000"></div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center z-10 p-8 bg-gradient-card border border-border-light rounded-xl shadow-card max-w-lg mx-auto"
        >
          <motion.h1 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5, type: "spring", stiffness: 100 }}
            className="text-8xl md:text-9xl font-extrabold text-primary mb-4"
          >
            404
          </motion.h1>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Resource Not Found
          </h2>
          <p className="text-lg text-text-secondary mb-8">
            The requested URL does not exist or has been moved. Please verify the address or navigate back to a valid section of the portfolio.
          </p>
          <Link to="/">
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 border-0 shadow-primary hover:shadow-glow transition-smooth group">
              Return to Homepage
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </section>
    </Layout>
  );
};

export default NotFound;
