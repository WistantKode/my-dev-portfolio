import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Home, Briefcase, BookOpen, Mail, Code } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import {ThemeToggleButton} from "@/components/ThemeToggleButton.tsx";

// --- Data Configuration --- //
const navItems = [
  { href: "/", label: "Home", icon: Home, isCta: false },
  { href: "/projects", label: "Projects", icon: Code, isCta: false },
  { href: "/services", label: "Services", icon: Briefcase, isCta: false },
  { href: "/blog", label: "Blog", icon: BookOpen, isCta: false },
  { href: "/contact", label: "Contact", icon: Mail, isCta: true }, // Mark Contact as CTA
];

// --- Main Component --- //
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll to change header style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const isActive = (href: string) => location.pathname === href;

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow">
              <span className="text-primary-foreground font-bold text-lg">WK</span>
            </div>
            <span className="font-bold text-xl text-text-primary hidden sm:block">Wistant Kode</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              item.isCta ? (
                <Button key={item.href} asChild className="bg-gradient-primary hover:opacity-90 border-0 shadow-primary">
                  <Link to={item.href}>{item.label}</Link>
                </Button>
              ) : (
                <Button key={item.href} asChild variant="ghost" className={cn("text-text-secondary", isActive(item.href) && "bg-secondary text-text-primary")}>
                  <Link to={item.href}>{item.label}</Link>
                </Button>
              )
            ))}
            <ThemeToggleButton /> {/* Theme Toggle for Desktop */}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2"> {/* Added flex and gap for alignment */}
            <ThemeToggleButton /> {/* Theme Toggle for Mobile */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)} // Toggle isOpen
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation (Dropdown) */}
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-t border-border py-4 absolute top-20 left-0 right-0 shadow-lg">
          <nav className="flex flex-col items-center space-y-4">
            {navItems.map((item) => {
              const Icon = item.icon; 
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    "flex items-center gap-3 px-4 py-2 rounded-lg text-lg font-medium text-text-secondary hover:text-primary hover:bg-secondary/50 transition-colors",
                    isActive(item.href) && "text-primary bg-secondary/30"
                  )}
                  onClick={() => setIsOpen(false)} // Close menu on item click
                >
                  <Icon className="w-6 h-6" /> 
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navigation;
