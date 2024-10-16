import { Table, TableBody, TableRow, TableCell } from '@/components/ui/table';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { Button } from '@/components/ui/button';

import MyAccordion from './MyAccordion';

const NestableTable = ({ object }) => {
  return (
    <Table>
      <TableBody>
        {object.map((item, index) => (
          <TableRow key={index}>
            <TableCell>
              <MyAccordion
                label={item.title}  
                content={
                  <Table>
                    <TableBody>
                      {item.parts.map((part, index) => (
                        <TableRow key={index}>
                          <TableCell>
                            <Drawer>
                              <DrawerTrigger>{part}</DrawerTrigger>  
                              <DrawerContent>
                                <DrawerHeader>
                                  <DrawerTitle className='text-center'>{part}</DrawerTitle>
                                  <DrawerDescription className="flex justify-center items-center">
                                    <img
                                      src="advanced_learning_algorithms_STANFORD.png"  // Image can be updated or customized per course
                                      className="max-w-[70%] max-h-[70vh]"
                                      alt={part}
                                    />
                                  </DrawerDescription>
                                </DrawerHeader>
                              </DrawerContent>
                            </Drawer>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                }
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default NestableTable;
