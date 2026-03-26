import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { branches } from '../data/branches';
import BranchCard from '../components/BranchCard';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Branches = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-20 bg-primary min-h-[100dvh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12">
          <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-6 text-xs uppercase tracking-widest font-bold transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <span className="text-gray-400 font-sans font-semibold tracking-[0.2em] uppercase text-xs mb-3 block">Our Locations</span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wide text-white mb-6">
            All Branches
          </h1>
          <div className="w-20 h-1 bg-white mb-8" />
          <p className="text-gray-300 max-w-2xl text-lg font-light leading-relaxed">
            Discover our premium showrooms across Tamil Nadu. Find the branch nearest to you for an exclusive shopping experience in men's and boy's fashion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {branches.map((branch, index) => (
            <BranchCard key={branch.id} branch={branch} index={index} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default Branches;
