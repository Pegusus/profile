import { Code, Terminal, Database, Cloud, Globe } from 'lucide-react';

export const skillCategories = [
  {
    title: 'Languages',
    icon: <Code className="h-6 w-6" />,
    skills: [
      { name: 'JavaScript/TypeScript', level: 95 },
      { name: 'Java', level: 85 },
      { name: 'Python', level: 80 },
      { name: 'C/C++', level: 75 },
    ],
  },
  {
    title: 'Frameworks',
    icon: <Terminal className="h-6 w-6" />,
    skills: [
      { name: 'React', level: 90 },
      { name: 'Node.js', level: 95 },
      { name: 'Express.js', level: 90 },
      { name: 'Django', level: 80 },
    ],
  },
  {
    title: 'Databases',
    icon: <Database className="h-6 w-6" />,
    skills: [
      { name: 'PostgreSQL', level: 85 },
      { name: 'MongoDB', level: 90 },
      { name: 'Couchbase', level: 85 },
      { name: 'Redis', level: 80 },
    ],
  },
  {
    title: 'Cloud Services',
    icon: <Cloud className="h-6 w-6" />,
    skills: [
      { name: 'AWS', level: 90 },
      { name: 'GCP', level: 85 },
      { name: 'Azure', level: 80 },
    ],
  },
  {
    title: 'Developer Tools',
    icon: <Globe className="h-6 w-6" />,
    skills: [
      { name: 'Git', level: 95 },
      { name: 'Docker', level: 85 },
      { name: 'VS Code', level: 90 },
    ],
  },
];