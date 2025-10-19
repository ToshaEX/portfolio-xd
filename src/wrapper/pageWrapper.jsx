import React, { useRef } from 'react';
import { AnimatePresence, motion, useScroll } from 'framer-motion';
import ReactLenis from 'lenis/react';

import { Footer, NavBar } from '../components';

const pageWrapper = (Components, key, isFullHeight = true) =>
  function HOC() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
      target: ref,
    });
    return (
      <>
        <NavBar />
        <motion.div
          className='progress-bar fixed left-0 right-0 top-[4rem] z-50 h-1 origin-[0] bg-red-500'
          style={{ scaleX: scrollYProgress }}
        />
        <ReactLenis root>
          <AnimatePresence key={key} mode='wait'>
            <motion.div
              ref={ref}
              className={
                isFullHeight ? 'flex min-h-full bg-gray-200 pt-16' : 'flex bg-gray-200 pt-16'
              }
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              exit={{ opacity: 0 }}
            >
              <Components />
            </motion.div>
          </AnimatePresence>
        </ReactLenis>
        <Footer />
      </>
    );
  };

export default pageWrapper;
