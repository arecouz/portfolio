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
import { kebabCase } from 'lodash';

import MyAccordion from './MyAccordion';

const NestableTable = ({ object }) => {
  return (
    <Table>
      <TableBody>
        {object.map((item, index) => (
          <TableRow key={index}>
            <TableCell>
              <MyAccordion
                size='md'
                label={item.title}
                content={
                  <Table>
                    <TableBody>
                      {item.parts.map((part, index) => {
                        const partName = kebabCase(part); // Convert to kebab-case
                        console.log(partName); // Log the kebab-case part name

                        return (
                          <TableRow key={index}>
                            <Drawer>
                              {/* Make the entire TableCell a trigger */}
                              <DrawerTrigger asChild>
                                <TableCell className='cursor-pointer'>
                                  {part}
                                </TableCell>
                              </DrawerTrigger>
                              <DrawerContent>
                                <DrawerHeader>
                                  <DrawerTitle className='text-center'>
                                    {part}
                                  </DrawerTitle>
                                  <DrawerDescription className='flex justify-center items-center'>
                                    <img
                                      src={`${partName}.png`} // Image based on Kebab-Case of 'name'
                                      className='max-w-[70%] max-h-[70vh]'
                                      alt={part}
                                    />
                                  </DrawerDescription>
                                </DrawerHeader>
                              </DrawerContent>
                            </Drawer>
                          </TableRow>
                        );
                      })}
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
