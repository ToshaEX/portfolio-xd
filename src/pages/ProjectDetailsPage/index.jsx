import React, { useState } from 'react';
import { pageWrapper, titleWrapper } from '../../wrapper';
import { useParams } from 'react-router-dom';
import { projects } from '../../data/projects/index';
import { Carousel, Tag, Banner } from '../../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';

const TechStack = ({ project }) => {
  return (
    <div className='my-2 flex flex-wrap items-center gap-2'>
      {/* <span className='text-sm font-bold '>Tech Stack :</span> */}
      {project?.techStack?.map((technology, i) => (
        <Tag
          label={technology.label}
          tagColor={technology.tagColor}
          textColor={technology.textColor}
          key={`${project.name}-${technology.label}-${i}`}
        />
      ))}
    </div>
  );
};

const ProjectDescription = ({ project }) => {
  return (
    <div>
      <h1 className='mb-4 text-lg font-bold text-gray-600'>Project Description</h1>
      <TechStack project={project} />{' '}
      {project?.description.map((description, i) => (
        <p key={'description-' + i}>
          {description}
          <br />
          <br />
        </p>
      ))}
    </div>
  );
};

const ProjectFunctionalities = ({ project }) => {
  return (
    <>
      <h1 className='mb-4 text-lg font-bold text-gray-600'>Functionalities</h1>
      <p>
        {' '}
        {project?.functions.map((func, i) => (
          <li key={'description-' + i}>{func}</li>
        ))}
      </p>
    </>
  );
};

const GitHubLink = ({ repository, label }) => {
  return (
    <a
      href={repository}
      target='_blank'
      rel='noreferrer'
      className='flex cursor-pointer items-center gap-1 rounded-md border-2 border-solid border-black p-2 transition-all duration-500 hover:shadow-lg'
    >
      <FontAwesomeIcon icon={faGithub} size='lg' />
      <span>{label} </span>
    </a>
  );
};

const DeployLink = ({ deploy_link, label }) => {
  return (
    <a
      href={deploy_link}
      target='_blank'
      rel='noreferrer'
      className='hover: flex cursor-pointer items-center gap-1 rounded-md border-2 border-solid border-black p-2 transition-all duration-500 hover:shadow-lg'
    >
      <FontAwesomeIcon icon={faLink} size='lg' />
      <span>{label} </span>
    </a>
  );
};

const ProjectDetailsPage = () => {
  const { id } = useParams();
  const project = projects[parseInt(id)];
  const [banner, setBanner] = useState(project?.notice ? true : false);
  return (
    <div className='relative'>
      {banner && (
        <Banner label='Notice !' message={project?.notice} onClose={() => setBanner(false)} />
      )}
      <div className='mb-5 text-center text-5xl font-bold'>{project?.name}</div>
      <Carousel images={project?.images} />
      <div className='my-8 flex flex-wrap items-center justify-start gap-2  md:justify-center'>
        {project?.client_repository && (
          <GitHubLink repository={project.client_repository} label={'Client Repository'} />
        )}
        {project?.server_repository && (
          <GitHubLink repository={project.server_repository} label={'Server Repository'} />
        )}
        {project?.deploy_link && (
          <DeployLink deploy_link={project.deploy_link} label={'Deploy Link'} />
        )}
      </div>

      <ProjectDescription project={project} />
      <ProjectFunctionalities project={project} />
    </div>
  );
};

export default pageWrapper(titleWrapper(ProjectDetailsPage));
