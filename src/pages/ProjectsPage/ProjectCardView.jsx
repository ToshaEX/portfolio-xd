import React from 'react';
import { Tag } from '../../components';
import { Link } from 'react-router-dom';

const LiveIcon = ({ deploy_link }) => {
  return (
    <a
      className='absolute right-3 z-10 m-2 flex cursor-pointer flex-row  items-center justify-center gap-1 rounded-xl px-2 backdrop-blur-3xl'
      href={deploy_link}
      target='_blank'
      rel='noreferrer'
    >
      <h3 className='text-lg font-bold text-gray-500'>Live</h3>
      <div className='text-red h-3 w-3 rounded-full bg-red-600 ' />
    </a>
  );
};

const ProjectCardView = ({ id, name, overview, isLive, images, deploy_link, project }) => {
  const { label, tagColor, textColor } = project;
  return (
    <div className='relative max-h-[400px] w-[300px] overflow-hidden rounded-[1rem] shadow-md'>
      {isLive && <LiveIcon deploy_link={deploy_link} />}
      <div className='relative z-0 min-h-[250px] min-w-[300px]'>
        <img src={images[0]} className='z-1 absolute h-full w-full object-cover' />
      </div>
      <div className='ml-2'>
        <h4 className='truncate p-1 text-lg font-bold text-gray-500'>
          {name} &bull; <Tag label={label} tagColor={tagColor} textColor={textColor} />
        </h4>
        <h5 className='truncate p-1 pb-3 text-sm font-bold text-gray-500'>{overview}</h5>
        <div className='mb-2 flex justify-end'>
          <Link
            className='mr-2 rounded-lg bg-gray-300 p-2 font-bold text-gray-800 transition-all duration-500 hover:bg-gray-400 '
            to={`/projects/${id}`}
          >
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCardView;
