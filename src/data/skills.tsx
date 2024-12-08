import { Code, Terminal, Database, Cloud, Globe } from 'lucide-react';

export const skillCategories = [
  {
    title: 'Languages',
    icon: <Code className="h-6 w-6" />,
    skills: [
      {
        name: 'C',
        icon: (
          <a
            href="https://docs.microsoft.com/en-us/cpp/?view=msvc-170"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/c-colored.svg"
              width="36"
              height="36"
              alt="C"
            />
          </a>
        ),
      },
      {
        name: 'C++',
        icon: (
          <a
            href="https://docs.microsoft.com/en-us/cpp/?view=msvc-170"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/cplusplus-colored.svg"
              width="36"
              height="36"
              alt="C++"
            />
          </a>
        ),
      },
      {
        name: 'Java',
        icon: (
          <a
            href="https://www.oracle.com/java/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/java-colored.svg"
              width="36"
              height="36"
              alt="Java"
            />
          </a>
        ),
      },
      {
        name: 'JavaScript',
        icon: (
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg"
              width="36"
              height="36"
              alt="Javascript"
            />
          </a>
        ),
      },
      {
        name: 'TypeScript',
        icon: (
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/Typescript"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg"
              width="36"
              height="36"
              alt="Typescript"
            />
          </a>
        ),
      },
    ],
  },
  {
    title: 'Frameworks',
    icon: <Terminal className="h-6 w-6" />,
    skills: [
      {
        name: 'HTML5',
        icon: (
          <a
            href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg"
              width="36"
              height="36"
              alt="HTML5"
            />
          </a>
        ),
      },
      {
        name: 'React',
        icon: (
          <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg"
              width="36"
              height="36"
              alt="React"
            />
          </a>
        ),
      },
      {
        name: 'Next.js',
        icon: (
          <a href="https://nextjs.org/docs" target="_blank" rel="noreferrer">
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nextjs-colored.svg"
              width="36"
              height="36"
              alt="Next.js"
            />
          </a>
        ),
      },
      {
        name: 'CSS3',
        icon: (
          <a
            href="https://www.w3.org/TR/CSS/#css"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg"
              width="36"
              height="36"
              alt="CSS3"
            />
          </a>
        ),
      },
    ],
  },
  {
    title: 'Databases',
    icon: <Database className="h-6 w-6" />,
    skills: [
      {
        name: 'MongoDB',
        icon: (
          <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer">
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mongodb-colored.svg"
              width="36"
              height="36"
              alt="MongoDB"
            />
          </a>
        ),
      },
      {
        name: 'MySQL',
        icon: (
          <a href="https://www.mysql.com/" target="_blank" rel="noreferrer">
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mysql-colored.svg"
              width="36"
              height="36"
              alt="MySQL"
            />
          </a>
        ),
      },
    ],
  },
  {
    title: 'Cloud Services',
    icon: <Cloud className="h-6 w-6" />,
    skills: [
      {
        name: 'AWS',
        icon: (
          <a
            href="https://aws.amazon.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://img.icons8.com/?size=100&id=e6uRfPIDgoXi&format=png&color=000000"
              width="36"
              height="36"
              alt="AWS"
            />
          </a>
        ),
      },
      {
        name: 'GCP',
        icon: (
          <a
            href="https://cloud.google.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/googlecloud-colored.svg"
              width="36"
              height="36"
              alt="GCP"
            />
          </a>
        ),
      },
    ],
  },
  {
    title: 'Developer Tools',
    icon: <Globe className="h-6 w-6" />,
    skills: [
      {
        name: 'Git',
        icon: (
          <a
            href="https://git-scm.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/git-colored.svg"
              width="36"
              height="36"
              alt="Git"
            />
          </a>
        ),
      },
      {
        name: 'Docker',
        icon: (
          <a
            href="https://www.docker.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/docker-colored.svg"
              width="36"
              height="36"
              alt="Docker"
            />
          </a>
        ),
      },
    ],
  },
];
