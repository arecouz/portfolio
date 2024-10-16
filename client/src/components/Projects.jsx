import ProjectCard from './ProjectCard';
const Projects = () => {
  return (
    <div className="p-1 flex-wrap">
      <ProjectCard
        name={'Blogs List'}
        link={'https://github.com/arecouz/FullStackOpen-BlogList-CI-CD'}
        image={'image.png'}
        description={`

            The application consists of:
            
            Frontend: Built with React and Vite.
            
            Backend: A REST API built with Express and MongoDB.
            
            GitHub Actions workflow: Ensuring code quality through tests and deployment to Fly.io, followed by version tagging for releases.
          `}
      ></ProjectCard>
      <ProjectCard
        name={'Blogs List'}
        link={'https://github.com/arecouz/FullStackOpen-BlogList-CI-CD'}
        image={'image.png'}
        description={
          `some some some some some some some some some some some some some some some some some some some some some some some some some some some some some some some some some some some some some some some some some some some some some some some some some some some some some some some some some some some some some some some some some some some some some some some some some some some some some some some some`
        }
      ></ProjectCard>
    </div>
  );
};

export default Projects;
