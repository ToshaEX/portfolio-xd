import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { AnimatePresence, motion } from 'framer-motion';

const Carousel = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleForward = () => {
    if (images.length - 1 === currentImage) {
      setCurrentImage(0);
      clearTimeout();
      return;
    }
    setCurrentImage(currentImage + 1);
    clearTimeout();
  };

  const handleBackward = () => {
    if (currentImage === 0) {
      setCurrentImage(images.length - 1);
      return;
    }
    setCurrentImage(currentImage - 1);
  };

  useEffect(() => {
    setTimeout(() => handleForward(), 5000);
  }, []);
  return (
    <>
      <div className='relative h-[15rem]  sm:h-[30rem]'>
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: 1 }}
            exit={{ opacity: 0 }}
            key={currentImage}
          >
            <img
              src={images[currentImage]}
              alt={'project'}
              className='absolute z-10 h-full w-full object-contain'
              loading='lazy'
            />
          </motion.div>
        </AnimatePresence>
        {images.length === 1 ? (
          <></>
        ) : (
          <>
            <div className='absolute top-[50%] z-20 ml-2 cursor-pointer' onClick={handleBackward}>
              <FontAwesomeIcon icon={faArrowLeft} color='#000' />
            </div>
            <div
              className='absolute right-0 top-[50%] z-20 mr-2 cursor-pointer'
              onClick={handleForward}
            >
              <FontAwesomeIcon icon={faArrowRight} color='#000' />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Carousel;
