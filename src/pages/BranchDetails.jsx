import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Phone, Clock, Navigation, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { branches } from '../data/branches';

const BranchDetails = () => {
  const { id } = useParams();
  const branch = branches.find(b => b.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!branch) {
    return (
      <div className="h-[100dvh] flex flex-col items-center justify-center bg-white text-primary pt-20">
        <h1 className="text-4xl font-serif mb-4 uppercase tracking-widest text-center px-4">Branch Not Found</h1>
        <p className="mb-8 text-gray-500 font-sans text-center px-4">The showroom you are looking for does not exist or has moved.</p>
        <Link to="/branches" className="bg-primary text-white px-8 py-4 rounded-full uppercase tracking-widest text-xs font-bold hover:bg-black transition-colors">Explore All Branches</Link>
      </div>
    );
  }

  return (
    <div className="pt-[88px] bg-white min-h-[100dvh] text-primary flex flex-col pb-20">
      
      {/* Breadcrumb & Navigation */}
      <div className="bg-primary text-white py-4 border-b border-gray-800 shadow-md relative z-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 sm:gap-3 text-[10px] sm:text-xs uppercase tracking-widest font-bold text-gray-400 overflow-x-auto whitespace-nowrap hide-scrollbar">
          <Link to="/" className="hover:text-white transition-colors shrink-0">Home</Link>
          <span className="text-gray-600 shrink-0">/</span>
          <Link to="/branches" className="hover:text-white transition-colors shrink-0">Branches</Link>
          <span className="text-gray-600 shrink-0">/</span>
          <span className="text-white shrink-0">{branch.name}</span>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative h-[35vh] md:h-[45vh] w-full shrink-0">
        <img src={branch.image} alt={branch.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary/80 backdrop-blur-[2px]" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-white font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wide leading-tight mt-6 text-shadow-lg"
          >
            {branch.name}
          </motion.h1>
           <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 flex items-center gap-2 text-gray-300 text-sm uppercase tracking-widest"
          >
            <MapPin className="w-4 h-4" /> <span>{branch.shortAddress}</span>
          </motion.div>
        </div>
      </div>

      {/* Content Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 md:-mt-16 relative z-10 w-full flex-grow">
        
        <div className="bg-white shadow-2xl p-6 sm:p-10 md:p-12 border border-gray-100 rounded-2xl flex flex-col">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Store Details */}
            <div className="flex flex-col">
              <span className="text-gray-400 font-sans font-semibold tracking-[0.2em] uppercase text-xs mb-4 block">Store Information</span>
              <p className="text-gray-600 mb-10 text-base leading-relaxed font-sans">{branch.description}</p>
              
              <ul className="space-y-8 flex-grow">
                <li className="flex items-start gap-5 group cursor-pointer hover:bg-gray-50 p-2 -ml-2 rounded-xl transition-colors">
                  <div className="p-3.5 bg-gray-100 group-hover:bg-white group-hover:shadow-md rounded-full shrink-0 transition-all">
                    <MapPin className="w-5 h-5 text-gray-700" />
                  </div>
                  <div className="pt-1">
                    <h4 className="font-bold uppercase tracking-widest text-xs mb-2 text-gray-500">Full Address</h4>
                    <p className="text-gray-800 font-sans leading-relaxed">{branch.address}</p>
                  </div>
                </li>
                <li className="flex items-start gap-5 group cursor-pointer hover:bg-gray-50 p-2 -ml-2 rounded-xl transition-colors">
                  <div className="p-3.5 bg-gray-100 group-hover:bg-white group-hover:shadow-md rounded-full shrink-0 transition-all">
                    <Clock className="w-5 h-5 text-gray-700" />
                  </div>
                  <div className="pt-1">
                    <h4 className="font-bold uppercase tracking-widest text-xs mb-2 text-gray-500">Store Timings</h4>
                    <p className="text-gray-800 font-sans leading-relaxed">{branch.timings}</p>
                  </div>
                </li>
                <li className="flex items-start gap-5 group cursor-pointer hover:bg-gray-50 p-2 -ml-2 rounded-xl transition-colors">
                  <div className="p-3.5 bg-gray-100 group-hover:bg-white group-hover:shadow-md rounded-full shrink-0 transition-all">
                    <Phone className="w-5 h-5 text-gray-700" />
                  </div>
                  <div className="pt-1">
                    <h4 className="font-bold uppercase tracking-widest text-xs mb-2 text-gray-500">Contact Us</h4>
                    <a href={`tel:${branch.phone.replace(/[^0-9+]/g, '')}`} className="text-primary font-serif text-2xl md:text-3xl font-semibold hover:text-gray-600 transition-colors block">{branch.phone}</a>
                  </div>
                </li>
              </ul>
              
              <div className="mt-12 flex flex-col sm:flex-row gap-4">
                <a 
                  href={branch.mapLink} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-3 bg-primary text-white py-4 px-6 font-bold uppercase tracking-widest text-xs hover:bg-gray-800 transition-all shadow-xl hover:shadow-2xl rounded-xl sm:rounded-full"
                >
                  <Navigation className="w-4 h-4" /> Open Maps
                </a>
                <a 
                  href={`https://wa.me/${branch.whatsapp}`} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-3 bg-[#25D366] text-white py-4 px-6 font-bold uppercase tracking-widest text-xs hover:bg-[#1ebe57] transition-all shadow-xl hover:shadow-2xl rounded-xl sm:rounded-full"
                >
                  <MessageCircle className="w-4 h-4" /> WhatsApp Us
                </a>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="h-[400px] lg:h-auto bg-gray-100 relative overflow-hidden rounded-2xl shadow-inner border border-gray-200 w-full group">
              <iframe 
                title={`${branch.name} Map`}
                src={branch.mapEmbedUrl}
                className="absolute inset-0 w-full h-full border-0 transition-transform duration-700 group-hover:scale-105"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              {/* Overlay to disable scroll zooming normally until clicked */}
              <div className="absolute inset-0 pointer-events-none border border-black/5" />
            </div>

          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .text-shadow-lg {
          text-shadow: 0 4px 12px rgba(0,0,0,0.5);
        }
      `}} />
    </div>
  );
};

export default BranchDetails;
