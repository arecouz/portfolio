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
                label={item.section}
                content={
                  <Table>
                    <TableBody>
                      {item.courses_in_section.map((course, index) => (
                        <TableRow key={index}>
                          <TableCell>
                            <Drawer>
                              <DrawerTrigger>{course.course}</DrawerTrigger>
                              <DrawerContent>
                                <DrawerHeader>
                                  <DrawerTitle>{course.course}</DrawerTitle>
                                  <DrawerDescription>
                                    <img src="advanced_learning_algorithms_STANFORD.png"></img>
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
              ></MyAccordion>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default NestableTable;
