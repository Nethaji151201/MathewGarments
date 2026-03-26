import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight, Store, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const BranchCard = ({ branch, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-[#111111] border border-gray-800 flex flex-col group min-w-[280px] md:min-w-0 snap-center rounded-xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
    >
      <div className="relative h-48 w-full overflow-hidden bg-gray-900 border-b border-gray-800">
        <img 
          src={branch.image} 
          alt={branch.name} 
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
          loading="lazy"
        />
        <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white shadow-lg">
          <Store className="w-3 h-3 text-gray-300" /> Showroom
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow text-left">
        <h3 className="font-serif text-2xl font-bold uppercase tracking-wide mb-3 text-white group-hover:text-gray-200 transition-colors">
          {branch.name}
        </h3>
        <div className="flex flex-col gap-3 text-gray-400 text-sm mb-8 flex-grow">
          <div className="flex items-start gap-4">
            <MapPin className="w-5 h-5 shrink-0 mt-0.5 text-gray-500" />
            <p className="leading-relaxed">{branch.shortAddress || branch.address}</p>
          </div>
          {branch.phone && (
            <div className="flex items-start gap-4">
              <Phone className="w-5 h-5 shrink-0 mt-0.5 text-gray-500" />
              <p className="leading-relaxed">{branch.phone}</p>
            </div>
          )}
        </div>
        
        <Link 
          to={`/branches/${branch.id}`} 
          className="flex items-center justify-center gap-3 w-full bg-white text-primary py-3 px-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors"
        >
          <span>View Details</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </motion.div>
  );
};

export default BranchCard;
