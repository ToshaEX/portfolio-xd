import { project, techStack } from "../../constants";
import Filmpire from '../../assets/projects/filmpire';

export const filmpire={
    name: 'Filmpire',
    overview: 'Movie Explore app',
    isLive: false,
    images: [...Filmpire],
    date: '2023 MAY',
    techStack: [
      techStack.JAVASCRIPT,
      techStack.REACT,
      techStack.REDUX,
      techStack.MUI,
      techStack.TMDB,
    ],
    type: project.SELF,
    description: [
      `As a dedicated learner and aspiring React developer, I am thrilled to showcase my skills and highlight the projects that I have undertaken during my journey towards mastering Javascript and React. One of the significant projects that I am particularly proud to present is my integration of React with a real-world API, which I completed as part of the Filmpire Javascript mastery course.`,
      `Throughout the Filmpire course, I delved deep into the world of React, focusing on harnessing its power to create dynamic and interactive web applications. This particular project stands out as a testament to my ability to effectively integrate React with external data sources, providing a seamless user experience and real-time data updates.`,
      `For this project, I embarked on the challenge of building a robust React application that interacts with a real-world API. By utilizing asynchronous programming techniques, I was able to fetch data from the API and seamlessly integrate it into the user interface. This allowed me to create a responsive and dynamic application that provides users with up-to-date information and a smooth browsing experience.`,
    ],
    functions: [
      'Handle Authentication and Authorization with TMDB API',
      'Movie list views and Detail view',
      'Trending Movie list',
      'Dark mode',
    ],
    client_repository: 'https://github.com/ToshaEX/filmpire',
  }