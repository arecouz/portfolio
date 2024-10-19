import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const MyAccordion = ({ label, content, size = 'xl' }) => {
  // Map the size prop to Tailwind CSS text size classes
  const textSizeClass = {
    sm: 'text-sm', // small text
    md: 'text-base', // medium text
    lg: 'text-lg', // large text (default)
    xl: 'text-xl', // extra-large text
  };

  return (
    <Accordion type='single' collapsible>
      <AccordionItem value='item-1'>
        <AccordionTrigger className={textSizeClass[size]}>
          {label}
        </AccordionTrigger>
        <AccordionContent>{content}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default MyAccordion;
