import React from 'react';
import { motion } from 'framer-motion';

const titleWrapper = (Components, title) =>
  function HOC() {
    return (
      <motion.div
        // key={key + '-title'}
        className='mx-[1rem] flex  flex-1 flex-col py-[2rem] md:mx-[6rem] md:py-[6rem] lg:mx-[10rem]'
      >
        <motion.div
          initial={{ y: '20px', opacity: '0' }}
          animate={{ y: '0', opacity: '5' }}
          whileInView={{ y: '0', opacity: '1' }}
          transition={{ duration: 0.3 }}
          className='mb-8 text-center text-5xl font-bold md:mb-10'
        >
          {title}
        </motion.div>
        <Components />
      </motion.div>
    );
  };

export default titleWrapper;
