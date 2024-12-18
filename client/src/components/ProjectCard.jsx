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

const ProjectCard = ({ name, link, libraries, pitch, githubLink }) => {
  const handleClick = () => {
    return <p>testing</p>;
  };
  return (
    <>
      <Dialog>
        <DialogTrigger>
          <>
            <Card
              className="transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
              onClick={handleClick}
            >
              <CardHeader>
                <CardTitle className="text-center">{name}</CardTitle>
              </CardHeader>
            </Card>
          </>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{pitch}</DialogTitle>
            <DialogDescription>{libraries}</DialogDescription>

            <div>
              <h1>{name}</h1>
              <div className="p-5">
                <Button asChild>
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    Go to live website
                  </a>
                </Button>
                <Button
                  variant="outline"
                  title="GitHub Source Code"
                  className="fixed bottom-5 right-5 "
                  onClick={() => window.open(githubLink, '_blank')} // talking about here
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                  </svg>
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
