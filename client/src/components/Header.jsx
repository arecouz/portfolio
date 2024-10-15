import { Separator } from '@/components/ui/separator';
import { ModeToggle } from './mode-toggle';

const Header = () => {
  return (
    <div className='p-2'>
      <div className='flex justify-between items-center p-3'> 
        <div className='flex flex-col md:flex-row justify-between items-center p-3'> 
          <h1 className='ml-2'>Richard</h1>
          <h1 className='ml-2'>Couzens</h1>
        </div>
        <div className='flex flex-col  md:flex-row justify-between items-center p-3'> 
          <h3 className='underline ml-3'>github</h3>
          <h3 className='underline ml-3'>contact</h3>
        </div>
        <ModeToggle className='mr-4'/>
      </div>
      <Separator />
    </div>
  );
};

export default Header;
