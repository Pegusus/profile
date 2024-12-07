import { Trophy, Award, Star, Target } from 'lucide-react';

export const achievements = [
  {
    icon: <Trophy className="h-8 w-8" />,
    title: 'Competitive Programming',
    description: 'Achieved 5 stars in Hackerrank and 3 stars in CodeChef through regular coding competitions.',
  },
  {
    icon: <Award className="h-8 w-8" />,
    title: 'National Science Olympiad',
    description: 'Gold medal with All India Rank (34) in National Science Olympiad (2014).',
  },
  {
    icon: <Star className="h-8 w-8" />,
    title: 'JEE Advanced',
    description: (
      <ul>
        <li>Secured All India Rank 5367 in JEE Advanced 2016.</li>
        <li>Secured All India Rank 5841 in JEE Advanced 2017.</li>
      </ul>
    ),
  },
  {
    icon: <Target className="h-8 w-8" />,
    title: 'Academic Excellence',
    description: 'Graduated with 8.5 CGPA from Jadavpur University (B.E. in Electronics and Instrumentation).',
  },
];