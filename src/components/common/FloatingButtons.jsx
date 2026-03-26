import React from "react";
import { Phone, MessageCircle } from "lucide-react";

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
      <a
        href="https://wa.me/917824807789"
        target="_blank"
        rel="noreferrer"
        className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-green-600 hover:scale-110 transition-all duration-300"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
      <a
        href="tel:+917824807789"
        className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-accent hover:scale-110 transition-all duration-300 border border-white/20"
        aria-label="Call Now"
      >
        <Phone className="w-6 h-6" />
      </a>
    </div>
  );
};

export default FloatingButtons;
