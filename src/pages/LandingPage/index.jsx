import React from 'react';
import Content from './Content';
import OshanImage from './OshanImage';
import { pageWrapper } from '../../wrapper';

const LandingPage = () => {
  return (
    <div className='flex w-full  flex-1 flex-col-reverse justify-center py-[2rem] md:flex-row'>
      <Content />
      <OshanImage />
    </div>
  );
};

export default pageWrapper(LandingPage);
