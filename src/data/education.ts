interface Education {
    type: 'university' | 'school';
    institution: string;
    location: string;
    degree: string;
    period: string;
    grades: string[];
    logo: string;
    about: string;
  }
  
  export const education: Education[] = [
    {
      type: 'university',
      institution: 'Jadavpur University',
      location: 'Kolkata, West Bengal',
      degree: 'Bachelor of Engineering, Electronics',
      period: 'Aug. 2017 - Aug 2021',
      grades: ['CGPA: 8.5'],
      logo: 'Jadavpur_University_Logo.png',
      about: 'Jadavpur University, located in Kolkata, India, is a prestigious public university known for its excellence in education and research. Established in 1955, the university offers a wide range of undergraduate, postgraduate, and doctoral programs in fields such as engineering, science, arts, and social sciences. It is renowned for its rigorous academic standards, research output, and vibrant campus life. In the NIRF 2024 ranking, Jadavpur University was ranked 4th in India for Engineering, highlighting its strong reputation and academic prowess in the field. The university continues to contribute significantly to research and development, fostering innovation and industry collaboration.'
    },
    {
      type: 'university',
      institution: 'NIT Durgapur',
      location: 'Durgapur, West Bengal',
      degree: 'Bachelor of Technology, Electronics',
      period: 'Aug. 2016 - Aug 2017',
      grades: ['CGPA: 8.5'],
      logo: 'NITdgp.png',
      about: 'National Institute of Technology (NIT) Durgapur is a prestigious public technical university in Durgapur, West Bengal, India. It was established in 1960 and is one of the 31 NITs in India. NIT Durgapur offers undergraduate, postgraduate, and doctoral programs in various fields of engineering, technology, and management. Known for its high academic standards, research output, and industry collaborations, the institute has a strong reputation in the engineering and technology community. It is recognized for its state-of-the-art campus, excellent faculty, and vibrant student life.'
    },
    {
      type: 'school',
      institution: 'DAV Model School',
      location: 'Durgapur, West Bengal',
      degree: 'Computer Science and Mathematics',
      period: 'Aug. 2014 - May 2016',
      grades: ['Class XII Percentage: 93.2', 'Class X Percentage: 95'],
      logo: 'davlogo.png',
      about: 'DAV Model School, Durgapur, is a renowned educational institution located in Durgapur, West Bengal, India. It follows the CBSE curriculum and aims to provide quality education with a focus on holistic development, including academics, sports, and extracurricular activities. The school is known for its modern infrastructure, experienced faculty, and a strong emphasis on values and discipline. It serves students from kindergarten to senior secondary levels'
    },
  ];