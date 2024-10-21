import { useState } from 'react';
import { Table, TableBody, TableRow, TableCell } from '@/components/ui/table';
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
} from '@/components/ui/drawer';
import { Skeleton } from '@/components/ui/skeleton'; // Import Skeleton component
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
                        const [isLoading, setIsLoading] = useState(true);
                        const partName = kebabCase(part);

                        const handleImageLoad = () => setIsLoading(false);
                        const handleImageError = () => setIsLoading(false); // hide Skeleton on error too

                        return (
                          <TableRow key={index}>
                            <Drawer>
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
                                  <DrawerDescription />
                                  <div className='flex justify-center items-center flex-col'>
                                    {/* Show Skeleton while loading */}
                                    {isLoading && (
                                      <Skeleton className='w-full h-[2vh] mb-4 rounded-lg' />
                                    )}

                                    <img
                                      src={`${partName}.png`}
                                      className={`max-w-[80%] ${
                                        isLoading ? 'hidden' : ''
                                      }`}
                                      alt={part}
                                      onLoad={handleImageLoad}
                                      onError={handleImageError}
                                    />
                                  </div>
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
