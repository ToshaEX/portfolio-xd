import { project, techStack } from "../../constants";
import Blogger from '../../assets/projects/blogger-app';

export const bloggerApp={
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
      techStack.REDUX,
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
  }