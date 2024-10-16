import NestableTable from './NestableTable';

const OssuInfo = () => {

  const coreComputerScience = [
    { course: 'Systematic Program Design' },
    { course: 'Programming Languages, (Parts A,B,C)' },
    { course: 'Class-based Program Design' },
    { course: 'Object-Oriented Design' },
    { course: 'Software Architecture' },
  ];
  const maths = [
      { course: 'Calculus: Differentiation' },
      { course: 'Calculus: Integration' },
      { course: 'Calculus: Coordinate Systems' },
  ]
  const systems = [
    { course: 'The Missing Semester of Your CS Education' },
    { course: 'Build a Modern Computer from First Principles: NAND to Tetris' },
    { course: 'Operating Systems: Three Easy Pieces' },
    {course: 'Computer Networking: a Top-Down Approach'}
  ]

  const theory = [
    {
      course:
        'Divide and Conquer, Sorting and Searching, and Randomized Algorithms',
    },
    { course: 'Graph Search, Shortest Paths, and Data Structures' },
    {
      course:
        'Greedy Algorithms, Minimum Spanning Trees, and Dynamic Programming',
    },
    {
      course:
        'Shortest Paths Revisited, NP-Complete Problems and What To Do About Them',
    },
  ]

  const applications = [
    { course: 'Databases: Modeling and Theory' },
    { course: 'Databases: Relational Databases and SQL' },
    { course: 'Databases: Semistructured Data' },
    { course: 'Machine Learning: Supervised (regression and classification)' },
    {course: 'Machine Learning: Advanced Learning Algorithms'},
    {course: 'Machine Learning: Unsupervised Learning'},
    { course: 'Computer Graphics: 3D scenes, ray tracing' },
    
  ]

  // ******************** // 
  const courses = [
    { section: 'Core CS', courses_in_section: coreComputerScience },
    { section: 'Core math', courses_in_section: maths  },
    { section: 'Core systems', courses_in_section: systems },
    { section: 'Core theory', courses_in_section: theory },
    { section: 'Core applications', courses_in_section: applications },
  ];
  // ******************** // 

  return (
    <NestableTable object={courses}></NestableTable>
  );
};

export default OssuInfo;
