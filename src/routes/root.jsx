import { createBrowserRouter } from 'react-router-dom';
import { LandingPage, AboutPage, ExperiencePage, ProjectsPage, ProjectDetailsPage } from '../pages';
import { routes } from '../constants';

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
