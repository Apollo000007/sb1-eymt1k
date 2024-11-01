import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const navLinks = [
    { name: 'TOP', href: 'top', path: '/' },
    { name: 'ABOUT', href: 'about', path: '/about' },
    { name: 'CREATORS', href: 'creators', path: '/creators' },
    { name: 'NEWS', href: 'news', path: '/news' },
    { name: 'AUDITION', href: 'audition', path: '/audition' }
  ];

  const handleNavigation = (href: string, path: string) => {
    if (path !== '/') {
      navigate(path);
    } else if (isHomePage) {
      const element = document.getElementById(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/', { state: { scrollTo: href } });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        isMenuOpen 
          ? 'bg-gradient-to-r from-gray-900 to-black' 
          : 'bg-gradient-to-r from-gray-900/90 to-black/90 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/" className="flex items-center gap-2">
              <Logo />
              <motion.span
                className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                Anniversary
              </motion.span>
            </Link>
          </motion.div>

          <div className="hidden md:flex space-x-1">
            {navLinks.map((link) => (
              <motion.div
                key={link.name}
                onHoverStart={() => setHoveredLink(link.name)}
                onHoverEnd={() => setHoveredLink(null)}
                className="relative"
              >
                <motion.button
                  onClick={() => handleNavigation(link.href, link.path)}
                  className="relative px-4 py-2 text-gray-300 transition-colors duration-200 cursor-pointer rounded-lg overflow-hidden group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.span
                    className="relative z-10"
                    animate={{
                      color: hoveredLink === link.name ? "#ffffff" : "#d1d5db"
                    }}
                  >
                    {link.name}
                  </motion.span>
                  
                  <AnimatePresence>
                    {hoveredLink === link.name && (
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-600/20 rounded-lg -z-0"
                        style={{ originX: 0.5, originY: 0.5 }}
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </AnimatePresence>

                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ 
                      scaleX: hoveredLink === link.name ? 1 : 0,
                      background: [
                        "linear-gradient(90deg, #ec4899, #8b5cf6)",
                        "linear-gradient(90deg, #8b5cf6, #ec4899)",
                        "linear-gradient(90deg, #ec4899, #8b5cf6)"
                      ]
                    }}
                    transition={{
                      duration: 0.2,
                      background: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear"
                      }
                    }}
                    className="absolute bottom-0 left-0 right-0 h-0.5"
                    style={{ originX: 0 }}
                  />
                </motion.button>
              </motion.div>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden relative p-2 rounded-lg overflow-hidden group"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            <motion.div className="relative z-10 text-gray-300 group-hover:text-white transition-colors duration-300">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-gray-800"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <motion.button
                  key={link.name}
                  onClick={() => handleNavigation(link.href, link.path)}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-md transition-all duration-300"
                  whileHover={{ x: 10, backgroundColor: "rgba(255,255,255,0.1)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;