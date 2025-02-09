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

const CardBody = ({ id, name, overview, project }) => {
  const { label, tagColor, textColor } = project;
  return (
    <div className='absolute bottom-0 left-0 right-0 h-[130px]  overflow-visible pl-2 transition-all duration-500 group-hover:h-[150px] group-hover:bg-gray-300'>
      <h4 className='p-1 pt-2 text-lg font-bold text-gray-500 '>
        {name} &bull; <Tag label={label} tagColor={tagColor} textColor={textColor} />
      </h4>
      <p className='m-1  mb-3 line-clamp-1 text-sm font-bold text-gray-500 group-hover:line-clamp-none'>
        {overview}
      </p>

      <div className=' absolute bottom-1 right-1 mb-2 hidden group-hover:flex '>
        <Link
          className='mr-2 rounded-lg bg-gray-300 p-2 font-bold text-gray-800 hover:bg-gray-400  hover:text-white'
          to={`/projects/${id}`}
        >
          Read more
        </Link>
      </div>
    </div>
  );
};

const ProjectCardView = ({ id, name, overview, isLive, images, deploy_link, project }) => {
  return (
    <div className='group relative h-[380px] w-[280px] overflow-hidden rounded-[1rem]  shadow-md'>
      {isLive && <LiveIcon deploy_link={deploy_link} />}
      <div className='relative z-0 min-h-[250px] min-w-[300px] scale-[1.05] transition duration-500 group-hover:scale-[1]'>
        <img src={images[0]} className='z-1  absolute h-full w-full object-contain' />
      </div>
      <CardBody id={id} name={name} overview={overview} project={project} />
    </div>
  );
};

export default ProjectCardView;
