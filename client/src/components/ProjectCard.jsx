import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"



const ProjectCard = ({ name, link, image, description }) => {
  return (
    <Drawer>
    <DrawerTrigger> <Card
        className='
      transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg
      
    '
      >
        <CardHeader>
          <CardTitle className='text-center'>{name}</CardTitle>
        </CardHeader>
        <CardContent className='text-center'>
          <p>some content</p>
        </CardContent>
      </Card></DrawerTrigger>
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle className='text-center'>
          {name}
        </DrawerTitle>
        <DrawerDescription className='flex justify-center items-center'>
          <img
            src={image} // Image can be updated or customized per course
            className='max-w-[100%] max-h-[80vh]'
            alt={name}
          />
        </DrawerDescription>
      </DrawerHeader>
    </DrawerContent>
  </Drawer>

  );
};

export default ProjectCard;
