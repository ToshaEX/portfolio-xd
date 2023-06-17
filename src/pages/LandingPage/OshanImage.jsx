import React from 'react';
import Oshan from '../../assets/OSHAN1.jpg';
import './styles.css';

const OshanImage = () => {
  return (
    <div className='m-[2rem] flex  items-center justify-center pt-10 md:m-[3rem] md:w-[30rem]'>
      <div className='shape image-background flex h-[300px] w-[300px] items-center justify-center border-[1px] border-solid border-gray-500 bg-gray-200 md:h-[350px] md:w-[350px]'>
        <img
          src={Oshan}
          alt='Oshan Tharindu'
          className='shape top-10 h-[250px] w-[250px] border-[1px] border-solid border-gray-500 md:h-[300px] md:w-[300px]'
        />
      </div>
    </div>
  );
};

export default OshanImage;
