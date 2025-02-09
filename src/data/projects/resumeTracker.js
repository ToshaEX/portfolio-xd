import { project, techStack } from "../../constants";
import ResumeTracker from '../../assets/projects/resume-tracker';

export const resumeTracker={
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
  }