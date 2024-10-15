import MyAccordion from './MyAccordion';
import OssuInfo from './OssuInfo';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

const Learnings = () => {
  return (
    <>
      <MyAccordion
        label="Open Source Society University"
        content={<OssuInfo />}
      ></MyAccordion>
    </>
  );
};

export default Learnings;
