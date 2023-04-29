import { nanoid } from 'nanoid';

const items = [
  {
    id: nanoid(),
    toSite: 'https://petly-project.vercel.app/',
    toGithub: 'https://github.com/MaksymDziubanchuk/petly',
    text: 'Petly',
    tech: 'HTML, Sass-module, JS, React/Redux, Axios, Node.js, MongoDB, Swagger, GIT',
  },
  {
    id: nanoid(),
    toSite: 'https://nikstyles.github.io/goit-react-hw-08-phonebook/',
    toGithub: 'https://github.com/nikstyles/goit-react-hw-08-phonebook',
    text: 'Phonebook',
    tech: 'HTML, CSS, JS, React/Redux, WEBPACK, Axios, GIT',
  },
  {
    id: nanoid(),
    toSite: 'https://nadtosonna.github.io/js-team-project-4/',
    toGithub: 'https://github.com/nadtosonna/js-team-project-4/',
    text: 'Filmoteka',
    tech: 'HTML, SASS, BEM, JS, PARCEL, Axios, Firebase, GIT',
  },
  {
    id: nanoid(),
    toSite: 'https://mkundeev.github.io/team-project/',
    toGithub: 'https://github.com/mkundeev/team-project',
    text: 'IceCream',
    tech: 'HTML, SASS, JS, WEBPACK, BEM, GIT',
  },
  {
    id: nanoid(),
    toSite: 'https://nikstyles.github.io/goit-markup-hw-08/',
    toGithub: 'https://github.com/nikstyles/goit-markup-hw-08/',
    text: 'WebStudio',
    tech: 'HTML, CSS, GIT',
  },
];

export default items;
