import Blogger from '../assets/projects/blogger-app';
import SalonLK from '../assets/projects/salonlk';
import ResumeTracker from '../assets/projects/resume-tracker';
import { project, techStack } from '../constants';

export const projects = [
  {
    id: 0,
    name: 'Blogger App',
    overview: 'Simple blogger app with authentication',
    isLive: true,
    deploy_link: 'https://blogger-ex.herokuapp.com/',
    images: [...Blogger],
    date: '2023 MAY',
    techStack: [
      techStack.TYPESCRIPT,
      techStack.NESTJS,
      techStack.NEXTJS,
      techStack.NODEJS,
      techStack.MONGODB,
      techStack.CHAKRAUI,
    ],
    type: project.SELF,
    description: [
      `Welcome to the Blogger app, a powerful and user-friendly platform for creating and managing
       your own blog! Built with cutting-edge technologies, the Blogger app combines the frontend 
       framework of Next/React and ChakraUI with a robust backend created using Nest.js, Node.js, and MongoDB.`,

      `With the Blogger app, expressing your thoughts, sharing knowledge, and connecting with your 
      audience has never been easier. Whether you're a seasoned blogger or just starting out, our app 
      provides the tools and features you need to create a captivating online presence.`,

      `The front end of the Blogger app is developed using Next/React, a popular JavaScript framework
      known for its efficiency, scalability, and flexibility. With Next.js, your blog will benefit from serverside
      rendering, allowing for faster page loads and improved SEO performance. React, on the other hand, enables the
      creation of interactive and dynamic user interfaces, ensuring an exceptional user experience.`,

      `To enhance the design and aesthetics of the app, ChakraUI is utilized as the UI component library.
      ChakraUI provides a collection of customizable components and styles, making it effortless to
      create visually appealing and responsive interfaces. With ChakraUI, you can focus on creating 
      compelling content without compromising on design.`,

      `On the backend, the Blogger app relies on Nest.js, a progressive and efficient Node.js framework.
      Nest.js provides a solid foundation for building scalable and maintainable server-side
      applications. Its modular architecture, dependency injection, and powerful features such as
      decorators and middleware make it a preferred choice for developing complex backend systems.`,
    ],
    functions: [
      'Authentication and Authorization with jwt token',
      'Create,View and Edit blog post',
      'Secure endpoint',
      'Persist state using redux-persist',
      'Image upload with multer',
      'React-draft-wyswyg editor for post writing',
      'Search blog post by author name or blog post title',
    ],
    server_repository: 'https://github.com/ToshaEX/blogger-api',
    client_repository: 'https://github.com/ToshaEX/blogging-app',
    notice: 'Heroku temporally saving uploaded images, Sorry for the bad user experience',
  },
  {
    id: 1,
    name: 'SALOnLK',
    overview: 'Appointment Management System for Saloon',
    isLive: true,
    deploy_link: 'http://143.198.210.185/',
    images: [...SalonLK],
    date: '2023 FEB',
    techStack: [
      techStack.TYPESCRIPT,
      techStack.JAVASCRIPT,
      techStack.NESTJS,
      techStack.REACT,
      techStack.NODEJS,
      techStack.MONGODB,
      techStack.TAILWIND,
    ],
    type: project.ACADEMIC,
    description: [
      `Welcome to the introduction of the "SALOnLk" project! In this project, we have implemented the backend using Nest.js, a popular Node.js framework known for its scalability and modular architecture. Alongside backend development, our team has also provided extensive support in the front-end development area. This includes setting up Redux for state management, implementing authentication and authorization mechanisms, and addressing any bugs encountered during the development process.`,
      `One of the key features we have developed for SALOnLk is an appointment scheduling system. This feature enables users to conveniently book appointments with their preferred beauticians at the salon. By integrating this functionality, we aim to enhance the overall user experience and streamline the appointment booking process.`,
      `To ensure secure and controlled access, we have implemented role-based authorization within the project. This means that different users will have varying levels of access and permissions based on their assigned roles. Specifically, we have designed an authorization system that governs the appointment approval process, allowing authorized personnel to manage and approve appointments effectively.`,
      `By combining our expertise in backend development with a focus on front-end support, we have created a robust and user-friendly system for SALOnLk. Our goal is to provide a seamless and efficient platform for users to book appointments and for salon administrators to manage these appointments effectively.`,
    ],
    functions: [
      'Handle Authentication and Authorization with jwt token',
      'Role base Authorization (Admin, Beautician and User)',
      'Place appointment to selected time slot and beautician',
      'Create, Edit and Delete  Services',
      'Appointment status handling',
    ],
    server_repository: 'https://github.com/ToshaEX/SALOnLK-api',
    client_repository: 'https://github.com/ToshaEX/SALOnLK',
  },
  {
    id: 2,
    name: 'Resume Tracker',
    overview: 'Applicant Tracking System',
    isLive: false,
    images: [...ResumeTracker],
    date: '2023 MAY',
    techStack: [
      techStack.TYPESCRIPT,
      techStack.JAVASCRIPT,
      techStack.NESTJS,
      techStack.REACT,
      techStack.NODEJS,
      techStack.MYSQL,
      techStack.TYPEORM,
    ],
    type: project.INTERNAL,
    description: [
      `The Resume Tracker Project (ATS) is a comprehensive application designed to simplify and streamline the applicant management and job interview process. It serves as a valuable tool for HR professionals and interviewers, allowing them to effectively manage and track applicants throughout the hiring process.`,
      `The project utilizes advanced technologies such as Nest.js, React.js, Node.js, JavaScript, and TypeScript to deliver a modern and efficient solution. These technologies provide a robust and scalable foundation for the application, ensuring optimal performance and a seamless user experience.`,
    ],
    functions: [
      'Handle Authentication and Authorization with jwt token',
      'Role base Authorization (Admin, Interviewer and HR)',
      'Create, Edit and Soft Delete Jobs(Open position)',
      'Create, Edit and Delete Applicant',
      'Email sending function with email template management',
      'User activity tracking',
      'User management dashboard',
      'Private routing in frontend',
      'Manage applicant in interview process using kanban(Trello board)',
    ],
  },
  {
    id: 3,
    name: 'Secure Frontend',
    overview: 'Applicant Tracking System',
    isLive: false,
    images: [...SalonLK],
    date: '2023 MAY',
    techStack: [
      techStack.TYPESCRIPT,
      techStack.JAVASCRIPT,
      techStack.NESTJS,
      techStack.REACT,
      techStack.NODEJS,
      techStack.MYSQL,
      techStack.TYPEORM,
    ],
    type: project.CLIENT,
    description: [
      `Welcome to the introduction of the "SALOnLk" project! In this project, we have implemented the backend using Nest.js, a popular Node.js framework known for its scalability and modular architecture. Alongside backend development, our team has also provided extensive support in the front-end development area. This includes setting up Redux for state management, implementing authentication and authorization mechanisms, and addressing any bugs encountered during the development process.`,
      `One of the key features we have developed for SALOnLk is an appointment scheduling system. This feature enables users to conveniently book appointments with their preferred beauticians at the salon. By integrating this functionality, we aim to enhance the overall user experience and streamline the appointment booking process.`,
      `To ensure secure and controlled access, we have implemented role-based authorization within the project. This means that different users will have varying levels of access and permissions based on their assigned roles. Specifically, we have designed an authorization system that governs the appointment approval process, allowing authorized personnel to manage and approve appointments effectively.`,
      `By combining our expertise in backend development with a focus on front-end support, we have created a robust and user-friendly system for SALOnLk. Our goal is to provide a seamless and efficient platform for users to book appointments and for salon administrators to manage these appointments effectively.`,
    ],
    functions: [
      'Handle Authentication and Authorization with jwt token',
      'Role base Authorization (Admin, Beautician and User)',
      'Place appointment to selected time slot and beautician',
      'Create, Edit and Delete  Services',
      'Appointment status handling',
    ],
  },
];
