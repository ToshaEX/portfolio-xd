import { project, techStack } from "../../constants";
import SecureFrontend from '../../assets/projects/secure-frontend';

export const secureFrontend={
    name: 'Secure Frontend',
    overview: 'Confidential client project',
    isLive: false,
    images: [...SecureFrontend],
    date: '2023 MAY',
    techStack: [
      techStack.TYPESCRIPT,
      techStack.REDUX,
      techStack.REACT,
      techStack.NEXTJS,
      techStack.BOOtSTRAP,
    ],
    type: project.CLIENT,
    description: [
      `Welcome to our confidential front-end development project! In this endeavor, we have developed a secure sign-in page using Next.js, React-Bootstrap, and Redux, ensuring the utmost confidentiality and privacy of our users' data. Our primary goal was to create a robust and efficient application with advanced filtering functionality for seamless data retrieval and manipulation.`,
      `For efficient and scalable data management, we chose to persist state using Redux and Rematch. This decision ensures that our application remains responsive and performs optimally, even when handling large datasets. Redux and Rematch provide a robust foundation for managing state, facilitating smooth interactions and enabling seamless updates across the application.`,
      `Our chosen tech stack comprises Next.js, React-Bootstrap, and Redux. Next.js offers server-side rendering and a comprehensive framework for building modern web applications. React-Bootstrap provides a rich set of pre-built components, ensuring a visually appealing and responsive UI. Redux, combined with Rematch, allows us to effectively manage the state of our application, enabling efficient data flow and effortless synchronization between components.`,
    ],
    functions: [
      'Authentication page',
      'Use env and session storage for secure application',
      'State Persist and advanced filter ',
    ],
  }