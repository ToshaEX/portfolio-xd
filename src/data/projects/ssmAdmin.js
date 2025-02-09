import { project, techStack } from "../../constants";
import SsmAdmin from '../../assets/projects/ssm-admin';

export const ssmAdmin ={
    name: 'SSM Admin',
    overview: 'Admin panel for encrypting card details',
    isLive: false,
    images: [...SsmAdmin],
    date: '2023 MAY',
    techStack: [
      techStack.TYPESCRIPT,
      techStack.NESTJS,
      techStack.ORACLEDB,
      techStack.TYPEORM,
      techStack.REDUX,
      techStack.MUI
    ],
    type: project.PRODUCT,
    description: [
      `As a Payment Card Encryption Admin (PCI SSF Certified), I led the rewrite of a legacy admin interface responsible for managing payment card encryption. The project involved transitioning from outdated technologies (Angular and PHP) to modern frameworks such as React and NestJS, significantly enhancing the interface's usability and maintainability.`,

      `I collaborated closely with the service team to integrate encryption processes controlled by a Java service, which helped bolster the overall security of the system. To ensure robust protection against potential threats, I implemented several security measures, including CSRF tokens, JWT tokens, Content Security Policy (CSP), and cookie management, thereby fortifying the platform’s resilience against common vulnerabilities.`,

      `My contributions were pivotal in achieving a major company milestone, improving not only the system performance but also the security posture, ultimately ensuring compliance with the Payment Card Industry Security Standards (PCI SSF).`,

    ],
    functions: [
      'Authentication and Authorization with jwt token',
      'CRUD operation for Admin',
      'Secure endpoint',
      'Persist state using redux-persist',
    ]
  }