import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from "../assets/logo.jpeg";

import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowRight
} from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Footer = () => {
  const { toast } = useToast();

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "🚧 Newsletter Signup",
      description: "New Letter Signup is subscribed"
    });
  };

  const handleSocialClick = () => {
    toast({
      title: "🚧 Social Media Links",
      description: "Links are not implemented yet"
    });
  };

  return (
    <footer className="bg-[#142849] text-white">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-[#E46A1E] to-[#ff7f3f] py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Stay Updated with Industry News
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Get the latest updates on construction materials, industry trends, and exclusive offers.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                  required
                />
                <button
                  type="submit"
                  className="bg-[#142849] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#1a3154] transition-colors flex items-center justify-center gap-2"
                >
                  Subscribe <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-16 h-15 rounded-lg flex items-center justify-center overflow-hidden">
                  <img
                    src={logo}
                    alt="Mahfut Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <span className="text-xl font-bold">MAHFUT</span>
                  <p className="text-sm text-gray-300">Construction Materials</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Leading supplier of premium construction materials and equipment, serving the industry with excellence for over two decades.
              </p>
              <div className="flex space-x-4">
                {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                  <button
                    key={index}
                    onClick={handleSocialClick}
                    className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-[#E46A1E] transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {['Home', 'About Us', 'Products & Services', 'Clients', 'Industries', 'Contact'].map((item) => (
                  <li key={item}>
                    <Link
                      to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(/\s+/g, '').replace('&', '')}`}
                      className="text-gray-300 hover:text-[#E46A1E] transition-colors flex items-center group"
                    >
                      <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-6">Our Services</h3>
              <ul className="space-y-3">
                {[
                  'Construction Materials',
                  'Equipment Rental',
                  'Project Consultation',
                  'Quality Assurance',
                  'Logistics Support',
                  'Technical Support'
                ].map((service) => (
                  <li key={service}>
                    <span className="text-gray-300 hover:text-[#E46A1E] transition-colors flex items-center group cursor-pointer">
                      <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-6">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-[#E46A1E] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300">
                    Makkah Al-Mukarama <br />
                    St Al Safat Dist. <br />
                    AL JUBAIL 35514 
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-[#E46A1E] flex-shrink-0" />
                  <p className="text-gray-300">+966 539510019</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-[#E46A1E] flex-shrink-0" />
                  <p className="text-gray-300">info@mahfut-sa.com</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 MAHFUT Construction Material Supplies. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-[#E46A1E] transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-[#E46A1E] transition-colors">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="text-gray-400 hover:text-[#E46A1E] transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;