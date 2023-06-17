const root = {
  LANDING_PAGE: '/',
  ABOUT_PAGE: '/about',
  EXPERIENCE_PAGE: '/experience',
  PROJECTS_PAGE: '/projects',
};

const textColor = {
  TEAL: 'text-teal-900',
  RED: 'text-red-900',
  GREEN: 'text-green-900',
  PURPLE: 'text-purple-900',
  BLUE: 'text-blue-900',
  GRAY: 'text-gray-900',
  YELLOW: 'text-yellow-900',
  ORANGE: 'text-orange-900',
  PINK: 'text-pink-900',
  LIME: 'text-lime-900',
  VIOLET: 'text-violet-900',
};

const backgroundColor = {
  TEAL: 'bg-teal-300',
  RED: 'bg-red-300',
  GREEN: 'bg-green-300',
  PURPLE: 'bg-purple-300',
  BLUE: 'bg-blue-300',
  GRAY: 'bg-gray-300',
  YELLOW: 'bg-yellow-300',
  ORANGE: 'bg-orange-300',
  PINK: 'bg-pink-300',
  LIME: 'bg-lime-300',
  VIOLET: 'bg-violet-300',
};

const ProjectStatus = {
  ACADEMIC: { label: 'Academic', textColor: textColor.TEAL, tagColor: backgroundColor.TEAL },
  SELF: { label: 'Self', textColor: textColor.YELLOW, tagColor: backgroundColor.YELLOW },
  INTERNAL: { label: 'Internal', textColor: textColor.GREEN, tagColor: backgroundColor.GREEN },
  CLIENT: { label: 'Client', textColor: textColor.PURPLE, tagColor: backgroundColor.PURPLE },
};
const technologies = {
  NODEJS: { label: 'Node js', textColor: textColor.TEAL, tagColor: backgroundColor.TEAL },
  NESTJS: { label: 'Nest Js', textColor: textColor.RED, tagColor: backgroundColor.RED },
  NEXTJS: { label: 'Next Js', textColor: textColor.GREEN, tagColor: backgroundColor.GREEN },
  REACT: { label: 'React', textColor: textColor.GRAY, tagColor: backgroundColor.GRAY },
  MONGODB: { label: 'MongoDB', textColor: textColor.YELLOW, tagColor: backgroundColor.YELLOW },
  TYPESCRIPT: {
    label: 'Typescript',
    textColor: textColor.PURPLE,
    tagColor: backgroundColor.PURPLE,
  },
  JAVASCRIPT: { label: 'Javascript', textColor: textColor.BLUE, tagColor: backgroundColor.BLUE },
  CHAKRAUI: { label: 'Chakra UI', textColor: textColor.ORANGE, tagColor: backgroundColor.ORANGE },
  TAILWIND: { label: 'Tailwind CSS', textColor: textColor.PINK, tagColor: backgroundColor.PINK },
  MYSQL: { label: 'Mysql', textColor: textColor.LIME, tagColor: backgroundColor.LIME },
  TYPEORM: { label: 'TypeORM', textColor: textColor.VIOLET, tagColor: backgroundColor.VIOLET },
};

export const routes = Object.freeze(root);
export const project = Object.freeze(ProjectStatus);
export const techStack = Object.freeze(technologies);
