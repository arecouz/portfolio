import NestableTable from './NestableTable';

const OssuInfo = () => {
  const ossu = [
    {
      title: 'Core Computer Science',
      parts: [
        'Systematic Program Design',
        'Programming Languages, (Parts A,B,C)',
        'Class-based Program Design',
        'Object-Oriented Design',
        'Software Architecture',
      ],
    },
    {
      title: 'Core Math',
      parts: [
        'Calculus: Differentiation',
        'Calculus: Integration',
        'Calculus: Coordinate Systems',
      ],
    },
    {
      title: 'Core Systems',
      parts: [
        'The Missing Semester of Your CS Education',
        'Build a Modern Computer from First Principles: NAND to Tetris',
        'Operating Systems: Three Easy Pieces',
        'Computer Networking: a Top-Down Approach',
      ],
    },
    {
      title: 'Core Theory',
      parts: [
        'Divide and Conquer, Sorting and Searching, and Randomized Algorithms',
        'Graph Search, Shortest Paths, and Data Structures',
        'Greedy Algorithms, Minimum Spanning Trees, and Dynamic Programming',
        'Shortest Paths Revisited, NP-Complete Problems and What To Do About Them',
      ],
    },
    {
      title: 'Core Applications',
      parts: [
        'Databases: Modeling and Theory',
        'Databases: Relational Databases and SQL',
        'Databases: Semistructured Data',
        'Machine Learning: Supervised (regression and classification)',
        'Machine Learning: Advanced Learning Algorithms',
        'Machine Learning: Unsupervised Learning',
        'Computer Graphics: 3D scenes, ray tracing',
      ],
    },
  ];

  return <NestableTable object={ossu}></NestableTable>;
};

export default OssuInfo;
