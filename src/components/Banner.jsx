import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { easeInOut, motion } from 'framer-motion';
import React from 'react';

const Banner = ({ label, message, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1, transition: easeInOut }}
      className='sticky top-[8rem] z-[15] m-3 -translate-y-12'
    >
      <div className='flex items-center justify-between gap-2 rounded-md bg-yellow-300 p-5 shadow-md'>
        <p className='font-bold text-yellow-900'>
          {label}&nbsp;
          <span className='font-medium'>{message}</span>
        </p>
        <FontAwesomeIcon icon={faXmark} size='xl' className='cursor-pointer' onClick={onClose} />
      </div>
    </motion.div>
  );
};

export default Banner;
