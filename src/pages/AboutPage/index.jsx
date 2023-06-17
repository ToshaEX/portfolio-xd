import React from 'react';
import { pageWrapper, titleWrapper } from '../../wrapper';

const about = [
  'Welcome to my portfolio site! I am currently pursuing a BSc (hons) in Software Engineering, and I am passionate about creating innovative software solutions. I recently completed my internship at Redblocks Technologies, where I gained valuable experience in software development and honed my skills in various technologies.',

  'As an Associate Software Engineer at Redblocks, I am actively involved in the development of cutting-edge applications. My key competencies lie in front-end and back-end development using technologies such as React, Nest Js, Next js, MongoDB, JavaScript, TypeScript, and MySql. I am well-versed in building responsive and user-friendly web applications that deliver seamless user experiences.',

  'Throughout my academic and professional journey, I have gained a solid foundation in software engineering principles and best practices. I am skilled in designing and implementing scalable and maintainable code, and I am always eager to learn and adopt new technologies to stay ahead in the ever-evolving field of software development.',

  "My portfolio showcases my work as a full-stack developer, highlighting my expertise in building modern web applications. I have a strong eye for detail and take pride in delivering high-quality code that meets the needs of clients and end-users alike. Whether it's creating interactive user interfaces, developing RESTful APIs, or designing robust databases, I strive for excellence in every aspect of software development.",

  'With a keen focus on solving complex problems and a passion for creating innovative solutions, I am dedicated to contributing to the world of software engineering. I invite you to explore my portfolio and learn more about my projects, skills, and achievements. Thank you for visiting my site, and I look forward to connecting with you!',
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
