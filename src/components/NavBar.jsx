import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AnimatePresence, motion } from 'framer-motion';
import { routes } from '../constants';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const navItems = [
  { title: 'Home', path: routes.LANDING_PAGE },
  { title: 'About Me', path: routes.ABOUT_PAGE },
  { title: 'Project', path: routes.PROJECTS_PAGE },
  { title: 'Experience', path: routes.EXPERIENCE_PAGE },
];

const variants = {
  open: { opacity: 1, x: '-100%' },
  closed: { opacity: 1, x: '0' },
};

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div className='fixed  z-50 flex h-16 w-full flex-auto items-center justify-center bg-black pe-16 ps-16 font-sans font-medium text-slate-50'>
        <div className='flex-auto font-sans text-3xl'>ToshaEX.Dev</div>

        {/* Desktop Device*/}
        <AnimatePresence>
          <div className='hidden md:flex'>
            {navItems.map((item, i) => (
              <Link
                className=' mr-5 text-lg transition duration-200 ease-in-out  hover:text-zinc-500'
                to={item.path}
                key={`nav-item-${i}`}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </AnimatePresence>

        {/* Mobile Device */}
        <div className='relative md:hidden' onClick={() => setMenuOpen(!menuOpen)}>
          <motion.div animate={menuOpen ? 'open' : 'closed'} variants={variants}>
            <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
          </motion.div>
        </div>
      </div>
      {/* Mobile Device */}
      {menuOpen && (
        <AnimatePresence>
          <motion.div
            className='fixed  top-16 z-20 flex w-full flex-col bg-black bg-opacity-90 text-white md:hidden'
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            animate={{ opacity: 1, transform: 1 }}
            key={menuOpen}
          >
            {navItems.map((item, i) => (
              <Link
                className='ml-2 mt-2 text-lg transition duration-300 ease-in-out hover:text-gray-300 '
                to={item.path}
                key={`nav-item-${i}`}
              >
                {item.title}
              </Link>
            ))}
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
};

export default NavBar;
