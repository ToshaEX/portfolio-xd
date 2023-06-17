import React from 'react';
import { faFacebook, faGithub, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const socials = [
  {
    icon: faLinkedinIn,
    url: 'https://www.linkedin.com/in/oshan-tharindu/',
  },
  { icon: faFacebook, url: 'https://web.facebook.com/Oshantharindu' },
  { icon: faWhatsapp, url: 'https://wa.me/94713206693' },
  { icon: faGithub, url: 'https://github.com/ToshaEX' },
];

const ContactMe = () => (
  <div className='flex flex-col justify-center pb-2'>
    <span className='text-gap mb-2  text-xl font-bold'>Contact Me</span>
    <span className=' text-zinc-400'>
      email:{' '}
      <a
        href='mailto:tharinduoshan@gmail.com'
        className='transition-all duration-500 hover:text-zinc-500'
      >
        tharinduoshan@gmail.com
      </a>{' '}
    </span>
    <span className=' text-zinc-400'>
      Mobile:{' '}
      <a href='tel:+94 71 320 66 93' className='transition-all duration-500 hover:text-zinc-500'>
        +94 71 320 66 93
      </a>{' '}
    </span>
  </div>
);

const Social = () => (
  <span className='flex flex-col'>
    <span className='mb-2 text-center text-xl font-bold'>Social</span>
    <span className='mb-5 flex flex-row justify-center gap-2'>
      {socials.map((social, i) => (
        <a key={`social-${i}`} href={social.url} target='_blank' rel='noreferrer'>
          <FontAwesomeIcon
            icon={social.icon}
            size='2x'
            className='text-zinc-400 transition-all duration-500 hover:text-zinc-500'
          />
        </a>
      ))}
    </span>
  </span>
);

const Footer = () => {
  return (
    <div className='h-auto bg-black text-center'>
      <div className='flex w-full flex-col justify-center p-10 pb-2 text-white'>
        <ContactMe />
        <Social />
      </div>
      <div className='pb-10 text-white'>
        <span className=' text-zinc-50'>
          @2023 OSHAN THARINDU <br />
          ALL RIGHTS RESERVED
        </span>
      </div>
    </div>
  );
};

export default Footer;
