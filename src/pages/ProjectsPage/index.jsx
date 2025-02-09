import React from 'react';
import { pageWrapper, titleWrapper } from '../../wrapper';
import ProjectCardView from './ProjectCardView';
import { projects } from '../../data/projects/index';

const ProjectsPage = () => {
  return (
    <div className='flex flex-wrap justify-center gap-10'>
      {projects.map((project, i) => (
        <ProjectCardView
          id={project.id}
          name={project.name}
          overview={project.overview}
          isLive={project.isLive}
          deploy_link={project.deploy_link}
          project={project.type}
          key={`project-card-${i}`}
          images={project.images}
        />
      ))}
    </div>
  );
};

export default pageWrapper(titleWrapper(ProjectsPage, 'Projects'));
