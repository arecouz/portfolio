import { Table, TableBody, TableRow, TableCell } from '@/components/ui/table';
import MyAccordion from './MyAccordion';
import { useToast } from '@/hooks/use-toast';
import _ from 'lodash';

const FullStackInfo = () => {
  const { toast } = useToast();

  const fullStackOpen = [
    {
      title: 'Frontend Development',
      parts: [
        {
          name: 'React',
          link: 'https://github.com/arecouz/FullStackOpen/tree/main/blogListApp/frontend',
        },
        {
          name: 'Vite',
          link: 'https://github.com/arecouz/FullStackOpen/tree/main/blogListApp',
        },
        {
          name: 'Redux (Thunk, Toolkit)',
          link: 'https://github.com/arecouz/FullStackOpen/tree/main/redux-anecdotes/src',
        },
        {
          name: 'State Management Hooks (useQuery, useReducer)',
          link: 'https://github.com/arecouz/FullStackOpen/tree/main/query-anecdotes/src',
        },
      ],
    },
    {
      title: 'Backend Development',
      parts: [
        {
          name: 'Node.js & Express',
          link: 'https://github.com/arecouz/FullStackOpen/tree/main/phonebookFullStack/PhoneBookBackEnd',
        },
        {
          name: 'Deployment: fly.io',
          link: 'https://github.com/arecouz/FullStackOpen/tree/main/phonebookFullStack/PhoneBookBackEnd',
        },
        {
          name: 'MongoDB',
          link: 'https://github.com/arecouz/FullStackOpen/tree/main/phonebookFullStack/PhoneBookBackEnd',
        },
        {
          name: 'Apollo: GraphQl',
          link: 'https://github.com/arecouz/FullStackOpen/tree/main/part8/library-frontend/src',
        },
        {
          name: 'Redis',
          link: 'https://github.com/arecouz/full-stack-open-containers/blob/main/todo-app/todo-backend/redis/index.js',
        },
        {
          name: 'Relational DB: PostgresSQL & Sequelize',
          link: 'https://github.com/arecouz/full-stack-open-blogs-relational',
        },
      ],
    },
    {
      title: 'TypeScript',
      parts: [
        {
          name: 'TypeScript: server/client',
          link: 'https://github.com/arecouz/FullStackOpen/tree/main/part7/blogListApp-redux',
        },
      ],
    },
    {
      title: 'Mobile Development',
      parts: [
        {
          name: 'React Native (server, client, testing)',
          link: 'https://github.com/arecouz/FullStackOpen/tree/main/part10/rate-repository-app',
        },
      ],
    },
    {
      title: 'Continuous Integration / Continuous Delivery systems',
      parts: [
        {
          name: 'GitHub Actions',
          link: 'https://github.com/arecouz/FullStackOpen-BlogList-CI-CD/blob/main/.github/workflows/pipeline.yml',
        },
        {
          name: 'Docker: containers',
          link: 'https://github.com/arecouz/FullStackOpen-BlogList-CI-CD/blob/main/Dockerfile',
        },
        {
          name: 'ESlint',
          link: 'https://github.com/arecouz/FullStackOpen-BlogList-CI-CD/blob/main/eslint.config.js',
        },
        {
          name: 'vitest',
          link: 'https://github.com/arecouz/FullStackOpen-BlogList-CI-CD/blob/main/frontend/components/BlogForm.test.jsx',
        },
        {
          name: 'E2E testing: playwright',
          link: 'https://github.com/arecouz/FullStackOpen-BlogList-CI-CD/tree/main/e2e-tests',
        },
      ],
    },
  ];

  return (
    <Table>
      <TableBody>
        {fullStackOpen.map((item, index) => (
          <TableRow key={index}>
            <TableCell>
              <MyAccordion
                size='md'
                label={item.title}
                content={
                  <Table>
                    <TableBody>
                      {item.parts.map((part, index) => {
                        return (
                          <TableRow key={index}>
                            <TableCell
                              className='cursor-pointer'
                              onClick={() => {
                                toast({
                                  title: 'A code example?',
                                  description: (
                                    <a
                                      href={part.link}
                                      target='_blank'
                                      rel='noopener noreferrer'
                                      className='hover:underline'
                                    >
                                      {_.truncate(part.link)}
                                    </a>
                                  ),
                                });
                              }}
                            >
                              {part.name}
                            </TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                }
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
export default FullStackInfo;
