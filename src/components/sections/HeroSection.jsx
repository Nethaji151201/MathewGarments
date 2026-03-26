import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[100dvh] flex items-center justify-center overflow-hidden bg-primary">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/mathewgarment.png")',
          backgroundPosition: "center 20%",
        }}
      >
        <div className="absolute inset-0 bg-primary/60" />{" "}
        {/* Dark overlay for text readability */}
      </div>

      <div className="relative z-10 text-center px-4 w-full max-w-5xl mx-auto flex flex-col items-center mt-12 md:mt-0">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-gray-300 font-sans tracking-[0.2em] uppercase text-xs md:text-sm mb-4 block"
        >
          Premium Menswear
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-white font-serif text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-wider mb-6 leading-tight"
        >
          Mathew <br className="md:hidden" />
          Garments
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-gray-200 font-sans text-base md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light"
        >
          Elevating men's & boy's fashion across Tamil Nadu. Experience shopping
          like never before.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4 sm:px-0"
        >
          <a
            href="#collections"
            className="w-full md:w-auto px-8 md:px-12 py-4 bg-white text-primary font-bold uppercase tracking-widest text-sm hover:bg-gray-200 transition-colors shadow-xl"
          >
            Shop Now
          </a>
          <a
            href="tel:+917824807789"
            className="w-full md:w-auto px-8 md:px-12 py-4 bg-transparent border border-white text-white font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-primary transition-colors shadow-xl"
          >
            Call Now
          </a>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 hidden md:flex flex-col items-center"
      >
        <span className="text-white text-xs tracking-widest uppercase mb-2">
          Discover
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-px h-12 bg-white"
        />
      </motion.div> */}
    </section>
  );
};

export default HeroSection;
