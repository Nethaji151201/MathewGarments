import React from 'react';
import { motion } from 'framer-motion';

const collections = [
  {
    id: 1,
    title: "Men's Premium",
    image: "/images/men.png",
    description: "Tailored suits, crisp shirts, and exquisite ethnic wear.",
    link: "#"
  },
  {
    id: 2,
    title: "Boys' Essentials",
    image: "/images/boys.png",
    description: "Comfortable, stylish, and durable clothing for every occasion.",
    link: "#"
  },
  {
    id: 3,
    title: "Casual Cool",
    image: "/images/casual.png",
    description: "Everyday wear that doesn't compromise on luxury and feel.",
    link: "#"
  }
];

const CollectionsSection = () => {
  return (
    <section id="collections" className="py-20 md:py-32 bg-gray-50 text-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center md:text-left mb-16 flex flex-col md:flex-row justify-between items-end gap-6 border-b border-gray-200 pb-8">
          <div>
            <span className="text-gray-500 font-sans font-semibold tracking-[0.2em] uppercase text-xs mb-4 block">Curated Just For You</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold uppercase tracking-wide">
              Our Collections
            </h2>
          </div>
          <a href="#" className="hidden md:inline-flex text-sm font-bold uppercase tracking-widest hover:text-gray-500 transition-colors border-b-2 border-primary pb-1">
            View All Collections
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {collections.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group cursor-pointer flex flex-col"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-gray-200 mb-6 w-full">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="object-cover w-full h-full object-center group-hover:scale-105 transition-transform duration-700" 
                  loading="lazy"
                />
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                   <div className="bg-white/90 backdrop-blur-sm text-primary px-6 py-3 font-bold uppercase tracking-widest text-xs translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                     Explore
                   </div>
                </div>
              </div>
              
              <h3 className="font-serif text-2xl font-bold uppercase tracking-wide mb-2">
                {item.title}
              </h3>
              <p className="text-gray-500 font-sans text-sm leading-relaxed mb-4 flex-grow">
                {item.description}
              </p>
              
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <a href="#" className="inline-block text-sm font-bold uppercase tracking-widest hover:text-gray-500 transition-colors border-b-2 border-primary pb-1">
            View All Collections
          </a>
        </div>

      </div>
    </section>
  );
};

export default CollectionsSection;
