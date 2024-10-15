import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const OssuTable = () => {
  const sections = [
    { section: 'Core CS' },
    { section: 'Core math' },
    { section: 'Core systems' },
    { section: 'Core theory' },
    { section: 'Core applications' },
  ];
  const coreCs = [
    { course: 'Systematic Program Design' },
    { course: 'Programming Languages, (Parts A,B,C)' },
    { course: 'Class-based Program Design' },
    { course: 'Object-Oriented Design' },
    { course: 'Software Architecture' },
  ];

  const data = [
    { course: 'The Missing Semester of Your CS Education' },
    { course: 'Build a Modern Computer from First Principles: NAND to Tetris' },
    { course: 'Operating Systems: Three Easy Pieces' },
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
    { course: 'Databases: Modeling and Theory' },
    { course: 'Databases: Relational Databases and SQL' },
    { course: 'Databases: Semistructured Data' },
    { course: 'Machine Learning' },
    { course: 'Computer Graphics' },
  ];

  return (
    <p>testing</p>
  )
};


export default OssuTable;
