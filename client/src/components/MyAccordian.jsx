import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import OssuTable from './OssuTable';

const myAccordian = ({ label, content }) => {
  return (
    <Accordion type='single' collapsible>
      <AccordionItem value='item-1'>
        <AccordionTrigger>{label}</AccordionTrigger>
        <AccordionContent>{content}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default myAccordian;
