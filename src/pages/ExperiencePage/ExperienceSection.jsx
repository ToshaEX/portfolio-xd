import React from 'react';

const ExperienceSection = ({ position, duration, description }) => {
  return (
    <div className=' relative   flex flex-col before:absolute before:left-[-35px] before:top-2 before:z-[1] before:h-4 before:w-4 before:rounded-full before:bg-violet-400'>
      <h3 className='text-xl font-semibold tracking-wide'>{position}</h3>
      <time className='text-xs uppercase tracking-wide dark:text-gray-400'>{duration}</time>
      <p className='mt-3'>{description}</p>
    </div>
  );
};

export default ExperienceSection;
