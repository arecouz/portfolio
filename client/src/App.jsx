import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Learnings from './components/Learnings';

const App = () => {
  return (
    <div className='min-w-[320px] max-w-screen-lg mx-auto p-4'>
      <Header />
      <AboutMe />
      <Learnings />
    </div>
  );
};

export default App;
