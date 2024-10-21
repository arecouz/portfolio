import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';

const ProjectCard = ({ name, link, image, description }) => {
  const handleClick = () => {
    return <p>testing</p>;
  };
  return (
    <>
      <Dialog>
        <DialogTrigger>
          <>
            <Card
              className='transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg'
              onClick={handleClick}
            >
              <CardHeader>
                <CardTitle className='text-center'>{name}</CardTitle>
              </CardHeader>
            </Card>
          </>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Some Project Title</DialogTitle>
            <DialogDescription>
              JavaScript, Apollo, Containers, this is where a list of things
              that it uses will go
            </DialogDescription>

            <div>
              <h1>couzens.fly.dev</h1>
              <div className='p-5'>
                <Button asChild>
                  <a href='https://couzens.fly.dev/'>Go to live website</a>
                </Button>
              </div>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProjectCard;
