import { project, techStack } from '../../constants';
import CashCollection from '../../assets/projects/cash-collection';

export const cashCollection = {
  name: 'Cash collection (Dialog)',
  overview: 'Solution for tracking cash collections',
  isLive: false,
  images: [...CashCollection],
  date: '2023 MAY',
  techStack: [
    techStack.TYPESCRIPT,
    techStack.NESTJS,
    techStack.POSTGRESSQL,
    techStack.MUI,
    techStack.REDUX,
    techStack.TYPEORM,
  ],
  type: project.CLIENT,
  description: [
    `As part of the team, we developed a comprehensive Cash Collection App with separate admin and agent portals, utilizing React for the frontend and NestJS for the backend. I contributed to creating a well-structured project architecture, focusing on key components such as loggers, audit trails, security measures, and file uploads to ensure a robust and secure system.`,

    `I also played a key role in implementing complex backend calculations to process cash collection data, along with designing and implementing a CRUD interface for managing distributors. These efforts improved the application's efficiency, accuracy, and overall user experience, resulting in a more streamlined, secure, and user-friendly platform for cash collection operations.`,
  ],
  functions: [
    'Authentication and Authorization with jwt token',
    'CRUD operation',
    'Handle payment gateway request',
    'Persist state using redux-persist',
    'Image upload with multer',
    'Search and filter options',
  ]
};
