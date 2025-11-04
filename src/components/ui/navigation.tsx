import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Home, User, Briefcase, Mail, BookOpen, Book, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/about", label: "About", icon: User },
    { href: "/projet", label: "Projects", icon: Book },
    { href: "/services", label: "Services", icon: Briefcase },
    { href: "/blog", label: "Blog", icon: BookOpen },
    { href: "/contact", label: "Contact", icon: Mail },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow">
              <span className="text-primary-foreground font-bold text-lg">
                  WK
              </span>
            </div>
            <span className="font-bold text-xl text-text-primary hidden sm:block">
              Wistant Kode
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "text-text-secondary hover:text-primary transition-smooth relative",
                  isActive(item.href) && "text-primary"
                )}
              >
                {item.label}
                {isActive(item.href) && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-primary" />
                )}
              </Link>
            ))}
            {/* <Link to="/admin">
              <Button variant="outline" size="sm" className="gap-2">
                <Settings className="w-4 h-4" />
                Admin
              </Button>
            </Link> */}
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2 animate-fade-in-up">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    "flex items-center space-x-3 px-4 py-2 rounded-lg text-text-secondary hover:text-primary hover:bg-secondary/50 transition-smooth",
                    isActive(item.href) && "text-primary bg-secondary/30"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
            {/* <Link
              to="/admin"
              className="flex items-center space-x-3 px-4 py-2 rounded-lg text-text-secondary hover:text-primary hover:bg-secondary/50 transition-smooth"
              onClick={() => setIsOpen(false)}
            >
              <Settings className="w-5 h-5" />
              <span>Admin</span>
            </Link> */}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;