import { Separator } from '@/components/ui/separator';
import { ModeToggle } from './mode-toggle';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import ClickToCopy from './clickToCopy';

const Header = () => {
  return (
    <div className='p-2'>
      <div className='flex justify-between items-center p-3'>
        <div className='flex flex-col md:flex-row justify-between items-center p-3'>
          <h1 className='ml-2'>Richard</h1>
          <h1 className='ml-2'>Couzens</h1>
        </div>
        <div className='flex flex-col md:flex-row justify-between items-center p-3'>
          <a
            href='https://github.com/arecouz'
            target='_blank'
            rel='noopener noreferrer'
            className='ml-3 hover:underline cursor-pointer'
          >
            <h3 className='ml-3'>github</h3>
          </a>
          <Popover>
            <PopoverTrigger>
              <h3 className='ml-3 hover:underline cursor-pointer'>contact</h3>
            </PopoverTrigger>
            <PopoverContent>
              <ClickToCopy text={'richardcouzens96@gmail.com'}/>
            </PopoverContent>
          </Popover>
        </div>
        <ModeToggle className='mr-4' />
      </div>
      <Separator />
    </div>
  );
};

export default Header;
