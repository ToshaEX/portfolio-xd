import React from 'react';

const titleWrapper = (Components, title) =>
  function HOC() {
    return (
      <div className='mx-[1rem] flex  flex-1 flex-col py-[2rem] md:mx-[6rem] md:py-[6rem] lg:mx-[10rem]'>
        <div className='mb-5 text-center text-5xl font-bold'>{title}</div>
        <Components />
      </div>
    );
  };

export default titleWrapper;
