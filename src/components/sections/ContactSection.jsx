import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.message) {
      alert("Please fill all the fields to send a message.");
      return;
    }
    const text = `Hello Mathew Garments,\n\nI have an inquiry from the website:\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Message:* ${formData.message}`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/917824807789?text=${encodedText}`;
    window.open(whatsappUrl, "_blank");
    
    setFormData({ name: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-white text-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gray-500 font-sans font-semibold tracking-[0.2em] uppercase text-xs mb-4 block">
              Get In Touch
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8 uppercase tracking-wide leading-snug">
              We're Here <br />
              To Help
            </h2>
            <div className="w-20 h-1 bg-primary mb-8" />
            <p className="text-gray-600 font-sans text-base leading-relaxed mb-10">
              Have questions about our collections, need help finding a store,
              or want to give feedback? Reach out to us. We value every customer
              interaction and strive to respond as quickly as possible.
            </p>

            <div className="space-y-8">
              <div>
                <h4 className="font-sans font-semibold text-sm uppercase tracking-widest text-gray-500 mb-2">
                  Customer Service
                </h4>
                <p className="font-serif text-2xl font-bold">+91 78248 07789</p>
                <p className="text-sm text-gray-500 mt-1">
                  Mon-Sat, 10:00 AM - 9:00 PM
                </p>
              </div>
              <div>
                <h4 className="font-sans font-semibold text-sm uppercase tracking-widest text-gray-500 mb-2">
                  Email Inquiries
                </h4>
                <p className="font-serif text-2xl font-bold">
                  info@mathewgarments.com
                </p>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gray-50 p-8 md:p-12"
          >
            <h3 className="font-serif text-2xl font-bold mb-8 uppercase tracking-wide">
              Send a Message
            </h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  autoComplete="name"
                  className="w-full bg-transparent border-b border-gray-300 py-3 px-1 text-primary focus:outline-none focus:border-primary transition-colors font-sans"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  autoComplete="tel"
                  className="w-full bg-transparent border-b border-gray-300 py-3 px-1 text-primary focus:outline-none focus:border-primary transition-colors font-sans"
                  placeholder="+91"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-b border-gray-300 py-3 px-1 text-primary focus:outline-none focus:border-primary transition-colors font-sans resize-none"
                  placeholder="How can we help you?"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white py-4 font-bold uppercase tracking-widest text-sm hover:bg-gray-800 transition-colors mt-8 shadow-xl"
              >
                Submit Form
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
