import { Separator } from './ui/separator';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <div>
      <Separator />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 m-8">
        <ProjectCard
          name={'CineTrack'}
          link={'/cinetrack'}
          pitch={'track your movies'}
          libraries={`react, vite, express, mongoDB, API's, user authentication`}
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
