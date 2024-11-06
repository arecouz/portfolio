import { Separator } from './ui/separator';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <div>
      <Separator />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 m-8">
        <ProjectCard
          name={'CineTrack'}
          link={'https://cine-track.fly.dev/'}
          githubLink={'https://github.com/arecouz/cinetrack'}
          pitch={'Search, rate, and track your movies!'}
          libraries={`react, vite, express, mongoDB, API's, user authentication`}
        />
        {/* Next Project Here */}
      </div>
    </div>
  );
};

export default Projects;
