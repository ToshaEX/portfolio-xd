import React, { useEffect, useRef } from 'react';
import { motion, useMotionTemplate, useScroll, useTransform } from 'framer-motion';

import IntroVideo from '../../assets/noticeble.mp4';
import { pageWrapper } from '../../wrapper';

const LearningPage = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0%', '80%'],
    // layoutEffect:false
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 400]);
  const scaleX = useTransform(scrollYProgress, [0.15, 1], [1, 600]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const css = useMotionTemplate`calc(${y}vh)`;

  useEffect(() => {
    const unsubscribe = y.on('change', (latest) => {
      console.log('Parallax Y:', latest);
      console.log('offset Y:', y.get());
    });
    return () => unsubscribe();
  }, [y]);

  return (
    <motion.div ref={ref} className='h-[500vh] overflow-hidden'>
      {/* <div style={{height:"4rem"}} /> */}
      <motion.div className='relative h-[calc(100vh+4rem)] w-[100vw]'>
        <motion.video
          src={IntroVideo}
          autoPlay
          loop
          muted
          className='h-full w-full object-cover mt-[-4rem]'
          style={{
            opacity,
            y: css,
          }}
        ></motion.video>
        <motion.h1
          className='absolute text-center  inset-0 grid place-items-center bg-black text-white font-[900] text-[80px] mix-blend-multiply select-none w-[100vw] h-full md:text-[120px] lg:text-[200px]'
          style={{
            y: css,
            scale: scaleX,
          }}
        >
          ToshaEX
        </motion.h1>
      </motion.div>
    </motion.div>
  );
};

export default pageWrapper(LearningPage, 'learnings', true);
