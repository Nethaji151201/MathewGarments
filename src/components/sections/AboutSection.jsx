import React from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-20 md:py-32 bg-white text-primary overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <span className="text-gray-500 font-sans font-semibold tracking-[0.2em] uppercase text-xs mb-4 block">
              Our Legacy
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8 uppercase tracking-wide leading-snug">
              Redefining <br />
              Men's Fashion
            </h2>
            <div className="w-20 h-1 bg-primary mb-8" />
            <p className="text-gray-600 font-sans text-base md:text-lg mb-6 leading-relaxed">
              Mathew Garments has established itself as the premier destination
              for men's and boy's clothing across Tamil Nadu. With over 15+
              strategically located branches, we bring the latest trends and
              timeless classics closer to you.
            </p>
            <p className="text-gray-600 font-sans text-base md:text-lg mb-10 leading-relaxed">
              Our showrooms are designed with a minimalist, high-end aesthetic,
              ensuring that your shopping experience is as premium as the
              apparel we offer. Whether in-store or online, quality and customer
              satisfaction are the cornerstones of our brand.
            </p>

            <div className="grid grid-cols-2 gap-8 pt-6 border-t border-gray-100">
              <div>
                <h4 className="font-serif text-3xl font-bold mb-2">15+</h4>
                <p className="text-gray-500 uppercase tracking-widest text-xs font-semibold">
                  Branches
                </p>
              </div>
              <div>
                <h4 className="font-serif text-3xl font-bold mb-2">1M+</h4>
                <p className="text-gray-500 uppercase tracking-widest text-xs font-semibold">
                  Happy Customers
                </p>
              </div>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="aspect-[4/5] md:aspect-square lg:aspect-[3/4] overflow-hidden bg-gray-100 relative shadow-2xl">
              <img
                src="/images/about.png"
                alt="Mathew Garments Premium Showroom Interior"
                className="object-cover w-full h-full object-center group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 border-[16px] md:border-[24px] border-white/10" />
            </div>

            {/* Abstract design element overlay */}
            <div className="absolute -bottom-6 -left-6 md:-bottom-10 md:-left-10 w-32 h-32 md:w-48 md:h-48 bg-primary z-[-1]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
