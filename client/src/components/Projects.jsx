import { Separator } from './ui/separator';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <div>
      <Separator />
      <h2 className='underline text-center m-5'>Projects</h2>
      {/* Responsive grid that adjusts based on screen size */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 m-8'>
      <ProjectCard
          name={'This Website'}
          link={'https://couzens.fly.dev/'}
          image={'image.png'}
          description={`
            The application consists of:
            
            Frontend: Built with React and Vite.
            
            Backend: A REST API built with Express and MongoDB.
            
            GitHub Actions workflow: Ensuring code quality through tests and deployment to Fly.io, followed by version tagging for releases.
          `}
        />
        <ProjectCard
          name={'Blogs List'}
          link={'https://github.com/arecouz/FullStackOpen-BlogList-CI-CD'}
          image={'image.png'}
          description={`Literraly just the website your on`}
        />
        <ProjectCard
          name={'nand2tetris'}
          link={'https://github.com/arecouz/?'}
          image={'nand.gif'}
          description={`
            Starting with the (virtual) construction of NAND gates, to build combinational and sequential logic, ultimately leading to a CPU. 
            Then assemblers were built to translate binary code into machine code and machine code into 'Jack Code' (a high level language). 
            An OS was then built to run Jack Code on the virtual machine. The Cookie Clicker is an example of the final program running on the system implemented.
          `}
        />
        <ProjectCard
          name={'Computer Graphics'}
          link={'https://github.com/arecouz/?'}
          image={'nand.gif'}
          description={`
            Starting with the (virtual) construction of NAND gates, to build combinational and sequential logic, ultimately leading to a CPU. 
            Then assemblers were built to translate binary code into machine code and machine code into 'Jack Code' (a high level language). 
            An OS was then built to run Jack Code on the virtual machine. The Cookie Clicker is an example of the final program running on the system implemented.
          `}
        />
        <ProjectCard
          name={'Repo Mobile App'}
          link={'https://github.com/arecouz/?'}
          image={'nand.gif'}
          description={`
            Starting with the (virtual) construction of NAND gates, to build combinational and sequential logic, ultimately leading to a CPU. 
            Then assemblers were built to translate binary code into machine code and machine code into 'Jack Code' (a high level language). 
            An OS was then built to run Jack Code on the virtual machine. The Cookie Clicker is an example of the final program running on the system implemented.
          `}
        />
        {/* Next Project Here */}
      </div>
    </div>
  );
};

export default Projects;
