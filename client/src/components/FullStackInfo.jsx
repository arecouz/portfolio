import NestableTable from './NestableTable';

const FullStackInfo = () => {
  const fullStackOpen = [
    {
      title: 'Frontend Development',
      parts: [
        'React',
        'Vite and WebPack',
        'State Management: redux (Thunk, Toolkit), reactQuery, useReducer ',
      ],
    },
    {
      title: 'Backend Development',
      parts: [
        'Node.js',
        'Express',
        'fly.io',
        'MongoDB',
        'Apollo: GraphQl',
        'Redis',
        'PostgresSQL',
        'Sequelize',
      ],
    },
    { title: 'TypeScript', parts: ['TypeScript: server/client'] },
    {
      title: 'Mobile Development',
      parts: ['React Native (server, client, testing)'],
    },
    {
      title: 'Continuous Integration / Continuous Delivery systems',
      parts: [
        'GitHub Actions',
        'Docker: containers',
        'ESlint',
        'vitest',
        'E2E testing: playwright',
      ],
    },
  ];

  return <NestableTable object={fullStackOpen}></NestableTable>;
};
export default FullStackInfo;
