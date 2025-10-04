import React from 'react';
import { pageWrapper, titleWrapper } from '../../wrapper';

const about = [
  'Hello there! 👋',

  'I’m Oshan Tharindu, a passionate Fullstack Developer from Sri Lanka. As a software engineer, I value critical thinking, problem-solving, and a strong attention to detail — qualities that help me design reliable, efficient, and user-centered solutions. I hold a BSc (Hons) in Software Engineering from the Sri Lanka Technological Campus, where I graduated with a Second Class (Lower Division).',

  'I’m deeply interested in Fullstack Development and love bringing ideas to life through clean, scalable, and well-structured applications. Beyond just coding, I enjoy exploring software architecture and system design, ensuring that every solution I build is both functional and maintainable.',

  'Over the years, I’ve gained hands-on experience with a wide range of technologies, including NestJS, React, Next.js, Node.js, TypeScript, PostgreSQL, and MongoDB. My goal is to continue growing as a developer while building impactful digital products that make a difference.'
];

const AboutPage = () => {
  return (
    <>
      {about.map((para, i) => (
        <div
          key={`para-${i}`}
          className={`text-justify text-xl ${
            i === 0 ? 'first-letter:text-5xl first-letter:text-zinc-500' : ''
          }`}
        >
          {para}
          {i === about.length - 1 ? (
            <>
              <br />
            </>
          ) : (
            <>
              <br />
              <br />
            </>
          )}
        </div>
      ))}
    </>
  );
};

export default pageWrapper(titleWrapper(AboutPage, 'About Me'), false);
