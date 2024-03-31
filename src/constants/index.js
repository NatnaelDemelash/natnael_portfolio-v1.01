import project1 from '../assets/projects/project-1.png';
import project2 from '../assets/projects/project-2.png';
import project3 from '../assets/projects/project-3.png';
import project4 from '../assets/projects/project-4.png';

export const HERO_CONTENT = `As a fervent Frontend Web Developer, I am committed to fashioning captivating and user-focused digital interactions. Proficient in leading front-end technologies such as React and Tailwind CSS, I've refined my craft to deliver outstanding results.`;

export const ABOUT_TEXT = `I am a dedicated and versatile front-end developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. I am driven by my passion for innovation and my love for the ever-evolving world of web development.`;

export const EXPERIENCES = [
  {
    year: '2024 - Present',
    role: 'Software Engineer',
    company: 'GoodayOn',
    description: `Contributed to the development of web applications using JavaScript, Vue.js, and React.js. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ['Vue', 'Tailwind', 'React', 'Firebase'],
  },
  {
    year: '2021-2023',
    role: 'Operation Team Lead',
    company: 'GoodayOn',
    description: `Successfully utilize CRM software tools, including Trello and Jira, to streamline and
    enhance project management processes.`,
    technologies: ['Vue', 'Firebase'],
  },
];

export const PROJECTS = [
  {
    title: 'OMNIFOOD',
    image: project1,
    description:
      'An AI based tech company which majorly focuses on consumer well-being through a healthy diet',
    technologies: ['HTML', 'Scss', 'JS'],
  },
  {
    title: 'Aurora Aisel- Shopping Mart',
    image: project2,
    description:
      'An Ecommerce app built with React.js using react context -( FakeStore API) for data fetching/backend',
    technologies: ['React', 'React Context-API'],
  },
  {
    title: 'Pizzeria Pizza',
    image: project3,
    description:
      'Pizza ordering website .Users can browse through a variety of pizza options, select their preferred menu',
    technologies: ['React', 'VITE', 'CSS'],
  },
  {
    title: 'Rotten Apple',
    image: project4,
    description:
      'A simple React and TypeScript app to search popular movies and TvShows with additional user custom rating feature.',
    technologies: ['React.js', 'TypeScript'],
  },
];

export const CONTACT = {
  address: 'Addis Ababa, Ethiopia ',
  phoneNo: '+2519-29050548 ',
  email: 'natnael.dev101@gmail.com',
};
