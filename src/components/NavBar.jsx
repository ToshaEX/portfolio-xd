import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AnimatePresence, motion } from 'framer-motion';

import Logo from '../assets/logo.svg';
import { routes } from '../constants';
import Intro from '../assets/noticeble.mp4'

const navItems = [
  { title: 'Home', path: routes.LANDING_PAGE },
  { title: 'Project', path: routes.PROJECTS_PAGE },
  { title: 'Learning', path: routes.LEARNING_PAGE },
  { title: 'Experience', path: routes.EXPERIENCE_PAGE },
  { title: 'About Me', path: routes.ABOUT_PAGE },
];

const variants = {
  open: { opacity: 1, x: '-100%' },
  closed: { opacity: 1, x: '0' },
};

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  // const [show, setShow] = useState(sessionStorage.getItem("overlayPlayed"));
  const hasAnimated = useMemo(() => false, []); // starts as false

  const [show, setShow] = useState(!hasAnimated);

  // Once animation completes, hide the component
  const handleComplete = () => {
    setShow(false);
  };

  return (
    <>
        <AnimatePresence >
        {/* {show && <motion.div
        initial={{opacity:1,display:'absolute'}}
        animate={{opacity:0}}
        transition={{duration:1,delay:'1'}}
        // exit={{opacity:0}}
        onAnimationComplete={() => setShow(false)}
        className='fixed overflow-hidden z-[60]  w-[100%] h-[100%]  bg-black overscroll-none'>
        </motion.div>} */}
        {show && <motion.video
        src={Intro}
        initial={{opacity:1,display:'absolute'}}
        animate={{opacity:0}}
        transition={{duration:.5,delay:'.2'}}
        // exit={{opacity:0}}
        onAnimationComplete={() => handleComplete()}
        className='fixed overflow-hidden z-[60]  w-[100%] h-[100%]  bg-black overscroll-none object-cover'>
        </motion.video>}
        </AnimatePresence>
      
      <motion.img src={Logo} alt='logo'  className='fixed opacity-0 origin-center z-[70]'
       initial={{
        display:'absolute',
        x:"50%",
        y:'50%',
        opacity:'0',
          translateX:'-50%',
          translateY:'-50%',
          // background:'red',
          scale:'200%',
          // transformOrigin:'center'
        // y: "50vh" 
        }}
        animate={{scale:1, top:'16px',left:'64px',display:'fixed',opacity:1}}
        transition={{duration:.5,delay:''}}
       />
      <div className='fixed   z-50 flex h-16 w-[100vw] flex-auto items-center justify-between bg-black pe-6 ps-6 font-sans font-medium text-slate-50 md:pe-16 md:ps-16'>
        <AnimatePresence>
        <motion.div 
        initial={{
          width:'150px',
          height:'100%',
          // display:'absolute',
          // background:'red',
          // x:'100%',
          // y:'50%',
          // scale:5,
          // transformOrigin:'center'
        // y: "50vh" 
        }}
        // animate={{scale:1}}
        // transition={{duration:1,delay:'2'}}
        //  className=' flex justify-center items-center w-[150px] h-[100%] origin-center'
         >

        </motion.div>
        </AnimatePresence>

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
            className='fixed top-16  z-20 flex w-full flex-col items-center justify-center bg-black bg-opacity-90 pb-5 text-white md:hidden'
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            animate={{ opacity: 1, transform: 1 }}
            key={menuOpen}
          >
            {navItems.map((item, i) => (
              <Link
                className='my-4 ml-2 text-xl font-semibold transition duration-300 ease-in-out hover:text-gray-300 '
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
