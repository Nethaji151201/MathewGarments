import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import CollectionsSection from '../components/sections/CollectionsSection';
import BranchesSection from '../components/sections/BranchesSection';
import ContactSection from '../components/sections/ContactSection';

const Home = () => {
  return (
    <div className="w-full bg-white">
      <HeroSection />
      <AboutSection />
      <CollectionsSection />
      <BranchesSection />
      <ContactSection />
    </div>
  );
};

export default Home;
