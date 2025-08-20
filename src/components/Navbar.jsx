import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from "../assets/logo.jpeg";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavHidden, setIsNavHidden] = useState(false);
  const lastScrollY = useRef(0);
  const [openDesktopDropdown, setOpenDesktopDropdown] = useState(null);
  const [openMobileSubmenus, setOpenMobileSubmenus] = useState({});
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setIsScrolled(currentY > 50);

      const delta = currentY - lastScrollY.current;
      const scrolledDown = delta > 4;
      const scrolledUp = delta < -4;

      if (currentY <= 0) {
        setIsNavHidden(false);
      } else if (!isOpen && scrolledDown) {
        setIsNavHidden(true);
      } else if (scrolledUp) {
        setIsNavHidden(false);
      }

      lastScrollY.current = currentY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) setIsNavHidden(false);
  }, [isOpen]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    {
      name: 'Products & Services',
      path: '/products',
      dropdown: [
        { name: 'Construction Materials', path: '/products#materials' },
        { name: 'Equipment Rental', path: '/products#equipment' },
        { name: 'Consultation Services', path: '/products#consultation' }
      ]
    },
    { name: 'Clients', path: '/clients' },
    { name: 'Industries', path: '/industries' },
    { name: 'Contact', path: '/contact' }
  ];

  const toggleMobileSubmenu = (name) => {
    setOpenMobileSubmenus((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <nav className={`sticky-nav transform-gpu ${isScrolled ? 'nav-shadow' : ''} ${isNavHidden ? '-translate-y-full' : 'translate-y-0'}`}>
      <div className="container mx-auto px-4">
        <div className={`flex justify-between items-center ${isScrolled ? 'h-16' : 'h-20'}`}>
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
          <div className="w-16 h-15 rounded-lg flex items-center justify-center overflow-hidden">
          <img
                src={logo}
                alt="Mahfut Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-[#142849]">MAHFUT</h1>
              <p className="text-sm text-gray-600">Construction Materials</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-5">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.dropdown && setOpenDesktopDropdown(item.name)}
                onMouseLeave={() => item.dropdown && setOpenDesktopDropdown(null)}
              >
                <Link
                  to={item.path}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-300 font-medium text-sm whitespace-nowrap ${location.pathname === item.path
                    ? 'text-[#E46A1E] bg-orange-50'
                    : 'text-[#142849] hover:text-[#E46A1E] hover:bg-gray-50'
                    }`}
                >
                  <span>{item.name}</span>
                  {item.dropdown && (
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${openDesktopDropdown === item.name ? 'rotate-180' : ''
                        }`}
                    />
                  )}
                </Link>

                {item.dropdown && (
                  <AnimatePresence>
                    {openDesktopDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute left-0 top-full mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden"
                      >
                        <div className="py-2">
                          {item.dropdown.map((sub) => (
                            <Link
                              key={sub.name}
                              to={sub.path}
                              className="block px-4 py-2 text-sm text-[#142849] hover:bg-gray-50 hover:text-[#E46A1E]"
                              onClick={() => setOpenDesktopDropdown(null)}
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="btn-primary inline-block"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-[#142849] hover:bg-gray-100"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-gray-200"
            >
              <div className="py-4 space-y-2">
                {navItems.map((item) => (
                  <div key={item.name} className="px-2">
                    {!item.dropdown ? (
                      <Link
                        to={item.path}
                        className={`block px-2 py-3 rounded-lg transition-colors ${location.pathname === item.path
                          ? 'text-[#E46A1E] bg-orange-50'
                          : 'text-[#142849] hover:bg-gray-50'
                          }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <div>
                        <button
                          className={`w-full flex items-center justify-between px-2 py-3 rounded-lg ${location.pathname === item.path
                            ? 'text-[#E46A1E] bg-orange-50'
                            : 'text-[#142849] hover:bg-gray-50'
                            }`}
                          onClick={() => toggleMobileSubmenu(item.name)}
                          aria-expanded={!!openMobileSubmenus[item.name]}
                          aria-controls={`submenu-${item.name}`}
                        >
                          <span>{item.name}</span>
                          <ChevronDown
                            className={`w-5 h-5 transition-transform ${openMobileSubmenus[item.name] ? 'rotate-180' : ''
                              }`}
                          />
                        </button>
                        <AnimatePresence>
                          {openMobileSubmenus[item.name] && (
                            <motion.div
                              id={`submenu-${item.name}`}
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="py-1">
                                <Link
                                  to={item.path}
                                  className="block px-6 py-2 text-sm rounded-md text-[#142849] hover:bg-gray-50"
                                  onClick={() => {
                                    setIsOpen(false);
                                    setOpenMobileSubmenus({});
                                  }}
                                >
                                  View all
                                </Link>
                                {item.dropdown.map((sub) => (
                                  <Link
                                    key={sub.name}
                                    to={sub.path}
                                    className="block px-6 py-2 text-sm rounded-md text-[#142849] hover:bg-gray-50"
                                    onClick={() => {
                                      setIsOpen(false);
                                      setOpenMobileSubmenus({});
                                    }}
                                  >
                                    {sub.name}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )}
                  </div>
                ))}
                <div className="px-4 pt-4">
                  <Link
                    to="/contact"
                    className="btn-primary block text-center"
                    onClick={() => setIsOpen(false)}
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;