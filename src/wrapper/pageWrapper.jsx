import React from 'react';
import { NavBar, Footer } from '../components';
import { motion, AnimatePresence, useScroll } from 'framer-motion';

const pageWrapper = (Components, isFullHeight = true) =>
  function HOC() {
    const { scrollYProgress } = useScroll();
    return (
      <>
        <NavBar />
        {/* <AnimatePresence> */}
        <motion.div
          className='progress-bar fixed left-0 right-0 top-[4rem] z-50 h-1 origin-[0] bg-red-500'
          style={{ scaleX: scrollYProgress }}
        />
        <motion.div
          className={isFullHeight ? 'flex min-h-full bg-gray-200 pt-16' : 'flex bg-gray-200 pt-16'}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          exit={{ opacity: 0 }}
        >
          <Components />
        </motion.div>
        {/* </AnimatePresence> */}
        <Footer />
      </>
    );
  };

export default pageWrapper;
