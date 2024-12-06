interface Education {
    type: 'university' | 'school';
    institution: string;
    location: string;
    degree: string;
    period: string;
    grades: string[];
  }
  
  export const education: Education[] = [
    {
      type: 'university',
      institution: 'Jadavpur University',
      location: 'Kolkata, West Bengal',
      degree: 'Bachelor of Engineering, Electronics',
      period: 'Aug. 2017 - May 2021',
      grades: ['CGPA: 8.5'],
    },
    {
      type: 'school',
      institution: 'DAV Model School',
      location: 'Durgapur, West Bengal',
      degree: 'Computer Science and Mathematics',
      period: 'Aug. 2014 - May 2016',
      grades: ['Class XII Percentage: 93.2', 'Class X Percentage: 95'],
    },
  ];