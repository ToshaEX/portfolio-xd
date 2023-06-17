import React from 'react';
import { pageWrapper, titleWrapper } from '../../wrapper';
import ExperienceSection from './ExperienceSection';
import { experienceData } from './data.js';

const ExperiencePage = () => {
  return (
    <section className='rounded-md dark:bg-black dark:text-gray-100 md:py-[4rem]'>
      <div className='container  max-w-5xl justify-items-center px-4 py-12'>
        <div className='mx-4 grid gap-4 sm:grid-cols-12'>
          <div className='relative col-span-12 space-y-6 px-4 sm:col-span-9'>
            {experienceData.map((data, i) => (
              <div key={data.company + i}>
                <div className='-ml-4 mb-3 text-left text-xl font-semibold tracking-wide'>
                  {data.company}
                </div>
                <div className='relative col-span-12 space-y-12 px-4 before:absolute before:-left-3 before:bottom-0 before:top-2 before:w-0.5 before:dark:bg-gray-700 sm:col-span-8 sm:space-y-8'>
                  {data.experience.map((experience, i) => (
                    <ExperienceSection
                      description={experience.description}
                      duration={experience.duration}
                      position={experience.position}
                      key={experience.duration + i}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default pageWrapper(titleWrapper(ExperiencePage, 'Experience'), false);
