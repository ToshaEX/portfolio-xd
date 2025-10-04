import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Typewriter from 'typewriter-effect';

const Content = () => {
  return (
    <AnimatePresence>
      <motion.div
        className='m-[3rem] flex-grow-[1] self-center'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className='m-5 text-center md:text-left'>
          <div className='text-5xl text-black md:text-6xl'>
            Hi, there
            <br /> I&apos;m <span className='text-zinc-500'>Oshan Tharindu</span>.
            <br />
            Here is my key competencies{' '}
            <div className='text-zinc-500'>
              <Typewriter
                options={{
                  strings: [
                    'Fullstack development',
                    'React JS',
                    'Next JS',
                    'Nest JS',
                    'JavaScript',
                    'Typescript',
                    'MERN',
                    'Type ORM',
                    'MongoDB',
                    'Oracle DB',
                    'MySql',
                    'TypeORM',
                  ],
                  loop: true,

                  autoStart: true,
                }}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Content;
