import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Learnings from './components/Learnings';
import Projects from './components/Projects';

const App = () => {
  return (
    <div>
      <div className='min-w-[320px] max-w-screen-lg mx-auto p-4'>
        <Header />
        <AboutMe />
        <Learnings />
      </div>
      <div className='max-w-5xl mx-auto'>
        <Projects />
      </div>
    </div>
  );
};

export default App;
