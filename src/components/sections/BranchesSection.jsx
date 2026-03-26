import React from "react";
import { motion } from "framer-motion";
import { branches } from "../../data/branches";
import BranchCard from "../BranchCard";
import { Link } from "react-router-dom";

const BranchesSection = () => {
  return (
    <section
      id="branches"
      className="py-20 md:py-32 bg-primary text-white overflow-hidden border-t border-gray-900 border-opacity-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 relative">
          <span className="text-gray-400 font-sans font-semibold tracking-[0.2em] uppercase text-xs mb-4 block">
            Store Locator
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold uppercase tracking-wide mb-6">
            Find A Branch
          </h2>
          <p className="text-gray-400 font-sans text-sm md:text-base leading-relaxed mb-8">
            With over 15+ showrooms located across Tamil Nadu, Mathew Garments
            is never too far away. Visit your nearest store to experience true
            premium retail.
          </p>
          <Link
            to="/branches"
            className="inline-block border border-white px-8 py-3 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-primary transition-colors rounded-full shadow-lg hover:shadow-2xl"
          >
            View All Showrooms
          </Link>
        </div>

        {/* Scrollable Container for Mobile, Grid for Desktop */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 md:grid md:grid-cols-3 md:gap-8 md:overflow-visible hide-scrollbar -mx-4 px-4 md:mx-0 md:px-0">
          {branches.slice(0, 3).map((branch, index) => (
            <BranchCard key={branch.id} branch={branch} index={index} />
          ))}
        </div>

        <div className="mt-4 text-center md:hidden">
          <p className="text-gray-500 text-sm italic mb-4">
            Swipe to see more branches
          </p>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `,
        }}
      />
    </section>
  );
};

export default BranchesSection;
