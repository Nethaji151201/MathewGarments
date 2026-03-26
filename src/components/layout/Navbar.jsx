import React, { useState, useEffect } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update scrolled state based on pathname if not on home
  const isHomePage = location.pathname === "/";
  const isDarkNav = scrolled || !isHomePage;

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Collections", path: "/#collections" },
    { name: "Branches", path: "/#branches" },
    { name: "About", path: "/#about" },
    { name: "Contact", path: "/#contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-[100] transition-all duration-300 ${isDarkNav ? "bg-primary text-white shadow-lg py-3" : "bg-transparent text-white py-5"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 z-[110]">
            {/* <ShoppingBag className={`w-8 h-8 ${isOpen && !isDarkNav ? 'text-white' : ''}`} /> */}
            <img
              src="/mathewgarment.png"
              className="w-8 h-8"
              alt="mathew garments"
            />
            <span
              className={`font-serif text-2xl font-bold tracking-wider uppercase ${isOpen && !isDarkNav ? "text-white" : ""}`}
            >
              Mathew Garments
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center bg-black/20 px-6 py-2 rounded-full backdrop-blur-sm border border-white/10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className="font-medium hover:text-gray-300 transition-colors uppercase text-xs tracking-widest"
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:+917824807789"
              className="bg-white text-primary px-5 py-2 hover:bg-gray-200 transition uppercase text-xs font-bold tracking-wider rounded-full ml-4 shadow-md"
            >
              Call Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center z-[110]">
            <button
              onClick={toggleMenu}
              aria-label="Toggle Menu"
              className="focus:outline-none p-2 bg-black/30 rounded-full backdrop-blur-sm hover:bg-black/50 transition"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 bg-primary/95 backdrop-blur-md text-white flex flex-col items-center justify-center space-y-8 z-[105] h-[100dvh]"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className="text-2xl font-serif uppercase tracking-widest hover:text-gray-400 transition-colors"
                onClick={toggleMenu}
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:+917824807789"
              className="mt-8 border border-white px-8 py-3 text-sm font-sans uppercase hover:bg-white hover:text-primary transition-colors tracking-widest rounded-full"
            >
              Call Us
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
