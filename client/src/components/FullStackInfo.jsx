import { Table, TableBody, TableRow, TableCell } from '@/components/ui/table';
import MyAccordion from './MyAccordion';
import { useToast } from '@/hooks/use-toast';
import _ from 'lodash'

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
        { name: 'Vite and WebPack', link: 'https://vitejs.dev/' },
        {
          name: 'State Management: redux (Thunk, Toolkit), reactQuery, useReducer',
          link: 'https://redux.js.org/',
        },
      ],
    },
    {
      title: 'Backend Development',
      parts: [
        { name: 'Node.js', link: 'https://nodejs.org/' },
        { name: 'Express', link: 'https://expressjs.com/' },
        { name: 'fly.io', link: 'https://fly.io/' },
        { name: 'MongoDB', link: 'https://www.mongodb.com/' },
        { name: 'Apollo: GraphQl', link: 'https://www.apollographql.com/' },
        { name: 'Redis', link: 'https://redis.io/' },
        { name: 'PostgresSQL', link: 'https://www.postgresql.org/' },
        { name: 'Sequelize', link: 'https://sequelize.org/' },
      ],
    },
    {
      title: 'TypeScript',
      parts: [
        {
          name: 'TypeScript: server/client',
          link: 'https://www.typescriptlang.org/',
        },
      ],
    },
    {
      title: 'Mobile Development',
      parts: [
        {
          name: 'React Native (server, client, testing)',
          link: 'https://reactnative.dev/',
        },
      ],
    },
    {
      title: 'Continuous Integration / Continuous Delivery systems',
      parts: [
        { name: 'GitHub Actions', link: 'https://github.com/features/actions' },
        { name: 'Docker: containers', link: 'https://www.docker.com/' },
        { name: 'ESlint', link: 'https://eslint.org/' },
        { name: 'vitest', link: 'https://vitest.dev/' },
        { name: 'E2E testing: playwright', link: 'https://playwright.dev/' },
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
