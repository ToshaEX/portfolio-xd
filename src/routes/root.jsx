import { createBrowserRouter } from 'react-router-dom';

import { routes } from '../constants';
import { AboutPage, ExperiencePage, LandingPage, ProjectDetailsPage, ProjectsPage } from '../pages';
import LearningPage from '../pages/LearningPage';

export const router = createBrowserRouter([
  {
    path: routes.LANDING_PAGE,
    element: <LandingPage />,
  },
  {
    path: routes.ABOUT_PAGE,
    element: <AboutPage />,
  },
  {
    path: routes.LEARNING_PAGE,
    element: <LearningPage />,
  },
  {
    path: routes.EXPERIENCE_PAGE,
    element: <ExperiencePage />,
  },
  {
    path: routes.PROJECTS_PAGE,
    element: <ProjectsPage />,
  },
  {
    path: routes.PROJECTS_PAGE + '/:id',
    element: <ProjectDetailsPage />,
  },
]);
