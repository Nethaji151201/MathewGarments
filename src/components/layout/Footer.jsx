import React from "react";
import { MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-8 border-t border-gray-900 border-opacity-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="md:col-span-2">
            <h3 className="font-serif text-3xl font-bold mb-4 uppercase tracking-widest">
              Mathew Garments
            </h3>
            <p className="text-gray-400 mb-6 font-sans max-w-md text-sm leading-relaxed">
              Premium men's and boy's clothing showroom with 15+ branches across
              Tamil Nadu. Experience shopping like never before, with top-tier
              collections and exceptional customer service.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/mathewgarmentsmadurai/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white hover:bg-white hover:text-primary transition"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-sans font-semibold text-sm mb-6 uppercase tracking-widest text-gray-500">
              Quick Links
            </h4>
            <ul className="space-y-4 text-gray-300 text-sm">
              <li>
                <a
                  href="/#collections"
                  className="hover:text-white transition uppercase tracking-wider"
                >
                  Collections
                </a>
              </li>
              <li>
                <a
                  href="/#branches"
                  className="hover:text-white transition uppercase tracking-wider"
                >
                  Our Branches
                </a>
              </li>
              <li>
                <a
                  href="/#about"
                  className="hover:text-white transition uppercase tracking-wider"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/#contact"
                  className="hover:text-white transition uppercase tracking-wider"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-sans font-semibold text-sm mb-6 uppercase tracking-widest text-gray-500">
              Contact Us
            </h4>
            <ul className="space-y-5 text-gray-300 text-sm leading-relaxed">
              <li className="flex items-start gap-4 hover:text-white transition">
                <Phone className="w-5 h-5 shrink-0" />
                <a href="tel:+917824807789">+91 78248 07789</a>
              </li>
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 shrink-0" />
                <span>
                  Head Office
                  <br />
                  Tamil Nadu, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between text-gray-600 text-xs tracking-widest uppercase">
          <p>
            &copy; {new Date().getFullYear()} Mathew Garments. All rights
            reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-300 transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-300 transition">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
