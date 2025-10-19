import React from 'react';

import { pageWrapper } from '../../wrapper';
import Content from './Content';
import OshanImage from './OshanImage';

const LandingPage = () => {
  return (
    <div className='flex w-full flex-1 flex-col-reverse justify-center py-[2rem] md:flex-row md:py-[3.35rem]'>
      <Content />
      <OshanImage />
    </div>
  );
};

export default pageWrapper(LandingPage, 'landing');
