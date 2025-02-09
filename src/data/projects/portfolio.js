import { project, techStack } from "../../constants";
import Portfolio from '../../assets/projects/portfolio';

export const portfolio={
    name: 'Portfolio',
    overview: 'Modern UI/UX portfolio',
    isLive: true,
    images: [...Portfolio],
    date: '2023 MAY',
    techStack: [techStack.JAVASCRIPT, techStack.REACT, techStack.SCSS, techStack.SANITY],
    type: project.SELF,
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
    client_repository: 'https://github.com/ToshaEX/filmpire',
    deploy_link: 'https://oshan-2c5af.web.app/',
  }